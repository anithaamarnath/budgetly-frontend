import React, { useState } from "react";
import { HeaderWrapper, Logo, Nav, HamburgerIcon, Menu } from "./styles/styled";
import LogoutButton from "./components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { logout } from "./redux/authSlices";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log("HELO", isLoggedIn);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <HeaderWrapper>
      <Logo>Budgetly</Logo>
      <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
      <Menu $isOpen={isMenuOpen}>
        <Nav>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/addNew">Add Expense</Link>
              <LogoutButton onLogout={handleLogout} />
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </Nav>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
