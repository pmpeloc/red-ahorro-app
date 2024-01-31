import rdaApi from '../../../api/rda.api';
import { IsUserLogin } from '../types';

export const loginRequest = async (email: string, password: string) => {
  const {
    data: { data },
  } = await rdaApi.post<IsUserLogin>('/signin', {
    email,
    password,
  });

  return data.token;
};
