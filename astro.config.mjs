// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Enable compression for better performance
  compressHTML: true,

  // Build options
  build: {
    // Optimize assets during build - use a string path instead of boolean
    assets: "assets",
    // Inline small CSS files to reduce HTTP requests
    inlineStylesheets: "auto",
  },

  // Optimize images
  image: {
    // Enable image optimization
    service: { entrypoint: "astro/assets/services/sharp" },
    // Specify allowed domains for remote images
    domains: [],
  },

  // Optimize output
  vite: {
    // Enable build optimizations
    build: {
      // Minify CSS, JS, and HTML
      minify: "terser",
      // Optimize CSS
      cssMinify: true,
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      // Improve CSS extraction
      cssCodeSplit: true,
      // Optimize dependencies
      optimizeDeps: {
        // Include dependencies that should be optimized
        include: [
          "@fortawesome/fontawesome-svg-core",
          "@fortawesome/free-brands-svg-icons",
          "@fortawesome/free-solid-svg-icons",
        ],
      },
    },
    // Enable CSS optimization
    css: {
      // Optimize CSS
      devSourcemap: false,
    },
    // Enable caching for better performance
    optimizeDeps: {
      // Enable dependency optimization
      enabled: true,
    },
  },
});
