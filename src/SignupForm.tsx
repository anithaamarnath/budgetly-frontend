import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setFormData,
  setLoading,
  setError,
  clearForm,
} from "./redux/formSlice";
import { RootState, AppDispatch } from "./redux/store";
import {
  SignupWrapper,
  FormColumn,
  SuccessMessage,
  ButtonWrapper,
  Button,
} from "./styles/styled";
import { registerUser } from "./services/authService";
import FormState from "./types";
import { login } from "./redux/authSlices";

const SignupForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.form);
  const { name, email, password, confirmPassword, error, loading } = formData;
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch(setFormData({ id: id as keyof FormState, value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      dispatch(setError("Passwords do not match."));
      return;
    }

    dispatch(setLoading(true));
    try {
      const newUser = await registerUser({
        name,
        email,
        password,
        confirmPassword,
        token: "",
        isLoggedIn: false,
      });
      console.log("newUser", newUser.email);
      dispatch(
        login({
          email: newUser?.email,
          token: "",
          isLoggedIn: true,
          name: newUser?.name,
        })
      );
      setSuccessMessage("Signup successful! Redirecting...");
      dispatch(clearForm());
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        dispatch(setError(error.response.data.message || "Request failed"));
      } else {
        console.error("Error Message:", error.message);
        dispatch(setError("Network error occurred"));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <SignupWrapper>
      <FormColumn>
        <h2>Create Your Account</h2>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <form onSubmit={handleSubmit}>
          {" "}
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <ButtonWrapper>
              <Button type="submit" disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </ButtonWrapper>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in here</Link>.
        </p>
      </FormColumn>
    </SignupWrapper>
  );
};

export default SignupForm;
