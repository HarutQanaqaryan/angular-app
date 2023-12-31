export enum ClaimType {
  Hardware = 'Hardware',
  Sofware = 'Software',
  Troubleshooting = 'Troubleshooting',
  Networking = 'Networking',
}

export enum StatusType {
  Declined = 'Declined',
  New = 'New',
  Done = 'Done',
  In_Progres = 'In progress',
}

export interface IClaim {
  id: number;
  title: string;
  created: string;
  type: ClaimType;
  status: StatusType;
  actions: string;
  description: string;
  creator: string;
}

export interface ClaimsState {
  claims?: IClaim[];
  currentClaim?: IClaim;
}

export interface IColumn {
  title: string;
  type?: string;
}

export enum ActionTypes {
  REMOVE = 'REMOVE',
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  CREATING = 'CREATING',
  IS_DELETING = 'IS_DELETING',
}
