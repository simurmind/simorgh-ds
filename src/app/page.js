
"use client";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentLine, setCurrentLine] = useState(0);

  const animatedLines = [
    "جوانان پرانرژی و بلندپرواز؛ همچون شکوه دماوند",
    "ما مسیر را می‌سازیم، شما با ما اوج می‌گیرید",
    "اصالت ایرانی را در طراحی هایمان زنده خواهیم کرد",
    "ما با مدارک نه با مهارت توانایی های خود را نشان می‌دهیم",
    "اعتماد سخت است، اما با ما رشد معنا پیدا می‌کند"
  ];

  const whyItems = [

    "تجربه و تخصص",
    "تکنولوژی روز",
    "پشتیبانی مادام‌العمر",
    "قیمت منصفانه",
    "تحویل به‌موقع",
    "خلاقیت و نوآوری"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % animatedLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [animatedLines.length]);

  return (
    <>
      <section className="hero" id="hero">
        <div className={`hero-content ${visibleSections.has("hero") ? "visible" : ""}`}

>
          <h1 className="hero-title">سیمرغ دیزاین</h1>
          <p className="hero-subtitle">تلفیق طراحی مدرن با اصالت ایرانی</p>
          <div className="animated-text">
            {animatedLines.map((line, index) => (
              <p key={index} className={`animated-line ${currentLine === index ? "active" : ""}`}>
                {line}
              </p>
            ))}
          </div>
          <div className="cta-wrapper">
            <a href="https://t.me/SimorghAdmin" target="_blank" rel="noopener noreferrer" className="cta-button">
              شروع پروژه
            </a>

          </div>
        </div>
      </section>

      <section className="stats-section" id="stats">
        <div className={`stats-container ${visibleSections.has("stats") ? "visible" : ""}`}>
          <div className="stat-card">
            <div className="stat-number">۲۰+</div>
            <div className="stat-label">پروژه موفق</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">۲۰+</div>
            <div className="stat-label">مشتری راضی</div>
          </div>
          <div className="stat-card">

            <div className="stat-number">۲۴/۷</div>
            <div className="stat-label">پشتیبانی</div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">خدمات ما</h2>
          <div className={`services-grid ${visibleSections.has("services") ? "visible" : ""}`}>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>طراحی سایت</h3>
              <p>طراحی و توسعه وب‌سایت‌های مدرن و بهینه</p>
               <p>برای برندسازی قوی، جذب مخاطب و افزایش بازدهی کسب‌وکار.</p>
            </div>

              <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>دکوراسیون هوشمند</h3>
              <p>طراحی فضا با علم روز دنیا و تکنولوژی پیشرفته</p>
              <p>خلق محیط‌هایی که زیبایی، کارایی و آرامش را در بالاترین سطح کنار هم قرار می‌دهند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-born-section" id="why-born">
        <div className="container">
          <h2 className="section-title">چرا متولد شدیم</h2>
          <div className={`why-born-content ${visibleSections.has("why-born") ? "visible" : ""}`}>
            <p className="why-born-text">
              گاهی شکست‌ها درس‌های پنهانی هستند که ما را برای پیروزی‌های بزرگ‌تر آماده می‌کنند.

              آنچه امروز سخت به نظر می‌رسد، فردا می‌تواند بزرگ‌ترین افتخار ما باشد.
            </p>
            <p className="why-born-text">
              ما این‌بار نه برای شکست، بلکه برای رقم زدن پیروزی‌هایی ساخته شدیم که به خودمان و
              دیگران قدرت می‌دهد. با هر پروژه، داستان موفقیت جدیدی می‌نویسیم که الهام‌بخش آینده است.
            </p>
            <div className="cta-wrapper">
              <a href="/portfolio" className="cta-button">
                نمونه کار
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="container">

          <h2 className="section-title">فرایند طراحی سایت</h2>
          <div className={`process-grid ${visibleSections.has("process") ? "visible" : ""}`}>
            <div className="process-card">
              <h3>کشف</h3>
              <p>شناخت اهداف و نیازهای شما</p>
            </div>
            <div className="process-card">
              <h3>تحقیق</h3>
              <p>تحلیل بازار و بررسی رقبا</p>
            </div>
            <div className="process-card">
              <h3>طراحی</h3>
              <p>خلق رابط کاربری زیبا و کاربردی</p>
            </div>
            <div className="process-card">
              <h3>توسعه</h3>
              <p>کدنویسی با جدیدترین تکنولوژی</p>
            </div>
            <div className="process-card">

              <h3>سئو</h3>
              <p>بهینه‌سازی برای موتورهای جستجو</p>
            </div>
            <div className="process-card">
              <h3>بهینه‌سازی</h3>
              <p>افزایش سرعت و کارایی</p>
            </div>
            <div className="process-card">
              <h3>راه‌اندازی</h3>
              <p>انتقال به سرور و تست نهایی</p>
            </div>
            <div className="process-card">
              <h3>پشتیبانی</h3>
              <p>پشتیبانی مستمر و به‌روزرسانی</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-section" id="ai">
        <div className="container">

          <h2 className="section-title">دکوراسیون با علم روز</h2>
          <div className={`ai-content ${visibleSections.has("ai") ? "visible" : ""}`}>
            <p className="ai-description">
              استفاده از الگوریتم‌های پیشرفته برای تحلیل فضا و ارائه بهترین طرح‌های دکوراسیون متناسب با سلیقه شما
            </p>
            <div className="ai-features">
              <div className="ai-feature">
                <span>🎨</span>
                <div>
                  <h4>تحلیل هوشمند</h4>
                  <p>بررسی دقیق ابعاد و نور فضا</p>
                </div>
              </div>
              <div className="ai-feature">
                <span>✨</span>
                <div>
                  <h4>طراحی شخصی</h4>
                  <p>متناسب با سلیقه و نیاز شما</p>
                </div>

              </div>
              <div className="ai-feature">
                <span>🖼</span>
                <div>
                  <h4>رندر سه‌بعدی</h4>
                  <p>مشاهده فضا قبل از اجرا</p>
                </div>
              </div>
              <div className="ai-feature">
                <span>💡</span>
                <div>
                  <h4>بهینه‌سازی نور</h4>
                  <p>ترکیب‌های رنگی و نورپردازی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section" id="why">

        <div className="container">
          <h2 className="section-title">چرا تیم ما</h2>
          <div className="why-carousel">
            <div className="why-track">
              {[...whyItems, ...whyItems, ...whyItems, ...whyItems].map((item, index) => (
                <div key={index} className="why-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }


        body {
          margin: 0;
          padding: 0;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          direction: rtl;
        }

        .hero {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px;
        }

        .hero-content {

          max-width: 600px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: clamp(18px, 2.5vw, 24px);

          color: #ffffffff;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .animated-text {
          position: relative;
          height: 60px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animated-line {
          position: absolute;
          font-size: clamp(15px, 2vw, 20px);
          color: #d5af40;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

          text-align: center;
          width: 100%;
          padding: 0 20px;
        }

        .animated-line.active {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(90deg, transparent 0%, #d5af40 20%, #d5af40 80%, transparent 100%);
          padding: 2px 0;
          border-radius: 28px;
          margin: 0 auto;
          max-width: 300px;
        }

        .cta-button {
          display: block;
          width: 100%;
          padding: 14px 40px;
          font-size: 15px;
          font-weight: 600;
          color: #0f0f0f;
          background: #d5af40;
          text-decoration: none;
          border-radius: 26px;
          transition: all 0.3s ease;
          text-align: center;
        }

        .cta-button:hover {
          background: #e5bf50;
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.3);
        }

        .stats-section {

          padding: 40px 24px;
        }

        .stats-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stats-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {

          padding: 32px 24px;
          text-align: center;
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .stat-number {
          font-size: 40px;
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }


        .stat-label {
          font-size: 14px;
          color: #ffffff;
          font-weight: 400;
        }

        .services-section {
          padding: 60px 24px;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 600;
          text-align: center;
          margin-bottom: 48px;
          color: #d5af40;

          letter-spacing: -1px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .services-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card {
          padding: 40px 32px;
          border: 1px solid rgba(213, 175, 64, 

0.15);
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .service-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
        }

        .service-card h3 {
          font-size: 20px;
          color: #d5af40;
          margin-bottom: 12px;

          font-weight: 600;
        }

        .service-card p {
          font-size: 15px;
          color: #ffffff;
          line-height: 1.6;
        }

        .why-born-section {
          padding: 60px 24px;
        }

        .why-born-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }


        .why-born-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .why-born-text {
          font-size: 17px;
          color: #ffffff;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .why-born-content .cta-wrapper {
          margin-top: 32px;
        }

        .process-section {
          padding: 60px 24px;
        }

        .process-grid {

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .process-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .process-card {
          padding: 28px 24px;
          border: 1px solid rgba(213, 175, 64, 0.1);
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;

        }

        .process-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(213, 175, 64, 0.1);
          border-color: rgba(213, 175, 64, 0.25);
        }

        .process-card h3 {
          font-size: 17px;
          color: #d5af40;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .process-card p {
          font-size: 14px;
          color: #ffffff;
          line-height: 1.5;
        }

        .ai-section {
          padding: 60px 24px;
        }

        .ai-content {
          max-width: 800px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ai-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ai-description {
          font-size: 17px;
          color: #ffffff;
          line-height: 1.8;
          margin-bottom: 48px;

          text-align: center;
        }

        .ai-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .ai-feature {
          padding: 28px 24px;
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 12px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .ai-feature:hover {

          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(213, 175, 64, 0.1);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .ai-feature span {
          font-size: 32px;
          flex-shrink: 0;
        }

        .ai-feature h4 {
          font-size: 16px;
          color: #d5af40;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .ai-feature p {
          font-size: 14px;
          color: #ffffff;
          line-height: 1.5;

        }

        .why-section {
          padding: 60px 0;
          overflow: hidden;
        }

        .why-carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .why-track {
          display: flex;
          gap: 24px;

          width: max-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .why-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .why-item {
          display: inline-block;
          padding: 20px 40px;
          border: 1px solid rgba(213, 175, 64, 

0.15);
          border-radius: 24px;
          font-size: 18px;
          color: #d5af40;
          font-weight: 500;
          flex-shrink: 0;
          transition: all 0.3s ease;
          white-space: nowrap;
          text-align: center;
        }

        .why-item:hover {
          border-color: rgba(213, 175, 64, 0.3);
          transform: scale(1.05);
          color: #d5af40;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 40vh;
            padding: 40px 20px;
          }


          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .animated-text {
            height: 80px;
          }

          .animated-line {
            font-size: 14px;
          }

          .stats-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .services-grid,

          .ai-features {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .section-title {
            margin-bottom: 32px;
          }

          .why-section {
            padding: 40px 0;
          }

          .why-track {
            gap: 16px;
            animation: scroll 25s linear infinite;
          }


          .why-item {
            font-size: 16px;
            padding: 16px 32px;
          }

          .cta-wrapper {
            max-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .process-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 14px;

          }

          .animated-line {
            font-size: 13px;
          }

          .why-track {
            gap: 12px;
            animation: scroll 20s linear infinite;
          }

          .why-item {
            font-size: 14px;
            padding: 14px 28px;
          }
        }
      `}</style>
    </>
  );
}