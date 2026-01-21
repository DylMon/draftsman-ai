import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/draftsman-ai/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
