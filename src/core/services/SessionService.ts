import { BehaviorSubject, Observable } from "rxjs";
import { ISessionService } from "../interfaces/ISessionService";

export class SessionService implements ISessionService {
  private sessionSubject = new BehaviorSubject<boolean>(false);

  get sessionState$(): Observable<boolean> {
    return this.sessionSubject.asObservable();
  }

  get isAuthenticated(): boolean {
    return this.sessionSubject.value;
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.sessionSubject.next(isAuthenticated);
  }
}
