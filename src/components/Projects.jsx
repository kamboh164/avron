import { useRef, useEffect, useState } from "react";
import { Box, Container, Typography, Button, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SectionEyebrow from "./SectionEyebrow";

// Sample project showcase images
import projectImg1 from "../assets/images/gallery/intellectarc-gallery-img-1.webp";
import projectImg2 from "../assets/images/gallery/intellectarc-gallery-img-2.webp";
import projectImg3 from "../assets/images/gallery/intellectarc-gallery-img-3.webp";
import projectImg4 from "../assets/images/gallery/intellectarc-gallery-img-4.webp";

const PROJECTS = [
  {
    id: 1,
    title: "Ventu Sky",
    description: "A sleek mobile app delivering hyper-local forecasts and real-time alerts. Designed for a frictionless, intuitive daily user experience.",
    image: projectImg1,
    link: "/projects/ventu-sky",
  },
  {
    id: 2,
    title: "Remal Caravans",
    description: "Full-stack booking platform and fleet reservation engine built for seamless desert caravan rentals in the UAE.",
    image: projectImg2,
    link: "/projects/remal-caravans",
  },
  {
    id: 3,
    title: "MindShelf App",
    description: "Personal knowledge management tool and interactive book reading tracker with AI-assisted quote curation.",
    image: projectImg3,
    link: "/projects/mindshelf",
  },
  {
    id: 4,
    title: "EXEED Automotive",
    description: "Luxury automotive showcase platform with trilingual support, virtual 360 discovery, and dealership management.",
    image: projectImg4,
    link: "/projects/exeed",
  },
];

export default function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const triggerRef = useRef(null);
  const horizontalTrackRef = useRef(null);

  // Scroll listener active exclusively on desktop viewports
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!triggerRef.current || !horizontalTrackRef.current) return;

      const element = triggerRef.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalScrollablePx = element.clientHeight - viewportHeight;

      if (totalScrollablePx <= 0) return;

      const currentProgress = Math.min(
        Math.max(-rect.top / totalScrollablePx, 0),
        1
      );

      const track = horizontalTrackRef.current;
      const maxTranslateX = track.scrollWidth - track.clientWidth;

      track.style.transform = `translateX(-${currentProgress * maxTranslateX}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  return (
    <Box
      id="projects"
      ref={triggerRef}
      sx={{
        position: "relative",
        height: { xs: "auto", md: "3600px" },
        bgcolor: "background.default",
        py: { xs: 6, sm: 8, md: 0 },
        px: { xs: 1.5, sm: 3, md: 0 },
      }}
    >
      <Box
        sx={{
          position: { xs: "relative", md: "sticky" },
          top: 0,
          height: { xs: "auto", md: "100%" },
          maxHeight: { md: "900px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          py: { xs: 0, md: 4 },
        }}
      >
        {/* Section Header */}
        <Container maxWidth="xl" disableGutters sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Box sx={{ textAlign: "left", mb: { xs: 4, md: 0 } }}>
            <SectionEyebrow label="Featured projects" />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.8rem", md: "3.4rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "text.primary",
                mt: 0.5,
              }}
            >
              Work we're proud of
            </Typography>
          </Box>
        </Container>

        {/* Dynamic Track: Vertical Stack on Mobile, Horizontal Pinned Loop on Desktop */}
        <Container maxWidth="xl" disableGutters sx={{ px: { xs: 1, sm: 2, md: 3 }, overflow: "visible", my: { xs: 0, md: 3 } }}>
          <Box
            ref={horizontalTrackRef}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, sm: 4 },
              willChange: isMobile ? "auto" : "transform",
              transition: isMobile ? "none" : "transform 0.05s linear",
            }}
          >
            {PROJECTS.map((project) => (
              <Box
                key={project.id}
                sx={{
                  flexShrink: 0,
                  width: "100%",
                  height: { xs: 360, sm: 460, md: 640 },
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
                {/* Background Featured Image */}
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Dark Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(7,6,11,0.1) 0%, rgba(7,6,11,0.85) 100%)",
                  }}
                />

                {/* Card Bottom Text Overlay */}
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
                      fontSize: { xs: "1.4rem", sm: "2.2rem", md: "2.6rem" },
                      fontWeight: 700,
                      color: "#FFFFFF",
                      mb: 0.75,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 12.5, sm: 14.5, md: 16 },
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 0.8)",
                      maxWidth: 620,
                      lineHeight: 1.5,
                      mb: { xs: 2, sm: 3 },
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Circular Action Button */}
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
        </Container>

        {/* View All Projects CTA Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 3 },
          }}
        >
          <Button
            component={RouterLink}
            to="/projects"
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