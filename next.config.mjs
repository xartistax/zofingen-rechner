/** @type {import('next').NextConfig} */


const nextConfig = {
  swcMinify: false,
  nftTracing: true ,
  output: 'standalone', 
    experimental: {
      serverComponentsExternalPackages: ['@react-pdf/renderer'],
    },
    
  };



export default nextConfig;
