"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function WebDesignPage() {
  const services = [
    {
      id: 1,
      icon: "🚀",
      title: "طراحی سایت سئو شده",
      description: "طراحی سایت‌هایی که از ابتدا با رعایت اصول سئو ساخته می‌شوند تا در موتورهای جستجو رتبه بالاتری داشته باشند. این سایت‌ها شامل ساختار مناسب URL‌ها، متا تگ‌ها، بهینه‌سازی تصاویر و محتوا هستند.",
      duration: "۷ تا ۱۵ روز",
      color: "#f5c518",
    },
    {
      id: 2,
      icon: "🛒",
      title: "طراحی سایت فروشگاهی",
      description: "طراحی سایت‌های فروشگاهی با سیستم‌های پرداخت آنلاین، سبد خرید، مدیریت محصولات و موجودی به شما کمک می‌کند که به راحتی محصولات خود را بفروشید. این سایت‌ها باید به گونه‌ای طراحی شوند که تجربه خرید مشتریان را بهبود دهند و امنیت آن‌ها تضمین شود.",
      duration: "۷ تا ۱۲ روز",
      color: "#4CAF50",
    },
    {
      id: 3,
      icon: "🏢",
      title: "طراحی سایت شرکتی",
      description: "طراحی سایت‌های شرکتی برای کسب‌وکارهایی است که می‌خواهند خدمات خود را به بهترین نحو معرفی کنند. این سایت‌ها معمولاً ساده و کاربرپسند هستند، اما می‌توانند ویژگی‌های خاصی مانند فرم‌های ارتباطی، گالری‌ها و بخش‌های اختصاصی داشته باشند.",
      duration: "۳ تا ۷ روز",
      color: "#2196F3",
    },
    {
      id: 4,
      icon: "📰",
      title: "طراحی سایت خبری و رسانه‌ای",
      description: "طراحی سایت‌های خبری برای رسانه‌ها و سازمان‌هایی است که نیاز به انتشار روزانه اخبار و مطالب دارند. این سایت‌ها به سیستم مدیریت محتوا (CMS) پیشرفته نیاز دارند و باید به راحتی قابلیت به‌روزرسانی و انتشار اخبار را داشته باشند.",
      duration: "۷ تا ۱۵ روز",
      color: "#FF5722",
    },
    {
      id: 5,
      icon: "✍️",
      title: "طراحی سایت شخصی یا بلاگ",
      description: "این نوع سایت‌ها برای افرادی طراحی می‌شوند که می‌خواهند محتوای شخصی خود را به اشتراک بگذارند. طراحی این سایت‌ها ساده و سریع است و معمولاً به‌طور خاص برای نویسندگان و بلاگرها ساخته می‌شوند تا مقالات و تجربیات خود را به راحتی منتشر کنند.",
      duration: "۲ تا ۳ روز",
      color: "#9C27B0",
    },
  ];

  return (
    <>
      <Head>
        <title>طراحی سایت حرفه‌ای | مجموعه سیمرغ</title>
        <meta
          name="description"
          content="طراحی انواع سایت: سئو شده، فروشگاهی، شرکتی، خبری و شخصی با بهترین کیفیت و قیمت"
        />
        <meta name="keywords" content="طراحی سایت، سئو، فروشگاهی، شرکتی، خبری، بلاگ" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="web-design-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">خدمات طراحی سایت حرفه‌ای</h1>
          <p className="hero-subtitle">
            از سایت‌های ساده تا پیچیده، با بهترین کیفیت و سریع‌ترین زمان
          </p>
        </section>

        {/* Services Grid */}
        <section className="services-section">
          <h2 className="section-title">انواع خدمات طراحی سایت</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-footer">
                  <span className="service-duration">⏱️ {service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Discount Section */}
        <section className="discount-section">
          <div className="discount-badge">🎓</div>
          <h2 className="discount-title">تخفیف ویژه دانشجویی</h2>
          <p className="discount-text">
            برای تمامی دانشجویان و دانش‌آموزان تخفیف ویژه‌ای در نظر گرفته‌ایم. 
            کافی است هنگام ثبت سفارش، مدارک تحصیلی خود را ارسال کنید و از 
            <strong> ۱۰٪ تخفیف </strong> بهره‌مند شوید.
          </p>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">خوشحال می‌شویم با شما همکاری کنیم</h2>
          <p className="cta-text">
            مجموعه سیمرغ با سال‌ها تجربه در طراحی سایت آماده همکاری با شما است. 
            ما به شما کمک می‌کنیم تا سایت خود را به بهترین نحو طراحی و پیاده‌سازی کنید.
          </p>
          <button className="cta-button">
            <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
              همین حالا شروع کنید 🚀
            </a>
          </button>
        </section>
      </div>

      <style jsx>{`
        /* ============== CONTAINER ============== */
        .web-design-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem;
        }

        /* ============== HERO SECTION ============== */
        .hero-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(245, 197, 24, 0.3);
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(245, 197, 24, 0.1) 0%, transparent 70%);
          animation: rotate 15s linear infinite;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #f5c518, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          color: #e0e0e0;
          position: relative;
          z-index: 1;
        }

        /* ============== SERVICES SECTION ============== */
        .services-section {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          padding-bottom: 1rem;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #f5c518, #ffd700);
          border-radius: 10px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(245, 197, 24, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: #f5c518;
          box-shadow: 0 12px 40px rgba(245, 197, 24, 0.3);
        }

        .service-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: bounce 2s infinite;
          display: inline-block;
        }

        .service-title {
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
        }

        .service-description {
          color: #e0e0e0;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .service-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(245, 197, 24, 0.2);
        }

        .service-duration {
          color: #ffd700;
          font-weight: 600;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
        }

        /* ============== DISCOUNT SECTION ============== */
        .discount-section {
          background: linear-gradient(135deg, rgba(245, 197, 24, 0.15) 0%, rgba(255, 215, 0, 0.1) 100%);
          backdrop-filter: blur(20px);
          padding: 3rem 2rem;
          margin-bottom: 3rem;
          border-radius: 20px;
          border: 2px solid rgba(245, 197, 24, 0.3);
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1s ease-out;
        }

        .discount-badge {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }

        .discount-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
        }

        .discount-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        .discount-text strong {
          color: #f5c518;
          font-size: 1.2em;
        }

        /* ============== CTA SECTION ============== */
        .cta-section {
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(26, 26, 26, 0.95) 100%);
          backdrop-filter: blur(20px);
          padding: 4rem 2rem;
          margin-bottom: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          text-align: center;
          animation: fadeInUp 1.2s ease-out;
        }

        .cta-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
        }

        .cta-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto 2.5rem;
        }

        .cta-button {
          background: linear-gradient(135deg, #f5c518 0%, #ffd700 100%);
          color: #000;
          font-size: clamp(1.1rem, 3vw, 1.3rem);
          font-weight: 700;
          padding: 1.2rem 3rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(245, 197, 24, 0.4);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 35px rgba(245, 197, 24, 0.6);
        }

        /* ============== ANIMATIONS ============== */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* ============== RESPONSIVE - MOBILE SMALL ============== */
        @media screen and (max-width: 480px) {
          .web-design-container {
            padding: 0.75rem;
          }

          .hero-section {
            padding: 2.5rem 1.5rem;
            margin-bottom: 2rem;
            border-radius: 16px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 2rem 1.5rem;
          }

          .service-icon {
            font-size: 3rem;
          }

          .discount-section,
          .cta-section {
            padding: 2rem 1.5rem;
            border-radius: 16px;
          }

          .discount-badge {
            font-size: 3rem;
          }

          .cta-button {
            padding: 1rem 2rem;
            width: 100%;
          }
        }

        /* ============== RESPONSIVE - MOBILE MEDIUM ============== */
        @media screen and (min-width: 481px) and (max-width: 767px) {
          .web-design-container {
            padding: 1rem;
          }

          .hero-section {
            padding: 3rem 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }

          .cta-button {
            width: auto;
            min-width: 250px;
          }
        }

        /* ============== RESPONSIVE - TABLET ============== */
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          .web-design-container {
            padding: 1.5rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        /* ============== RESPONSIVE - DESKTOP ============== */
        @media screen and (min-width: 1025px) {
          .web-design-container {
            padding: 2rem;
          }

          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2.5rem;
          }
        }

        /* ============== LANDSCAPE MODE ============== */
        @media screen and (max-height: 600px) and (orientation: landscape) {
          .hero-section {
            padding: 2rem 1.5rem;
          }

          .service-card {
            padding: 1.5rem 1.25rem;
          }

          .service-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .discount-badge {
            font-size: 2.5rem;
          }

          .cta-section {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
    </>
  );
}
