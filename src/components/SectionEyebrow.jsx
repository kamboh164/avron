import { Stack, Box, Typography } from "@mui/material";

export default function SectionEyebrow({ label, center = false, light = false }) {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      spacing={1.5} 
      justifyContent={center ? "center" : "flex-start"} 
      sx={{ 
        mb: 2,
        // --- FIX: Explicitly reset MUI Stack spacing margin-left injection on children ---
        "& > :not(style) ~ :not(style)": {
          ml: 0,
        },
      }}
    >
      <Typography sx={{ fontSize: 14, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, color: light ? "primary.light" : "primary.main" }}>
        {label}
      </Typography>
    </Stack>
  );
}