import { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography, alpha } from "@mui/material";
import LiquidBlobs from "./LiquidBlobs";
import GridPattern from "./GridPattern";

const STATS = [
  { target: 99, label: "Client satisfaction rate", suffix: "%" },
  { target: 326, label: "Finished projects", suffix: "+" },
  { target: 8000000, label: "Notes Created", suffix: "+" },
];

function formatCount(n, target, suffix) {
  if (target >= 1e6) {
    return (n / 1e6).toFixed(n >= target ? 0 : 1) + "M" + suffix;
  }
  if (target >= 1e3) {
    return (n / 1e3).toFixed(n >= target ? 0 : 1) + "K" + suffix;
  }
  return n.toLocaleString() + suffix;
}

function Counter({ target, label, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 2000;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
              else setCount(target);
            };
            requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        width: "100%",
        px: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Syne", sans-serif',
          fontSize: { xs: "36px", sm: "48px", md: "56px", lg: "72px" },
          fontWeight: 700,
          lineHeight: 1.1,
          background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          whiteSpace: "nowrap",
        }}
      >
        {formatCount(count, target, suffix)}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "13px", sm: "15px", md: "17px" },
          fontWeight: 400,
          color: (t) =>
            t.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.6)"
              : "rgba(0, 0, 0, 0.6)",
          mt: 1,
          lineHeight: 1.3,
          maxWidth: "100%",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function Stats() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 14 },
        px: { xs: 1.5, sm: 3 },
        overflow: "hidden",
        borderTop: (t) => `1px solid ${alpha(t.palette.divider, 0.12)}`,
        borderBottom: (t) => `1px solid ${alpha(t.palette.divider, 0.12)}`,
      }}
    >
      <LiquidBlobs opacity={0.35} variant="minimal" />
      <GridPattern opacity={0.7} />
      <Container maxWidth="xl" sx={{ position: "relative", px: { xs: 1, sm: 2 } }}>
        <Grid container spacing={{ xs: 4, sm: 4, md: 2 }} justifyContent="center" alignItems="center">
          {STATS.map((s) => (
            <Grid item xs={12} sm={4} md={4} key={s.label}>
              <Counter target={s.target} label={s.label} suffix={s.suffix} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}