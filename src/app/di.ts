import "reflect-metadata";
import { container } from "tsyringe";
import { AuthService } from "../core/services/AuthService";
import { SessionService } from "../core/services/SessionService";
import { IAuthService } from "../core/interfaces/IAuthService";
import { ISessionService } from "../core/interfaces/ISessionService";

container.registerSingleton<ISessionService>("ISessionService", SessionService);
container.registerSingleton<IAuthService>("IAuthService", AuthService);
