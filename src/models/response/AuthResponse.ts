import { IUser } from './IUser';

export interface AuthResponse {
  data: {
    token: string
  },
  refreshToken: string,
  user: IUser
}
  
