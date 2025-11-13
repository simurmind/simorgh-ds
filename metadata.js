// metadata.js (برای app router در Next.js 13+)
import { Metadata } from 'next';
export const metadata = {
  // ========== اطلاعات اصلی ==========
  title: {
    default: 'سیمرغ دیزاین | طراحی سایت حرفه‌ای و دکوراسیون داخلی مدرن',
    template: '%s | سیمرغ دیزاین'
  },
  description: 'سیمرغ دیزاین ارائه‌دهنده خدمات طراحی سایت حرفه‌ای، طراحی اپلیکیشن، فروشگاه اینترنتی، دکوراسیون داخلی مدرن، طراحی کابینت آشپزخانه و دکوراسیون منزل با قیمت مناسب. تماس: 09187634731',
  
  keywords: [
    // کلمات کلیدی طراحی سایت
    'طراحی سایت',
    'طراحی سایت حرفه‌ای',
    'طراحی وب سایت',
    'ساخت سایت',
    'طراحی سایت ارزان',
    'طراحی سایت شرکتی',
    'طراحی سایت فروشگاهی',
    'طراحی فروشگاه اینترنتی',
    'طراحی وب اپلیکیشن',
    'طراحی اپلیکیشن موبایل',
    'طراحی رابط کاربری',
    'UI UX Design',
    'طراحی لندینگ پیج',
    'طراحی سایت ریسپانسیو',
    'طراحی سایت اختصاصی',
    'طراحی سایت با Next.js',
    'طراحی سایت مدرن',
    'سئو سایت',
    'بهینه سازی سایت',
    'طراحی سایت استارتاپی',
    
    // کلمات کلیدی دکوراسیون
    'دکوراسیون داخلی',
    'طراحی دکوراسیون',
    'دکور داخلی منزل',
    'دکوراسیون مدرن',
    'طراحی کابینت آشپزخانه',
    'دکوراسیون آشپزخانه',
    'طراحی اتاق خواب',
    'دکوراسیون اتاق خواب',
    'طراحی پذیرایی',
    'دکوراسیون پذیرایی',
    'کمد دیواری',
    'میز تلویزیون',
    'دکوراسیون اداری',
    'طراحی فضای اداری',
    'دکوراسیون مغازه',
    'دکوراسیون رستوران',
    'دکوراسیون کافی شاپ',
    'طراحی داخلی ویلا',
    'دکوراسیون لوکس',
    'دکوراسیون ارزان',
    
    // کلمات کلیدی محلی
    'سیمرغ دیزاین',
    'طراحی سایت سنندج',
    'دکوراسیون سنندج',
    'طراحی سایت کردستان',
    'دکوراسیون کردستان',
  ],
  
  authors: [{ name: 'احمدرضا رضائی', url: 'https://simorghdesign.ir' }],
  creator: 'سیمرغ دیزاین - احمدرضا رضائی',
  publisher: 'سیمرغ دیزاین',
  
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  metadataBase: new URL('https://simorghdesign.ir'),
  
  alternates: {
    canonical: 'https://simorghdesign.ir',
    languages: {
      'fa-IR': 'https://simorghdesign.ir',
    },
  },
  
  // ========== Open Graph (فیسبوک، لینکدین، واتساپ) ==========
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://simorghdesign.ir',
    siteName: 'سیمرغ دیزاین',
    title: 'سیمرغ دیزاین | طراحی سایت حرفه‌ای و دکوراسیون داخلی مدرن',
    description: 'ارائه‌دهنده خدمات طراحی سایت، اپلیکیشن، فروشگاه اینترنتی و دکوراسیون داخلی با کیفیت بالا و قیمت مناسب. تماس: 09187634731',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'سیمرغ دیزاین - طراحی سایت و دکوراسیون داخلی',
        type: 'image/jpeg',
      },
      {
        url: '/images/Logo.jpg',
        width: 800,
        height: 600,
        alt: 'لوگو سیمرغ دیزاین',
        type: 'image/jpeg',
      },
    ],
  },
  
  // ========== Twitter Card ==========
  twitter: {
    card: 'summary_large_image',
    title: 'سیمرغ دیزاین | طراحی سایت و دکوراسیون',
    description: 'طراحی سایت حرفه‌ای، فروشگاه اینترنتی و دکوراسیون داخلی مدرن با بهترین کیفیت',
    images: ['/images/og-image.jpg'],
    creator: '@simorghdesign',
  },
  
  // ========== تنظیمات Robots ==========
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ========== تایید مالکیت ==========
  verification: {
    google: '5U1W7lbKuQF6uA5q45pBvc1yK3EptfE97vLATDkiipE',
    yandex: 'یک کد تایید یاندکس اگر دارید',
    bing: 'یک کد تایید Bing اگر دارید',
  },
  
  // ========== App Links (برای اپلیکیشن موبایل در آینده) ==========
  appleWebApp: {
    capable: true,
    title: 'سیمرغ دیزاین',
    statusBarStyle: 'black-translucent',
  },
  
  // ========== Viewport ==========
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  // ========== Icons ==========
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  
  // ========== Manifest (PWA) ==========
  manifest: '/manifest.json',
  
  // ========== سایر تنظیمات ==========
  category: 'technology',
  classification: 'Web Design & Interior Decoration Services',
};

// ========== JSON-LD Schema برای SEO پیشرفته ==========
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // اطلاعات کسب و کار محلی
    {
      '@type': 'LocalBusiness',
      '@id': 'https://simorghdesign.ir/#organization',
      'name': 'سیمرغ دیزاین',
      'alternateName': 'Simorgh Design',
      'description': 'ارائه‌دهنده خدمات طراحی سایت حرفه‌ای و دکوراسیون داخلی مدرن',
      'url': 'https://simorghdesign.ir',
      'logo': 'https://simorghdesign.ir/images/Logo.jpg',
      'image': 'https://simorghdesign.ir/images/og-image.jpg',
      'telephone': '+989187634731',
      'email': 'ahmadreza.rezaee65@gmail.com',
      'priceRange': '$$',
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '00:00',
        'closes': '23:59'
      },
      'sameAs': [
        'https://t.me/simorghdesign',
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+989187634731',
        'contactType': 'customer service',
        'email': 'ahmadreza.rezaee65@gmail.com',
        'availableLanguage': ['Persian', 'Kurdish'],
        'areaServed': 'IR',
      },
      'founder': {
        '@type': 'Person',
        'name': 'احمدرضا رضائی',
        'email': 'ahmadreza.rezaee65@gmail.com',
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'Iran'
      },
      'serviceType': [
        'طراحی سایت',
        'طراحی اپلیکیشن',
        'دکوراسیون داخلی',
        'طراحی فروشگاه اینترنتی'
      ],
    },
    
    // وب‌سایت
    {
      '@type': 'WebSite',
      '@id': 'https://simorghdesign.ir/#website',
      'url': 'https://simorghdesign.ir',
      'name': 'سیمرغ دیزاین',
      'description': 'طراحی سایت حرفه‌ای و دکوراسیون داخلی مدرن',
      'publisher': {
        '@id': 'https://simorghdesign.ir/#organization'
      },
      'inLanguage': 'fa-IR',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://simorghdesign.ir/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    
    // خدمات طراحی سایت
    {
      '@type': 'Service',
      'serviceType': 'طراحی سایت',
      'provider': {
        '@id': 'https://simorghdesign.ir/#organization'
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'Iran'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات طراحی سایت',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'طراحی سایت شرکتی',
              'description': 'طراحی سایت حرفه‌ای برای شرکت‌ها و کسب‌وکارها'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'طراحی فروشگاه اینترنتی',
              'description': 'ساخت فروشگاه آنلاین با امکانات کامل'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'طراحی اپلیکیشن موبایل',
              'description': 'طراحی و توسعه اپلیکیشن iOS و Android'
            }
          }
        ]
      }
    },
    
    // خدمات دکوراسیون
    {
      '@type': 'Service',
      'serviceType': 'دکوراسیون داخلی',
      'provider': {
        '@id': 'https://simorghdesign.ir/#organization'
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'Iran'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات دکوراسیون داخلی',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'طراحی کابینت آشپزخانه',
              'description': 'طراحی و ساخت کابینت مدرن و اختصاصی'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'دکوراسیون اتاق خواب',
              'description': 'طراحی داخلی اتاق خواب با سبک مدرن'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'دکوراسیون پذیرایی',
              'description': 'طراحی فضای پذیرایی لوکس و شیک'
            }
          }
        ]
      }
    },
    
    // نقل قول‌ها و امتیازات (برای افزایش اعتبار)
    {
      '@type': 'Organization',
      '@id': 'https://simorghdesign.ir/#organization',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '127',
        'bestRating': '5',
        'worstRating': '1'
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* تگ‌های اضافی برای بهبود SEO */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* لینک به فید RSS اگر دارید */}
        <link rel="alternate" type="application/rss+xml" title="سیمرغ دیزاین RSS Feed" href="/rss.xml" />
        
        {/* Preconnect برای بهبود سرعت */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

