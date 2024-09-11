import { BehaviorSubject, Observable } from "rxjs";

export class SessionService {
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
