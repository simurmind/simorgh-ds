// schemaorg.js
// Schema Markup کامل برای SEO پیشرفته سایت سیمرغ دیزاین

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://simorghdesign.ir/#organization',
  name: 'سیمرغ دیزاین',
  alternateName: 'Simorgh Design',
  description: 'ارائه‌دهنده خدمات طراحی سایت حرفه‌ای، طراحی اپلیکیشن، فروشگاه اینترنتی و دکوراسیون داخلی مدرن',
  url: 'https://simorghdesign.ir',
  logo: {
    '@type': 'ImageObject',
    url: 'https://simorghdesign.ir/images/Logo.jpg',
    width: 600,
    height: 600,
  },
  image: 'https://simorghdesign.ir/images/og-image.jpg',
  telephone: '+989187634731',
  email: 'ahmadreza.rezaee65@gmail.com',
  foundingDate: '2020',
  priceRange: '$$',
  
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IR',
    addressRegion: 'کردستان',
    addressLocality: 'سنندج',
  },
  
  areaServed: {
    '@type': 'Country',
    name: 'ایران',
    sameAs: 'https://en.wikipedia.org/wiki/Iran',
  },
  
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+989187634731',
      contactType: 'مشاوره و فروش',
      email: 'ahmadreza.rezaee65@gmail.com',
      availableLanguage: ['fa', 'ku'],
      areaServed: 'IR',
      contactOption: 'TollFree',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'پشتیبانی فنی',
      email: 'ahmadreza.rezaee65@gmail.com',
      availableLanguage: ['fa', 'ku'],
      areaServed: 'IR',
    },
  ],
  
  founder: {
    '@type': 'Person',
    name: 'احمدرضا رضائی',
    jobTitle: 'مدیرعامل و طراح ارشد',
    email: 'ahmadreza.rezaee65@gmail.com',
  },
  
  sameAs: [
    'https://t.me/simorghdesign',
  ],
  
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://simorghdesign.ir/#website',
  url: 'https://simorghdesign.ir',
  name: 'سیمرغ دیزاین',
  description: 'طراحی سایت حرفه‌ای، اپلیکیشن موبایل و دکوراسیون داخلی مدرن',
  publisher: {
    '@id': 'https://simorghdesign.ir/#organization',
  },
  inLanguage: 'fa-IR',
  
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://simorghdesign.ir/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://simorghdesign.ir/#localbusiness',
  name: 'سیمرغ دیزاین',
  image: 'https://simorghdesign.ir/images/og-image.jpg',
  
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IR',
    addressRegion: 'کردستان',
    addressLocality: 'سنندج',
  },
  
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.3145,
    longitude: 47.0055,
  },
  
  url: 'https://simorghdesign.ir',
  telephone: '+989187634731',
  email: 'ahmadreza.rezaee65@gmail.com',
  priceRange: '$$',
  
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '23:59',
    },
  ],
  
  areaServed: {
    '@type': 'Country',
    name: 'ایران',
  },
};

export const webDesignServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://simorghdesign.ir/#webdesign-service',
  serviceType: 'طراحی سایت و توسعه وب',
  name: 'خدمات طراحی سایت حرفه‌ای',
  description: 'طراحی و توسعه انواع وب‌سایت شامل سایت شرکتی، فروشگاه اینترنتی، اپلیکیشن وب و موبایل',
  
  provider: {
    '@id': 'https://simorghdesign.ir/#organization',
  },
  
  areaServed: {
    '@type': 'Country',
    name: 'ایران',
  },
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات طراحی سایت',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'طراحی سایت شرکتی',
          description: 'طراحی و ساخت سایت حرفه‌ای برای شرکت‌ها و کسب‌وکارها با رابط کاربری مدرن',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'طراحی فروشگاه اینترنتی',
          description: 'ساخت فروشگاه آنلاین با امکانات کامل شامل درگاه پرداخت، مدیریت محصولات و سیستم سفارش‌گیری',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'طراحی اپلیکیشن موبایل',
          description: 'طراحی و توسعه اپلیکیشن Android و iOS با تکنولوژی‌های روز دنیا',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'طراحی رابط کاربری UI/UX',
          description: 'طراحی تجربه کاربری و رابط کاربری حرفه‌ای برای وب‌سایت و اپلیکیشن',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'سئو و بهینه‌سازی سایت',
          description: 'بهینه‌سازی سایت برای موتورهای جستجو و افزایش رتبه در گوگل',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
    ],
  },
  
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'IRR',
    lowPrice: '5000000',
    highPrice: '50000000',
    offerCount: '5',
  },
};

export const interiorDesignServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://simorghdesign.ir/#interior-service',
  serviceType: 'دکوراسیون داخلی',
  name: 'خدمات دکوراسیون داخلی مدرن',
  description: 'طراحی و اجرای دکوراسیون داخلی منزل، محل کار، رستوران و کافی‌شاپ با سبک‌های مدرن و کلاسیک',
  
  provider: {
    '@id': 'https://simorghdesign.ir/#organization',
  },
  
  areaServed: {
    '@type': 'Country',
    name: 'ایران',
  },
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات دکوراسیون داخلی',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'طراحی کابینت آشپزخانه',
          description: 'طراحی و ساخت کابینت مدرن و اختصاصی با بهترین متریال',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'دکوراسیون اتاق خواب',
          description: 'طراحی داخلی اتاق خواب با سبک مدرن، کلاسیک و مینیمال',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'دکوراسیون پذیرایی',
          description: 'طراحی فضای پذیرایی لوکس و شیک با امکانات کامل',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'کمد دیواری و میز تلویزیون',
          description: 'طراحی و ساخت کمد دیواری و میز تلویزیون مدرن',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'دکوراسیون اداری و تجاری',
          description: 'طراحی داخلی فضاهای اداری، مغازه، رستوران و کافی‌شاپ',
          provider: { '@id': 'https://simorghdesign.ir/#organization' },
        },
      },
    ],
  },
  
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'IRR',
    lowPrice: '10000000',
    highPrice: '100000000',
    offerCount: '5',
  },
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'خانه',
      item: 'https://simorghdesign.ir',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'خدمات',
      item: 'https://simorghdesign.ir/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'نمونه کارها',
      item: 'https://simorghdesign.ir/portfolio',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'تماس با ما',
      item: 'https://simorghdesign.ir/contact',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'هزینه طراحی سایت چقدر است؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هزینه طراحی سایت بستگی به نوع سایت، امکانات مورد نیاز و پیچیدگی پروژه دارد. قیمت طراحی سایت از 5 میلیون تومان شروع می‌شود. برای دریافت قیمت دقیق با ما تماس بگیرید.',
      },
    },
    {
      '@type': 'Question',
      name: 'مدت زمان طراحی سایت چقدر است؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'مدت زمان طراحی سایت معمولاً بین 2 تا 6 هفته است که به پیچیدگی پروژه، تعداد صفحات و امکانات درخواستی بستگی دارد.',
      },
    },
    {
      '@type': 'Question',
      name: 'آیا سایت شما SEO دارد؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'بله، تمامی سایت‌های طراحی شده توسط سیمرغ دیزاین کاملاً SEO شده هستند و بر اساس استانداردهای گوگل بهینه‌سازی می‌شوند.',
      },
    },
    {
      '@type': 'Question',
      name: 'آیا پشتیبانی فنی ارائه می‌دهید؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'بله، ما پشتیبانی فنی کامل و رایگان به مدت 6 ماه پس از تحویل سایت ارائه می‌دهیم. پس از این مدت می‌توانید قرارداد پشتیبانی سالانه داشته باشید.',
      },
    },
    {
      '@type': 'Question',
      name: 'هزینه دکوراسیون داخلی چقدر است؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'هزینه دکوراسیون داخلی به متراژ فضا، نوع مصالح مورد استفاده و پیچیدگی طراحی بستگی دارد. برای دریافت مشاوره رایگان و برآورد هزینه با ما تماس بگیرید.',
      },
    },
  ],
};

// Schema کامل برای صفحه اصلی
export const mainPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    webDesignServiceSchema,
    interiorDesignServiceSchema,
    breadcrumbSchema,
    faqSchema,
  ],
};

// تابع برای اضافه کردن Schema به صفحه
export function getSchemaScript(schemaData = mainPageSchema) {
  return {
    __html: JSON.stringify(schemaData),
  };
}

// Export همه Schema ها
export default {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  webDesignServiceSchema,
  interiorDesignServiceSchema,
  breadcrumbSchema,
  faqSchema,
  mainPageSchema,
  getSchemaScript,
};
