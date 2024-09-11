import { describe, it, expect } from "vitest";
import { AuthService } from "./AuthService";
import { container } from "tsyringe";
import { ISessionService } from "../interfaces/ISessionService";
import { IApiService } from "../interfaces/IApiService";
import { MockApiService } from "./MockApiService";
import { SessionService } from "./SessionService";

// Set up DI container with mocks
container.registerSingleton<IApiService>("IApiService", MockApiService);
container.registerSingleton<ISessionService>("ISessionService", SessionService);

describe("AuthService", () => {
  it("should login correctly", async () => {
    const service = container.resolve(AuthService);
    await service.login("user", "password");
    service.getAuthStatus().subscribe((authState) => {
      expect(authState).toBe(true);
    });
  });
});
