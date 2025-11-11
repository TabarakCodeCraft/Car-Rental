import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ setMenuOpened, continerStyles }) => {
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", titleKey: "home" },
    { path: "/listing", titleKey: "listing" },
    { path: "/blog", titleKey: "blog" },
    { path: "/contact", titleKey: "contactt" },
  ];

  return (
    <nav className={continerStyles}>
      {navLinks.map((link) => (
        <NavLink
          onClick={() => {
            setMenuOpened(false);
            scrollTo(0, 0);
          }}
          key={link.titleKey}
          to={link.path}
          className={({ isActive }) =>
            `${
              isActive ? "active-link" : ""
            } px-3 py-2 rounded-full uppercase text-sm font-bold`
          }
        >
          {t(link.titleKey)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;