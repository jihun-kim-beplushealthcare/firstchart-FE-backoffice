export interface IAccount {
  status: number;
  data: any;
  name: string;
  userId: string;
  email: string;
}

export interface IAddAccount {
  authGroudId: number;
  groupName: string;
  name: string;
  userId: string;
  email: string;
}
