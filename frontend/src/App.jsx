import React, { useEffect } from "react";
import "./index.css";
import "./i18n";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import CarDetails from "./pages/CarDetails";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import MyBookings from "./pages/MyBookings";
import AddCar from "./pages/admin/AddCar";
import ListCar from "./pages/admin/ListCar";
import Dashboard from "./pages/admin/Dashboard";
import Sidebar from "./components/admin/Sidebar";

const App = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }

    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;

    if (currentLang === "ar") {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }
  }, [i18n, i18n.language]);

  const location = useLocation();
  const isOwnerPath = location.pathname.includes("admin");

  return (
    <main className={isArabic ? "font-arabic" : ""}>
      {!isOwnerPath && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<CarDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="list-car" element={<ListCar />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </main>
  );
};

export default App;
