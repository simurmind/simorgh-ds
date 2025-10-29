"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
export default function ContactPage() {
  const [copiedItem, setCopiedItem] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const contactMethods = [
    {
      id: 1,
      icon: "📞",
      title: "تلفن تماس",
      value: "09187634731",
      link: "tel:+989187634731",
      copyValue: "09187634731",
      color: "#4CAF50",
    },
    {
      id: 2,
      icon: "✈️",
      title: "تلگرام",
      value: "@SimorghAdmin",
      link: "https://t.me/SimorghAdmin",
      copyValue: "@SimorghAdmin",
      color: "#0088cc",
    },
    {
      id: 3,
      icon: "📧",
      title: "ایمیل",
      value: "ahmadreza.rezaee65@gmail.com",
      link: "mailto:ahmadreza.rezaee65@gmail.com",
      copyValue: "ahmadreza.rezaee65@gmail.com",
      color: "#f5c518",
    },
  ];

  const copyToClipboard = (text, itemId) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(''), 2000);
    });
  };

  return (
    <>
      <div className="contact-page-container">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-content">
            <h1 className="hero-title">ارتباط با ما</h1>
            <p className="hero-subtitle">
              ما همواره آماده پاسخگویی به سوالات و نیازهای شما هستیم
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="contact-content">
          <div className="intro-section">
            <h2 className="section-title">همکاری با سیمرغ</h2>
            <p className="intro-text">
              در مجموعه سیمرغ ما همواره آماده‌ایم تا به شما در زمینه‌های مختلف کمک کنیم. 
              از طراحی سایت‌های سفارشی تا دکوراسیون‌های منحصر به فرد، هر سوال یا نیازی که دارید، 
              ما در کنار شما خواهیم بود.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="contact-methods-grid">
            {contactMethods.map((method) => (
              <div key={method.id} className="contact-method-card">
                <div className="method-icon">{method.icon}</div>
                <h3 className="method-title">{method.title}</h3>
                <a 
                  href={method.link} 
                  className="method-value"
                  target={method.id === 2 ? "_blank" : undefined}
                  rel={method.id === 2 ? "noopener noreferrer" : undefined}
                >
                  {method.value}
                </a>
                <button
                  onClick={() => copyToClipboard(method.copyValue, method.id)}
                  className="copy-button"
                  aria-label={`کپی ${method.title}`}
                >
                  {copiedItem === method.id ? (
                    <>
                      <span className="copy-icon">✓</span>
                      <span>کپی شد!</span>
                    </>
                  ) : (
                    <>
                      <span className="copy-icon">📋</span>
                      <span>کپی کردن</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Student Collaboration Section */}
          <section className="collaboration-section">
            <div className="collaboration-badge">🎓</div>
            <h2 className="collaboration-title">دعوت به همکاری دانشجویان</h2>
            <p className="collaboration-text">
              اگر شما یک دانشجوی با استعداد هستید که به دنبال فرصت‌های آموزشی و 
              پروژه‌های چالش‌برانگیز در دنیای طراحی و تکنولوژی می‌گردید، 
              ما در مجموعه سیمرغ به توانمندی‌های شما احترام می‌گذاریم. 
              همکاری با شما برای ما فرصتی است تا در کنار هم به موفقیت‌های بزرگ دست یابیم.
            </p>
            <div className="collaboration-features">
              <div className="feature-item">
                <span className="feature-icon">💼</span>
                <span>تجربه واقعی پروژه</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <span>یادگیری عملی</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🤝</span>
                <span>همکاری تیمی</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <span>رشد حرفه‌ای</span>
              </div>
            </div>
          </section>

          {/* Working Hours */}
          <section className="hours-section">
            <h2 className="section-title">ساعات پاسخگویی</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <span className="day">شنبه تا چهارشنبه</span>
                <span className="time">۹:۰۰ - ۱۸:۰۰</span>
              </div>
              <div className="hours-item">
                <span className="day">پنج‌شنبه</span>
                <span className="time">۹:۰۰ - ۱۴:۰۰</span>
              </div>
              <div className="hours-item special">
                <span className="day">پاسخگویی آنلاین</span>
                <span className="time">۲۴ ساعته</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="faq-section">
            <h2 className="section-title">سوالات متداول</h2>
            <div className="faq-accordion">
              
              {/* Question 1 */}
              <div className={`faq-accordion-item ${openFaq === 1 ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(1)}
                  aria-expanded={openFaq === 1}
                >
                  <span className="faq-q-content">
                    <span className="faq-icon">❓</span>
                    <span className="faq-q-text">چگونه سفارش ثبت کنم؟</span>
                  </span>
                  <span className={`faq-toggle ${openFaq === 1 ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFaq === 1 ? 'show' : ''}`}>
                  <p>ثبت سفارش در سیمرغ بسیار آسان است:</p>
                  <ul>
                    <li><strong>تماس تلفنی:</strong> با شماره 09187634731 تماس بگیرید و نیاز خود را با ما در میان بگذارید.</li>
                    <li><strong>پشتیبانی آنلاین:</strong> از طریق تلگرام (@SimorghAdmin) یا ایمیل با ما در ارتباط باشید.</li>
                    <li><strong>جلسات مشاوره:</strong> پس از تماس اولیه، جلساتی برای درک کامل نیازها و خواسته‌های شما برگزار می‌شود تا بهترین راهکار را ارائه دهیم.</li>
                    <li><strong>شروع پروژه:</strong> بعد از تایید نهایی، پروژه شما با دقت و سرعت آغاز خواهد شد.</li>
                  </ul>
                </div>
              </div>

              {/* Question 2 */}
              <div className={`faq-accordion-item ${openFaq === 2 ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(2)}
                  aria-expanded={openFaq === 2}
                >
                  <span className="faq-q-content">
                    <span className="faq-icon">💰</span>
                    <span className="faq-q-text">روش‌های پرداخت</span>
                  </span>
                  <span className={`faq-toggle ${openFaq === 2 ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFaq === 2 ? 'show' : ''}`}>
                  <p>ما متنوع‌ترین روش‌های پرداخت را برای راحتی شما فراهم کرده‌ایم:</p>
                  <ul>
                    <li><strong>کارت به کارت:</strong> امن‌ترین و سریع‌ترین روش پرداخت داخلی با تضمین کامل.</li>
                    <li><strong>ارزهای دیجیتال:</strong> پرداخت با Bitcoin، Ethereum، Tether و سایر رمزارزهای معتبر برای مشتریان بین‌المللی.</li>
                    <li><strong>پرداخت قسطی:</strong> برای پروژه‌های بزرگ، امکان پرداخت به صورت مرحله‌ای وجود دارد.</li>
                    <li><strong>انعطاف کامل:</strong> ما همیشه آماده هستیم تا بهترین شیوه پرداخت را متناسب با شرایط شما ارائه دهیم.</li>
                  </ul>
                </div>
              </div>

              {/* Question 3 */}
              <div className={`faq-accordion-item ${openFaq === 3 ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(3)}
                  aria-expanded={openFaq === 3}
                >
                  <span className="faq-q-content">
                    <span className="faq-icon">⏱️</span>
                    <span className="faq-q-text">مدت زمان تحویل</span>
                  </span>
                  <span className={`faq-toggle ${openFaq === 3 ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFaq === 3 ? 'show' : ''}`}>
                  <p>سرعت و کیفیت، اولویت اصلی ما در سیمرغ است:</p>
                  <ul>
                    <li><strong>سریع‌ترین تحویل:</strong> ما افتخار می‌کنیم که یکی از سریع‌ترین تیم‌ها در بازار هستیم و در کمترین زمان ممکن، پروژه شما را تحویل می‌دهیم.</li>
                    <li><strong>بدون کاهش کیفیت:</strong> سرعت ما هرگز به قیمت کاهش کیفیت نیست. هر پروژه با دقت و حرفه‌ای‌گری کامل انجام می‌شود.</li>
                    <li><strong>برنامه‌ریزی شفاف:</strong> از همان ابتدا، تایم‌لاین مشخصی برای پروژه شما تعیین می‌شود و ما متعهد به رعایت آن هستیم.</li>
                    <li><strong>پیشرو در صنعت:</strong> مقایسه ما با رقبا نشان می‌دهد که در زمان تحویل، همیشه جلوتر هستیم.</li>
                  </ul>
                </div>
              </div>

              {/* Question 4 */}
              <div className={`faq-accordion-item ${openFaq === 4 ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(4)}
                  aria-expanded={openFaq === 4}
                >
                  <span className="faq-q-content">
                    <span className="faq-icon">🔧</span>
                    <span className="faq-q-text">پشتیبانی پس از تحویل</span>
                  </span>
                  <span className={`faq-toggle ${openFaq === 4 ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFaq === 4 ? 'show' : ''}`}>
                  <p>همراهی ما با شما پس از تحویل پروژه ادامه دارد:</p>
                  <ul>
                    <li><strong>پشتیبانی فنی مادام‌العمر:</strong> در صورت بروز هرگونه مشکل فنی یا نیاز به بروزرسانی، تیم ما همیشه در دسترس است.</li>
                    <li><strong>رفع اشکال رایگان:</strong> هر مشکلی که از سمت ما باشد، به صورت کاملاً رایگان برطرف می‌شود.</li>
                    <li><strong>آموزش و راهنمایی:</strong> شما را با نحوه استفاده بهینه از محصول یا خدمات خود آشنا می‌کنیم.</li>
                    <li><strong>تماس مستقیم:</strong> همیشه می‌توانید مستقیماً با تیم پشتیبانی در ارتباط باشید و پاسخ سریع دریافت کنید.</li>
                    <li><strong>بروزرسانی‌های منظم:</strong> برای پروژه‌های وب و نرم‌افزاری، بروزرسانی‌های امنیتی و عملکردی را به صورت مستمر ارائه می‌دهیم.</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>
        </section>
      </div>

      <style jsx>{`
        /* ============== CONTAINER ============== */
        .contact-page-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem;
        }

        /* ============== HERO SECTION ============== */
        .contact-hero {
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

        .contact-hero::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(245, 197, 24, 0.1) 0%, transparent 70%);
          animation: rotate 15s linear infinite;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #f5c518, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          color: #e0e0e0;
        }

        /* ============== MAIN CONTENT ============== */
        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .intro-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          animation: fadeInUp 1s ease-out;
        }

        .section-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          text-align: center;
          margin-bottom: 1.5rem;
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

        .intro-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.8;
          text-align: justify;
        }

        /* ============== CONTACT METHODS GRID ============== */
        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .contact-method-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1.2s ease-out;
        }

        .contact-method-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(245, 197, 24, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .contact-method-card:hover::before {
          left: 100%;
        }

        .contact-method-card:hover {
          transform: translateY(-12px);
          border-color: #f5c518;
          box-shadow: 0 12px 40px rgba(245, 197, 24, 0.3);
        }

        .method-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: bounce 2s infinite;
        }

        .method-title {
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1rem;
        }

        .method-value {
          display: block;
          color: #e0e0e0;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          margin-bottom: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          word-break: break-word;
        }

        .method-value:hover {
          color: #f5c518;
          transform: scale(1.05);
        }

        .copy-button {
          background: rgba(245, 197, 24, 0.1);
          border: 1px solid rgba(245, 197, 24, 0.3);
          color: #f5c518;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: 0 auto;
        }

        .copy-button:hover {
          background: rgba(245, 197, 24, 0.2);
          border-color: #f5c518;
          transform: translateY(-2px);
        }

        .copy-icon {
          font-size: 1.2em;
        }

        /* ============== COLLABORATION SECTION ============== */
        .collaboration-section {
          background: linear-gradient(135deg, rgba(245, 197, 24, 0.15) 0%, rgba(255, 215, 0, 0.1) 100%);
          backdrop-filter: blur(20px);
          padding: 3rem 2rem;
          border-radius: 20px;
          border: 2px solid rgba(245, 197, 24, 0.3);
          text-align: center;
          animation: fadeInUp 1.4s ease-out;
        }

        .collaboration-badge {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }

        .collaboration-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
        }

        .collaboration-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.8;
          max-width: 900px;
          margin: 0 auto 2rem;
          text-align: justify;
        }

        .collaboration-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .feature-item {
          background: rgba(0, 0, 0, 0.3);
          padding: 1.5rem 1rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
          background: rgba(0, 0, 0, 0.5);
        }

        .feature-icon {
          font-size: 2.5rem;
        }

        /* ============== HOURS SECTION ============== */
        .hours-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          animation: fadeInUp 1.6s ease-out;
        }

        .hours-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .hours-item {
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        .hours-item:hover {
          transform: translateY(-5px);
          border-color: #f5c518;
          box-shadow: 0 8px 25px rgba(245, 197, 24, 0.2);
        }

        .hours-item.special {
          background: rgba(245, 197, 24, 0.1);
          border-color: #f5c518;
        }

        .day {
          color: #f5c518;
          font-weight: 600;
          font-size: clamp(1rem, 2.5vw, 1.1rem);
        }

        .time {
          color: #e0e0e0;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
        }

        /* ============== FAQ ACCORDION SECTION ============== */
        .faq-section {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(20px);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          animation: fadeInUp 1.8s ease-out;
        }

        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .faq-accordion-item {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid rgba(245, 197, 24, 0.2);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-accordion-item.active {
          border-color: #f5c518;
          box-shadow: 0 4px 20px rgba(245, 197, 24, 0.15);
        }

        .faq-question {
          width: 100%;
          background: transparent;
          border: none;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: right;
        }

        .faq-question:hover {
          background: rgba(245, 197, 24, 0.05);
        }

        .faq-q-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .faq-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .faq-q-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          font-weight: 600;
        }

        .faq-toggle {
          color: #f5c518;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .faq-toggle.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 1.5rem;
        }

        .faq-answer.show {
          max-height: 1000px;
          padding: 0 1.5rem 1.5rem 1.5rem;
        }

        .faq-answer p {
          color: #f5c518;
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .faq-answer ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-answer li {
          color: #e0e0e0;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          line-height: 1.7;
          padding-right: 1.5rem;
          position: relative;
        }

        .faq-answer li::before {
          content: "✓";
          position: absolute;
          right: 0;
          color: #f5c518;
          font-weight: bold;
        }

        .faq-answer strong {
          color: #f5c518;
          font-weight: 700;
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
          .contact-page-container {
            padding: 0.75rem;
          }

          .contact-hero {
            padding: 2.5rem 1.5rem;
            margin-bottom: 2rem;
            border-radius: 16px;
          }

          .intro-section,
          .hours-section,
          .faq-section {
            padding: 2rem 1.5rem;
          }

          .contact-methods-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .contact-method-card {
            padding: 2rem 1.5rem;
          }

          .method-icon {
            font-size: 3rem;
          }

          .collaboration-section {
            padding: 2rem 1.5rem;
          }

          .collaboration-badge {
            font-size: 3rem;
          }

          .collaboration-features {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .hours-grid,
          .faq-accordion {
            gap: 1rem;
          }

          .faq-question {
            padding: 1.25rem 1rem;
          }

          .faq-answer.show {
            padding: 0 1rem 1.25rem 1rem;
          }

          .faq-q-content {
            gap: 0.75rem;
          }

          .faq-icon {
            font-size: 1.75rem;
          }
        }

        /* ============== RESPONSIVE - MOBILE MEDIUM ============== */
        @media screen and (min-width: 481px) and (max-width: 767px) {
          .contact-page-container {
            padding: 1rem;
          }

          .contact-hero {
            padding: 3rem 2rem;
          }

          .contact-methods-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }

          .collaboration-features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ============== RESPONSIVE - TABLET ============== */
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          .contact-page-container {
            padding: 1.5rem;
          }

          .contact-methods-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .collaboration-features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ============== RESPONSIVE - DESKTOP ============== */
        @media screen and (min-width: 1025px) {
          .contact-page-container {
            padding: 2rem;
          }

          .contact-methods-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .collaboration-features {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ============== LANDSCAPE MODE ============== */
        @media screen and (max-height: 600px) and (orientation: landscape) {
          .contact-hero {
            padding: 2rem 1.5rem;
          }

          .contact-method-card {
            padding: 1.5rem 1.25rem;
          }

          .method-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .collaboration-badge {
            font-size: 2.5rem;
          }

          .collaboration-section {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
