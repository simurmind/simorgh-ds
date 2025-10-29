"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <section className="about-hero">
          <div className="hero-content">
            <div className="hero-icon" aria-hidden="true">🦅</div>
            <h1 className="hero-title">درباره سیمرغ</h1>
            <p className="hero-subtitle">
              ترکیبی از هنر، فناوری و اصالت ایرانی
            </p>
          </div>
        </section>

        <div className="about-container">
          <section className="about-section about-intro">
            <div className="section-icon" aria-hidden="true">✨</div>
            <div className="section-header">
              <h2 className="section-title">سیمرغ: نماد اصالت و شکوه ایرانی</h2>
              <div className="title-underline"></div>
            </div>
            <div className="section-content">
              <p className="section-text">
                سیمرغ، در افسانه‌های ایرانی، پرنده‌ای افسانه‌ای و نمادین است که
                با ویژگی‌های خاص خود در فرهنگ ایرانی شناخته می‌شود. این پرنده،
                با ترکیب قدرت، زیبایی و حکمت، نمادی از بلند پروازی، دانش و
                اصالت است. در ادبیات فارسی، سیمرغ همواره به عنوان موجودی
                فراطبیعی و عظیم با قدرت‌های فوق‌العاده شناخته می‌شود که
                الهام‌بخش بسیاری از داستان‌های پرمحتوا و آموزنده است.
              </p>
              <p className="section-text">
                انتخاب نام "سیمرغ" برای برند ما به معنای پیوند دادن این نماد با
                اهداف و ارزش‌های ماست. همانطور که سیمرغ نمادی از کمال و شکوه
                است، ما نیز در مجموعه سیمرغ بر آن هستیم تا طراحی‌هایی خلق کنیم
                که همواره زیبا، منحصر به فرد و باکیفیت باشند. این نام نه تنها به
                تاریخ و فرهنگ غنی ایران اشاره دارد، بلکه نشان‌دهنده هدف ما برای
                خلق تجربه‌های کاربری منحصر به فرد و طراحی‌هایی با روح ایرانی و
                در عین حال استفاده از فناوری‌های روز دنیا است.
              </p>
            </div>
          </section>

          <section className="about-section about-mission">
            <div className="section-icon" aria-hidden="true">🎯</div>
            <div className="section-header">
              <h2 className="section-title">
                مجموعه سیمرغ: ترکیب هنر و فناوری‌های مدرن
              </h2>
              <div className="title-underline"></div>
            </div>
            <div className="section-content">
              <p className="section-text">
                مجموعه سیمرغ با بهره‌گیری از ترکیب هنر و فناوری‌های روز دنیا،
                هدفی بزرگ‌تر از طراحی سایت و دکوراسیون داخلی دارد. ما در سیمرغ
                به دنبال ایجاد تجربیات منحصر به فرد برای کاربران هستیم.
                طراحی‌هایی که نه تنها زیبا و منحصر به فرد باشند، بلکه تجربه
                کاربری بی‌نظیری را نیز به ارمغان آورند.
              </p>
              <p className="section-text">
                ما همیشه در تلاشیم تا روز به روز از دیروز قوی‌تر باشیم. هر
                پروژه‌ای که آغاز می‌کنیم، فرصتی است برای ارتقای دانش و تجربه‌ ما
                و اجرای پروژه‌ها با کیفیت بالاتر و دیدگاه جدیدتر. از طراحی
                سایت‌ها با رابط کاربری جذاب و کاربردی تا ایجاد فضاهای داخلی که
                هویت شما را در دل خود جای می‌دهند، تمامی پروژه‌ها را با دقت و به
                شکلی متفاوت پیش می‌بریم.
              </p>
            </div>
          </section>

          <section className="about-section about-values">
            <div className="section-icon" aria-hidden="true">💎</div>
            <div className="section-header">
              <h2 className="section-title">ارزش‌های ما</h2>
              <div className="title-underline"></div>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon" aria-hidden="true">🎨</div>
                <h3 className="value-title">خلاقیت و نوآوری</h3>
                <p className="value-description">
                  هر طراحی برای ما یک فرصت است برای نمایش افق‌های جدید و متفاوت.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon" aria-hidden="true">⚡</div>
                <h3 className="value-title">کیفیت و دقت</h3>
                <p className="value-description">
                  تمامی پروژه‌ها مطابق با استانداردهای جهانی و با دقت بالا اجرا
                  می‌شود.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon" aria-hidden="true">👥</div>
                <h3 className="value-title">تجربه کاربری</h3>
                <p className="value-description">
                  تمرکز اصلی ما بر ایجاد راحتی و تجربه کاربری بهینه برای مخاطبان
                  است.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon" aria-hidden="true">📈</div>
                <h3 className="value-title">رشد مستمر</h3>
                <p className="value-description">
                  ما به دنبال پیشرفت روز به روز در تمامی پروژه‌ها و خلق تجربه‌های
                  نوین هستیم.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section about-team">
            <div className="section-icon" aria-hidden="true">🚀</div>
            <div className="section-header">
              <h2 className="section-title">تیم استارتاپی سیمرغ</h2>
              <div className="title-underline"></div>
            </div>
            <div className="section-content">
              <p className="section-text highlight-text">
                در سیمرغ، قصد داریم تیم استارتاپی خود را بسازیم و به دنبال افرادی
                با مهارت‌های بالا و ایده‌های نوآورانه هستیم. در تیم ما، رتبه کنکور
                و پروژه‌ها اهمیت ندارد، بلکه تنها چیزی که مهم است توانمندی و
                استعداد شماست.
              </p>
              <p className="section-text">
                اگر شما در زمینه طراحی، برنامه‌نویسی، دکوراسیون داخلی یا هر حوزه
                مرتبط دیگر مهارت‌های ویژه‌ای دارید و می‌خواهید بخشی از تیم خلاق و
                پویا ما باشید، فرصت‌های زیادی برای شما وجود دارد. به ما بپیوندید
                و در ساختن آینده‌ای روشن‌تر در کنار هم تلاش کنیم.
              </p>
            </div>
          </section>

          <section className="about-section about-careers">
            <div className="careers-card">
              <div className="careers-icon" aria-hidden="true">💼</div>
              <h2 className="careers-title">فرصت‌های شغلی</h2>
              <p className="careers-text">
                اگر شما هم از افرادی هستید که مهارت‌های برجسته‌ای در طراحی،
                توسعه، دکوراسیون داخلی یا دیگر زمینه‌های مرتبط دارید و به دنبال
                چالش‌های جدید هستید، با ما تماس بگیرید و بخشی از تیم خلاق سیمرغ
                باشید.
              </p>
              <a 
                href="https://t.me/SimorghAdmin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="careers-button"
                aria-label="ارسال درخواست همکاری در تلگرام"
              >
                <span>همین الان درخواست دهید</span>
                <span className="button-arrow" aria-hidden="true">←</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: #fff;
          direction: rtl;
          font-family: 'Vazirmatn', 'Segoe UI', Tahoma, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .about-hero {
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.95) 0%,
            rgba(20, 20, 20, 0.98) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(245, 197, 24, 0.3);
          border-radius: 20px;
          padding: 5rem 2rem;
          margin: 2rem auto;
          max-width: 1400px;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out;
        }

        .about-hero::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(245, 197, 24, 0.1) 0%,
            transparent 70%
          );
          animation: rotate 15s linear infinite;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          animation: bounce 2s infinite;
          filter: drop-shadow(0 0 20px rgba(245, 197, 24, 0.5));
        }

        .hero-title {
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #f5c518, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: #e0e0e0;
          font-weight: 300;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .about-section {
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.95) 0%,
            rgba(20, 20, 20, 0.98) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(245, 197, 24, 0.2);
          border-radius: 20px;
          padding: 3rem 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out both;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(245, 197, 24, 0.05),
            transparent
          );
          transition: right 0.6s ease;
        }

        .about-section:hover::before {
          right: 100%;
        }

        .about-section:hover {
          border-color: rgba(245, 197, 24, 0.4);
          box-shadow: 0 10px 40px rgba(245, 197, 24, 0.2);
          transform: translateY(-5px);
        }

        .section-icon {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 1.5rem;
          animation: pulse 2s infinite;
          filter: drop-shadow(0 0 15px rgba(245, 197, 24, 0.4));
        }

        .section-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 0.5rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #f5c518, #ffd700);
          margin: 0 auto;
          border-radius: 2px;
          animation: expandWidth 1s ease-out;
        }

        .section-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 2;
          text-align: justify;
        }

        .highlight-text {
          background: rgba(245, 197, 24, 0.1);
          border-right: 4px solid #f5c518;
          padding: 1.5rem;
          border-radius: 10px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .value-card {
          background: rgba(245, 197, 24, 0.05);
          border: 1px solid rgba(245, 197, 24, 0.2);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(245, 197, 24, 0.1),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .value-card:hover::before {
          opacity: 1;
        }

        .value-card:hover {
          transform: translateY(-10px);
          border-color: #f5c518;
          box-shadow: 0 15px 40px rgba(245, 197, 24, 0.3);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }

        .value-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1rem;
        }

        .value-description {
          color: #e0e0e0;
          font-size: 1rem;
          line-height: 1.8;
        }

        .careers-card {
          background: linear-gradient(
            135deg,
            rgba(245, 197, 24, 0.1) 0%,
            rgba(245, 197, 24, 0.05) 100%
          );
          border: 2px solid rgba(245, 197, 24, 0.3);
          border-radius: 20px;
          padding: 4rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .careers-card::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(245, 197, 24, 0.1) 0%,
            transparent 70%
          );
          animation: rotate 20s linear infinite;
        }

        .careers-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: bounce 2s infinite;
          position: relative;
          z-index: 1;
        }

        .careers-title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .careers-text {
          color: #e0e0e0;
          font-size: clamp(1.05rem, 2.5vw, 1.2rem);
          line-height: 2;
          max-width: 800px;
          margin: 0 auto 2.5rem;
          position: relative;
          z-index: 1;
        }

        .careers-button {
          background: linear-gradient(135deg, #f5c518, #ffd700);
          color: #000;
          padding: 1.2rem 3rem;
          border: none;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(245, 197, 24, 0.4);
          position: relative;
          z-index: 1;
          text-decoration: none;
        }

        .careers-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(245, 197, 24, 0.6);
        }

        .careers-button:focus {
          outline: 2px solid #f5c518;
          outline-offset: 4px;
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .careers-button:hover .button-arrow {
          transform: translateX(-5px);
        }

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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        @media screen and (max-width: 768px) {
          .about-container {
            padding: 1rem 0.75rem;
          }

          .about-hero {
            padding: 3rem 1.5rem;
            margin: 1rem;
          }

          .hero-icon {
            font-size: 3.5rem;
          }

          .about-section {
            padding: 2rem 1.5rem;
            margin-bottom: 2rem;
          }

          .section-icon {
            font-size: 2.5rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .careers-card {
            padding: 3rem 1.5rem;
          }

          .careers-icon {
            font-size: 3rem;
          }

          .careers-button {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        @media screen and (min-width: 769px) and (max-width: 1024px) {
          .about-container {
            padding: 1.5rem 1rem;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-height: 600px) and (orientation: landscape) {
          .about-hero {
            padding: 2.5rem 2rem;
          }

          .hero-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .about-section {
            padding: 2rem 2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
