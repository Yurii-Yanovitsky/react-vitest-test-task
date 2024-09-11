export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token?: string;
};

export interface IApiService {
  post(url: string, body: LoginRequest): Promise<LoginResponse>;
}
