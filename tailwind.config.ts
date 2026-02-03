import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#070B16", 2: "#0B1022" },
        panel: { DEFAULT: "rgba(14, 26, 64, 0.35)" },
        line: "rgba(77, 214, 255, 0.18)",
        electric: { DEFAULT: "#4DD6FF", 2: "#00A3FF" },
        gold: { DEFAULT: "#F7C948", 2: "#FFB703" },
        ink: { DEFAULT: "#EAF2FF", 2: "rgba(234, 242, 255, 0.78)" }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(77,214,255,0.18), 0 0 40px rgba(77,214,255,0.08)",
        gold: "0 0 0 1px rgba(247,201,72,0.20), 0 0 30px rgba(247,201,72,0.10)"
      },
      backgroundImage: {
        "grid-tech":
          "radial-gradient(circle at 1px 1px, rgba(77,214,255,0.12) 1px, transparent 0), linear-gradient(180deg, rgba(77,214,255,0.08), transparent 45%)"
      }
    }
  },
  plugins: []
} satisfies Config;
