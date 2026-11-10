import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function siteBase() {
  const raw = process.env.VITE_BASE || "/";
  if (raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

export default defineConfig({
  base: siteBase(),
  plugins: [react()],
  server: { host: "127.0.0.1", port: 5178, strictPort: true },
  preview: { host: "127.0.0.1", port: 4178 },
});
