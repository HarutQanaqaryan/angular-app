import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActionTypes, IClaim, IColumn, StatusType } from 'app/models';
import { mockData } from 'app/shared';
import {
  AppState,
  editingClaims,
  selectClaimsList,
  setClaims,
} from 'app/states';

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  claims?: IClaim[];
  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
  }

  getAllClaims() {
    this.store.dispatch(setClaims({ claims: mockData }));
  }

  searchClaim(e: Event, element: IColumn) {
    const searchValue = (e.target as HTMLInputElement).value;
    type ObjectKey = keyof typeof element;
    const currentType = element.type as ObjectKey;
    return this.claims?.filter((claim) =>
      claim[currentType]
        .toLowerCase()
        .includes((searchValue as string).toLowerCase())
    );
  }

  createClaim(
    title: string,
    created: string | null,
    type: ActionTypes,
    login: string,
    description: string
  ) {
    const updatedClaim = [
      ...this.claims as IClaim[],
      {
        id: Math.random(),
        title: title,
        created: created,
        type: type,
        status: StatusType.New,
        description: description,
        creator: login,
      },
    ];
    this.store.dispatch(editingClaims({ claims: updatedClaim as IClaim[] }));
  }

  editingClaim(currentClaim: IClaim, status: StatusType, description: string) {
    const updatedClaim = this.claims?.map((el) => {
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
    this.store.dispatch(editingClaims({ claims: updatedClaim as IClaim[] }));
  }
  deletingClaims(currentClaim?: IClaim) {
    const updatedClaim = this.claims?.filter(
      (el) => currentClaim?.id !== el.id
    );
    this.store.dispatch(editingClaims({ claims: updatedClaim as IClaim[] }));
  }
}
