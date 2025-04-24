import { apiClient } from "./axiosClient";

type RegisterRequest = {
	name: string;
	email: string;
	password: string;
};

type LoginResponse = {
	email: string;
	password: string;
};

type AuthResponse = {
	token: string;
	user: {
		id: number;
		name: string;
		email: string;
	};
};

export const register = async (
	data: RegisterRequest
): Promise<AuthResponse> => {
	const res = await apiClient.post("/register", data);
	return res.data;
};

export const login = async (data: LoginResponse): Promise<AuthResponse> => {
	const res = await apiClient.post("login", data);
	return res.data;
};
