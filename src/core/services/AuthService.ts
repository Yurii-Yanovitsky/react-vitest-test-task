import { injectable } from "tsyringe";
import { SessionService } from "./SessionService";

@injectable()
export class AuthService {
  constructor(private sessionService: SessionService) {}

  get isAuthenticated() {
    return this.sessionService.isAuthenticated;
  }

  public login(username: string, password: string) {
    // Mock login
    if (username && password) {
      this.sessionService.setAuthenticated(true);
    }
  }

  public logout() {
    this.sessionService.setAuthenticated(false);
  }

  public getAuthStatus() {
    return this.sessionService.sessionState$;
  }
}
