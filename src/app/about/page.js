
"use client";
import React, { useState, useEffect } from "react";

export default function AboutPage() {
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

  return (
    <>
      <section className="hero" id="hero">
        <div className={`hero-content ${visibleSections.has("hero") ? "visible" : ""}`}>
          <h1 className="hero-title">درباره سیمرغ دیزاین</h1>
          <p className="hero-description">
            سیمرغ دیزاین، تیمی ریشه‌دار در فرهنگ و هنر ایرانی است که با ترکیب خرد بومی و تکنولوژی‌های پیشرفته جهان، 
            تجربه‌ای متفاوت از طراحی و توسعه را خلق 

می‌کند. ما نه تنها وب‌سایت می‌سازیم؛ بلکه هویت دیجیتال برند شما را 
            با دقت، خلاقیت و اصالت طراحی می‌کنیم. هر پروژه برای ما فرصتی است تا شکوه، زیبایی و قدرت فرهنگ ایرانی را 
            با استانداردهای بین‌المللی درهم آمیزیم و اثری ماندگار بسازیم که هم زیباست، هم کارآمد و هم الهام‌بخش.
          </p>
        </div>
      </section>

      <section className="info-section" id="origin">
        <div className="container">
          <div className={`info-grid ${visibleSections.has("origin") ? "visible" : ""}`}>
            
            <div className="info-card full-width">
              <h2>سیمرغ دیزاین: نماد اصالت و شکوه 

ایرانی</h2>
              <p>
                سیمرغ، در دل اسطوره‌های کهن ایرانی، پرنده‌ای افسانه‌ای است که نماد خرد، قدرت و زیبایی به شمار می‌آید. 
                در شاهنامه فردوسی، سیمرغ نه تنها مرشد و یاور قهرمانان است، بلکه نمادی از بلندپروازی، دانش و اصالتی است 
                که در فرهنگ ایران همواره ارزشمند بوده است. انتخاب نام «سیمرغ دیزاین» بیانگر این باور است که ما نیز، 
                همچون این پرنده اساطیری، راهنمای برندهای ایرانی در دنیای دیجیتال هستیم.
              </p>
              <p>
                سیمرغ دیزاین ادامه‌دهنده همین مسیر است؛ ما با احترام به میراث فرهنگی و هنری ایران، طراحی‌هایی خلق می‌کنیم 
                که در آن‌ها روح ایرانی با فناوری‌های روز دنیا پیوند می‌خورد. هر پروژه‌ای که می‌سازیم، نه تنها ابزاری کاربردی، 
                بلکه اثری هنری است که هویت، زیبایی و 

اصالت را در خود جای داده است. ما به دنبال آن هستیم که برندهای ایرانی 
                با افتخار و شکوه در دنیای دیجیتال بدرخشند و نامی ماندگار برای خود بسازند.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="info-section" id="story">
        <div className="container">
          <div className={`info-grid ${visibleSections.has("story") ? "visible" : ""}`}>
            
            <div className="info-card full-width">
              <h2>داستان آغاز ما</h2>
              <p>

                سال‌ها پیش، با اولین خط کدی که نوشتیم، سفری آغاز شد که تنها به کدنویسی محدود نماند. 
                هر پروژه، درسی بود؛ هر چالش، فرصتی برای رشد. ما در مسیری قدم گذاشتیم که در آن، 
                یادگیری هرگز متوقف نشد و هر روز، دانش و تجربه‌مان عمیق‌تر شد. پس از سال‌ها کار حرفه‌ای، 
                تجربه‌اندوزی و همکاری با پروژه‌های مختلف، تصمیم گرفتیم که تیمی تشکیل دهیم؛ 
                تیمی که نه تنها پروژه‌ها را به پایان برساند، بلکه آن‌ها را به سطحی بالاتر ببرد.
              </p>
              <p>
                هدف ما از همان ابتدا روشن بود: رساندن پروژه‌های تیمی به بالاترین سطح ممکن. 
                ما می‌خواستیم تیمی بسازیم که در آن، خلاقیت، دقت و تعهد در کنار هم قرار گیرند و 
                استانداردهای جدیدی در طراحی، توسعه و تجربه کاربری خلق کنند. سیمرغ دیزاین از همین تصمیم متولد شد؛ 
                تیمی جوان، متخصص و پرانرژی که با ایمان به توانایی‌های خود و با الهام از فرهنگ ایرانی، 
                آماده است تا نام خود را در صنعت دیجیتال ایران و منطقه ثبت کند.

              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="values-section" id="values">
        <div className="container">
          <h2 className="section-title">آنچه باور داریم</h2>
          <div className={`values-grid ${visibleSections.has("values") ? "visible" : ""}`}>
            
            <div className="value-card">
              <h3>خلاقیت اصیل ایرانی</h3>
              <p>
                ما اعتقاد داریم که خلاقیت واقعی، ریشه در فرهنگ و هویت دارد. هر طراحی که ارائه می‌دهیم، 
                برآمده از زیبایی‌شناسی ایرانی و درک 

عمیق از ارزش‌های بومی است. ما راه‌حل‌هایی می‌سازیم که 
                نه تنها مدرن و کاربردی‌اند، بلکه روح و اصالت ایرانی را در خود حمل می‌کنند و در دنیای دیجیتال 
                نمایندگی از هویت فرهنگی ما می‌کنند.
              </p>
            </div>

            <div className="value-card">
              <h3>کیفیت بدون مصالحه</h3>
              <p>
                برای ما، کیفیت خط قرمز است. هر خط کد، هر المان طراحی و هر تصمیمی که می‌گیریم، 
                با دقت، تمرکز و تعهد به بالاترین استانداردها انجام می‌شود. ما کاری تحویل نمی‌دهیم مگر اینکه 
                خودمان از آن راضی باشیم. تمام پروژه‌های ما بر اساس اصول حرفه‌ای، بهینه‌سازی کامل و اجرای بی‌نقص 
                پیاده‌سازی می‌شوند تا نتیجه‌ای بسازیم که ماندگار و اثرگذار باشد.

              </p>
            </div>

            <div className="value-card">
              <h3>رشد و یادگیری مداوم</h3>
              <p>
                دنیای تکنولوژی هرگز متوقف نمی‌شود و ما نیز همینطور. ما به یادگیری مداوم، پیگیری تکنولوژی‌های جدید 
                و ارتقای دانش خود ایمان داریم. هر پروژه برای ما فرصتی برای رشد است و ما همواره در تلاش هستیم که 
                از دیروز قوی‌تر باشیم. این ذهنیت رشدمحور، ما را قادر می‌سازد تا همگام با دنیا پیش برویم و 
                راه‌حل‌هایی ارائه دهیم که همیشه به‌روز و پیشرو باشند.
              </p>
            </div>

            <div className="value-card">
              <h3>تجربه واقعی برای مشتری</h3>

              <p>
                ما می‌دانیم که اعتماد شما سرمایه‌ای گرانبهاست. به همین دلیل، تجربه مشتری در هر مرحله از کار، 
                برای ما اولویت اصلی است. ما با شفافیت کامل کار می‌کنیم، به تعهدات خود پایبندیم و تا زمانی که 
                رضایت کامل شما حاصل نشود، کنار شما هستیم. هدف ما این است که نه تنها یک پروژه خوب تحویل دهیم، 
                بلکه تجربه‌ای حرفه‌ای، متفاوت و اثرگذار برای شما خلق کنیم که همیشه به خاطر بسپارید.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="container">

          <div className={`vision-content ${visibleSections.has("vision") ? "visible" : ""}`}>
            <h2 className="vision-title">چشم‌انداز سیمرغ دیزاین</h2>
            <p className="vision-text">
              چشم‌انداز ما فراتر از ساخت وب‌سایت است. ما آرزو داریم که سیمرغ دیزاین به یکی از تیم‌های پیشرو در ایران و منطقه 
              تبدیل شود؛ تیمی که نه تنها با کیفیت کار خود شناخته شود، بلکه به‌عنوان نمادی از نوآوری، اصالت و تعهد 
              در صنعت دیجیتال شناخته شود. ما به دنبال آن هستیم که برندهای ایرانی را در سطح جهانی معرفی کنیم و 
              ثابت کنیم که خلاقیت و تخصص ایرانی می‌تواند در عرصه بین‌المللی نیز درخشان باشد.
            </p>
            <p className="vision-text">
              ما با تمرکز بر استانداردهای جهانی، کیفیت بالا و نوآوری مستمر، گام به گام به سمت این هدف پیش می‌رویم. 
              تیم جوان، متخصص و پرانرژی ما، با قدرت، 

اشتیاق و تعهد، در مسیر تحقق این چشم‌انداز حرکت می‌کند. 
              ما باور داریم که هر پروژه، فرصتی است برای ساخت آینده‌ای بهتر؛ آینده‌ای که در آن، برندهای ایرانی 
              با افتخار و شکوه در دنیای دیجیتال حضور دارند و نام خود را در تاریخ ثبت می‌کنند.
            </p>
          </div>
        </div>
      </section>

      <section className="careers-section" id="careers">
        <div className="container">
          <div className={`careers-content ${visibleSections.has("careers") ? "visible" : ""}`}>
            <h2 className="careers-title">دعوت به همکاری</h2>
            <p className="careers-text">
              سیمرغ دیزاین در حال رشد است و ما به 

دنبال افرادی هستیم که با ما همراه شوند. اگر شما فردی خلاق، حرفه‌ای، 
              پرتلاش و علاقه‌مند به کار در محیطی پویا و چالش‌برانگیز هستید، جای شما در تیم ما خالی است. 
              ما به استعدادهای واقعی اعتقاد داریم؛ مهم نیست که چه مدرکی دارید یا از کجا آمده‌اید. 
              آنچه برای ما اهمیت دارد، مهارت، انگیزه و روحیه یادگیری شماست.
            </p>
            <p className="careers-text">
              در سیمرغ دیزاین، شما فرصت خواهید داشت تا در پروژه‌های واقعی و حرفه‌ای مشارکت کنید، مهارت‌های خود را ارتقا دهید 
              و در کنار تیمی متخصص و پرانرژی رشد کنید. ما محیطی فراهم کرده‌ایم که در آن، خلاقیت، نوآوری و تعهد 
              ارزشمند شمرده می‌شوند و هر فرد فرصت دارد تا توانمندی‌های خود را به نمایش بگذارد. 
              اگر آماده‌اید تا بخشی از آینده روشن سیمرغ دیزاین باشید، با ما تماس بگیرید.
            </p>
            <div className="cta-container">

              <a 
                href="https://t.me/SimorghAdmin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                همین الان درخواست دهید
              </a>
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

        .info-section {
          padding: 60px 24px;

        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .info-grid {
          display: grid;
          gap: 32px;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .info-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .info-card {

          padding: 32px 24px;
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .info-card.full-width {
          grid-column: 1 / -1;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .info-card h2 {
          font-size: clamp(20px, 3vw, 24px);
          font-weight: 600;
          color: #d5af40;

          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .info-card p {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.8;
          font-weight: 400;
          margin-bottom: 16px;
        }

        .info-card p:last-child {
          margin-bottom: 0;
        }

        .values-section {
          padding: 60px 24px;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 40px);

          font-weight: 600;
          text-align: center;
          margin-bottom: 60px;
          color: #d5af40;
          letter-spacing: -1px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .values-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }


        .value-card {
          padding: 32px 24px;
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .value-card h3 {
          font-size: 20px;
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 12px;
          letter-spacing: -0.5px;

        }

        .value-card p {
          font-size: 15px;
          color: #ffffff;
          line-height: 1.7;
          font-weight: 400;
        }

        .vision-section {
          padding: 80px 24px;
        }

        .vision-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
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
          margin-bottom: 20px;
        }

        .vision-text:last-child {

          margin-bottom: 0;
        }

        .careers-section {
          padding: 60px 24px 80px;
        }

        .careers-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .careers-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .careers-title {
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .careers-text {
          font-size: clamp(16px, 2.5vw, 18px);
          color: #ffffff;
          line-height: 1.8;
          font-weight: 400;
          margin-bottom: 20px;
        }

        .cta-container {
          display: flex;
          justify-content: center;
          padding: 40px 0 0;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 48px;
          font-size: 16px;
          font-weight: 600;
          color: #0f0f0f;
          background: #d5af40;
          text-decoration: none;
          border-radius: 24px;
          transition: all 0.3s ease;
          border: 1px solid #d5af40;
        }

        .cta-button:hover {
          background: #e5bf50;
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.3);
        }

        @media (max-width: 768px) {
          .hero {

            padding: 60px 20px 40px;
          }

          .info-section,
          .values-section,
          .vision-section,
          .careers-section {
            padding: 40px 20px;
          }

          .info-grid,
          .values-grid {
            gap: 24px;
          }

          .section-title,
          .vision-title,
          .careers-title {
            margin-bottom: 40px;
          }

          .cta-button {

            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px;
          }

          .hero-description,
          .vision-text,
          .careers-text {
            font-size: 15px;
          }

          .info-card h2,
          .value-card h3 {
            font-size: 18px;
          }

          .info-card p,
          .value-card p {

            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
