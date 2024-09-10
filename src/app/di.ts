import "reflect-metadata";
import { container } from "tsyringe";
import { AuthService } from "../core/services/AuthService";

container.registerSingleton(AuthService);
