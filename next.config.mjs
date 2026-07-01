/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables strict mode to catch potential issues
    images: {
      // Allow external images or images from specific domains (optional)
      domains: ['http://localhost:3000'], // Replace with actual domains if needed
    },
    experimental: {
      appDir: true, // Ensures you're using the App Router in Next.js 14
    },

   
    // Other configurations can go here
  };
  
  export default nextConfig;
  

  