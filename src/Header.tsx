import React, { useState } from "react";
import { HeaderWrapper, Logo, Nav, HamburgerIcon, Menu } from "./styles/styled";
import LogoutButton from "./components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { logout } from "./redux/authSlices";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <HeaderWrapper>
      <Logo>Budgetly</Logo>
      <HamburgerIcon onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </HamburgerIcon>
      <Menu $isOpen={isMenuOpen}>
        <Nav>
          {isLoggedIn ? (
            <>
              <a href="#dashboard">Dashboard</a>
              <a href="#addExpense">Add Expense</a>
              <LogoutButton onLogout={handleLogout} />
            </>
          ) : (
            <>
              <a href="/login">Login</a>
            </>
          )}
        </Nav>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
