import axios from "axios";
import FormState from "../types";
import AuthState from "../types";


const apiUrl = import.meta.env.VITE_API_URL;

export const registerUser = async (data: FormState): Promise<FormState> => {
  const response = await axios.post(`${apiUrl}/api/users/register`, data);
  console.log("Response ", response);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }): Promise<AuthState> => {
  console.log("Login data", data);
  
  const response = await axios.post(`${apiUrl}/api/users/signin`, data);
  return response.data;
};