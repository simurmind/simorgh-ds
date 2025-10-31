
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // بهینه‌سازی با SWC
  swcMinify: true,
  
  // تنظیمات زبان فارسی
  i18n: {
    locales: ['fa'],
    defaultLocale: 'fa',
  },
  
  // بهینه‌سازی تصاویر
  images: {
    domains: ['simorghdesign.ir', 'simorghdesign.ir'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // فشرده‌سازی بهتر
  compress: true,
  
  // بهینه‌سازی فونت‌ها
  optimizeFonts: true,
  
  // Headers برای SEO و امنیت
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
  
  // Redirects برای نسخه بدون www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'simorghdesign.ir',
          },
        ],
        destination: 'https://simorghdesign.ir/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
