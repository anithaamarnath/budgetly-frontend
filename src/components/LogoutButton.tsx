import React from "react";
import { StyledLogoutButton } from "../styles/styled";
import { LogoutButtonProps } from "../types";

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return <StyledLogoutButton onClick={onLogout}>Logout</StyledLogoutButton>;
};

export default LogoutButton;
