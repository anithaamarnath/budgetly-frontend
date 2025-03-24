import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlices";
import { Sidebar, SidebarItem, SidebarIcon } from "../styles/styled";
import { FaChartPie, FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";

interface SidebarProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarComponent: React.FC<SidebarProps> = ({
  expanded,
  setExpanded,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setExpanded(false);
    navigate("/");
  };

  return (
    <Sidebar expanded={expanded}>
      <SidebarItem onClick={() => navigate("/dashboard")}>
        <SidebarIcon>
          <FaHome />
        </SidebarIcon>
      </SidebarItem>

      <SidebarItem onClick={() => navigate("/addNew")}>
        <SidebarIcon>
          <FaPlus />
        </SidebarIcon>
      </SidebarItem>

      <SidebarItem onClick={() => navigate("/expense")}>
        <SidebarIcon>
          <FaChartPie />
        </SidebarIcon>
      </SidebarItem>

      <SidebarItem onClick={handleLogout}>
        <SidebarIcon>
          <FaSignOutAlt />
        </SidebarIcon>
      </SidebarItem>
    </Sidebar>
  );
};

export default SidebarComponent;
