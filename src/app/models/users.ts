export enum RollesEnum {
  ADMIN = 'ADMIN',
  CREATOR = 'CREATOR',
  VIEWER = 'VIEWER',
}

export interface IUser {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  role: RollesEnum[];
}

export interface UserState {
  user?: IUser;
  error?: string;
}
