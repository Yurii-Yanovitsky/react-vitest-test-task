import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useAuth } from "./useAuth";
import { BehaviorSubject } from "rxjs";
import { container } from "tsyringe";

class MockAuthService {
  private sessionSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated() {
    return this.sessionSubject.value;
  }

  public login(username: string, password: string) {
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

describe("useAuth", () => {
  it("should initialize with the correct authentication status", () => {
    const mockAuthService = new MockAuthService();
    vi.spyOn(container, "resolve").mockReturnValue(mockAuthService);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(
      mockAuthService.isAuthenticated,
    );
  });

  it("should update authentication status when the service emits new values", () => {
    const mockAuthService = new MockAuthService();
    vi.spyOn(container, "resolve").mockReturnValue(mockAuthService);

    const { result } = renderHook(() => useAuth());

    act(() => {
      mockAuthService.login("username", "password");
    });

    expect(result.current.isAuthenticated).toBe(true);

    act(() => {
      mockAuthService.logout();
    });

    expect(result.current.isAuthenticated).toBe(false);
  });

  it("should call login and logout functions correctly", () => {
    const mockAuthService = new MockAuthService();
    const spyLogin = vi.spyOn(mockAuthService, "login");
    const spyLogout = vi.spyOn(mockAuthService, "logout");
    vi.spyOn(container, "resolve").mockReturnValue(mockAuthService);

    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login("username", "password");
    });

    expect(spyLogin).toHaveBeenCalledWith("username", "password");

    act(() => {
      result.current.logout();
    });

    expect(spyLogout).toHaveBeenCalled();
  });
});
