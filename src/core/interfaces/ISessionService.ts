import { Observable } from "rxjs";

export interface ISessionService {
  setAuthenticated(state: boolean): void;
  isAuthenticated: boolean;
  sessionState$: Observable<boolean>;
}
