import { Box, Container, Stack, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LiquidBlobs from "./LiquidBlobs";
import GridPattern from "./GridPattern";
import HeroImage from "../assets/images/avron-hero.jpg";

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 15, sm: 18, lg: 20 },
        pb: { xs: 8, md: 14 },
        px: { xs: "12px", sm: 3 },
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <LiquidBlobs opacity={isDark ? 1 : 0.4} />
      <GridPattern />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 1, sm: 2 } }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 6, lg: 8 }}
        >
          {/* Left Content Column */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", lg: "left" }, width: "100%" }}>
            {/* Pill Badge */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={{ xs: "center", lg: "flex-start" }}
              sx={{
                display: "inline-flex",
                px: 2,
                py: 0.85,
                mb: { xs: 2.5, sm: 3.5 },
                borderRadius: 999,
                border: "1px solid rgba(168, 85, 247, 0.35)",
                background: isDark ? "rgba(168, 85, 247, 0.12)" : "rgba(168, 85, 247, 0.08)",
                boxShadow: isDark ? "0 0 24px rgba(168, 85, 247, 0.15)" : "none",
              }}
            >
              <ExploreOutlinedIcon
                sx={{
                  fontSize: 16,
                  color: (t) => (t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.6)" : "#7A5AF8"),
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 13 },
                  fontWeight: 400,
                  color: (t) => (t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "#6139F7"),
                  letterSpacing: "0.01em",
                }}
              >
                Digital agency · Available for new projects
              </Typography>
            </Stack>

            {/* Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.8rem", lg: "4.5rem" },
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                mb: { xs: 3, sm: 4 },
                color: "text.primary",
              }}
            >
              Digital Growth &amp;
              <br />
              <Box
                component="span"
                sx={{
                  color: "#7A5AF8",
                  display: "inline-block",
                }}
              >
                Innovation ,
              </Box>{" "}
              built
              <br />
              for scale
            </Typography>

            {/* Subtext Paragraph matching Figma brief */}
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16, md: 17 },
                fontWeight: 300,
                lineHeight: 1.6,
                color: "text.secondary",
                maxWidth: 540,
                mx: { xs: "auto", lg: 0 },
                mb: { xs: 4, sm: 5 },
              }}
            >
              Hey! We're Avron Solutions — A digital agency building websites, enterprise software, mobile apps and AI chatbots for scaling businesses. We help fast-moving teams launch, grow, and scale through strong branding and conversion-focused websites.
            </Typography>

            {/* Action Buttons Row */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              alignItems="center"
            >
              <Button
                href="#start-project"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                aria-label="Start a Project"
                sx={{
                  py: { xs: 1.4, sm: 1.5 },
                  px: 3.2,
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: 14, sm: 15 },
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
                Start a Project
              </Button>

              <Button
                href="#projects"
                variant="outlined"
                size="large"
                startIcon={<PlayCircleOutlineRoundedIcon />}
                aria-label="View Our Work"
                sx={{
                  py: { xs: 1.4, sm: 1.5 },
                  px: 3.2,
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: 14, sm: 15 },
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "10px",
                  borderColor: (t) =>
                    t.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.23)",
                  color: "text.primary",
                  "&:hover": {
                    borderColor: "#7A5AF8",
                    backgroundColor: "rgba(122, 90, 248, 0.08)",
                  },
                }}
              >
                View Our Work
              </Button>
            </Stack>
          </Box>

          {/* Right Image Container */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", sm: 420, lg: 600 },
              maxWidth: 600,
              display: "flex",
              justifyContent: "center",
              mt: { xs: 2, lg: 0 },
            }}
          >
            <Box
              component="img"
              src={HeroImage}
              alt="Avron Solutions digital agency showcase"
              loading="eager"
              fetchPriority="high"
              width="600"
              height="552"
              sx={{
                width: "530px",
                height: "530px",
                objectFit: "cover",
                display: "block",
                filter: isDark
                  ? "drop-shadow(0 20px 40px rgba(0,0,0,0.5))"
                  : "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
                borderRadius: "24px",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}