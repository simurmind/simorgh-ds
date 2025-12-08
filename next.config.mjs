/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ❌ حذف شد - در Next.js 15 به صورت پیش‌فرض فعال است
  // swcMinify: true,
  
  // ❌ حذف شد - i18n در App Router پشتیبانی نمیشه، باید با middleware پیاده کنی
  // برای فارسی کافیه در layout.js زبان رو تنظیم کنی: <html lang="fa" dir="rtl">
  
  // ❌ حذف شد - در Next.js 15 به صورت پیش‌فرض فعال است
  // optimizeFonts: true,
  
  // غیرفعال کردن ESLint در build (اختیاری)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // بهینه‌سازی تصاویر
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simorghdesign.ir',
      },
      {
        protocol: 'https',
        hostname: 'www.simorghdesign.ir',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 سال
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // فشرده‌سازی
  compress: true,
  
  // Poweredby header رو حذف کن (امنیتی)
  poweredByHeader: false,
  
  // Headers برای SEO، امنیت و سرعت
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // DNS Prefetch برای سرعت بیشتر
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // امنیت - جلوگیری از iframe شدن
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // امنیت - جلوگیری از MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // امنیت - Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // امنیت - XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // امنیت - Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com;"
          },
          // امنیت - Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      // Cache استاتیک فایل‌ها (1 سال)
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache فایل‌های JS و CSS (1 سال)
      {
        source: '/(.*).(js|css|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Redirect از www به non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.simorghdesign.ir',
          },
        ],
        destination: 'https://simorghdesign.ir/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
