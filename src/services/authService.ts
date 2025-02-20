import axios from "axios";
import FormState from "../types";
import AuthState from "../types";


const apiUrl = import.meta.env.VITE_API_URL;

export const registerUser = async (data: FormState): Promise<FormState> => {
  const response = await axios.post(`${apiUrl}/api/users/register`, data);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }): Promise<AuthState> => {
  const response = await axios.post(`${apiUrl}/api/users/signin`, data);
  return response.data;
};