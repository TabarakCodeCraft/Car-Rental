import React from "react";
import { useTranslation } from "react-i18next";

const Title = ({
  title1,
  title2,
  titleStyles,
  title2Styles,
  paraStyles,
  para,
}) => {
  const { t } = useTranslation();

  return (
    <div className={titleStyles}>
      <h4 className="text-[#00bfff]">{title1}</h4>
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <h1 className={`${title2Styles} capitalize`}>{title2}</h1>
        <p
          className={`${paraStyles} max-w-lg xl:place-self-end 
            xl:relative xl:bottom-3`}
        >
          {para ? para : t("aboutDescription")}
        </p>
      </div>
    </div>
  );
};

export default Title;
