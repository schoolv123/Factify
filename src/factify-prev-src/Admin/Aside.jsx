import React from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaCopy,
  FaUser,
  FaAndroid,
  FaUpload
} from "react-icons/fa";

const Aside = ({ toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          FACTIFY ADMIN
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">new</span>}
          >
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>Components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <MenuItem icon={<FaUpload />}>Upload Post</MenuItem>
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={"Manage Post"}
            icon={<FaCopy />}
          >
            <MenuItem>View Post</MenuItem>
            <MenuItem>{"Submenu"} 2</MenuItem>
            <MenuItem>{"Submenu"} 3</MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            suffix={<span className="badge yellow">3</span>}
            title={"Mange User"}
            icon={<FaUser />}
          >
            <MenuItem>View user</MenuItem>
            <MenuItem>Create user</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.wekn.factify"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaAndroid />
            <span> View app on playstore</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
