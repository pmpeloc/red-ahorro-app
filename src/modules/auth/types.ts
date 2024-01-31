import { ResponseCodes } from '../../api/types';

export type IsUserLogin = {
  code: ResponseCodes.USER_LOGIN;
  data: { token: string };
};

export interface IUserRequest {
  email: string;
  password: string;
}
