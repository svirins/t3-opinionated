// Importing env files here to validate on build
import "./src/env.js";

// import { withAxiom } from "next-axiom";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["images.clerk.dev"],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@acme/api",
    "@acme/db",
    "@acme/ui",
    "@acme/validators",
    "@acme/utils",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

// export default withAxiom(config);
export default config;
