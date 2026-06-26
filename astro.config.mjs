// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Solo aplicamos el subdirectorio /nasz-slub al COMPILAR para producción.
// En desarrollo (npm run dev) el sitio vive en la raíz "/" para que funcione local.
const isBuild = process.argv.includes("build");

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio (GitHub Pages de tu usuario)
  site: "https://heybaldur.github.io",
  // En producción: /nasz-slub  ·  En local: /
  base: isBuild ? "/nasz-slub" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
