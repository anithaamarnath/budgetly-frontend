import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlices";
import { Sidebar, SidebarItem, SidebarIcon } from "../styles/styled";
import { FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";

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
        <SidebarIcon expanded={expanded}>
          <FaHome />
        </SidebarIcon>
        {/* <SidebarText expanded={expanded}>Dashboard</SidebarText> */}
      </SidebarItem>

      <SidebarItem onClick={() => navigate("/addNew")}>
        <SidebarIcon expanded={expanded}>
          <FaPlus />
        </SidebarIcon>
        {/* <SidebarText expanded={expanded}>Add Expense</SidebarText> */}
      </SidebarItem>

      <SidebarItem onClick={handleLogout}>
        <SidebarIcon expanded={expanded}>
          <FaSignOutAlt />
        </SidebarIcon>
        {/* <SidebarText expanded={expanded}>Logout</SidebarText> */}
      </SidebarItem>
    </Sidebar>
  );
};

export default SidebarComponent;
