import { Box, Container, Grid, Card, Typography } from "@mui/material";
import SectionEyebrow from "./SectionEyebrow";

// Importing the feature images from 1 to 8
import featureImg1 from "../assets/images/features/intellectarc-feature-img-1.svg";
import featureImg2 from "../assets/images/features/intellectarc-feature-img-2.svg";
import featureImg3 from "../assets/images/features/intellectarc-feature-img-3.svg";
import featureImg4 from "../assets/images/features/intellectarc-feature-img-4.svg";
import featureImg5 from "../assets/images/features/intellectarc-feature-img-5.svg";
import featureImg6 from "../assets/images/features/intellectarc-feature-img-6.svg";
import featureImg7 from "../assets/images/features/intellectarc-feature-img-7.svg";
import featureImg8 from "../assets/images/features/intellectarc-feature-img-8.svg";

const FEATURES = [
  { image: featureImg1, title: "Daily Goals & Streaks", body: "Set page or minute targets, track progress, and build reading streaks that keep you motivated." },
  { image: featureImg2, title: "Smart Book Tracking", body: "Log progress page by page, rate books, highlight quotes, and add personal notes." },
  { image: featureImg3, title: "AI Thought Curator", body: "Speak your thoughts and let AI draft polished posts for LinkedIn, Twitter, and more." },
  { image: featureImg4, title: "Quotes Collection", body: "Save favorite passages, organize by book, and revisit the words that moved you." },
  { image: featureImg5, title: "Reading Summaries", body: "Capture themes, emotions, and takeaways. Build a personal insight library." },
  { image: featureImg6, title: "Library Management", body: "Track borrowed books, manage due dates, and never miss a return deadline." },
  { image: featureImg7, title: "Reading Wishlist", body: "Save books you want to read next, snap the cover, and mark them purchased the moment you grab a copy." },
  { image: featureImg8, title: "Voice-to-Post Generation", body: "Record your voice or type your raw thoughts, choose your preferred language and platform style, and generate tailored posts instantly." },
];

export default function Features() {
  return (
    <Box
      id="features"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        // Safe padding down to 350px screens to prevent layout shifting
        px: { xs: "12px", sm: 3 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <SectionEyebrow label="Features" center />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.8rem" },
              letterSpacing: "-0.01em",
              mb: 2,
            }}
          >
            Everything a reader{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(120deg,#a855f7,#6366f1 55%,#7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              needs
            </Box>
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              maxWidth: 560,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: 14, sm: 16 },
            }}
          >
            From daily goals to AI-powered insights, every tool makes reading more intentional and rewarding.
          </Typography>
        </Box>

        {/* Feature Grid with ultra-responsive spacing */}
        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
          {FEATURES.map((f, index) => (
            <Grid item xs={12} sm={6} md={4} key={f.title}>
              <Card
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  height: "100%",
                  borderRadius: "24px",
                  border: (t) => `1px solid ${t.palette.divider}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(168,85,247,0.28)",
                  },
                }}
              >
                {/* Feature Icon Graphic Container with custom gradient (#6D64F2 & #875DF5) */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    background: "linear-gradient(135deg, #6D64F2 0%, #875DF5 100%)",
                    p: 1.25,
                  }}
                >
                  <Box
                    component="img"
                    src={f.image}
                    alt={`${f.title} illustration`}
                    sx={{
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                      display: "block",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                    }}
                  />
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: 20, sm: 22, md: 24 },
                    mb: 1.25,
                    fontWeight: 600,
                  }}
                >
                  {f.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 15, sm: 16, md: 18 },
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "text.secondary",
                  }}
                >
                  {f.body}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}