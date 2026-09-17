import { Box, Divider, Typography } from "@mui/material";

const TECH_SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "AI & Machine Learning",
  "Cloud Architecture",
  "SaaS Products",
  "DevOps Automation",
  "Product Strategy",
  "Enterprise Software",
  "API Integrations",
];

function Row() {
  return (
    <Typography
      component="span"
      sx={{
        fontFamily: '"Syne", sans-serif',
        fontSize: { xs: 15, sm: 18 },
        fontWeight: 600,
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        color: "text.secondary",
      }}
    >
      {TECH_SERVICES.map((item) => (
        <Box
          key={item}
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            pr: "36px",
          }}
        >
          {item}
          <Box
            component="span"
            sx={{
              color: "#7A5AF8",
              opacity: 0.9,
              pl: "36px",
              fontSize: "1.2em",
              lineHeight: 0,
            }}
          >
            ·
          </Box>
        </Box>
      ))}
    </Typography>
  );
}

export default function TechMarquee() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 3, md: 4.5 },
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Divider sx={{ mb: { xs: 3, md: 4.5 }, borderColor: "divider", opacity: 0.5 }} />

      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          position: "relative",
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            backfaceVisibility: "hidden",
            perspective: 1000,
            animation: "marquee 30s linear infinite",
            willChange: "transform",
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {/* Duplicate row allows a seamless loop at -50% translateX */}
          <Row />
          <Row />
        </Box>
      </Box>

      <Divider sx={{ mt: { xs: 3, md: 4.5 }, borderColor: "divider", opacity: 0.5 }} />
    </Box>
  );
}