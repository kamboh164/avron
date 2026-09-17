import { Box, Container, Grid, Typography, Stack, Chip, IconButton, Link as MuiLink } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const QUICK_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "WHO WE ARE", href: "#who-we-are" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "BLOG", href: "/blog", internal: true },
  { label: "PRICING", href: "#pricing" },
  { label: "CONTACT US", href: "#contact" },
];

const SOCIALS = [
  { icon: FacebookIcon, href: "#" },
  { icon: XIcon, href: "#" },
  { icon: LinkedInIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
];

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const resolveHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: 5, sm: 8, md: 10 },
        pb: 4,
        px: { xs: 1, sm: 2, md: 3 },
        bgcolor: "#07060B",
        color: "#FFFFFF",
        borderTop: (t) => `1px solid ${t.palette.divider}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 1.5, sm: 2 } }}>
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} justifyContent="space-between" sx={{ mb: { xs: 5, md: 8 } }}>
          {/* Left Column: Heading + Social Icons */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.6rem", md: "3.4rem" },
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                mb: { xs: 2.5, sm: 4 },
                color: "#FFFFFF",
                maxWidth: 480,
              }}
            >
              Helping start-ups scale & grow.
            </Typography>

            {/* Circular Dark Social Badges */}
            <Stack direction="row" spacing={1.25}>
              {SOCIALS.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <IconButton
                    key={i}
                    component="a"
                    href={item.href}
                    sx={{
                      width: { xs: 36, sm: 42 },
                      height: { xs: 36, sm: 42 },
                      bgcolor: "rgba(255, 255, 255, 0.06)",
                      color: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "#7A5AF8",
                        color: "#FFFFFF",
                        borderColor: "#7A5AF8",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <IconComponent sx={{ fontSize: { xs: 16, sm: 18 } }} />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>

          {/* Middle Column: Quick Links (Pill Badges) */}
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#7A5AF8" }} />
              <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>
                Quick links
              </Typography>
            </Stack>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {QUICK_LINKS.map((link) => (
                <Chip
                  key={link.label}
                  label={link.label}
                  component={link.internal ? RouterLink : "a"}
                  to={link.internal ? link.href : undefined}
                  href={!link.internal ? resolveHref(link.href) : undefined}
                  clickable
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.06)",
                    color: "rgba(255, 255, 255, 0.75)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "100px",
                    px: 0.25,
                    py: 1.5,
                    fontSize: { xs: 10.5, sm: 12 },
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "rgba(122, 90, 248, 0.15)",
                      color: "#FFFFFF",
                      borderColor: "rgba(122, 90, 248, 0.4)",
                    },
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Right Column: Contact Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#7A5AF8" }} />
              <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>
                Contact
              </Typography>
            </Stack>

            <Stack spacing={1.25}>
              <MuiLink
                href="mailto:avron@solution.com"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: 13, sm: 14 },
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": { color: "#7A5AF8" },
                }}
              >
                avron@solution.com
              </MuiLink>

              <MuiLink
                href="tel:+13025550107"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: 13, sm: 14 },
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": { color: "#7A5AF8" },
                }}
              >
                +(302) 555-0107
              </MuiLink>

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: { xs: 12.5, sm: 13.5 },
                  lineHeight: 1.6,
                  maxWidth: 240,
                  pt: 0.5,
                }}
              >
                4517 Washington Ave. Manchester, Kentucky 39495
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Guaranteed SVG ViewBox Scale for Watermark (Zero Overflow on Any Screen) */}
        <Box sx={{ width: "100%", my: { xs: 2, sm: 3 } }}>
          <Box
            component="svg"
            viewBox="0 0 1000 130"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          >
            <text
              x="50%"
              y="100"
              textAnchor="middle"
              fill="#6139F7"
              style={{
                        fontFamily: '"Syne", sans-serif',
                fontSize: "78px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                userSelect: "none",
              }}
            >
              Avron Solutions
            </text>
          </Box>
        </Box>

        {/* Bottom Bar: Copyright & Legal */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1.5}
          sx={{
            pt: 2.5,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Typography sx={{ fontSize: 12, color: "rgba(255, 255, 255, 0.5)" }}>
            ©2026 Avron Solutions.
          </Typography>

          <Stack direction="row" spacing={2.5}>
            <MuiLink
              component={RouterLink}
              to="/terms"
              sx={{
                fontSize: 12,
                color: "rgba(255, 255, 255, 0.5)",
                textDecoration: "none",
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              Terms and Conditions
            </MuiLink>
            <MuiLink
              component={RouterLink}
              to="/privacy"
              sx={{
                fontSize: 12,
                color: "rgba(255, 255, 255, 0.5)",
                textDecoration: "none",
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              Privacy Policy
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}