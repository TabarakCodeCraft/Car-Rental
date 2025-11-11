import React from "react";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import { assets } from "../assets/data";

const Testimonial = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      text: t("testimonial1Text"),
      name: t("testimonial1Name"),
      date: t("testimonial1Date"),
      img: assets.user1,
    },
    {
      id: 2,
      text: t("testimonial2Text"),
      name: t("testimonial2Name"),
      date: t("testimonial2Date"),
      img: assets.user2,
    },
    {
      id: 3,
      text: t("testimonial3Text"),
      name: t("testimonial3Name"),
      date: t("testimonial3Date"),
      img: assets.user3,
    },
  ];

  return (
    <section className="max-padd-container py-10">
      <Title
        title1={t("testimonialTitle")}
        title2={t("testimonialTitlee")}
        titleStyles="mb-10"
        para={t("testimonialPara")}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm"
          >
            <div className="flexBetween">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <img key={index} src={assets.star} alt="star" width={16} />
                ))}
              </div>
              <p>{item.date}</p>
            </div>

            <p>{item.text}</p>

            <div className="flex items-center gap-2">
              <img
                src={item.img}
                alt="user"
                className="h-8 w-8 rounded-full"
              />
              <p className="text-gray-800 font-medium">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
