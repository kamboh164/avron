import { Box } from "@mui/material";

export default function LiquidBlobs({ opacity = 1, variant = "default" }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 480,
          height: 480,
          top: "-8%",
          left: "-6%",
          borderRadius: "50%",
          filter: "blur(90px)",
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.38), rgba(124,58,237,0.14) 45%, transparent 72%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          bottom: "-10%",
          right: "-8%",
          borderRadius: "50%",
          filter: "blur(90px)",
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.32), rgba(124,58,237,0.1) 48%, transparent 72%)",
        }}
      />
      {variant === "default" && (
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            top: "38%",
            left: "38%",
            borderRadius: "50%",
            filter: "blur(90px)",
            mixBlendMode: "screen",
            background: "radial-gradient(circle, rgba(228,195,120,0.16), transparent 68%)",
          }}
        />
      )}
    </Box>
  );
}
