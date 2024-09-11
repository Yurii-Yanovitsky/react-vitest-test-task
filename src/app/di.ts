import "reflect-metadata";
import { container } from "tsyringe";
import { AuthService } from "../core/services/AuthService";
import { SessionService } from "../core/services/SessionService";

container.registerSingleton(SessionService);
container.registerSingleton(AuthService);
