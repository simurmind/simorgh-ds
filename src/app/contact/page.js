
"use client";
import React, { useState, useEffect } from "react";

export default function ContactPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [openFaq, setOpenFaq] = useState(null);

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <section className="hero" id="hero">
        <div className={`hero-content ${visibleSections.has("hero") ? "visible" : ""}`}>

          <h1 className="hero-title">ارتباط با ما</h1>
          <p className="hero-description">
            برای دریافت مشاوره رایگان، سفارش پروژه یا پشتیبانی فنی، از طریق کانال‌های ارتباطی زیر با تیم سیمرغ دیزاین در تماس باشید.
          </p>
          
          <div className="contact-box">
            <a href="tel:09187634731" className="phone-link">
              <span className="phone-number">09187634731</span>
              <svg className="phone-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 

1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
            
            <div className="social-links">
              <a href="https://t.me/SimorghAdmin" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="تلگرام">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 

4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              
              <a href="https://instagram.com/Simorghdesign.ir" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="اینستاگرام">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 

1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>

              </a>
              
              <a href="https://www.linkedin.com/in/simorgh-design-872624376" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="لینکدین">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 

24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hours-section" id="hours">
        <div className="container">
          <h2 className="section-title">ساعت های همراهی با شما</h2>
          <div className={`hours-grid ${visibleSections.has("hours") ? "visible" : ""}`}>
            <div className="hours-card">
              <span className="day">شنبه تا چهارشنبه</span>
              <span className="time">09:00 - 18:00</span>

            </div>
            <div className="hours-card">
              <span className="day">پنج‌شنبه</span>
              <span className="time">09:00 - 14:00</span>
            </div>
            <div className="hours-card special">
              <span className="day">پشتیبانی آنلاین</span>
              <span className="time">24 ساعته</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container">
          <h2 className="section-title">پرسش های پر تکرار</h2>
          <div className={`faq-list ${visibleSections.has("faq") ? "visible" : ""}`}>
            
            <div className="faq-item">
              <button 
                className={`faq-question ${openFaq === 0 ? "active" : ""}`}
                onClick={() => toggleFaq(0)}
              >
                <span>چگونه سفارش ثبت کنم؟</span>
                <span className="faq-icon">{openFaq === 0 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 0 ? "open" : ""}`}>
                <p>برای ثبت سفارش، مراحل زیر را طی کنید:</p>
                <ul>
                  <li>تماس اولیه: با شماره 09187634731 تماس بگیرید یا از طریق پلتفرم‌های 

آنلاین درخواست خود را ارسال کنید.</li>
                  <li>بررسی نیازمندی‌ها: تیم ما جلسه مشاوره‌ای برگزار کرده و نیازهای پروژه شما را تحلیل می‌کند.</li>
                  <li>ارائه پیشنهاد: پس از بررسی، پیشنهاد قیمت و زمان‌بندی اجرا ارائه خواهد شد.</li>
                  <li>شروع پروژه: با تایید نهایی شما، عملیات اجرایی آغاز می‌شود.</li>
                </ul>
              </div>
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${openFaq === 1 ? "active" : ""}`}
                onClick={() => toggleFaq(1)}
              >
                <span>روش‌های پرداخت</span>
                <span className="faq-icon">{openFaq === 1 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 1 ? "open" : ""}`}>
                <p>مجموعه سیمرغ روش‌های پرداخت متنوعی را پشتیبانی می‌کند:</p>
                <ul>
                  <li>کارت به کارت: امن‌ترین روش پرداخت داخلی با ضمانت تحویل.</li>
                  <li>درگاه بانکی: پرداخت آنلاین از طریق درگاه‌های معتبر بانکی.</li>
                  <li>ارزهای دیجیتال: پذیرش Bitcoin, Ethereum, USDT برای مشتریان بین‌المللی.</li>
                  <li>پرداخت مرحله‌ای: امکان پرداخت به صورت مرحله‌ای بر اساس پیشرفت پروژه.</li>
                </ul>
              </div>
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${openFaq === 2 ? "active" : ""}`}
                onClick={() => toggleFaq(2)}
              >

                <span>مدت زمان تحویل پروژه</span>
                <span className="faq-icon">{openFaq === 2 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 2 ? "open" : ""}`}>
                <p>زمان تحویل بسته به نوع و حجم پروژه متغیر است:</p>
                <ul>
                  <li>پروژه‌های ساده: 7 تا 14 روز کاری</li>
                  <li>پروژه‌های متوسط: 3 تا 6 هفته</li>
                  <li>پروژه‌های پیچیده: بر اساس توافق و برنامه‌ریزی مشترک</li>
                  <li>تمامی پروژه‌ها با رعایت استانداردهای کیفی و در کوتاه‌ترین زمان ممکن تحویل داده می‌شوند.</li>
                </ul>
              </div>
            </div>

            <div className="faq-item">

              <button 
                className={`faq-question ${openFaq === 3 ? "active" : ""}`}
                onClick={() => toggleFaq(3)}
              >
                <span>پشتیبانی پس از تحویل</span>
                <span className="faq-icon">{openFaq === 3 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 3 ? "open" : ""}`}>
                <p>سیمرغ متعهد به ارائه خدمات پس از فروش است:</p>
                <ul>
                  <li>گارانتی فنی: تمامی پروژه‌ها دارای گارانتی رفع نقص فنی هستند.</li>
                  <li>پشتیبانی تلفنی: دسترسی مستقیم به تیم پشتیبانی در ساعات اداری.</li>
                  <li>بروزرسانی: ارائه بروزرسانی‌های امنیتی و عملکردی برای پروژه‌های وب و نرم‌افزاری.</li>
                  <li>آموزش: ارائه مستندات و جلسات 

آموزشی برای استفاده بهینه از محصول.</li>
                  <li>نگهداری: امکان عقد قرارداد نگهداری و پشتیبانی بلندمدت.</li>
                </ul>
              </div>
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
          background: #0f0f0f;
          color: #ffffff;
          font-family: -apple-system, 

BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          direction: rtl;
        }

        .hero {
          padding: 80px 24px 60px;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
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
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .hero-description {
          font-size: clamp(16px, 2.5vw, 18px);
          color: #ffffff;
          line-height: 1.8;
          font-weight: 400;
          margin-bottom: 40px;
        }

        .contact-box {
          max-width: 600px;
          margin: 0 auto;
          padding: 32px 24px;
          border: 1px solid rgba(213, 175, 64, 

0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .contact-box:hover {
          border-color: rgba(213, 175, 64, 0.3);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
        }

        .phone-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-decoration: none;
          color: #d5af40;
          font-size: clamp(20px, 3vw, 24px);
          font-weight: 600;
          margin-bottom: 24px;
          transition: all 0.3s ease;

        }

        .phone-link:hover {
          color: #e5bf50;
          transform: scale(1.02);
        }

        .phone-number {
          letter-spacing: 1px;
        }

        .phone-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;

          padding-top: 24px;
          border-top: 1px solid rgba(213, 175, 64, 0.15);
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid rgba(213, 175, 64, 0.15);
          color: #d5af40;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: rgba(213, 175, 64, 0.1);
          border-color: rgba(213, 175, 64, 0.3);
          transform: translateY(-2px);

        }

        .social-icon svg {
          width: 24px;
          height: 24px;
        }

        .hours-section {
          padding: 60px 24px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 600;
          text-align: center;
          margin-bottom: 60px;
          color: #d5af40;

          letter-spacing: -1px;
        }

        .hours-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hours-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hours-card {
          padding: 32px 24px;
          border: 1px solid rgba(213, 175, 64, 

0.15);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .hours-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .hours-card.special {
          background: rgba(213, 175, 64, 0.05);
          border-color: rgba(213, 175, 64, 0.25);
        }

        .day {
          font-size: clamp(16px, 2.5vw, 18px);

          font-weight: 600;
          color: #d5af40;
        }

        .time {
          font-size: clamp(15px, 2.5vw, 17px);
          color: #ffffff;
        }

        .faq-section {
          padding: 60px 24px 80px;
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-list.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-item {
          margin-bottom: 16px;
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(213, 175, 64, 0.3);
          box-shadow: 0 4px 16px rgba(213, 175, 64, 0.1);
        }

        .faq-question {
          width: 100%;

          padding: 20px 24px;
          background: transparent;
          border: none;
          color: #d5af40;
          font-size: 17px;
          font-weight: 600;
          text-align: right;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(213, 175, 64, 0.05);
        }

        .faq-question.active {
          background: rgba(213, 175, 64, 0.08);
        }

        .faq-icon {
          font-size: 24px;
          font-weight: 400;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer.open {
          max-height: 800px;
        }

        .faq-answer p {
          padding: 0 24px 12px;
          font-size: 16px;
          color: #d5af40;
          font-weight: 600;

          margin: 0;
        }

        .faq-answer ul {
          list-style: none;
          padding: 0 24px 20px;
          margin: 0;
        }

        .faq-answer li {
          font-size: 15px;
          color: #ffffff;
          line-height: 1.7;
          font-weight: 400;
          margin-bottom: 12px;
          padding-right: 20px;
          position: relative;
        }

        .faq-answer li:before {
          content: "•";
          position: absolute;
          right: 0;

          color: #d5af40;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 20px 40px;
          }

          .hours-section,
          .faq-section {
            padding: 40px 20px;
          }

          .hours-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title {
            margin-bottom: 40px;
          }


          .faq-question {
            font-size: 16px;
            padding: 18px 20px;
          }

          .faq-answer p {
            padding: 0 20px 12px;
            font-size: 15px;
          }

          .faq-answer ul {
            padding: 0 20px 18px;
          }

          .faq-answer li {
            font-size: 14px;
          }

          .contact-box {
            padding: 24px 20px;
          }


          .social-links {
            gap: 12px;
          }

          .social-icon {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px;
          }

          .hero-description {
            font-size: 15px;
          }

          .phone-link {
            font-size: 18px;

          }

          .day {
            font-size: 15px;
          }

          .time {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
