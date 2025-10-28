
"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../app/globals.css";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#222";
      } else {
        header.style.backgroundColor = "#141414";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>سیمرغ | طراحی سایت و دکوراسیون</title>
        <meta
          name="description"
          content="مجموعه سیمرغ: تلفیق طراحی مدرن با اصالت ایرانی در سایت و دکوراسیون داخلی."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="homepage-container">
        {/* اهداف مجموعه سیمرغ */}
        <section className="goals-section">
          <h2 className="section-title">اهداف مجموعه سیمرغ</h2>
          <p className="section-text">
            مجموعه سیمرغ با هدف تبدیل شدن به یکی از بهترین تیم‌های استارتاپی دنیا، در تلاش است تا با همکاری با دانشجویان ایرانی از تمامی دانشگاه‌ها و رشته‌ها، فضایی نوآورانه و پویا ایجاد کند.
          </p>
          <p className="section-text">
            هدف ما این است که این استعدادهای جوان و مشتاق، به همراه مجموعه سیمرغ، به رشد و پیشرفت متقابل برسند. این همکاری‌ها به گونه‌ای طراحی شده‌اند که ضمن بهره‌مندی از توانمندی‌های فردی، به توسعه هدفمند و تحقق رویاهای بزرگ مشترک کمک کنند.
          </p>
        </section>

        {/* خدمات ما */}
        <section className="services-section">
          <h2 className="section-title">خدمات ما</h2>
          <div className="services-grid">
            {/* طراحی سایت */}
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3 className="service-title">طراحی سایت</h3>
              <p className="service-description">
                طراحی سایت‌های مدرن، سریع و کاربرپسند با استفاده از جدیدترین تکنولوژی‌های روز دنیا.
              </p>
            </div>

            {/* طراحی دکوراسیون */}
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3 className="service-title">طراحی دکوراسیون</h3>
              <p className="service-description">
                طراحی فضاهای داخلی منحصر به فرد و کاربردی که به محیط شما شخصیت می‌دهند و آن را به یک اثر هنری تبدیل می‌کنند.
              </p>
            </div>
          </div>
        </section>

        {/* ارتباط با کارشناسان */}
        <section className="contact-section">
          <h2 className="section-title">ارتباط با کارشناسان</h2>
          <p className="contact-intro">
            برای مشاوره و دریافت اطلاعات بیشتر درباره خدمات طراحی سایت و دکوراسیون، می‌توانید از راه‌های ارتباطی زیر استفاده کنید:
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>شماره تلفن:</strong>
                <a href="tel:09187634731" className="contact-link">۰۹۱۸۷۶۳۴۷۳۱</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✈️</span>
              <div>
                <strong>آیدی تلگرام:</strong>
                <a href="https://t.me/SimorghAdmin" className="contact-link" target="_blank" rel="noopener noreferrer">@SimorghAdmin</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ============== CONTAINER ============== */
        .homepage-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem;
        }

        /* ============== SECTIONS ============== */
        .goals-section,
        .services-section,
        .contact-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 2.5rem 1.5rem;
          margin-bottom: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out;
        }

        .goals-section:hover,
        .services-section:hover,
        .contact-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(245, 197, 24, 0.2);
          border-color: rgba(245, 197, 24, 0.4);
        }

        /* ============== TITLES ============== */
        .section-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #f5c518, #ffd700);
          border-radius: 10px;
        }

        /* ============== TEXT ============== */
        .section-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.8;
          text-align: justify;
          margin-bottom: 1.5rem;
          padding: 0 0.5rem;
        }

        /* ============== SERVICES GRID ============== */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .service-card {
          background: rgba(51, 51, 51, 0.6);
          backdrop-filter: blur(10px);
          padding: 2rem 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(245, 197, 24, 0.15);
          transition: all 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-8px);
          background: rgba(51, 51, 51, 0.8);
          border-color: #f5c518;
          box-shadow: 0 8px 25px rgba(245, 197, 24, 0.3);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }

        .service-title {
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #e0e0e0;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          line-height: 1.7;
        }

        /* ============== CONTACT SECTION ============== */
        .contact-intro {
          background: rgba(245, 197, 24, 0.1);
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.7;
          padding: 1.5rem;
          border-radius: 10px;
          border-right: 4px solid #f5c518;
          margin-bottom: 2rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .contact-item {
          background: rgba(51, 51, 51, 0.4);
          padding: 1.5rem;
          border-radius: 10px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-item:hover {
          transform: translateX(-5px);
          background: rgba(51, 51, 51, 0.6);
          border-color: #f5c518;
          box-shadow: 0 4px 15px rgba(245, 197, 24, 0.2);
        }

        .contact-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .contact-item strong {
          display: block;
          color: #f5c518;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          margin-bottom: 0.5rem;
        }

        .contact-link {
          color: #ffd700;
          text-decoration: none;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          transition: all 0.3s ease;
          display: inline-block;
        }

        .contact-link:hover {
          color: #f5c518;
          transform: translateX(-3px);
        }

        /* ============== ANIMATIONS ============== */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: translateY(-10px);
          }
        }

        /* ============== RESPONSIVE - MOBILE SMALL ============== */
        @media screen and (max-width: 480px) {
          .homepage-container {
            padding: 0.75rem;
          }

          .goals-section,
          .services-section,
          .contact-section {
            padding: 1.5rem 1rem;
            margin-bottom: 1.5rem;
            border-radius: 12px;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
          }

          .section-title::after {
            width: 60px;
            height: 2px;
          }

          .section-text {
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 1rem;
            text-align: justify;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .service-card {
            padding: 1.5rem 1rem;
          }

          .service-icon {
            font-size: 2.5rem;
          }

          .service-title {
            font-size: 1.3rem;
          }

          .service-description {
            font-size: 0.95rem;
          }

          .contact-intro {
            padding: 1rem;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-item {
            padding: 1rem;
            flex-direction: column;
            text-align: center;
          }

          .contact-icon {
            font-size: 1.75rem;
          }
        }

        /* ============== RESPONSIVE - MOBILE MEDIUM ============== */
        @media screen and (min-width: 481px) and (max-width: 767px) {
          .homepage-container {
            padding: 1rem;
          }

          .goals-section,
          .services-section,
          .contact-section {
            padding: 2rem 1.25rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ============== RESPONSIVE - TABLET ============== */
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          .homepage-container {
            padding: 1.5rem;
          }

          .goals-section,
          .services-section,
          .contact-section {
            padding: 2.5rem 2rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ============== RESPONSIVE - DESKTOP ============== */
        @media screen and (min-width: 1025px) {
          .homepage-container {
            padding: 2rem;
          }

          .goals-section,
          .services-section,
          .contact-section {
            padding: 3rem 2.5rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        /* ============== LANDSCAPE MODE ============== */
        @media screen and (max-height: 600px) and (orientation: landscape) {
          .goals-section,
          .services-section,
          .contact-section {
            padding: 1.5rem 1rem;
            margin-bottom: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .service-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
