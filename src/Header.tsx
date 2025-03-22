import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  ProfileSection,
  ProfileIconWrapper,
  MenuWrapper,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  ToggleButton,
} from "./styles/styled";
import {
  FaUserCircle,
  FaBars,
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaChartPie,
} from "react-icons/fa";
import { RootState } from "./redux/store";
import { logout } from "./redux/authSlices";
const MOBILE_WIDTH = 768;
const TABLET_WIDTH = 1024;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth?.isLoggedIn);
  const user = useSelector((state: RootState) => state.auth?.name);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= MOBILE_WIDTH && window.innerWidth <= TABLET_WIDTH
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH);
      setIsTablet(
        window.innerWidth >= MOBILE_WIDTH && window.innerWidth <= TABLET_WIDTH
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    setExpanded(false);
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate("/dashboard")}>Expense Tracker</Logo>

      {!isMobile && !isTablet && isLoggedIn && (
        <ProfileSection>
          <ProfileIconWrapper>
            <FaUserCircle size={30} />
            <span>{user}</span>
          </ProfileIconWrapper>
        </ProfileSection>
      )}

      {isLoggedIn && (isMobile || isTablet) && (
        <ToggleButton onClick={() => setExpanded(!expanded)}>
          <FaBars />
        </ToggleButton>
      )}

      {!isLoggedIn ? (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{ cursor: "pointer", color: "white" }}
            onClick={handleLoginClick}
          >
            Login
          </span>
        </div>
      ) : (
        (isMobile || isTablet) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => setExpanded(!expanded)}
          ></div>
        )
      )}

      {expanded && isLoggedIn && (
        <MenuWrapper>
          <SidebarItem onClick={() => navigate("/dashboard")}>
            <SidebarIcon>
              <FaHome />
            </SidebarIcon>
            <SidebarText>Dashboard</SidebarText>
          </SidebarItem>

          <SidebarItem onClick={() => navigate("/addNew")}>
            <SidebarIcon>
              <FaPlus />
            </SidebarIcon>
            <SidebarText>Add Expense</SidebarText>
          </SidebarItem>

          {(isMobile || isTablet) && (
            <>
              <SidebarItem onClick={() => navigate("/expense")}>
                <SidebarIcon>
                  <FaChartPie />
                </SidebarIcon>
                <SidebarText>Expense</SidebarText>
              </SidebarItem>
            </>
          )}

          <SidebarItem onClick={handleLogout}>
            <SidebarIcon>
              <FaSignOutAlt />
            </SidebarIcon>
            <SidebarText>Logout</SidebarText>
          </SidebarItem>
        </MenuWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
