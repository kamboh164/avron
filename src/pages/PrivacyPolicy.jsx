import { Box, Container, Typography, useTheme } from "@mui/material";
import SectionEyebrow from "../components/SectionEyebrow";

export default function PrivacyPolicy() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        // Increased top padding so the fixed navbar doesn't overlap the heading
        pt: { xs: 16, md: 22 },
        pb: { xs: 12, md: 18 },
        px: { xs: 2, sm: 3 },
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <SectionEyebrow label="Legal & Trust" center />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
              mb: 2,
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              maxWidth: 500,
              mx: "auto",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
            }}
          >
            Last updated: August 4, 2026
          </Typography>
        </Box>

        {/* Content Box */}
        <Box
          sx={{
            p: { xs: 3, sm: 6 },
            borderRadius: "24px",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.45)" : "0 20px 40px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary", mb: 1.5, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}>
              1. Introduction
            </Typography>
            <Typography sx={{ fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              Welcome to Intellect Arc. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary", mb: 1.5, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}>
              2. Data We Collect
            </Typography>
            <Typography sx={{ fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" }, mb: 1.5 }}>
              We may collect, use, store and transfer different kinds of personal data:
            </Typography>
            <Box component="ul" sx={{ pl: 3, fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" }, display: "flex", flexDirection: "column", gap: 1 }}>
              <li><strong>Identity Data:</strong> username or similar identifier.</li>
              <li><strong>Reading & Usage Data:</strong> book tracking metrics, quotes, and reading streaks.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device info.</li>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary", mb: 1.5, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}>
              3. How We Use Your Data
            </Typography>
            <Typography sx={{ fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              We use your data to maintain core reading services, sync your account across devices, and power AI thought-curation features.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary", mb: 1.5, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}>
              4. Data Sharing
            </Typography>
            <Typography sx={{ fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              We do not sell your personal data. We may share limited data with trusted service providers who help us operate the app (such as cloud hosting and analytics), and only to the extent needed to provide our services.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary", mb: 1.5, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}>
              5. Your Rights
            </Typography>
            <Typography sx={{ fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              You may access, correct, export, or delete your personal data at any time from your account settings, or by contacting us directly.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary", mb: 1.5, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}>
              6. Contact Us
            </Typography>
            <Typography sx={{ fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              Questions about this policy? Reach us at{" "}
              <Box component="a" href="mailto:hello@intellectarc.com" sx={{ color: "primary.main", fontWeight: 500 }}>
                hello@intellectarc.com
              </Box>{" "}
              or visit our{" "}
              <Box component="a" href="/contact" sx={{ color: "primary.main", fontWeight: 500 }}>
                Contact page
              </Box>
              .
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}