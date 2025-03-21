import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarIcon,
  SidebarText,
} from "../styles/styled";
import { FaBars, FaHome, FaChartPie, FaCog } from "react-icons/fa";

interface SidebarProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarComponent: React.FC<SidebarProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Sidebar expanded={expanded}>
      <SidebarItem onClick={() => setExpanded(!expanded)}>
        <SidebarIcon expanded={expanded}>
          <FaBars />
        </SidebarIcon>
        <SidebarText expanded={expanded}>Toggle</SidebarText>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon expanded={expanded}>
          <FaHome />
        </SidebarIcon>
        <SidebarText expanded={expanded}>Home</SidebarText>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon expanded={expanded}>
          <FaChartPie />
        </SidebarIcon>
        <SidebarText expanded={expanded}>Analytics</SidebarText>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon expanded={expanded}>
          <FaCog />
        </SidebarIcon>
        <SidebarText expanded={expanded}>Settings</SidebarText>
      </SidebarItem>
    </Sidebar>
  );
};

export default SidebarComponent;
