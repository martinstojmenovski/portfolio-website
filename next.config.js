/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export", // needed for static export
  basePath: isProd ? "/portfolio-website" : "",
  assetPrefix: isProd ? "/portfolio-website/" : "",
}

module.exports = nextConfig;