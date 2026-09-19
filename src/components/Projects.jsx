import { useRef, useEffect, useState, useCallback } from "react";
import { Box, Typography, Button, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SectionEyebrow from "./SectionEyebrow";

import projectImg1 from "../assets/images/projects/avron-project-1.png";
import projectImg2 from "../assets/images/projects/avron-project-2.png";
import projectImg3 from "../assets/images/projects/avron-project-3.png";
import projectImg4 from "../assets/images/projects/avron-project-4.png";

const PROJECTS = [
  {
    id: 1,
    title: "VIPA",
    description: "A service vendor marketplace connecting clients with verified professionals. Smart search by service, location and date, transparent pricing, and real reviews.",
    image: projectImg1,
    link: "/projects/vipa",
  },
  {
    id: 2,
    title: "Alsanafir Herbal Pharma",
    description: "A conversion-focused e-commerce store for premium herbal medicines and oils, with categorized collections, best sellers, and a streamlined buying flow.",
    image: projectImg2,
    link: "/projects/alsanafir-herbal-pharma",
  },
  {
    id: 3,
    title: "SESE Bar & Drink Lounge",
    description: "A vibrant restaurant and lounge website with an online food menu, flash sales, special offers, and a smooth ordering experience.",
    image: projectImg3,
    link: "/projects/sese",
  },
  {
    id: 4,
    title: "NexShip",
    description: "A bold, minimal logistics website for e-commerce shipping, presenting worldwide delivery services, trust stats, and clear calls to action.",
    image: projectImg4,
    link: "/projects/nexship",
  },
];

export default function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isShort = useMediaQuery("(max-height: 560px)");
  const isStacked = isMobile || isShort;

  // Same max width as <Container maxWidth="xl"> so the left edge lines up with the rest of the site
  const containerMax = theme.breakpoints.values.xl;

  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const viewRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(0);

  const [sectionHeight, setSectionHeight] = useState(null);

  const updateTrack = useCallback(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const view = viewRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !view || !track) return;

    const totalScrollable = section.offsetHeight - sticky.clientHeight;
    if (totalScrollable <= 0) return;

    const rect = section.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
    const maxTranslateX = Math.max(track.scrollWidth - view.clientWidth, 0);

    track.style.transform = `translate3d(${-progress * maxTranslateX}px, 0, 0)`;
  }, []);

  const measure = useCallback(() => {
    const sticky = stickyRef.current;
    const view = viewRef.current;
    const track = trackRef.current;
    if (!sticky || !view || !track) return;

    const distance = Math.max(track.scrollWidth - view.clientWidth, 0);
    setSectionHeight(sticky.clientHeight + distance);
    requestAnimationFrame(updateTrack);
  }, [updateTrack]);

  useEffect(() => {
    const track = trackRef.current;

    if (isStacked) {
      if (track) track.style.transform = "none";
      setSectionHeight(null);
      return;
    }

    // Make sure no ancestor overflow breaks position: sticky
    const patched = [];
    let el = sectionRef.current?.parentElement;
    while (el && el !== document.body && el !== document.documentElement) {
      const cs = getComputedStyle(el);
      if (/(hidden|auto|scroll)/.test(`${cs.overflowX} ${cs.overflowY}`)) {
        patched.push([el, el.style.overflowX, el.style.overflowY]);
        el.style.overflowX = "clip";
        el.style.overflowY = "visible";
      }
      el = el.parentElement;
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateTrack);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    window.addEventListener("load", measure);

    const ro = new ResizeObserver(measure);
    if (stickyRef.current) ro.observe(stickyRef.current);
    if (viewRef.current) ro.observe(viewRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      ro.disconnect();
      patched.forEach(([node, ox, oy]) => {
        node.style.overflowX = ox;
        node.style.overflowY = oy;
      });
    };
  }, [isStacked, measure, updateTrack]);

  return (
    <Box
      id="projects"
      ref={sectionRef}
      sx={{
        // --g    : normal side gutter
        // --left : container-aligned left edge (gutter on small screens, centered-container edge on wide ones)
        "--g": { xs: "12px", sm: "24px", md: "32px" },
        "--left": `max(var(--g), calc((100% - ${containerMax}px) / 2 + var(--g)))`,
        position: "relative",
        width: "100%",
        height: isStacked || !sectionHeight ? "auto" : `${sectionHeight}px`,
        bgcolor: "background.default",
        py: isStacked ? { xs: 6, sm: 8 } : 0,
      }}
    >
      <Box
        ref={stickyRef}
        sx={{
          position: isStacked ? "relative" : "sticky",
          top: 0,
          width: "100%",
          height: isStacked ? "auto" : "100vh",
          "@supports (height: 100dvh)": {
            height: isStacked ? "auto" : "100dvh",
          },
          display: "flex",
          flexDirection: "column",
          gap: isStacked ? 0 : "clamp(12px, 2.5vh, 28px)",
          py: isStacked ? 0 : "clamp(16px, 4vh, 40px)",
          overflow: isStacked ? "visible" : "hidden",
        }}
      >
        {/* Section Header (aligned to the container's left edge) */}
        <Box
          sx={{
            pl: "var(--left)",
            pr: "var(--g)",
            flexShrink: 0,
            textAlign: "left",
            mb: isStacked ? 4 : 0,
          }}
        >
          <SectionEyebrow label="Featured projects" />
          <Typography
            variant="h2"
            sx={{
              fontSize: "clamp(1.8rem, 1rem + 2.2vw, 3.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "text.primary",
              mt: 0.5,
            }}
          >
            Work we're proud of
          </Typography>
        </Box>

        {/* Full-width track viewport */}
        <Box
          ref={viewRef}
          sx={{
            flex: isStacked ? "none" : 1,
            minHeight: 0,
            width: "100%",
            overflowX: isStacked ? "visible" : "clip",
            overflowY: "visible",
          }}
        >
          <Box
            ref={trackRef}
            sx={{
              display: "flex",
              flexDirection: isStacked ? "column" : "row",
              alignItems: "center",
              height: isStacked ? "auto" : "100%",
              // Stacked layout: container-aligned left, normal gutter right
              pl: isStacked ? "var(--left)" : 0,
              pr: isStacked ? "var(--g)" : 0,
              gap: { xs: 3, sm: 4 },
              willChange: isStacked ? "auto" : "transform",
              transition: isStacked ? "none" : "transform 0.05s linear",
            }}
          >
            {PROJECTS.map((project, index) => (
              <Box
                key={project.id}
                sx={{
                  flexShrink: 0,
                  // Card starts at the container's left edge and runs to the viewport's right edge
                  width: isStacked ? "100%" : "calc(100% - var(--left))",
                  ml: !isStacked && index === 0 ? "var(--left)" : 0,
                  height: isStacked ? "clamp(340px, 62vw, 520px)" : "100%",
                  maxHeight: isStacked ? "none" : 760,
                  position: "relative",
                  borderRadius: { xs: "20px", sm: "28px" },
                  overflow: "hidden",
                  border: (t) => `1px solid ${t.palette.divider}`,
                  bgcolor: isDark ? "rgba(18, 16, 25, 0.8)" : "rgba(0,0,0,0.04)",
                  boxShadow: isDark
                    ? "0 20px 40px rgba(0,0,0,0.5)"
                    : "0 20px 40px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  onLoad={isStacked ? undefined : measure}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(7,6,11,0.1) 0%, rgba(7,6,11,0.85) 100%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2.5, sm: 4, md: 5 },
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "clamp(1.4rem, 0.9rem + 1.6vw, 2.6rem)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      mb: 0.75,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "clamp(0.78rem, 0.7rem + 0.3vw, 1rem)",
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 0.8)",
                      maxWidth: 620,
                      lineHeight: 1.5,
                      mb: { xs: 2, sm: 3 },
                    }}
                  >
                    {project.description}
                  </Typography>

                  <IconButton
                    component={RouterLink}
                    to={project.link}
                    aria-label={`View ${project.title}`}
                    sx={{
                      width: { xs: 42, sm: 48 },
                      height: { xs: 42, sm: 48 },
                      bgcolor: "#FFFFFF",
                      color: "#07060B",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                      transition: "transform 0.2s ease, background-color 0.2s ease",
                      "&:hover": {
                        bgcolor: "#7A5AF8",
                        color: "#FFFFFF",
                        transform: "scale(1.08)",
                      },
                    }}
                  >
                    <NorthEastRoundedIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* View All Projects CTA */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
            mt: isStacked ? 4 : 0,
          }}
        >
          <Button
            component={RouterLink}
            to="#"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              py: { xs: 1.2, sm: 1.5 },
              px: { xs: 3, sm: 3.5 },
              fontSize: { xs: 13.5, sm: 15 },
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
              boxShadow: "0px 6px 20px rgba(122, 90, 248, 0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #6842F5 0%, #4F22F5 100%)",
              },
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}