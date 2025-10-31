// app/metadata.js
// این فایل رو در کنار layout.js بساز

export const metadata = {
  title: 'سیمرغ | طراحی سایت و دکوراسیون',
  description: 'مجموعه سیمرغ: تلفیق طراحی مدرن با اصالت ایرانی در سایت و دکوراسیون داخلی.',
  keywords: ['طراحی سایت', 'دکوراسیون داخلی', 'طراحی وب', 'نمونه کار', 'سیمرغ دیزاین', 'استارتاپ'],
  authors: [{ name: 'احمدرضا رضائی' }],
  creator: 'سیمرغ دیزاین',
  publisher: 'سیمرغ دیزاین',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://simorghdesign.ir',
    siteName: 'سیمرغ دیزاین',
    title: 'سیمرغ | طراحی سایت و دکوراسیون',
    description: 'طراحی سایت‌های مدرن، سریع و کاربرپسند با استفاده از جدیدترین تکنولوژی‌های روز دنیا',
    images: [
      {
        url: 'https://simorghdesign.ir/images/Logo.jpg',
        width: 1200,
        height: 630,
        alt: 'سیمرغ دیزاین - طراحی سایت و دکوراسیون',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سیمرغ | طراحی سایت و دکوراسیون',
    description: 'طراحی سایت‌های مدرن، سریع و کاربرپسند با استفاده از جدیدترین تکنولوژی‌های روز دنیا',
    images: ['https://simorghdesign.ir/images/Logo.jpg'],
  },
  alternates: {
    canonical: 'https://simorghdesign.ir',
  },
  verification: {
    google: '5U1W7lbKuQF6uA5q45pBvc1yK3EptfE97vLATDkiipE',
  },
};