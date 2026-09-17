import { Box } from "@mui/material";

export default function GridPattern({ opacity = 1 }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity,
        backgroundImage: (t) => {
          const line = t.palette.mode === "dark" ? "rgba(168,85,247,0.05)" : "rgba(124,58,237,0.06)";
          return `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`;
        },
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at center, black 15%, transparent 68%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 15%, transparent 68%)",
      }}
    />
  );
}
