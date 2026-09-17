import { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import getTheme from "../theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared chrome (theme + navbar + footer) for standalone routed pages like
// Privacy Policy, Terms of Service, and Contact Us. Keeps those pages on the
// exact same visual system as the home page without duplicating App.jsx's
// scroll-triggered section loading logic, which those pages don't need.
export default function PageChrome({ children }) {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        <Navbar mode={mode} onToggleMode={toggleMode} />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
