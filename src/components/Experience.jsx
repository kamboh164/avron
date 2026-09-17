import { Box, Container, Stack, Typography, Button, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SectionEyebrow from "./SectionEyebrow";

import serviceImg1 from "../assets/images/services/avron-service-1.jpg";
import serviceImg2 from "../assets/images/services/avron-service-2.jpg";
import serviceImg3 from "../assets/images/services/avron-service-3.png";
import serviceImg4 from "../assets/images/services/avron-service-4.png";
import serviceImg5 from "../assets/images/services/avron-service-5.png";
import serviceImg6 from "../assets/images/services/avron-service-6.jpg";

const SERVICES = [
  {
    title: "Web Development",
    body: "We build modern, high-performing websites — custom frontend web apps, full-stack web software, e-commerce stores, and high-converting marketing landing pages.",
    points: [
      "Custom React, Next.js & Vue web application development",
      "Optimized performance with high Core Web Vitals scores",
      "Full-stack CMS integration with seamless database architecture",
      "Conversion-focused landing pages built for marketing scale",
    ],
    image: serviceImg1,
  },
  {
    title: "Brand & Logo Design",
    body: "We create distinct brand identities & visual systems that capture audience attention — logos, style guides, brand positioning, and collateral design.",
    points: [
      "Distinct brand positioning & comprehensive identity strategy",
      "Custom vector logo design & full typographic token systems",
      "Design design system guidelines for consistent digital presence",
      "Marketing collateral & high-impact social media brand assets",
    ],
    image: serviceImg2,
  },
  {
    title: "AI Chatbot Development",
    body: "Custom automated assistant solutions for customer service support, automated operations, and customer engagement — built to drive sales and reduce operational friction.",
    points: [
      "Custom LLM & AI agent integrations trained on company data",
      "Automated lead generation, qualifying & sales booking workflows",
      "24/7 intelligent customer care reducing support resolution time",
      "Multi-channel deployment across web, mobile, and social messaging",
    ],
    image: serviceImg3,
  },
  {
    title: "Mobile App Development",
    body: "Native iOS and Android app solutions, cross-platform app deployment, and intuitive UI/UX design. We engineer mobile apps that users rely on daily.",
    points: [
      "Cross-platform iOS and Android app development via React Native/Flutter",
      "Native device API integrations, push notifications & offline storage",
      "High-performance UI rendering with smooth 60fps user interactions",
      "End-to-end App Store & Google Play store deployment management",
    ],
    image: serviceImg4,
  },
  {
    title: "UI/UX Design",
    body: "Human-centered user experience design paired with crisp interfaces for web apps, SaaS dashboards, mobile interfaces, and digital product ecosystem design.",
    points: [
      "In-depth user journey mapping, wireframing & interactive prototypes",
      "Scalable Figma design systems with 8pt grid token architecture",
      "Accessibility-first (WCAG compliant) contrast and touch targets",
      "Conversion-driven dashboard & SaaS application layout design",
    ],
    image: serviceImg5,
  },
  {
    title: "Cloud & DevOps",
    body: "Scalable cloud infrastructure, automated deployment pipelines, and robust DevOps practices for seamless software delivery and operation.",
    points: [
      "Cloud architecture design & implementation on AWS, Azure, or GCP",
      "CI/CD pipeline setup & automation for rapid, reliable deployments",
      "Containerization & orchestration with Docker & Kubernetes",
      "Monitoring, logging & incident response for optimal system performance",
    ],
    image: serviceImg6,
  },
];

const STACK_OFFSET = 20;
const BASE_TOP = 130;

function ServiceCard({ service, flip, index, isDark }) {
  return (
    <Box
      className="sticky-card"
      sx={{
        position: "sticky",
        top: { xs: "80px", md: `${BASE_TOP + index * STACK_OFFSET}px` },
        zIndex: index + 1,
        mb: { xs: 3, md: 4 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: flip ? "row-reverse" : "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 4, md: 6, lg: 8 }}
        sx={{
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2.5, sm: 4, md: 6 },
          borderRadius: "24px",
          bgcolor: "background.default",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* Service Preview Image Container */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={service.image}
            alt={`${service.title} Preview`}
            sx={{
              width: "100%",
              maxWidth: { xs: 280, sm: 340, md: 460, lg: 500 },
              height: { xs: 280, sm: 340, md: 460, lg: 500 },
              objectFit: "cover",
              display: "block",
              filter: isDark
                ? "drop-shadow(0 16px 32px rgba(0,0,0,0.45))"
                : "drop-shadow(0 16px 32px rgba(0,0,0,0.12))",
              borderRadius: "16px",
            }}
          />
        </Box>

        {/* Text Content Container */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, width: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.2rem" },
              color: "text.primary",
              mb: 1.5,
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            {service.title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: 300,
              lineHeight: 1.6,
              color: "text.secondary",
              mb: 3,
              maxWidth: 520,
              mx: { xs: "auto", md: 0 },
            }}
          >
            {service.body}
          </Typography>

          <Stack
            spacing={1.5}
            alignItems={{ xs: "center", md: "flex-start" }}
            sx={{ width: "100%" }}
          >
            {service.points.map((p) => (
              <Stack
                key={p}
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 360, md: "none" },
                  textAlign: "left",
                }}
              >
                <Box
                  sx={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: 0.2,
                    bgcolor: "rgba(122, 90, 248, 0.15)",
                    border: "1px solid rgba(122, 90, 248, 0.3)",
                  }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 14, color: "#7A5AF8" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    color: "text.secondary",
                    lineHeight: 1.5,
                  }}
                >
                  {p}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default function Services() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        px: { xs: 2, sm: 3 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <SectionEyebrow label="What we do" center />

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.5rem" },
              mb: 2,
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            Services that{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              move you forward
            </Box>
          </Typography>

          <Typography
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              maxWidth: 580,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
            }}
          >
            From the first sketch to the final deploy, we cover every layer of your digital presence — design, development, branding, and AI.
          </Typography>
        </Box>

        {/* Sticky Services Cards Stack */}
        <Box sx={{ position: "relative" }}>
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              flip={i % 2 === 1}
              index={i}
              isDark={isDark}
            />
          ))}
        </Box>

        {/* See All Services CTA Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 6, md: 8 },
            position: "relative",
            zIndex: 10,
          }}
        >
          <Button
            component={RouterLink}
            to="/services"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              py: { xs: 1.4, sm: 1.6 },
              px: 4,
              fontSize: { xs: 14, sm: 15 },
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
              boxShadow: "0px 6px 22px rgba(122, 90, 248, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #6842F5 0%, #4F22F5 100%)",
              },
            }}
          >
            See all services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}