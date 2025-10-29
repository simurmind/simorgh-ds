"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function DecorationPage() {
  const features = [
    {
      id: 1,
      icon: "✨",
      title: "طراحی سفارشی",
      description: "طراحی کاملاً متناسب با سلیقه و نیاز شما با توجه به فضای موجود و بودجه. ما هر پروژه را منحصر به فرد می‌سازیم.",
    },
    {
      id: 2,
      icon: "🎨",
      title: "متریال مدرن",
      description: "استفاده از بهترین و با کیفیت‌ترین مواد و متریال‌های روز دنیا که علاوه بر زیبایی، دوام و کیفیت بالایی دارند.",
    },
    {
      id: 3,
      icon: "📐",
      title: "فضاهای کاربردی",
      description: "ایجاد فضاهایی زیبا که علاوه بر جذابیت بصری، کاربردی و بهینه باشند و تجربه‌ای راحت برای شما ایجاد کنند.",
    },
    {
      id: 4,
      icon: "🏆",
      title: "استانداردهای بین‌المللی",
      description: "رعایت کامل استانداردهای جهانی در طراحی و اجرا تا اطمینان حاصل شود که پروژه شما در بالاترین سطح کیفی است.",
    },
  ];

  return (
    <>
      <Head>
        <title>طراحی دکوراسیون داخلی حرفه‌ای | مجموعه سیمرغ</title>
        <meta
          name="description"
          content="طراحی دکوراسیون داخلی و فضاهای مدرن با رعایت استانداردهای جهانی و استفاده از بهترین متریال‌ها"
        />
        <meta name="keywords" content="دکوراسیون، طراحی داخلی، فضاهای مدرن، طراحی سفارشی، دکوراسیون منزل" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="decoration-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">طراحی دکوراسیون داخلی</h1>
          <p className="hero-subtitle">
            تبدیل فضاهای معمولی به محیط‌هایی خاص و منحصر به فرد
          </p>
        </section>

        {/* Main Description */}
        <section className="description-section">
          <h2 className="section-title">درباره خدمات دکوراسیون ما</h2>
          <p className="description-text">
            در مجموعه سیمرغ ما به طراحی فضاهای داخلی و دکوراسیون‌های منحصر به فرد می‌پردازیم. 
            هدف ما تبدیل فضاهای بی‌استفاده به محیط‌هایی جذاب و کاربردی است که نه تنها زیبایی بصری دارند 
            بلکه کارکرد بهینه‌ای نیز برای زندگی روزمره شما فراهم می‌کنند.
          </p>
          <p className="description-text">
            ما در سریع‌ترین زمان ممکن طراحی‌های حرفه‌ای و جذاب به شما تحویل می‌دهیم 
            تا تجربه‌ای منحصر به فرد در فضای شما ایجاد کنیم. تیم متخصص ما با بهره‌گیری از جدیدترین 
            متدهای طراحی و اجرا، فضایی را خلق می‌کند که کاملاً متناسب با شخصیت و نیازهای شماست.
          </p>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <h2 className="section-title">ویژگی‌های طراحی دکوراسیون ما</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">از همکاری با شما خوشحال خواهیم شد</h2>
          <p className="cta-text">
            از همکاری با شما بسیار خوشحال خواهیم شد و به‌طور کامل در کنار شما خواهیم بود 
            تا فضای دلخواه شما را طراحی کنیم. تیم ما متعهد است که با دقت و حساسیت بالا، 
            هر جزئی از پروژه را مدیریت کند.
          </p>
          <p className="cta-text">
            در مجموعه سیمرغ همیشه آماده‌ایم تا در سریع‌ترین زمان ممکن و با بهترین کیفیت 
            پروژه‌ها را انجام دهیم و رضایت کامل شما را جلب کنیم.
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
        .decoration-container {
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

        /* ============== DESCRIPTION SECTION ============== */
        .description-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 3rem 2rem;
          margin-bottom: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          animation: fadeInUp 0.9s ease-out;
        }

        .section-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          text-align: center;
          margin-bottom: 2rem;
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

        .description-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        /* ============== FEATURES SECTION ============== */
        .features-section {
          margin-bottom: 3rem;
          animation: fadeInUp 1s ease-out;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(245, 197, 24, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: #f5c518;
          box-shadow: 0 12px 40px rgba(245, 197, 24, 0.3);
        }

        .feature-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: bounce 2s infinite;
          display: inline-block;
        }

        .feature-title {
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
        }

        .feature-description {
          color: #e0e0e0;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          line-height: 1.8;
          text-align: justify;
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
          margin: 0 auto 1.5rem;
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
          margin-top: 1rem;
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
          .decoration-container {
            padding: 0.75rem;
          }

          .hero-section {
            padding: 2.5rem 1.5rem;
            margin-bottom: 2rem;
            border-radius: 16px;
          }

          .description-section,
          .cta-section {
            padding: 2rem 1.5rem;
            border-radius: 16px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }

          .feature-icon {
            font-size: 3rem;
          }

          .cta-button {
            padding: 1rem 2rem;
            width: 100%;
          }
        }

        /* ============== RESPONSIVE - MOBILE MEDIUM ============== */
        @media screen and (min-width: 481px) and (max-width: 767px) {
          .decoration-container {
            padding: 1rem;
          }

          .hero-section {
            padding: 3rem 2rem;
          }

          .features-grid {
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
          .decoration-container {
            padding: 1.5rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        /* ============== RESPONSIVE - DESKTOP ============== */
        @media screen and (min-width: 1025px) {
          .decoration-container {
            padding: 2rem;
          }

          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2.5rem;
          }
        }

        /* ============== LANDSCAPE MODE ============== */
        @media screen and (max-height: 600px) and (orientation: landscape) {
          .hero-section {
            padding: 2rem 1.5rem;
          }

          .feature-card {
            padding: 1.5rem 1.25rem;
          }

          .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .cta-section {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
    </>
  );
}
