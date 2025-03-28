import React, { useState } from "react";
import {
  LoginWrapper,
  FormColumn,
  ButtonWrapper,
  Button,
} from "./styles/styled";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./services/authService";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/authSlices";
import { AppDispatch, RootState } from "./redux/store";
import { logout } from "./redux/authSlices";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const {
        token,
        email: userEmail,
        name,
      } = await loginUser({ email, password });

      dispatch(
        login({
          email: userEmail,
          token: token ?? "",
          isLoggedIn: true,
          name: name ?? "",
        })
      );

      localStorage.setItem("token", JSON.stringify(token));
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <LoginWrapper>
      <FormColumn>
        <h2>Log In</h2>
        {isLoggedIn ? (
          <div>
            <p>Welcome! You are logged in.</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
              <ButtonWrapper>
                <Button type="submit">Log In</Button>
              </ButtonWrapper>
            </div>
          </form>
        )}
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>.
        </p>
      </FormColumn>
    </LoginWrapper>
  );
};
export default LoginPage;
