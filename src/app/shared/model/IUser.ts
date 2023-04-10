import { IPhoto } from './IPhoto';
import { IIdentity } from './IIdentity';
import { IPayment } from './IPayment';
export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  address: string;
  login: string;
  email: string;
  password: string;
  hasIdentity: boolean;
  identity: IIdentity;
  phoneNumber: string;
  photo: IPhoto;
  payments: IPayment[];
}
