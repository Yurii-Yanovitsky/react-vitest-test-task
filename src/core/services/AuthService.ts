import { injectable, inject } from "tsyringe";
import { IAuthService } from "../interfaces/IAuthService";
import type { ISessionService } from "../interfaces/ISessionService";

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject("ISessionService") private sessionService: ISessionService,
  ) {}

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
