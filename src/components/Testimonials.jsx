import { useRef } from "react";
import { Box, Container, Card, Typography, Stack, Avatar, IconButton } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SectionEyebrow from "./SectionEyebrow";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const REVIEWS = [
  {
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    name: "Sarah A.",
    role: "Co-founder, NovaTech",
    quote: "Avron turned our idea into a clean, modern brand — efficiently. Their team understood exactly what NovaTech needed and worked with passion, professionalism, fun and full creativity.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    name: "Marcus R.",
    role: "CEO & Founder, Archin Studio",
    quote: "Avron Solutions' ability to create high-quality UI is what stands out. It's something we placed a premium on. A studio with passionate, professional, fun and full creativity.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    name: "Julia L.",
    role: "CEO & Founder, Oppa Living",
    quote: "Working with Avron felt like having an in-house team that actually cared. They shipped our AI chatbot on time and it converted 30% more leads in the first month.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    name: "David K.",
    role: "CTO, CloudScale",
    quote: "Their team delivered our enterprise web software well ahead of schedule with zero compromise on code quality or user experience.",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <Box id="testimonials" component="section" sx={{ py: { xs: 10, md: 14 }, px: { xs: "12px", sm: 3 }, backgroundColor: "background.paper" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 } }}>
        {/* Header with Eyebrow, Title and Solid Purple Arrows */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-end" }}
          justifyContent="space-between"
          sx={{ mb: { xs: 6, md: 8 }, textAlign: { xs: "center", sm: "left" }, gap: { xs: 3, sm: 0 } }}
        >
          <Box>
            <SectionEyebrow label="Client reviews" />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.1rem", sm: "3rem", md: "3.6rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "text.primary",
                mt: 1,
              }}
            >
              Don't just take{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                our word for it
              </Box>
            </Typography>
          </Box>

          {/* Solid Purple Navigation Circular Buttons */}
          <Stack direction="row" spacing={1.5}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                width: 48,
                height: 48,
                bgcolor: "#7A5AF8",
                color: "#FFFFFF",
                boxShadow: "0px 4px 14px rgba(122, 90, 248, 0.35)",
                "&:hover": {
                  bgcolor: "#6139F7",
                },
              }}
              aria-label="Previous review"
            >
              <ArrowBackRoundedIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                width: 48,
                height: 48,
                bgcolor: "#7A5AF8",
                color: "#FFFFFF",
                boxShadow: "0px 4px 14px rgba(122, 90, 248, 0.35)",
                "&:hover": {
                  bgcolor: "#6139F7",
                },
              }}
              aria-label="Next review"
            >
              <ArrowForwardRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          style={{
            paddingBottom: "50px",
          }}
        >
          {REVIEWS.map((r) => (
            <SwiperSlide key={r.name} style={{ height: "auto", display: "flex" }}>
              <Card
                elevation={0}
                sx={{
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "24px",
                  bgcolor: (t) =>
                    t.palette.mode === "dark"
                      ? "rgba(18, 16, 25, 0.8)"
                      : "rgba(255, 255, 255, 0.95)",
                  border: (t) => `1px solid ${t.palette.divider}`,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(122, 90, 248, 0.4)",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>
                  {/* Gold Star Ratings */}
                  <Stack direction="row" spacing={0.5} sx={{ mb: 2.5 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarRoundedIcon key={i} sx={{ fontSize: 24, color: "#FFB800" }} />
                    ))}
                  </Stack>

                  {/* Testimonial Quote Copy */}
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15 },
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: "text.secondary",
                    }}
                  >
                    "{r.quote}"
                  </Typography>
                </Box>

                {/* Author Avatar & Info */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={r.avatar}
                    alt={r.name}
                    sx={{
                      width: 46,
                      height: 46,
                      border: "1px solid rgba(122, 90, 248, 0.3)",
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: 16, fontWeight: 600, color: "text.primary" }}>
                      {r.name}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: "text.disabled", mt: 0.25 }}>
                      {r.role}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}