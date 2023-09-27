import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IClaim, IUser, RollesEnum, StatusType } from 'app/models';
import {
  AppState,
  clearCurrentClaim,
  selectClaimsList,
  selectCurrentUser,
  setCurrentClaim,
} from 'app/shared/app-states';

interface IColumn {
  title: string;
  type?: string;
}

enum ActionTypes {
  REMOVE = 'REMOVE',
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  CREATING = 'CREATING',
  IS_DELETING = 'IS_DELETING',
}

const defaultColumns = [
  { title: 'Title', type: 'title' },
  { title: 'Created', type: 'created' },
  { title: 'Type', type: 'type' },
  { title: 'Status', type: 'status' },
  { title: 'Actions' },
];
@Component({
  selector: 'claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss'],
})
export class ClaimsComponent {
  columns: IColumn[] = defaultColumns;
  claims: IClaim[];
  isViewingClaim: boolean;
  isEditingClaim: boolean;
  isDeletingClaim: boolean;
  isCreatingClaim: boolean;
  currentUser?: IUser = void 0;
  ActionTypes = ActionTypes;
  Rolles = RollesEnum;
  StatusType = StatusType;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
    this.store
      .pipe(select(selectCurrentUser))
      .subscribe((value) => (this.currentUser = value));
  }

  ngOnInit(): void {
    if (!this.currentUser) {
      this.router.navigateByUrl('/login');
    }
  }
  setCurrentClaim(claim: IClaim, action: ActionTypes) {
    this.store.dispatch(setCurrentClaim({ currentClaim: claim }));
    switch (action) {
      case ActionTypes.VIEW:
        this.isViewingClaim = true;
        break;
      case ActionTypes.EDIT:
        this.isEditingClaim = true;
        break;
      case ActionTypes.REMOVE:
        this.isDeletingClaim = true;
        break;
    }
  }

  closeModal(action: ActionTypes) {
    this.store.dispatch(clearCurrentClaim());
    switch (action) {
      case ActionTypes.VIEW:
        this.isViewingClaim = false;
        break;
      case ActionTypes.EDIT:
        this.isEditingClaim = false;
        break;
      case ActionTypes.REMOVE:
        this.isDeletingClaim = false;
        break;
      case ActionTypes.CREATING:
        this.isCreatingClaim = false;
        break;
    }
  }

  isAbleToEditStatus(status: StatusType, creator: string) {
    if (this.currentUser?.login === creator && status === StatusType.New) {
      return true;
    } else if (
      this.currentUser?.role.includes(this.Rolles.ADMIN) &&
      !(status === StatusType.Declined || status === StatusType.Done)
    ) {
      return true;
    } else {
      return false;
    }
  }
  searchClaim(e: Event, element: IColumn): void {
    const searchValue = (e.target as HTMLInputElement).value;
    type ObjectKey = keyof typeof element;
    const currentType = element.type as ObjectKey;
    this.store
      .pipe(select(selectClaimsList))
      .subscribe(
        (value) =>
          (this.claims = value.filter((claim) =>
            claim[currentType]
              .toLowerCase()
              .includes((searchValue as string).toLowerCase())
          ))
      );
  }
}
