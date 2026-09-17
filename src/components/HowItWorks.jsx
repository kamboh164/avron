import { Box, Container, Grid, Card, Typography } from "@mui/material";
import SectionEyebrow from "./SectionEyebrow";

// Distinct MUI Icons for each process step
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Strategy",
    body: "We listen to your goals — website, software, app or AI chatbot — and give a clear scope, cost and time-frame before work begins.",
    icon: TuneRoundedIcon,
  },
  {
    n: "02",
    title: "Branding & Design",
    body: "Our designers build the brand identity, logo and UI/UX foundation that every product and platform we build sits on top of.",
    icon: SmartphoneRoundedIcon,
  },
  {
    n: "03",
    title: "Development & AI Integration",
    body: "Our developers build the website, enterprise software, mobile app or AI chatbot, focused on performance and scalability.",
    icon: CodeRoundedIcon,
  },
  {
    n: "04",
    title: "Launch & Growth Support",
    body: "We test, deploy, and support your digital product post-launch to ensure optimal performance, scaling, and conversion growth.",
    icon: RocketLaunchRoundedIcon,
  },
];

export default function HowItWorks() {
  return (
    <Box
      id="how-it-works"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: "12px", sm: 3 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <SectionEyebrow label="How It Works" center />

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.1rem", sm: "3rem", md: "3.6rem" },
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              mt: 1,
              mb: 2,
              color: "text.primary",
            }}
          >
            Our digital product{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              process
            </Box>
          </Typography>

          <Typography
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              maxWidth: 680,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: 15, sm: 16, md: 17 },
            }}
          >
            Every project follows a clear, four-step path — from first conversation to ongoing support. No black boxes, no surprises. Just a process designed to ship great work, on time.
          </Typography>
        </Box>

        {/* 2x2 Process Cards Grid */}
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
          {STEPS.map((s) => {
            const IconComponent = s.icon;
            return (
              <Grid item xs={12} md={6} key={s.n}>
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 3.5, sm: 4, md: 5 },
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: (t) =>
                      t.palette.mode === "dark"
                        ? "rgba(18, 16, 25, 0.6)"
                        : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(16px)",
                    border: (t) => `1px solid ${t.palette.divider}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "rgba(122, 90, 248, 0.4)",
                      boxShadow: (t) =>
                        t.palette.mode === "dark"
                          ? "0 12px 32px rgba(122, 90, 248, 0.15)"
                          : "0 12px 32px rgba(122, 90, 248, 0.1)",
                    },
                  }}
                >
                  {/* Top Bar: Icon Badge & Step Number */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 3,
                    }}
                  >
                    {/* Purple Circular Icon Container */}
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                        boxShadow: "0px 6px 18px rgba(122, 90, 248, 0.35)",
                        color: "#FFFFFF",
                      }}
                    >
                      <IconComponent sx={{ fontSize: 24 }} />
                    </Box>

                    {/* Step Number */}
                    <Typography
                      sx={{
                        fontSize: { xs: "2.8rem", sm: "3.5rem" },
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "#2C1F56",
                        letterSpacing: "-0.04em",
                        userSelect: "none",
                      }}
                    >
                      {s.n}
                    </Typography>
                  </Box>

                  {/* Title and Description */}
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: 20, sm: 22, md: 24 },
                        fontWeight: 600,
                        mb: 1.5,
                        color: "text.primary",
                      }}
                    >
                      {s.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 14, sm: 15, md: 16 },
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: "text.secondary",
                      }}
                    >
                      {s.body}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}