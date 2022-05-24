import { NavLink, Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import React, {useState} from 'react';

import Button from "../UI/Button";
import classes from "./Navbar.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const isActive = ({ isActive }) => (isActive ? activeStyle : undefined);

  const userLoggedIn = true;
  const adminLoggedIn = false;
  const loggedOut = !userLoggedIn && !adminLoggedIn;


  const activeStyle = {
    color: "#55ca8a",
  };

  return (
    <div className={classes.container}>
      <Link to="/">
        <h1>Green Gym</h1>
      </Link>
      {adminLoggedIn && <h2 className={classes.admin}>Admin</h2>}
      <div className={classes.linksContainer}>
        {loggedOut && (
          <div className={classes.links}>
            <Link to="login">
              {t("nav_bar_already_a_member")}
            </Link>
            <Link to="signup">
              <Button size="small">{t("nav_bar_create_a_profile")}</Button>
            </Link>
          </div>
        )}
        {adminLoggedIn && (
          <div className={classes.links}>
            <NavLink style={isActive} to="members">
              {t("nav_bar_members")}
            </NavLink>
            <NavLink style={isActive} to="library">
              {t("nav_bar_library")}
            </NavLink>
            <NavLink style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink style={isActive} to="rewards">
              {t("nav_bar_rewards")}
            </NavLink>
          </div>
        )}
        {userLoggedIn && (
          <div className={classes.links}>
            <NavLink style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink style={isActive} to="activities">
              {t("nav_bar_my_activites")}
            </NavLink>
            <NavLink style={isActive} to="rewards">
              {t("nav_bar_rewards")}
            </NavLink>
            <NavLink style={isActive} to="profile">
              {t("nav_bar_profile")}
            </NavLink>
          </div>
        )}
        <LanguageToggle />
      </div>

          {/* mobile menu */}
          <div className={!nav ? classes.hidden : classes.mobileMenu}>
            {loggedOut && (
          <div className={classes.links}>
            <Link  className={classes.login} onClick={handleClick} to="login">
              Login
            </Link>
            <Link  onClick={handleClick} to="signup">
              <Button size="small">{t("nav_bar_create_a_profile")}</Button>
            </Link>
          </div>
        )}
          {adminLoggedIn && (
          <div className={classes.links}>
            <NavLink onClick={handleClick} style={isActive} to="members">
              {t("nav_bar_members")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="library">
              {t("nav_bar_library")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink onClick={handleClick} style={isActive} to="rewards">
              {t("nav_bar_rewards")}
            </NavLink>
          </div>
        )}
        {userLoggedIn && (
          <div className={classes.links}>
            <NavLink  onClick={handleClick} style={isActive} to="programs">
              {t("nav_bar_programs")}
            </NavLink>
            <NavLink  onClick={handleClick} style={isActive} to="activities">
              {t("nav_bar_my_activites")}
            </NavLink>
            <NavLink  onClick={handleClick} style={isActive} to="rewards">
              {t("nav_bar_rewards")}
            </NavLink>
            <NavLink  onClick={handleClick} style={isActive} to="profile">
              {t("nav_bar_profile")}
            </NavLink>
          </div>
        )}
        <LanguageToggle />
        </div>
        <div onClick={handleClick} className={classes.hamburger}>
         {!nav ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
};

export default Navbar;
