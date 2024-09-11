import "reflect-metadata";
import { container } from "tsyringe";
import { AuthService } from "./services/AuthService";
import { SessionService } from "./services/SessionService";
import { IAuthService } from "./interfaces/IAuthService";
import { ISessionService } from "./interfaces/ISessionService";
import { MockApiService } from "./services/MockApiService";
import { IApiService } from "./interfaces/IApiService";

container.registerSingleton<IApiService>("IApiService", MockApiService);
container.registerSingleton<ISessionService>("ISessionService", SessionService);
container.registerSingleton<IAuthService>("IAuthService", AuthService);
