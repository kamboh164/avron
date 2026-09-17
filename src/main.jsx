import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Layout from "./components/Layout.jsx";
import { ThemeModeProvider, useThemeMode } from "./context/ThemeModeContext.jsx";

// Helper component to bind theme state to your shared Layout
function LayoutWrapper() {
  const { mode, toggleMode } = useThemeMode();
  return <Layout mode={mode} onToggleMode={toggleMode} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* All routes live inside the LayoutWrapper, sharing the Navbar and Footer */}
          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<App />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeModeProvider>
  </React.StrictMode>
);