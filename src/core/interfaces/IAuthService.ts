import { Observable } from "rxjs";

export interface IAuthService {
  login(username: string, password: string): void;
  logout(): void;
  isAuthenticated: boolean;
  getAuthStatus(): Observable<boolean>;
}
