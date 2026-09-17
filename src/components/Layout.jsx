import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ mode, onToggleMode }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Shared Navbar receiving global state */}
      <Navbar mode={mode} onToggleMode={onToggleMode} />

      {/* Page Content Renders Here */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      {/* Shared Footer */}
      <Footer />
    </Box>
  );
}