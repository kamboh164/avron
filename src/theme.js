import { createTheme } from "@mui/material/styles";

export const brand = {
  accent1: "#a855f7",
  accent2: "#7c3aed",
  accent3: "#6366f1",
  gold: "#e4c378",
};

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: brand.accent1,
        dark: brand.accent2,
        light: brand.accent3,
      },
      secondary: {
        main: brand.gold,
      },
      background: {
        default: mode === "dark" ? "#07060b" : "#faf9f7",
        paper: mode === "dark" ? "#0E0B11" : "#ffffff",
      },
      // Alternating solid surface tones for stacked sections.
      // Use theme.palette.surfaces[index % surfaces.length] per section.
      surfaces:
        mode === "dark"
          ? ["#0B080E", "#0E0B11"]
          : ["#ffffff", "#f5f3f1"],
      text:
        mode === "dark"
          ? {
              primary: "#f1eef7",
              secondary: "rgba(241,238,247,0.62)",
              disabled: "rgba(241,238,247,0.42)",
            }
          : {
              primary: "#161225",
              secondary: "rgba(22,18,37,0.62)",
              disabled: "rgba(22,18,37,0.46)",
            },
      divider:
        mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(22,18,37,0.09)",
    },
    typography: {
      fontFamily: '"Inter", system-ui, sans-serif',
      h1: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
      h2: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
      h3: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
      h4: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      h5: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      button: { fontFamily: '"Inter", sans-serif', textTransform: "none", fontWeight: 600 },
    },
    shape: {
      borderRadius: 20,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            padding: "12px 28px",
          },
          containedPrimary: {
            backgroundImage: `linear-gradient(120deg, ${brand.accent1}, ${brand.accent2})`,
            boxShadow: "none",
            "&:hover": {
              boxShadow: `0 12px 32px -6px rgba(124,58,237,0.42)`,
              backgroundImage: `linear-gradient(120deg, ${brand.accent1}, ${brand.accent2})`,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: "none",
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            transition: "all .45s cubic-bezier(.2,.8,.2,1)",
          }),
        },
      },
    },
  });

export default getTheme;