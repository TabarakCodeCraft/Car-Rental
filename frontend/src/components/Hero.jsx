import React from "react";
import { useTranslation } from "react-i18next";
import { assets, cities } from "../assets/data";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className="bg-[#f5f5f5]">
      <div
        className="max-padd-container relative flex justify-end
      mx-auto flex-col gap-9 py-6 pt-32 z-10"
      >
        <div className="flexCenter flex-col gap-y-6">
          <div className="text-center max-w-5xl md">
            <h1 className="capitalize leading-tight">
              {t("heroExplore")}{" "}
              <span
                className={`${
                  isArabic
                    ? "bg-gradient-to-l from-[#00bfff] to-[#f5f5f5] pr-1"
                    : "bg-gradient-to-r from-[#00bfff] to-[#f5f5f5] pl-1"
                } rounded-md`}
              >
                {" "}
                {t("heroPremiumVehicles")}{" "}
              </span>{" "}
              {t("heroDestinations")}
            </h1>
          </div>

          <form className="bg-white text-gray-500 rounded-md md:rounded-full px-6 md:pl-12 py-4  flex flex-col md:flex-row gap-4 lg:gap-x-8 max-w-md md:max-w-4xl ring-1 ring-slate-900/5 relative">
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.pin} alt="pinImg" width={20} />
                <label htmlFor="destinationInput">{t("destination")}</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className=" rounded border capitalize border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                placeholder={t("typeHere")}
                required
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option value={city} key={index}></option>
                ))}
              </datalist>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.calendar} alt="calendarIcon" width={20} />
                <label htmlFor="pickup">{t("pickUp")}</label>
              </div>
              <input
                id="pickUp"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.calendar} alt="calendarIcon" width={20} />
                <label htmlFor="dropOff">{t("dropOff")}</label>
              </div>
              <input
                id="dropOff"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>

            <button
              className="flexCenter gap-1 rounded-md md:rounded-full
            bg-[#00bfff] text-white py-2 md:py-4 px-8 my-auto max-md:w-full max-md:py-1 cursor-pointer"
            >
              <img
                src={assets.search}
                alt="searchImg"
                width={20}
                className="invert"
              />
              <span>{t("search")}</span>
            </button>
          </form>
        </div>

        <div className="flexCenter">
          <img src={assets.bg} alt="bgImg" className="w-full md:w-[77%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
