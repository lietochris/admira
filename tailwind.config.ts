import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { container: { center: true, padding: { DEFAULT: "1rem", lg: "2rem" } } },
  },
  plugins: [],
} satisfies Config;
