/** @type {import('next').NextConfig} */


const nextConfig = {
  distDir: "build",
  nftTracing: true ,
  output: 'standalone',
    experimental: {
      serverComponentsExternalPackages: ['@react-pdf/renderer'],
    },
    
  };



export default nextConfig;
