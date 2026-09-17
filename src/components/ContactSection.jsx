import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Stack,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  useTheme,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SectionEyebrow from "./SectionEyebrow";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const SERVICES_OPTIONS = [
  "Web Designing",
  "AI Automation",
  "Web Development",
  "Server Management",
  "Mobile Apps",
  "E-Commerce",
  "Product Consultation",
  "AI Consultation",
];

const BUDGET_OPTIONS = [
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$30,000 - $50,000",
  "More than $50,000",
];

const CONTACT_CARDS = [
  {
    icon: MailOutlineRoundedIcon,
    title: "Email Us",
    body: "For support, feedback, or partnership inquiries.",
    action: "hello@intellectarc.com",
    href: "mailto:hello@intellectarc.com",
  },
  {
    icon: PhoneInTalkRoundedIcon,
    title: "Call Us",
    body: "Direct line for urgent consultation or client support.",
    action: "+1 (555) 019-2834",
    href: "tel:+15550192834",
  },
  {
    icon: HelpOutlineRoundedIcon,
    title: "Help Center",
    body: "Browse guides and answers to common questions.",
    action: "Visit Help Center",
    href: null,
  },
  {
    icon: RoomOutlinedIcon,
    title: "Our Studio",
    body: "Come say hello, coffee's always on.",
    action: "San Francisco, CA",
    href: null,
  },
];

export default function ContactSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | submitted | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((errs) => ({ ...errs, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.service) newErrors.service = "Service is required";
    if (!form.budget) newErrors.budget = "Budget is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Contact form isn't configured yet — add VITE_WEB3FORMS_ACCESS_KEY to your .env file."
      );
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
          subject: `New message from ${form.name} — Avron Solutions`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("submitted");
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
      "&:hover fieldset": {
        borderColor: "rgba(122, 90, 248, 0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#7A5AF8",
      },
    },
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        px: { xs: "12px", sm: 3 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <SectionEyebrow label="CONTACT" center />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.1rem", sm: "3rem", md: "3.6rem" },
              fontWeight: 700,
              letterSpacing: "-0.01em",
              mb: 2,
              color: "text.primary",
            }}
          >
            Let's{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              talk
            </Box>
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              maxWidth: 580,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: 14, sm: 16 },
            }}
          >
            Questions, feedback, or partnership ideas — our team usually replies within one business day.
          </Typography>
        </Box>

        {/* 2-Column Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {/* Left Side: 4 Contact Info Cards */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2} sx={{ height: "100%", justifyContent: "space-between" }}>
              {CONTACT_CARDS.map((c) => {
                const IconComponent = c.icon;
                const content = (
                  <Card
                    elevation={0}
                    sx={{
                      p: 2.75,
                      borderRadius: "20px",
                      bgcolor: isDark
                        ? "rgba(18, 16, 25, 0.6)"
                        : "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(16px)",
                      border: (t) => `1px solid ${t.palette.divider}`,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      transition: "all 0.3s ease",
                      cursor: c.href ? "pointer" : "default",
                      "&:hover": c.href
                        ? {
                            transform: "translateY(-3px)",
                            borderColor: "rgba(122, 90, 248, 0.4)",
                            boxShadow: "0 12px 28px rgba(122, 90, 248, 0.12)",
                          }
                        : {},
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                        boxShadow: "0px 4px 14px rgba(122, 90, 248, 0.35)",
                      }}
                    >
                      <IconComponent sx={{ color: "#FFFFFF", fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          mb: 0.25,
                          fontSize: 16,
                        }}
                      >
                        {c.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          color: "text.secondary",
                          fontSize: 13.5,
                          mb: 0.75,
                          lineHeight: 1.5,
                        }}
                      >
                        {c.body}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#7A5AF8",
                          fontSize: 13.5,
                        }}
                      >
                        {c.action}
                      </Typography>
                    </Box>
                  </Card>
                );

                return c.href ? (
                  <Box
                    key={c.title}
                    component="a"
                    href={c.href}
                    sx={{ textDecoration: "none", display: "block" }}
                  >
                    {content}
                  </Box>
                ) : (
                  <Box key={c.title}>{content}</Box>
                );
              })}
            </Stack>
          </Grid>

          {/* Right Side: Contact Form */}
          <Grid item xs={12} md={7}>
            <Card
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3.5, sm: 4.5 },
                borderRadius: "24px",
                bgcolor: isDark
                  ? "rgba(18, 16, 25, 0.6)"
                  : "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(16px)",
                border: (t) => `1px solid ${t.palette.divider}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {status === "submitted" ? (
                <Stack spacing={2} alignItems="center" sx={{ textAlign: "center", py: 6 }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 56, color: "#7A5AF8" }} />
                  <Typography sx={{ fontWeight: 700, fontSize: 22, color: "text.primary" }}>
                    Message Sent!
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      color: "text.secondary",
                      maxWidth: 400,
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    Thanks for reaching out — we've received your inquiry and usually reply within one business day.
                  </Typography>
                  <Button
                    variant="text"
                    onClick={() => {
                      setStatus("idle");
                      setForm({
                        name: "",
                        email: "",
                        service: "",
                        phone: "",
                        message: "",
                        budget: "",
                      });
                    }}
                    sx={{ color: "#7A5AF8", fontWeight: 600 }}
                  >
                    Send another message
                  </Button>
                </Stack>
              ) : (
                <Stack spacing={2}>
                  {/* Name and Email Row */}
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      label="Your name *"
                      placeholder="John Doe"
                      fullWidth
                      value={form.name}
                      onChange={handleChange("name")}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      sx={textFieldSx}
                    />
                    <TextField
                      label="Email address *"
                      placeholder="john@example.com"
                      type="email"
                      fullWidth
                      value={form.email}
                      onChange={handleChange("email")}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      sx={textFieldSx}
                    />
                  </Stack>

                  {/* Services Dropdown */}
                  <FormControl fullWidth error={Boolean(errors.service)} sx={textFieldSx}>
                    <InputLabel id="services-select-label">Services *</InputLabel>
                    <Select
                      labelId="services-select-label"
                      value={form.service}
                      label="Services *"
                      onChange={handleChange("service")}
                    >
                      {SERVICES_OPTIONS.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.service && <FormHelperText>{errors.service}</FormHelperText>}
                  </FormControl>

                  {/* Phone Number Input */}
                  <TextField
                    label="Phone Number"
                    placeholder="+1 (555) 000-0000"
                    fullWidth
                    value={form.phone}
                    onChange={handleChange("phone")}
                    sx={textFieldSx}
                  />

                  {/* Message Input */}
                  <TextField
                    label="Describe Your Project *"
                    placeholder="Tell us about your project requirements..."
                    fullWidth
                    multiline
                    minRows={3}
                    value={form.message}
                    onChange={handleChange("message")}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    sx={textFieldSx}
                  />

                  {/* Budget Dropdown */}
                  <FormControl fullWidth error={Boolean(errors.budget)} sx={textFieldSx}>
                    <InputLabel id="budget-select-label">Budget *</InputLabel>
                    <Select
                      labelId="budget-select-label"
                      value={form.budget}
                      label="Budget *"
                      onChange={handleChange("budget")}
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <MenuItem key={b} value={b}>
                          {b}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.budget && <FormHelperText>{errors.budget}</FormHelperText>}
                  </FormControl>

                  {/* Error Message */}
                  {status === "error" && (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <ErrorOutlineRoundedIcon sx={{ color: "error.main", fontSize: 20 }} />
                      <Typography sx={{ color: "error.main", fontSize: 13.5 }}>
                        {errorMsg}
                      </Typography>
                    </Stack>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={status === "sending"}
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      px: 4,
                      py: 1.4,
                      borderRadius: "10px",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: 15,
                      background: "linear-gradient(135deg, #7A5AF8 0%, #6139F7 100%)",
                      boxShadow: "0px 6px 20px rgba(122, 90, 248, 0.35)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #6842F5 0%, #4F22F5 100%)",
                      },
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Button>
                </Stack>
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}