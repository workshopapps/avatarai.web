import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  AiOutlineIdcard,
  AiOutlineFolder,
  AiOutlineUserAdd,
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiChat2 } from "react-icons/ci";
import noxus from "./noxus.png";

const Sidebar = () => {
  const [active, setActive] = useState(true);

  const activateNav = () => {
    setActive(!active);
  };
  return (
    <div className={active ? "sidebar" : "sidebar-mobile"}>
      <div className='menu-icon' onClick={activateNav}>
        {!active ? (
          <AiOutlineMenu className='menu' />
        ) : (
          <AiOutlineCloseCircle className='close-icon' />
        )}
      </div>
      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <div>
            <img src={noxus} alt='noxus logo' className='noxus-logo' />
          </div>
          <li>
            <AiOutlineIdcard className='icon' />
            <Link to='/'>Create avatar</Link>
          </li>
          <li>
            <AiOutlineFolder className='icon' />
            <Link to='/'>Generated avatars</Link>
          </li>
          <li>
            <AiOutlineUserAdd className='icon' />
            <Link to='/'>Profile</Link>
          </li>
          <li>
            <MdOutlineContactSupport className='icon' />
            <Link to='/'>Support</Link>
          </li>
          <li>
            <AiOutlineSetting className='icon' />
            <Link to='/'>Setting</Link>
          </li>
          <li>
            <CiChat2 className='icon' />
            <Link to='/'>Chat</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
