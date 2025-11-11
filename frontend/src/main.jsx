import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./i18n";
import { arLocalization } from "./clerkLocalizations";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const savedLang = localStorage.getItem("language") || "en";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        localization={savedLang === "ar" ? arLocalization : undefined}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
