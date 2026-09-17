import { useEffect, useRef, useState, useCallback } from "react";
import {
  Box,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Link as MuiLink,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logo from "../assets/images/logo.svg";

const SERVICES_DROPDOWN = [
  "Web Development",
  "Cloud Solutions",
  "Cybersecurity",
  "IT Consulting",
  "Network Support",
  "Software Development",
  "Data & Analytics",
  "IT Support & Maintenance",
];

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Avron", href: "#avron" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Shop Now", href: "#shop" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar({ mode, onToggleMode, onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const isMobile = useMediaQuery("(max-width:900px)");
  const tickingRef = useRef(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const resolveToProps = (hash) => (isHome ? hash : `/${hash}`);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 80);
      tickingRef.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleOpenServicesMenu = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };
  const handleCloseServicesMenu = () => {
    setServicesAnchorEl(null);
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: { xs: 12, sm: 20 },
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        width: "100%",
        maxWidth: 1560,
        px: { xs: "10px", sm: 3 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: { xs: 1.5, sm: 3 },
          py: { xs: 1.25, sm: 1.5 },
          borderRadius: "14px",
          backdropFilter: "blur(22px)",
          background: (t) =>
            scrolled
              ? t.palette.mode === "dark"
                ? "rgba(7,6,11,0.95)"
                : "rgba(250,249,247,0.96)"
              : t.palette.mode === "dark"
                ? "rgba(7,6,11,0.85)"
                : "rgba(250,249,247,0.9)",
          border: (t) => `1px solid ${t.palette.divider}`,
          boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
          transition: "background .3s",
        }}
      >
        {/* Logo */}
        <Stack
          direction="row"
          alignItems="center"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", display: "flex", flexShrink: 0 }}
        >
          <Box
            component="img"
            src={logo}
            alt="Intellect Arc"
            width={70}
            height={70}
            fetchpriority="high"
            sx={{
              width: "81px",
              height: "72px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Stack>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Stack direction="row" spacing={3.5} alignItems="center">
            {LINKS.map((l) =>
              l.hasDropdown ? (
                <Box key={l.label}>
                  <Button
                    disableRipple
                    onClick={handleOpenServicesMenu}
                    endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1.1rem !important" }} />}
                    sx={{
                      fontSize: 15,
                      fontWeight: 400,
                      color: Boolean(servicesAnchorEl) ? "text.primary" : "text.secondary",
                      textTransform: "none",
                      minWidth: "auto",
                      p: 0,
                      backgroundColor: "transparent !important",
                      outline: "none",
                      "&:hover": {
                        color: "text.primary",
                        backgroundColor: "transparent !important",
                      },
                      "&:focus, &:focus-visible, &.Mui-focused": {
                        color: Boolean(servicesAnchorEl) ? "text.primary" : "text.secondary",
                        backgroundColor: "transparent !important",
                        outline: "none",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {l.label}
                  </Button>
                  <Menu
                    anchorEl={servicesAnchorEl}
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleCloseServicesMenu}
                    elevation={8}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        p: 0.5,
                        borderRadius: "12px",
                        minWidth: 220,
                        backdropFilter: "blur(20px)",
                        background: (t) =>
                          t.palette.mode === "dark"
                            ? "rgba(18, 16, 25, 0.95)"
                            : "rgba(255, 255, 255, 0.95)",
                        border: (t) => `1px solid ${t.palette.divider}`,
                      },
                    }}
                  >
                    {SERVICES_DROPDOWN.map((item) => (
                      <MenuItem
                        key={item}
                        disableRipple
                        onClick={handleCloseServicesMenu}
                        component={RouterLink}
                        to={resolveToProps(`#${item.toLowerCase().replace(/\s+/g, "-")}`)}
                        sx={{
                          fontSize: 14,
                          py: 1,
                          px: 1.5,
                          borderRadius: "8px",
                          color: "text.secondary",
                          transition: "color 0.2s ease, background-color 0.2s ease",
                          "&:hover": {
                            color: "text.primary",
                            backgroundColor: (t) =>
                              t.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.08)"
                                : "rgba(0, 0, 0, 0.04)",
                          },
                          "&:focus, &:focus-visible, &.Mui-focused": {
                            backgroundColor: "transparent",
                            color: "text.primary",
                            outline: "none",
                          },
                        }}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <MuiLink
                  key={l.label}
                  component={RouterLink}
                  to={resolveToProps(l.href)}
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "text.secondary",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "text.primary" },
                    "&:focus, &:focus-visible": { outline: "none" },
                  }}
                >
                  {l.label}
                </MuiLink>
              )
            )}
          </Stack>
        )}

        {/* Action Buttons & Mobile Menu Trigger */}
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexShrink: 0 }}>
          <IconButton
            onClick={onToggleMode}
            size="small"
            sx={{
              borderRadius: "50%",
              border: (t) => `1px solid ${t.palette.divider}`,
              color: "text.primary",
              p: { xs: "6px", sm: "8px" },
            }}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mode === "dark" ? (
              <LightModeRoundedIcon fontSize="small" />
            ) : (
              <DarkModeRoundedIcon fontSize="small" />
            )}
          </IconButton>

          {!isMobile && (
            <Button
              component={RouterLink}
              to={resolveToProps("#start-project")}
              variant="contained"
              size="medium"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "10px",
                px: 2.5,
                py: 1,
                background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                boxShadow: "0px 4px 14px rgba(122, 90, 248, 0.35)",
                "&:hover": {
                  background: "linear-gradient(135deg, #6842F5 0%, #4F22F5 100%)",
                },
              }}
            >
              Start a Project
            </Button>
          )}

          {isMobile && (
            <IconButton
              onClick={() => {
                onMenuOpen?.();
                setDrawerOpen(true);
              }}
              sx={{ color: "text.primary", p: "6px" }}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
            >
              <MenuRoundedIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        id="mobile-nav-drawer"
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        elevation={0}
        keepMounted
        sx={{ zIndex: 100 }}
        PaperProps={{
          sx: {
            width: { xs: "80%", sm: 320 },
            height: "100%",
            backdropFilter: "blur(22px)",
            background: (t) =>
              t.palette.mode === "dark"
                ? "rgba(7,6,11,0.96)"
                : "rgba(250,249,247,0.98)",
            borderLeft: (t) => `1px solid ${t.palette.divider}`,
            boxShadow: "-16px 0 36px rgba(0,0,0,0.35)",
            overflowX: "hidden",
          },
        }}
      >
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", height: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ pb: 2, borderBottom: (t) => `1px solid ${t.palette.divider}` }}
          >
            <Box component="img" src={logo} alt="Intellect Arc" width={40} height={40} />
            <IconButton
              onClick={() => setDrawerOpen(false)}
              size="small"
              sx={{ color: "text.primary", p: "4px" }}
              aria-label="Close menu"
            >
              <CloseRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>

          <List sx={{ pt: 2, pb: 1, px: 0, flexGrow: 1 }}>
            {LINKS.map((l) =>
              l.hasDropdown ? (
                <Box key={l.label}>
                  <ListItemButton
                    disableRipple
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    sx={{
                      borderRadius: "8px",
                      my: 0.5,
                      py: 1,
                      "&:focus, &:focus-visible": { backgroundColor: "transparent" },
                    }}
                  >
                    <ListItemText primary={l.label} primaryTypographyProps={{ fontSize: 16 }} />
                    {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 2 }}>
                      {SERVICES_DROPDOWN.map((item) => (
                        <ListItemButton
                          key={item}
                          disableRipple
                          component={RouterLink}
                          to={resolveToProps(`#${item.toLowerCase().replace(/\s+/g, "-")}`)}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            borderRadius: "6px",
                            py: 0.75,
                            "&:focus, &:focus-visible": { backgroundColor: "transparent" },
                          }}
                        >
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{ fontSize: 14, color: "text.secondary" }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ) : (
                <ListItemButton
                  key={l.label}
                  disableRipple
                  component={RouterLink}
                  to={resolveToProps(l.href)}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: "8px",
                    my: 0.5,
                    py: 1,
                    "&:focus, &:focus-visible": { backgroundColor: "transparent" },
                  }}
                >
                  <ListItemText
                    primary={l.label}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: 16,
                    }}
                  />
                </ListItemButton>
              )
            )}
          </List>

          <Box sx={{ pt: 2, borderTop: (t) => `1px solid ${t.palette.divider}` }}>
            <Button
              component={RouterLink}
              to={resolveToProps("#start-project")}
              onClick={() => setDrawerOpen(false)}
              fullWidth
              variant="contained"
              sx={{
                py: 1.25,
                borderRadius: "8px",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
              }}
            >
              Start a Project
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}