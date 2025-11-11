import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    alert(t('contact.submitSuccess'));
    setFormData({ fullName: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-gray-900">
              {t('contact.title')}
            </h1>
            <p className="text-gray-600">
              {t('contact.subtitle')}{" "}
              <a
                href="mailto:contact@rentroo.com"
                className="text-solid hover:underline"
              >
                contact@rentroo.com
              </a>
            </p>
          </div>

          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              {t('contact.fullName')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                placeholder={t('contact.fullNamePlaceholder')}
              />
            </div>
          </div>

          {/* Email Address Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              {t('contact.emailAddress')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none bg-white"
              placeholder={t('contact.messagePlaceholder')}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-solid hover:bg-gray-300 hover:text-gray-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {t('contact.submitButton')}
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;