import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpend, setMenuOPened] = useState(false);
  const [active, setactive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const isHomePage = location.pathname.endsWith("/");
  const currentLang = i18n.language;

  const toggleMenu = () => {
    setMenuOPened((prev) => !prev);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    if (lang === "ar") {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }

    // Reload page to apply Clerk localization
    // window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setactive(window.scrollY > 10);
      if (window.scrollY > 10) {
        setMenuOPened(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Load saved language preference on mount
    const savedLang = localStorage.getItem("language");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }

    // Set initial direction based on language
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, currentLang, i18n]);

  return (
    <header
      className={`${active ? "bg-white shadow-sm py-2" : "py-3"} ${
        !isHomePage && "bg-white"
      } fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}
    >
      <div className="max-padd-container">
        <div className="flexBetween">
          <div className="flex flex-1">
            <Link to={"/"}>
              <img
                src={assets.logoImg}
                alt="logoImg"
                width={88}
                className="h-7"
              />
              <span className="text-textColor uppercase text-xs font-extrabold tracking-[6px] relative bottom-1">
                {t("rentroo")}
              </span>
            </Link>
          </div>
          <Navbar
            setMenuOpened={setMenuOPened}
            continerStyles={
              menuOpend
                ? `flex items-start flex-col gap-y-8 fixed top-16 ${
                    currentLang === "ar" ? "left-6" : "right-6"
                  } p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50`
                : "hidden lg:flex gap-x-5 xl:gap-x-1 text-sm"
            }
          />
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            <div className="relative">
              <button
                onClick={() =>
                  changeLanguage(currentLang === "en" ? "ar" : "en")
                }
                className="flex w-10 h-10 m-auto items-center ring-1 ring-slate-900/10 bg-white px-2 py-2 rounded-full hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl">🌐</span>
              </button>
            </div>

            <div className="relative hidden xl:flex items-center">
              <div
                className={`transition-all duration-300 ease-in-out 
                ring-1 ring-slate-900/10 bg-white rounded-full overflow-hidden ${
                  showSearch
                    ? "w-[266px] opacity-100 px-4 py-2"
                    : "w-11 opacity-0 px-0 py-0"
                }`}
              >
                <input
                  type="text"
                  placeholder={t("placeholder")}
                  className={`w-full text-sm outline-none ${
                    currentLang === "ar" ? "pl-10 pr-0" : "pr-10 pl-0"
                  } placeholder:text-gray-400`}
                />
              </div>

              <div
                onClick={() => {
                  setShowSearch((prev) => !prev);
                }}
                className={`absolute ${
                  currentLang === "ar" ? "left-0" : "right-0"
                } ring-1 ring-slate-900/10 bg-white p-[8px] rounded-full cursor-pointer z-10`}
              >
                <img src={assets.search} alt="" />
              </div>
            </div>

            {menuOpend ? (
              <img
                onClick={toggleMenu}
                src={assets.close}
                alt=""
                className={`lg:hidden cursor-pointer text-xl`}
              />
            ) : (
              <img
                onClick={toggleMenu}
                src={assets.menu}
                alt=""
                className={`lg:hidden cursor-pointer text-xl`}
              />
            )}

            <div className="group">
              {user ? (
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "38px",
                        height: "38px",
                      },
                    },
                  }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Link
                      label={currentLang === "ar" ? "حجوزاتي" : "My Bookings"}
                      labelIcon={
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      }
                      href="/my-bookings"
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <button
                  onClick={openSignIn}
                  className="btn-solid bg-black flexCenter gap-2 rounded-full "
                >
                  {t("login")}
                  <img src={assets.user} alt="userIcon" className="invert" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;