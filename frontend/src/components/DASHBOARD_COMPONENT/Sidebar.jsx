import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineIdcard,
  AiOutlineFolder,
  AiOutlineUserAdd,
  AiOutlineSetting,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiChat2 } from "react-icons/ci";
import close from "./img/fi_menu.svg";

import noxus from "./img/noxus.png";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <AiOutlineMenu onClick={showSidebar} className="icon-open" />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="sidebar-eye-web">
          <ul>
            <div>
              <img src={noxus} alt="noxus logo" className="noxus-logo" />
              <li onClick={showSidebar} className="aso-icon-close">
                <img src={close} alt="" />
              </li>
            </div>
            <li>
              <AiOutlineIdcard className="icon" />
              <Link to="/" className="sidebar-link">
                Create avatar
              </Link>
            </li>
            <li>
              <AiOutlineFolder className="icon" />
              <Link to="/" className="sidebar-link">
                Generated avatars
              </Link>
            </li>
            <li>
              <AiOutlineUserAdd className="icon" />
              <Link to="/" className="sidebar-link">
                Profile
              </Link>
            </li>
            <li>
              <MdOutlineContactSupport className="icon" />
              <Link to="/" className="sidebar-link">
                Support
              </Link>
            </li>
            <li>
              <AiOutlineSetting className="icon" />
              <Link to="/" className="sidebar-link">
                Setting
              </Link>
            </li>
            <li>
              <CiChat2 className="icon" />
              <Link to="/" className="sidebar-link">
                Chat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
