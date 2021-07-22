import React from "react";
import { NavLink } from "react-router-dom";

import logolink from "../../img/sidebar/logo.svg";
import burger from "../../img/sidebar/burger.svg";
import homelink from "../../img/sidebar/home.svg";
import userlink from "../../img/sidebar/user.svg";
import statslink from "../../img/sidebar/stats.svg";
import settingslink from "../../img/sidebar/settings.svg";
import exit from "../../img/sidebar/exit.svg";

import s from "./Sidebar.module.css";
import { logoutHandler } from "../../actions/user";
import { useDispatch } from "react-redux";

type TProps = {
  device?: string
}

const Sidebar: React.FC<TProps> = ({device}): JSX.Element => {

  const dispatch = useDispatch()

  return (
    <div className={`${device === 'mobile' ? s.mobile : s.desktop} ${s.wrapper}`}>
      <div className={s.first__section}>
        <NavLink 
        activeClassName={s.active__navlink} 
        className={`${s.sidebarlink} ${s.logo__link}`} to="/dashboard">
          <img src={logolink} alt="" />
        </NavLink>
        <div
        className={s.burger__menu}>
          <img src={burger} alt="" />
        </div>
      </div>
      <div className={s.middle__section}>
        <NavLink
        activeClassName={s.active__navlink} 
        className={s.sidebarlink} to="/dashboard">
          <img src={homelink} alt="" />
        </NavLink>
        <NavLink 
        activeClassName={s.active__navlink}
        className={s.sidebarlink} to="/user">
          <img src={userlink} alt="" />
        </NavLink>
        <NavLink 
        activeClassName={s.active__navlink}
        className={s.sidebarlink} to="/stats">
          <img src={statslink} alt="" />
        </NavLink>
      </div>
      <div className={s.last__section}>
        <NavLink 
        activeClassName={s.active__navlink}
        className={`${s.sidebarlink} ${s.settings__link}`} to="/settings">
          <img src={settingslink} alt="" />
        </NavLink>
        <NavLink 
        onClick={() => dispatch(logoutHandler())}
        activeClassName={s.active__navlink}
        className={`${s.logout__link} ${s.sidebarlink}`} to="/login">
          <img src={exit} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
