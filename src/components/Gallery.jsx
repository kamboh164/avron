import React, { useRef } from "react";
import { Box, Container, Stack, Typography, IconButton, useTheme } from "@mui/material";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import SectionEyebrow from "./SectionEyebrow";

import img1 from "../assets/images/gallery/intellectarc-gallery-img-1.webp";
import img2 from "../assets/images/gallery/intellectarc-gallery-img-2.webp";
import img3 from "../assets/images/gallery/intellectarc-gallery-img-3.webp";
import img4 from "../assets/images/gallery/intellectarc-gallery-img-4.webp";
import img5 from "../assets/images/gallery/intellectarc-gallery-img-5.webp";
import img6 from "../assets/images/gallery/intellectarc-gallery-img-6.webp";
import img7 from "../assets/images/gallery/intellectarc-gallery-img-7.webp";
import img8 from "../assets/images/gallery/intellectarc-gallery-img-8.webp";
import img9 from "../assets/images/gallery/intellectarc-gallery-img-9.webp";
import img10 from "../assets/images/gallery/intellectarc-gallery-img-10.webp";
import img11 from "../assets/images/gallery/intellectarc-gallery-img-11.webp";
import img12 from "../assets/images/gallery/intellectarc-gallery-img-12.webp";
import img13 from "../assets/images/gallery/intellectarc-gallery-img-13.webp";
import img14 from "../assets/images/gallery/intellectarc-gallery-img-14.webp";
import img15 from "../assets/images/gallery/intellectarc-gallery-img-15.webp";

const SHOTS = [
  { icon: AutoStoriesRoundedIcon, label: "Reading Log Overview", image: img1 },
  { icon: AutoStoriesRoundedIcon, label: "Detailed Book View", image: img2 },
  { icon: AutoStoriesRoundedIcon, label: "Chapter Progress", image: img3 },
  { icon: TuneRoundedIcon, label: "Reading Goals", image: img4 },
  { icon: TuneRoundedIcon, label: "Customize Themes", image: img5 },
  { icon: TuneRoundedIcon, label: "Backup & Sync", image: img6 },
  { icon: LocalFireDepartmentRoundedIcon, label: "Current Streak", image: img7 },
  { icon: LocalFireDepartmentRoundedIcon, label: "Monthly Challenge", image: img8 },
  { icon: LocalFireDepartmentRoundedIcon, label: "Achievement Badges", image: img9 },
  { icon: ExploreRoundedIcon, label: "Discover New Books", image: img10 },
  { icon: ExploreRoundedIcon, label: "Genre Browser", image: img11 },
  { icon: ExploreRoundedIcon, label: "Editor's Picks", image: img12 },
  { icon: FavoriteRoundedIcon, label: "My Wishlist", image: img13 },
  { icon: FavoriteRoundedIcon, label: "Favorite Quotes", image: img14 },
  { icon: LocalLibraryRoundedIcon, label: "My Bookshelf", image: img15 },
];

export default function Gallery({ surfaceIndex = 0 }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const swiperRef = useRef(null);

  const bg = theme.palette.surfaces[surfaceIndex % theme.palette.surfaces.length];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        overflow: "hidden",
        bgcolor: bg,
        color: "text.primary",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
          <SectionEyebrow label="Every Screen" center />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.6rem", sm: "1.9rem" },
              fontWeight: 700,
              mb: 1.5,
              color: "text.primary",
              "& span": {
                background: "linear-gradient(120deg,#a855f7,#6366f1 55%,#7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Thoughtfully designed, <span>pixel by pixel</span>
          </Typography>
          <Typography sx={{ fontWeight: 300, color: "text.secondary", lineHeight: 1.7, mx: "auto" }}>
            Every interface is carefully crafted to deliver a seamless, intuitive, and visually engaging experience across every device.
          </Typography>
        </Box>

        <Box sx={{ width: "100%", position: "relative" }}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={false}
            loop={false}
            speed={500}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            style={{
              padding: "20px 0 40px 0",
            }}
          >
            {SHOTS.map((item, i) => (
              <SwiperSlide
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.label}
                  sx={{
                    width: "100%",
                    maxWidth: "320px",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    borderRadius: "24px",
                    boxShadow: isDark
                      ? "0 20px 40px rgba(0,0,0,0.5)"
                      : "0 20px 40px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
                    "&:hover": {
                      transform: { xs: "none", md: "scale(1.03)" },
                      boxShadow: isDark
                        ? "0 30px 50px rgba(0,0,0,0.6)"
                        : "0 30px 50px rgba(0,0,0,0.22)",
                    },
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2, position: "relative", zIndex: 10 }}
          >
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                width: 44,
                height: 44,
                color: "text.secondary",
                bgcolor: isDark ? "rgba(241,238,247,0.05)" : "rgba(22,18,37,0.04)",
                border: "1px solid",
                borderColor: "divider",
                backdropFilter: "blur(4px)",
                "&:hover": {
                  borderColor: "#a855f7",
                  color: "#a855f7",
                  bgcolor: "rgba(168,85,247,0.05)",
                },
              }}
            >
              <ArrowBackRoundedIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                width: 44,
                height: 44,
                color: "#fff",
                backgroundImage: "linear-gradient(120deg, #a855f7, #7c3aed)",
                "&:hover": {
                  boxShadow: "0 8px 24px -6px rgba(124,58,237,0.5)",
                },
              }}
            >
              <ArrowForwardRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}