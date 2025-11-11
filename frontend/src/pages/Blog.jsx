import React from "react";
import { blogs } from "../assets/data";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary py-16 pt-28">
      <div className="max-padd-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-12">
          {blogs.map((blog, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-4 rounded-2xl">
                <img
                  src={blog.image}
                  alt={t(`blogs.${index}.title`)}
                  className="shadow-xl shadow-slate-900/20 rounded-xl"
                />
              </div>
              <p className="text-sm font-semibold mt-6">{t(`blogs.${index}.category`)}</p>
              <h5 className="pr-4 mb-1 line-clamp-2">{t(`blogs.${index}.title`)}</h5>
              <p>{t(`blogs.${index}.description`)}</p>
              <button className="underline mt-2 font-bold text-sm line-clamp-2">
                {t('blogs.continueReading')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;