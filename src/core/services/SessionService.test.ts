import { describe, it, expect, beforeEach } from "vitest";
import { SessionService } from "./SessionService";

describe("SessionService", () => {
  let sessionService: SessionService;

  beforeEach(() => {
    sessionService = new SessionService();
  });

  it("should initialize with isAuthenticated as false", () => {
    expect(sessionService.isAuthenticated).toBe(false);
  });

  it("should set isAuthenticated to true and emit the value", async () => {
    await new Promise<void>((resolve) => {
      sessionService.sessionState$.subscribe((value) => {
        if (value === true) {
          expect(sessionService.isAuthenticated).toBe(true);
          resolve();
        }
      });
      sessionService.setAuthenticated(true);
    });
  });

  it("should set isAuthenticated to false and emit the value", async () => {
    await new Promise<void>((resolve) => {
      sessionService.sessionState$.subscribe((value) => {
        if (value === false) {
          expect(sessionService.isAuthenticated).toBe(false);
          resolve();
        }
      });
      sessionService.setAuthenticated(false);
    });
  });

  it("should emit the current authentication state on subscription", async () => {
    sessionService.setAuthenticated(true);

    await new Promise<void>((resolve) => {
      sessionService.sessionState$.subscribe((value) => {
        expect(value).toBe(true);
        resolve();
      });
    });
  });
});
