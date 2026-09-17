import { Box, Container, Typography, Button, Stack, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import LiquidBlobs from "./LiquidBlobs";

export default function CTA({ surfaceIndex = 0 }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="cta"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 12, md: 18 },
        px: { xs: "12px", sm: 3 },
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Dark Radial Purple Glow Background Effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "radial-gradient(circle at 50% 50%, rgba(122, 90, 248, 0.22) 0%, rgba(7, 6, 11, 1) 75%)"
            : "radial-gradient(circle at 50% 50%, rgba(122, 90, 248, 0.12) 0%, rgba(255, 255, 255, 1) 75%)",
          pointerEvents: "none",
        }}
      />

      <LiquidBlobs opacity={isDark ? 0.5 : 0.2} />

      <Container maxWidth="lg" sx={{ position: "relative", textAlign: "center", zIndex: 1 }}>
        {/* Main Headline */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.3rem", sm: "3.4rem", md: "4.2rem" },
            lineHeight: 1.12,
            mb: 2.5,
            color: "text.primary",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Helping start-ups
          <br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            scale & grow
          </Box>
        </Typography>

        {/* Subtitle Body Copy */}
        <Typography
          sx={{
            fontWeight: 300,
            color: "text.secondary",
            maxWidth: 620,
            mx: "auto",
            mb: 5,
            lineHeight: 1.7,
            fontSize: { xs: "0.95rem", sm: "1.1rem" },
          }}
        >
          Got an idea, a brief, or just a rough sketch? Tell us about it — we'll get back within one business day with thoughts, scope, and next steps.
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {/* Primary CTA: Start a Project */}
          <Button
            component={RouterLink}
            to="#contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              py: 1.5,
              px: 3.5,
              borderRadius: "12px",
              fontSize: { xs: 14, sm: 15 },
              fontWeight: 500,
              textTransform: "none",
              background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
              boxShadow: "0px 6px 20px rgba(122, 90, 248, 0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #6842F5 0%, #4F22F5 100%)",
              },
            }}
          >
            Start a Project
          </Button>

          {/* Secondary CTA: Book a Call */}
          <Button
            component="a"
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            startIcon={<PlayCircleOutlineRoundedIcon />}
            sx={{
              py: 1.5,
              px: 3.5,
              borderRadius: "12px",
              fontSize: { xs: 14, sm: 15 },
              fontWeight: 500,
              textTransform: "none",
              color: "text.primary",
              borderColor: (t) =>
                t.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(0, 0, 0, 0.25)",
              "&:hover": {
                borderColor: "#7A5AF8",
                bgcolor: "rgba(122, 90, 248, 0.08)",
              },
            }}
          >
            Book a Call
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}