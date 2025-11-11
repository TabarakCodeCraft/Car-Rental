import React from "react";
import { useTranslation } from "react-i18next";
import Title from "./Title";
import { assets } from "../assets/data";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="max-padd-container py:16 xl:py-28 !pt-36">
      <div className="flex items-center flex-col lg:flex-row gap-14">
        <div className="flex-[5]">
          <div>
            <Title
              title1={t("aboutTitle1")}
              title2={t("aboutTitle2")}
              paraStyles={"hidden"}
            />
            <p className="mb-10 mt-5">{t("aboutDescription")}</p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 rounded-r-xl bg-primary">
                <h5>{t("quickServiceTitle")}</h5>
                <p className="text-sm mt-2">{t("quickServiceDesc")}</p>
              </div>

              <div className="p-4 rounded-r-xl bg-primaryOne">
                <h5>{t("wideSelectionTitle")}</h5>
                <p className="text-sm mt-2">{t("wideSelectionDesc")}</p>
              </div>

              <div className="p-4 rounded-r-xl bg-primaryTwo">
                <h5>{t("support24Title")}</h5>
                <p className="text-sm mt-2">{t("support24Desc")}</p>
              </div>

              <div className="p-4 rounded-r-xl bg-primary">
                <h5>{t("transparentPricingTitle")}</h5>
                <p className="text-sm mt-2">{t("transparentPricingDesc")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[4] flex gap-7">
          <div className="relative flex justify-end mb-8">
            <img src={assets.about1} alt="aboutImg" className="rounded-2xl" />
          </div>
          <div className="relative flex justify-end mt-8">
            <img src={assets.about2} alt="aboutImg" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
