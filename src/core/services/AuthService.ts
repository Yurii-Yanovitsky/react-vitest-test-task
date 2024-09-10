import { BehaviorSubject } from "rxjs";

export class AuthService {
  private sessionSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated() {
    return this.sessionSubject.value;
  }

  public login(username: string, password: string) {
    // Mock login
    if (username && password) {
      this.sessionSubject.next(true);
    }
  }

  public logout() {
    this.sessionSubject.next(false);
  }

  public getAuthStatus() {
    return this.sessionSubject.asObservable();
  }
}
