import {
  IApiService,
  LoginRequest,
  LoginResponse,
} from "../interfaces/IApiService";

export class MockApiService implements IApiService {
  async post(url: string, body: LoginRequest) {
    console.log(`Mock POST request to ${url} with body:`, body);

    if (url === "/api/login") {
      const { username, password } = body;
      if (username && password) {
        return { token: "mock-token" } as LoginResponse;
      } else {
        throw new Error("Invalid credentials");
      }
    }

    return { token: undefined } as LoginResponse;
  }
}
