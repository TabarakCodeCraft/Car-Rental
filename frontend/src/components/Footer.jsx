import React from "react";
import { assets } from "../assets/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const companyLinks = [
    { key: "about", href: "#" },
    { key: "careers", href: "#" },
    { key: "press", href: "#" },
    { key: "blog", href: "#" },
    { key: "partners", href: "#" },
  ];

  const supportLinks = [
    { key: "helpCenter", href: "#" },
    { key: "safety", href: "#" },
    { key: "cancel", href: "#" },
    { key: "contact", href: "#" },
    { key: "accessibility", href: "#" },
  ];

  const bottomLinks = [
    { key: "privacy", href: "#" },
    { key: "terms", href: "#" },
    { key: "sitemap", href: "#" },
  ];

  return (
    <footer className="pt-16 w-full text-gray-500 bg-primaryTwo border-t-1 border-b-gray-900/5">
      <div className="max-padd-container">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          {/* Logo & Description */}
          <div className="max-w-80">
            <div className="flex flex-1 items-center gap-2">
              <Link to={"/"} className="flex items-center gap-2">
                <img
                  src={assets.logoImg}
                  alt="logo"
                  width={88}
                  className="h-7"
                />
                <span className="text-textColor uppercase text-xs font-extrabold tracking-[6px] relative bottom-1">
                  {t("rentroo")}
                </span>
              </Link>
            </div>
            <p className="text-sm pt-3">{t("footerDesc")}</p>
            <div className="flex items-center gap-3 mt-4">
              <img src={assets.facebook} alt="facebook" />
              <img src={assets.instagram} alt="instagram" />
              <img src={assets.twitter} alt="twitter" />
              <img src={assets.linkedin} alt="linkedin" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg text-gray-800">{t("companyTitle")}</h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {companyLinks.map((item) => (
                <li key={item.key}>
                  <a href={item.href}>{t(`companyLinks.${item.key}`)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg text-gray-800">{t("supportTitle")}</h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {supportLinks.map((item) => (
                <li key={item.key}>
                  <a href={item.href}>{t(`supportLinks.${item.key}`)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-80">
            <h4 className="text-lg text-gray-800">{t("newsletterTitle")}</h4>
            <p className="mt-3 text-sm">{t("newsletterDesc")}</p>
            <div className="flex items-center pl-4 border gap-2 rounded-full h-[46px] bg-white border-gray-500/30 overflow-hidden max-w-md w-full mt-6">
              <input
                type="text"
                className="w-full h-full outline-none text-sm text-gray-500"
                placeholder={t("newsletterPlaceholder")}
              />
              <button className="btn-solid bg-black font-medium !px-3.5 py-2 mr-0.5">
                {t("newsletterButton")}
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mt-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://tabarak-aliportfolio.vercel.app/"
              className="text-gray-800 font-medium"
            >
              Tabarak Dev
            </a>
            . {t("footerBottom.rights")}
          </p>
          <ul className="flex items-center gap-4">
            {bottomLinks.map((item) => (
              <li key={item.key}>
                <a href={item.href}>{t(`footerBottom.${item.key}`)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
