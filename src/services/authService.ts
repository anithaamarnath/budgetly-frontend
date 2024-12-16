import axios from "axios";
import FormState from "../types";
import LoginState from "../types";




export const registerUser = async (data: FormState): Promise<void> => {
  try {
    const response = await axios.post("http://localhost:5000/api/signin/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Login failed");
  }
};

export const loginUser = async (data: LoginState): Promise<LoginState> => {
  const response = await axios.post("http://localhost:5000/api/signin/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data; // Ensure response.data matches LoginState
};
