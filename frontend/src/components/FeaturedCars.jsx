import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { assets, cities, dummyCars } from "../assets/data";
import { Link } from "react-router-dom";
import Title from "./Title";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const FeaturedCars = () => {
  const { t } = useTranslation();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const data = dummyCars.filter((car) => cities.includes(car.city));
    setFeatured(data);
  }, []);

  return (
    <section className="max-padd-container py-16 xl:py-28">
      <Title
        title1={t("featuredCars.title1")}
        title2={t("featuredCars.title2")}
        titleStyles={"mb-10"}
      />
      <div className="flexBetween mt-8 mb-6">
        <h5>
          <span className="font-bold">{t("featuredCars.displaying")} 1-6</span>{" "}
          {t("common.from")} {t("featuredCars.totalListings")}
        </h5>

        <Link
          to={"/listing"}
          onClick={() => scrollTo(0, 0)}
          className="bg-solid text-white text-2xl rounded-md p-2 flexCenter"
        >
          <img src={assets.sliders} alt="" className="invert" />
        </Link>
      </div>

      <Swiper
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 30 },
          1124: { slidesPerView: 3, spaceBetween: 30 },
          1300: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Autoplay]}
        className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
      >
        {featured.slice(0, 6).map((car) => (
          <SwiperSlide key={car._id}>
            <Item car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedCars;
