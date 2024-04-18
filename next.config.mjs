/** @type {import('next').NextConfig} */


const nextConfig = {
  distDir: "build",
  nftTracing: true ,
    experimental: {
      serverComponentsExternalPackages: ['@react-pdf/renderer'],
    },
    
  };



export default nextConfig;
