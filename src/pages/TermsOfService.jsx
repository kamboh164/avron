import { Box, Container, Typography, useTheme } from "@mui/material";
import SectionEyebrow from "../components/SectionEyebrow";

export default function TermsOfService() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const sectionSx = {
    heading: { fontWeight: 600, color: "text.primary", mb: 1.5, fontSize: { xs: "1.2rem", sm: "1.4rem" } },
    body: { fontWeight: 300, color: "text.secondary", lineHeight: 1.7, fontSize: { xs: "0.95rem", sm: "1rem" } },
  };

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
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
            Terms of Service
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
            <Typography variant="h5" sx={sectionSx.heading}>
              1. Acceptance of Terms
            </Typography>
            <Typography sx={sectionSx.body}>
              By downloading, accessing, or using Intellect Arc, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={sectionSx.heading}>
              2. Using Intellect Arc
            </Typography>
            <Typography sx={{ ...sectionSx.body, mb: 1.5 }}>
              You agree to use the app only for lawful purposes and in a way that doesn't infringe on the rights of others. In particular, you agree not to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, ...sectionSx.body, display: "flex", flexDirection: "column", gap: 1 }}>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the app.</li>
              <li>Use the app to store or share content that is unlawful, abusive, or infringes on intellectual property.</li>
              <li>Interfere with or disrupt the app's servers, AI features, or other users' experience.</li>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={sectionSx.heading}>
              3. Your Content
            </Typography>
            <Typography sx={sectionSx.body}>
              You retain ownership of the notes, quotes, and reading data you create in Intellect Arc. By using our AI Thought Curator, you grant us a limited license to process that content solely to generate the summaries, posts, or insights you request.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={sectionSx.heading}>
              4. Subscriptions & Billing
            </Typography>
            <Typography sx={sectionSx.body}>
              Some features may be offered as paid subscriptions. Where applicable, pricing, billing cycle, and cancellation terms will be shown before purchase and are managed through the App Store or Google Play.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={sectionSx.heading}>
              5. Termination
            </Typography>
            <Typography sx={sectionSx.body}>
              We may suspend or terminate access to the app if these terms are violated. You may stop using the app and delete your account at any time from your account settings.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={sectionSx.heading}>
              6. Disclaimer & Liability
            </Typography>
            <Typography sx={sectionSx.body}>
              Intellect Arc is provided "as is" without warranties of any kind. We are not liable for any indirect or incidental damages arising from your use of the app, to the fullest extent permitted by law.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={sectionSx.heading}>
              7. Changes to These Terms
            </Typography>
            <Typography sx={sectionSx.body}>
              We may update these terms from time to time. Continued use of the app after changes take effect constitutes acceptance of the revised terms.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={sectionSx.heading}>
              8. Contact Us
            </Typography>
            <Typography sx={sectionSx.body}>
              Questions about these terms? Reach us at{" "}
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
