import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

import LiquidBlobs from "./LiquidBlobs";
import GridPattern from "./GridPattern";
import SectionEyebrow from "./SectionEyebrow";

import aiStep1Img from "../assets/images/ai/intellectarc-ai-1.webp";
import aiStep2Img from "../assets/images/ai/intellectarc-ai-2.webp";
import aiStep3Img from "../assets/images/ai/intellectarc-ai-3.webp";

const STEPS = [
  { n: 1, label: "Speak", icon: MicRoundedIcon, image: aiStep1Img },
  { n: 2, label: "AI Drafts", icon: AutoAwesomeRoundedIcon, image: aiStep2Img },
  { n: 3, label: "Share", icon: ShareRoundedIcon, image: aiStep3Img },
];

const PILLARS = [
  { icon: MicRoundedIcon, title: "Voice Input", body: "Speak your raw thoughts naturally—no typing needed" },
  { icon: AutoFixHighRoundedIcon, title: "Platform-Ready", body: "AI tailors tone for LinkedIn, Twitter/X, and more" },
  { icon: HistoryRoundedIcon, title: "Post History", body: "Browse, edit, and reuse all AI-drafted content" },
];

export default function AISection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="ai"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        px: 3,
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <LiquidBlobs opacity={isDark ? 1 : 0.4} />
      <GridPattern />
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box sx={{ textAlign: "center"}}>
          <SectionEyebrow label="Powered by AI" center />

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", lg: "3.4rem" },
              lineHeight: 1.06,
              mb: 3,
              color: "text.primary",
            }}
          >
            Your thoughts,
            <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(120deg,#e4c378,#a855f7 60%,#7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              brilliantly drafted
            </Box>
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              maxWidth: 480,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: 17,
            }}
          >
            Speak your raw reflections. Our Digital Curator AI transforms them into polished posts you can share with one tap.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr auto 1fr auto 1fr" },
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            rowGap: { xs: 8, lg: 0 },
            columnGap: { xs: 0, lg: 3 },
            px: { xs: 0, md: 4 },
            pt: { xs: 6, md: 8 },
          }}
        >
          {STEPS.map((s, i) => (
            <Box key={s.n} sx={{ display: "contents" }}>
              <Box sx={{ textAlign: "center", width: "100%" }}>
                <Stack alignItems="center" spacing={1} sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(168,85,247,0.18)",
                      border: "1px solid rgba(168,85,247,0.32)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Syne", sans-serif',
                        fontWeight: 700,
                        fontSize: 15,
                        color: "primary.main",
                      }}
                    >
                      {s.n}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "rgba(168,85,247,0.7)",
                    }}
                  >
                    {s.label}
                  </Typography>
                </Stack>

                <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: "center" }}>
                  <Box
                    component="img"
                    src={s.image}
                    alt={`${s.label} Preview`}
                    sx={{
                      width: { xs: "100%", sm: 340, md: 300 },
                      maxWidth: { xs: 280, sm: 360, md: 300 },
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                      filter: isDark
                        ? "drop-shadow(0 16px 32px rgba(0,0,0,0.45))"
                        : "drop-shadow(0 16px 32px rgba(0,0,0,0.12))",
                      borderRadius: "16px",
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  />
                </Box>
              </Box>

              {i < STEPS.length - 1 && (
                <ArrowForwardRoundedIcon
                  sx={{
                    display: { xs: "none", lg: "block" },
                    color: "rgba(168,85,247,0.3)",
                    fontSize: 32,
                    mt: 6,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}