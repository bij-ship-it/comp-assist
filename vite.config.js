import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        "earning-capacity": resolve(__dirname, "earning-capacity.html"),
        "functional-assessments": resolve(
          __dirname,
          "functional-assessments.html"
        ),
        "workplace-assessments": resolve(
          __dirname,
          "workplace-assessments.html"
        ),
        "employability-assessments": resolve(
          __dirname,
          "employability-assessments.html"
        ),
        "vocational-assessments": resolve(
          __dirname,
          "vocational-assessments.html"
        ),
        "labour-market-research": resolve(
          __dirname,
          "labour-market-research.html"
        ),
        "pre-employment-medicals": resolve(
          __dirname,
          "pre-employment-medicals.html"
        ),
        team: resolve(__dirname, "team.html"),
        coverage: resolve(__dirname, "coverage.html"),
        refer: resolve(__dirname, "refer.html"),
        contact: resolve(__dirname, "contact.html"),
        privacy: resolve(__dirname, "privacy.html"),
      },
    },
  },
});
