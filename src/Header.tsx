import React, { useState } from "react";
import { HeaderWrapper, Logo, Nav, HamburgerIcon, Menu } from "./styles/styled";
import LogoutButton from "./components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { logout } from "./redux/authSlices";
import { Link } from "react-router-dom"; // Import Link for routing

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log("HELO", isLoggedIn);

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
              <Link to="/dashboard">Dashboard</Link> {/* Updated to Link */}
              <Link to="/addNew">Add Expense</Link> {/* Updated to Link */}
              <LogoutButton onLogout={handleLogout} />
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> {/* Updated to Link */}
            </>
          )}
        </Nav>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
