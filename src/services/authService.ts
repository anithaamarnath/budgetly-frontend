import axios from "axios";
import FormState from "../types";
import LoginState from "../types";




export const registerUser = async (data: FormState): Promise<void> => {
  const response = await axios.post("http://localhost:5000/api/users/register", data);
  return response.data;
};

export const loginUser = async (data: LoginState): Promise<LoginState> => {
  const response = await axios.post("http://localhost:5000/api/users/signin", data);
  return response.data;
};