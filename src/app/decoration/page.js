
"use client";
import React, { useState, useEffect } from "react";

export default function InteriorDesignPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());

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

  const processSteps = [
    {
      title: "تحلیل دقیق فضا و نیازسنجی",
      description: "بررسی جامع فضای موجود، شناسایی نیازهای کاربردی، تحلیل ترافیک حرکتی و درک کامل انتظارات شما از فضا. این مرحله پایه و اساس طراحی موفق است."
    },
    {
      title: "انتخاب کانسپت و سبک متناسب با برند",
      description: "تعیین هویت بصری و سبک طراحی که با شخصیت برند شما هماهنگی کامل دارد." 
    },
    {
      title: "طراحی اولیه و مدل‌سازی سه‌بعدی",
      description: "ایجاد طرح‌های اولیه، مدل‌سازی سه‌بعدی فضا و ارائه رندرهای فتورئال تا قبل از اجرا، تصویر کاملی از نتیجه نهایی داشته باشید."
    },
    {
      title: "اصلاحات و تکمیل نهایی",
      description: "دریافت بازخورد شما، اعمال تغییرات درخواستی و بهینه‌سازی جزئیات تا طرح کاملاً منطبق با خواسته‌های شما باشد. رضایت شما اولویت ماست."
    },
    {
      title: "تحویل طرح نهایی آماده اجرا",
      description: "ارائه طرح نهایی شامل نقشه‌های اجرایی، لیست متریال، دیتیل‌های ساخت و راهنمای کامل اجرا. همه چیز آماده برای تبدیل شدن به واقعیت."

    }
  ];

  return (
    <>
      <section className="hero" id="hero">
        <div className={`hero-content ${visibleSections.has("hero") ? "visible" : ""}`}>
          <h1 className="hero-title">طراحی دکوراسیون داخلی</h1>
          <p className="hero-description">
            طراحی دکوراسیون داخلی فراتر از زیباسازی است. این هنر ترکیبی از اصول علمی معماری، 
            روان‌شناسی فضا، هویت برند و نیازهای کاربردی است که با هم فضایی هماهنگ، کاربردی، 
            استاندارد و الهام‌بخش خلق می‌کند. ما در سیمرغ دیزاین، با درک عمیق این اصول، 
            فضاهایی می‌سازیم که نه‌تنها چشم‌نواز هستند بلکه زندگی و کار در آن‌ها لذت‌بخش است.
          </p>
        </div>

      </section>

      <section className="process-section" id="process">
        <div className="container">
          <h2 className="section-title">فرایند طراحی دکوراسیون در سیمرغ دیزاین</h2>
          <div className={`process-grid ${visibleSections.has("process") ? "visible" : ""}`}>
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="vision-section" id="vision">
        <div className="container">
          <div className={`vision-content ${visibleSections.has("vision") ? "visible" : ""}`}>
            <h2 className="vision-title">فضاها را زنده خواهیم کرد</h2>
            <p className="vision-text">
              ما فقط طراحی نمی‌کنیم، بلکه فضاها را زنده می‌کنیم. با ترکیب هوشمندانه هویت برند، 
              نورپردازی حرفه‌ای، پالت رنگی دقیق، چیدمان اصولی و رعایت استانداردهای جهانی، 
              فضاهای بی‌روح را به محیط‌های الهام‌بخش و انرژی‌بخش تبدیل می‌کنیم. هر گوشه از فضا 
              داستانی دارد که می‌خواهد روایت شود، هر دیوار فرصتی است برای خلق تجربه‌ای متفاوت. 
              ما این داستان‌ها را با دقت، خلاقیت و احترام به اصول طراحی می‌نویسیم تا فضایی بسازیم 
              که نه‌تنها زیبا، بلکه هوشمند، کاربردی و ماندگار باشد.

            </p>
          </div>
        </div>
      </section>

      <section className="integration-section" id="integration">
        <div className="container">
          <div className={`integration-content ${visibleSections.has("integration") ? "visible" : ""}`}>
            <h2 className="integration-title">تلفیق طراحی سایت و دکوراسیون</h2>
            <p className="integration-text">
              در سیمرغ دیزاین، ما به هماهنگی کامل بین دنیای دیجیتال و فیزیکی شما اعتقاد داریم. 
              طراحی دکوراسیون داخلی ما تنها برای مشتریانی ارائه می‌شود که طراحی سایت‌شان توسط 
              تیم ما انجام شده است. چرا؟
               زیرا وقتی هویت بصری برند شما را در فضای دیجیتال طراحی 
              کرده‌ایم، می‌توانیم همان هویت را با دقت و 

هماهنگی کامل به فضای فیزیکی دفتر، فروشگاه 
              یا محل کار شما منتقل کنیم. این تلفیق باعث می‌شود برند شما در همه نقاط تماس با مشتری، 
              یک تجربه یکپارچه و حرفه‌ای ارائه دهد.
            </p>
            <p className="integration-text">
              بهترین بخش؟ تمام ایده‌پردازی‌ها، بررسی دقیق فضا، طرح‌های اولیه و مشاوره‌های دکوراسیون 
              کاملاً رایگان و به‌عنوان هدیه ویژه برای مشتریان طراحی سایت ما ارائه می‌شود. ما می‌خواهیم 
              برند شما در هر دو دنیا به بهترین شکل ممکن درخشش داشته باشد. هماهنگی بین سایت و فضای 
              فیزیکی شما نه‌تنها اعتماد مشتریان را افزایش می‌دهد، بلکه هویت برندتان را قوی‌تر و 
              ماندگارتر می‌کند.
            </p>
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
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
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
        }

        .process-section {
          padding: 60px 24px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 600;
          text-align: right;
          margin-bottom: 60px;
          color: #d5af40;
          letter-spacing: -1px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .process-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .process-card {
          padding: 32px 24px;
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;

          text-align: right;
        }

        .process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .process-title {
          font-size: clamp(18px, 3vw, 22px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .process-description {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.8;

          font-weight: 400;
        }

        .vision-section {
          padding: 60px 24px;
        }

        .vision-content {
          max-width: 900px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: right;
        }

        .vision-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vision-title {
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .vision-text {
          font-size: clamp(16px, 2.5vw, 18px);
          color: #ffffff;
          line-height: 1.8;
          font-weight: 400;
        }

        .integration-section {
          padding: 60px 24px 80px;
        }

        .integration-content {
          max-width: 900px;
          margin: 0 auto;

          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: right;
        }

        .integration-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .integration-title {
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .integration-text {
          font-size: clamp(16px, 2.5vw, 18px);

          color: #ffffff;
          line-height: 1.8;
          font-weight: 400;
          margin-bottom: 24px;
        }

        .integration-text:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 20px 40px;
          }

          .process-section,
          .vision-section,
          .integration-section {
            padding: 40px 20px;
          }

          .process-grid {
            grid-template-columns: 1fr;

            gap: 24px;
          }

          .section-title {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px;
          }

          .hero-description,
          .vision-text,
          .integration-text {
            font-size: 15px;
          }

          .process-title {
            font-size: 18px;
          }


          .process-description {
            font-size: 14px;
          }

          .section-title,
          .vision-title,
          .integration-title {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
