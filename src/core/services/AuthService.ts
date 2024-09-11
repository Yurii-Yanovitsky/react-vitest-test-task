import { injectable, inject } from "tsyringe";
import { IAuthService } from "../interfaces/IAuthService";
import type { ISessionService } from "../interfaces/ISessionService";
import type { IApiService } from "../interfaces/IApiService";

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject("ISessionService") private sessionService: ISessionService,
    @inject("IApiService") private apiService: IApiService,
  ) {}

  get isAuthenticated() {
    return this.sessionService.isAuthenticated;
  }

  public async login(username: string, password: string) {
    if (username && password) {
      const response = await this.apiService.post("/api/login", {
        username,
        password,
      });
      this.sessionService.setAuthenticated(!!response.token);
    }
  }

  public logout() {
    this.sessionService.setAuthenticated(false);
  }

  public getAuthStatus() {
    return this.sessionService.sessionState$;
  }
}
