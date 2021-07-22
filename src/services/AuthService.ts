import { AuthResponse } from './../models/response/AuthResponse';
import $api from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async SignIn(mail: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', {
      mail,
      password
    })
  }

  static async Register(login: string, mail: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/register', {
      login,
      mail,
      password
    })
  }

  static async Logout(): Promise<void> {
    return $api.post('/logout')
  }
}
