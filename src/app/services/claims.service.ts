import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionTypes, IClaim, IColumn, StatusType } from 'app/models';
import { mockData } from 'app/shared';
import { AppState, changeClaims, setClaims } from 'app/states';

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  constructor(private store: Store<AppState>) {}

  getAllClaims() {
    this.store.dispatch(setClaims({ claims: mockData }));
  }

  searchClaim(e: Event, element: IColumn) {
    const searchValue = (e.target as HTMLInputElement).value;
    type ObjectKey = keyof typeof element;
    const currentType = element.type as ObjectKey;
    return mockData.filter((claim) =>
      claim[currentType]
        .toLowerCase()
        .includes((searchValue as string).toLowerCase())
    );
  }

  createClaim(
    title: string,
    created: string,
    type: ActionTypes,
    status: StatusType,
    login: string,
    description: string
  ) {
    const updatedClaim = [
      ...mockData,
      {
        id: Math.random(),
        title: title,
        created: created,
        type: type,
        status: status,
        description: description,
        creator: login,
      },
    ];
    this.store.dispatch(changeClaims({ newClaim: updatedClaim as IClaim[] }));
  }

  editingClaim(currentClaim: IClaim, status: StatusType, description: string) {
    const updatedClaim = mockData?.map((el) => {
      if (currentClaim?.id === el.id) {
        return {
          ...el,
          status: status || el.status,
          description: description || el.description,
        };
      } else {
        return el;
      }
    });
    this.store.dispatch(changeClaims({ newClaim: updatedClaim as IClaim[] }));
  }
}
