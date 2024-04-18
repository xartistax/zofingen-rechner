/** @type {import('next').NextConfig} */


const nextConfig = {
  distDir: "build",
    experimental: {
      serverComponentsExternalPackages: ['@react-pdf/renderer'],
    }
  };



export default nextConfig;
