import { Box, Container, Grid, Card, Typography } from "@mui/material";
import SectionEyebrow from "./SectionEyebrow";

// MUI Icons matching the Figma design icons
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const VALUES = [
  {
    icon: TrackChangesRoundedIcon,
    title: "Mission",
    body: "Turn ambitious ideas into products people love to use, driving measurable growth through speed, clarity, and design excellence.",
  },
  {
    icon: VisibilityOutlinedIcon,
    title: "Vision",
    body: "Be the agency scaling businesses trust most for digital growth, empowering fast-moving teams to innovate and dominate their markets.",
  },
];

export default function WhoWeAre() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: "12px", sm: 3 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 } }}>
        {/* Section Header Grid - Left Title, Right Description */}
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="flex-start"
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          {/* Left Side: Eyebrow + Main Heading */}
          <Grid item xs={12} md={6}>
            <SectionEyebrow label="Who we are" />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "3.8rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "text.primary",
                mt: 1,
              }}
            >
              We build digital{" "}
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
                products that scale
              </Box>
            </Typography>
          </Grid>

          {/* Right Side: Paragraph Copy matching Figma brief */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 300,
                color: "text.secondary",
                lineHeight: 1.7,
                fontSize: { xs: 15, sm: 16, md: 17 },
                pt: { xs: 0, md: 4 },
                maxWidth: 560,
              }}
            >
              Avron Solutions builds custom digital products — websites, enterprise software, mobile apps, and AI integrations — aimed at scaling businesses and improving online presence. We help fast-moving teams launch, grow, and scale through strong branding and conversion-focused websites with a focus on clarity and speed.
            </Typography>
          </Grid>
        </Grid>

        {/* Mission & Vision Cards Grid */}
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
          {VALUES.map((item) => {
            const IconComponent = item.icon;
            return (
              <Grid item xs={12} md={6} key={item.title}>
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    height: "100%",
                    borderRadius: "24px",
                    background: (t) =>
                      t.palette.mode === "dark"
                        ? "rgba(18, 16, 25, 0.6)"
                        : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(16px)",
                    border: (t) => `1px solid ${t.palette.divider}`,
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
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
                  {/* Circular Purple Icon Badge */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                      boxShadow: "0px 6px 18px rgba(122, 90, 248, 0.35)",
                      color: "#FFFFFF",
                    }}
                  >
                    <IconComponent sx={{ fontSize: 26 }} />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: 22, sm: 24, md: 26 },
                      mb: 1.5,
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15, md: 16 },
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: "text.secondary",
                      maxWidth: 480,
                    }}
                  >
                    {item.body}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}