import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderWrapper, Logo, ProfileIconWrapper } from "./styles/styled";
import { FaUserCircle } from "react-icons/fa";
import { RootState } from "./redux/store";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth?.name);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <HeaderWrapper>
      <Logo>Budgetly</Logo>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {!user ? (
          <span
            style={{ cursor: "pointer", color: "white" }}
            onClick={handleLoginClick}
          >
            Login
          </span>
        ) : (
          <ProfileIconWrapper>
            <FaUserCircle size={30} />
            <span>{user}</span>
          </ProfileIconWrapper>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
