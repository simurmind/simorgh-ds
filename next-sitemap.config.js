
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://simorghdesign.ir',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  
  // صفحات غیرضروری را حذف می‌کنیم
  exclude: [
    '/api/*',
    '/admin/*',
    '/server-sitemap.xml',
    '/_next/*',
    '/404',
    '/500',
  ],
  
  // تنظیمات robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
  },
  
  // تنظیم اولویت و changefreq برای صفحات مختلف
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    // صفحه اصلی - بالاترین اولویت
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // صفحات اصلی سایت
    else if (['/portfolio', '/decoration', '/web-design'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // صفحات نمونه کارها
    else if (path.startsWith('/portfolio/') || path.startsWith('/decoration/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // صفحات samples
    else if (path === '/samples' || path.startsWith('/samples/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // صفحات ثابت (تماس، درباره ما)
    else if (['/contact', '/about'].includes(path)) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    // سایر صفحات
    else {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://simorghdesign.ir${path}`,
          hreflang: 'fa-IR',
        },
      ],
    };
  },
  
  // اضافه کردن سایت‌مپ‌های اضافی (در صورت نیاز)
  additionalPaths: async (config) => {
    const result = [];
    
    // در صورتی که صفحات dynamic دارید که next-sitemap خودکار تشخیص نمیدهد
    // می‌توانید اینجا اضافه کنید
    
    return result;
  },
};
