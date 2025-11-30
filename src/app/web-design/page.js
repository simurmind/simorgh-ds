
"use client";
import React, { useState, useEffect } from "react";

export default function WebDesignServicesPage() {
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
        <div className={`hero-content ${visibleSections.has("hero") ? "visible" : ""}`}

>
          <h1 className="hero-title">طراحی سایت حرفه‌ای</h1>
          <p className="hero-description">
            در دنیای دیجیتال امروز، وب‌سایت شما نماینده اصلی برند شماست. ما با ترکیب تکنولوژی‌های روز و طراحی مدرن، 
            سایت‌هایی می‌سازیم که نه‌تنها زیبا هستند، بلکه برای رشد کسب‌وکار شما بهینه‌سازی شده‌اند. 
            از سایت‌های شخصی گرفته تا پلتفرم‌های پیچیده تجاری، ما راهکار شما هستیم.
          </p>
        </div>
      </section>

      <section className="info-section" id="info">
        <div className="container">
          <div className={`info-grid ${visibleSections.has("info") ? "visible" : ""}`}>
            <div className="info-card">
              <h2>چرا باید وب‌ سایت داشته باشیم؟</

h2>
              <p>
                وب‌سایت دروازه ورود شما به بازار دیجیتال است. در عصری که مشتریان قبل از هر تصمیمی به اینترنت مراجعه می‌کنند، 
                نداشتن وب‌سایت به معنای از دست دادن فرصت‌های بی‌شماری است. یک وب‌سایت حرفه‌ای اعتماد ایجاد می‌کند، 
                دسترسی ۲۴ ساعته به مخاطبان فراهم می‌آورد و ابزاری قدرتمند برای رقابت با دیگران در بازار است. 
                وب‌سایت شما می‌تواند مشتریان را جذب کند، محصولات را بفروشد و برند شما را به سطح جدیدی برساند.
              </p>
            </div>

            <div className="info-card">
              <h2>چه امکاناتی تیم ما ارائه می‌دهد؟</h2>
              <p>
                ما تمام مراحل ساخت وب‌سایت را پوشش 

می‌دهیم: از طراحی رابط کاربری مدرن و کدنویسی با تکنولوژی‌های پیشرفته، 
                تا بهینه‌سازی برای موتورهای جستجو و افزایش سرعت بارگذاری. سایت‌های ما کاملاً ریسپانسیو هستند و در تمام دستگاه‌ها 
                به خوبی نمایش داده می‌شوند. امنیت، پشتیبانی مادام‌العمر، آموزش مدیریت محتوا و مشاوره رایگان از جمله خدماتی است 
                که با هر پروژه ارائه می‌دهیم. شما فقط ایده را بیاورید، بقیه با ماست.
              </p>
            </div>

            <div className="info-card">
              <h2>تیم جوان و متخصص ما</h2>
              <p>
                تیم ما از افراد جوان، خلاق و متعهد تشکیل شده که با آخرین استانداردهای وب آشنا هستند. 
                ما نه به مدرک، بلکه به مهارت واقعی اعتقاد داریم. هر خط کدی که می‌نویسیم و هر طراحی که ارائه می‌دهیم، 

                نتیجه ساعت‌ها تمرین، یادگیری و تجربه عملی است. ما با شما به‌صورت شفاف همکاری می‌کنیم، 
                پروژه شما را مانند پروژه خودمان می‌دانیم و تا زمانی که رضایت کامل شما حاصل نشود، کنار شما هستیم.
              </p>
            </div>
          </div>

          <div className="cta-container">
            <a href="tel:09187634731" className="cta-button">
              پروژه‌ات را ثبت کن
            </a>
          </div>
        </div>
      </section>

      <section className="types-section" id="types">
        <div className="container">
          <h2 className="section-title">انواع 

وب‌ سایت</h2>
          <div className={`types-grid ${visibleSections.has("types") ? "visible" : ""}`}>
            
            <div className="type-card">
              <h3>وردپرس</h3>
              <p>
                سایت‌های وردپرسی برای کسانی که می‌خواهند به راحتی محتوای خود را مدیریت کنند، بهترین گزینه‌اند. 
                با پنل مدیریتی ساده، امکانات گسترده و قابلیت سفارشی‌سازی بالا، وردپرس برای بلاگ‌ها، 
                سایت‌های شرکتی و حتی فروشگاه‌های کوچک مناسب است.
              </p>
            </div>

            <div className="type-card">
              <h3>فروشگاهی</h3>
              <p>
                سایت‌های فروشگاهی با سیستم‌های 

پیشرفته سبد خرید، درگاه پرداخت امن، مدیریت موجودی و پیگیری سفارشات، 
                به شما امکان می‌دهند محصولات خود را به راحتی آنلاین بفروشید. این سایت‌ها برای افزایش فروش و 
                تجربه خرید بهتر مشتریان طراحی شده‌اند.
              </p>
            </div>

            <div className="type-card">
              <h3>شرکتی</h3>
              <p>
                سایت‌های شرکتی نمایانگر هویت حرفه‌ای کسب‌وکار شما هستند. با طراحی تمیز، ارائه خدمات، 
                نمونه کارها و فرم‌های تماس، این سایت‌ها به شما کمک می‌کنند تا اعتماد مشتریان را جلب کرده و 
                برند خود را به بهترین شکل معرفی کنید.
              </p>
            </div>

            <div className="type-card">
              <h3>شخصی / بلاگ</h3>

              <p>
                سایت‌ های شخصی و بلاگ‌ها فضایی برای به اشتراک‌ گذاری افکار، تجربیات و دانش شماست. 
                این سایت‌ها با طراحی ساده و تمرکز بر محتوا، به شما امکان می‌دهند مخاطبان وفادار بسازید و 
                صدای خود را در دنیای دیجیتال به گوش برسانید.
              </p>
            </div>

            <div className="type-card">
              <h3>خبری / رسانه‌ای</h3>
              <p>
                سایت‌های خبری برای انتشار سریع و مدیریت حجم بالای محتوا طراحی شده‌اند. 
                با سیستم‌های مدیریت محتوای پیشرفته، دسته‌بندی خبرها، جستجوی پیشرفته و بارگذاری سریع، 
                این سایت‌ها تجربه خواندن روان و حرفه‌ای را ارائه می‌دهند.
              </p>

            </div>

            <div className="type-card">
              <h3>آموزشی</h3>
              <p>
                پلتفرم‌های آموزشی با امکان ارائه دوره‌ها، مدیریت دانشجویان، سیستم پرداخت و پیگیری پیشرفت، 
                به شما کمک می‌کنند دانش خود را به‌صورت آنلاین به اشتراک بگذارید. این سایت‌ها برای مدرسان، 
                موسسات آموزشی و سازمان‌ها ایده‌آل هستند.
              </p>
            </div>

            <div className="type-card">
              <h3>رزومه و برند شخصی</h3>
              <p>
                سایت‌های رزومه و برند شخصی ابزاری قدرتمند برای نمایش مهارت‌ها، پروژه‌ها و دستاوردهای شماست. 

                این سایت‌ها به شما کمک می‌کنند در چشم کارفرمایان و مشتریان بالقوه متمایز شوید و 
                حضور حرفه‌ای در دنیای دیجیتال داشته باشید.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section" id="trust">
        <div className="container">
          <div className={`trust-content ${visibleSections.has("trust") ? "visible" : ""}`}>
            <h2 className="trust-title">اگر هنوز شک دارید...</h2>
            <p className="trust-text">
              ما می‌دانیم که انتخاب تیم مناسب برای ساخت وب‌سایت تصمیم آسانی نیست. شاید نگران باشید که 
              پروژه به موقع تحویل داده نشود، یا کیفیت 

کار انتظارات شما را برآورده نکند. اما اینجا چیزی است که 
              ما را متفاوت می‌کند: ما نه تنها وب‌سایت می‌سازیم، بلکه شریک رشد شما هستیم. هر پروژه برای ما 
              فرصتی است تا اعتماد شما را جلب کنیم و ثابت کنیم که می‌توانیم فراتر از انتظارات عمل کنیم. 
              ما با شفافیت کامل کار می‌کنیم، پرداخت به صورت مرحله‌ای است و تا زمانی که رضایت کامل شما حاصل نشود، 
              کنار شما هستیم. پشتیبانی مادام‌العمر، تضمین کیفیت و تعهد به موعدها بخشی از وعده‌های ما به شماست. 
              اگر هنوز مردد هستید، بیایید با هم صحبت کنیم و اجازه دهید با کارمان شما را متقاعد کنیم.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">

        <div className="container">
          <h2 className="section-title">سوالات شماست</h2>
          <div className={`faq-list ${visibleSections.has("faq") ? "visible" : ""}`}>
            
            <div className="faq-item">
              <button 
                className={`faq-question ${openFaq === 0 ? "active" : ""}`}
                onClick={() => toggleFaq(0)}
              >
                <span>چند سال تجربه دارید؟</span>
                <span className="faq-icon">{openFaq === 0 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 0 ? "open" : ""}`}>
                <p>
                  مهارت ما در کدهایی است که نوشته‌ایم؛ تجربه واقعی به سن محدود نیست، به کیفیت کد خلاصه می‌شود.

                </p>
              </div>
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${openFaq === 1 ? "active" : ""}`}
                onClick={() => toggleFaq(1)}
              >
                <span>قیمت‌ها چطور است؟</span>
                <span className="faq-icon">{openFaq === 1 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 1 ? "open" : ""}`}>
                <p>
 </p>
 <p>
                 قیمت‌های منصفانه، پرداخت مرحله‌ای، روند شفاف و تضمین کیفیت.
                
                </p>
              </div>
            </div>


            <div className="faq-item">
              <button 
                className={`faq-question ${openFaq === 2 ? "active" : ""}`}
                onClick={() => toggleFaq(2)}
              >
                <span>پشتیبانی بعد از اتمام سفارش دارید؟</span>
                <span className="faq-icon">{openFaq === 2 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 2 ? "open" : ""}`}>
                <p>
                  بله، پشتیبانی مادام‌العمر داریم. البته با کیفیت کاری که ارائه می‌دهیم، احتمالاً نیازی نیست.
                </p>
              </div>
            </div>

            <div className="faq-item">

              <button 
                className={`faq-question ${openFaq === 3 ? "active" : ""}`}
                onClick={() => toggleFaq(3)}
              >
                <span>آیا سایت اصول SEO را رعایت می‌کند؟</span>
                <span className="faq-icon">{openFaq === 3 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 3 ? "open" : ""}`}>
                <p>
                  بله، تمام سایت‌ها مطابق اصول SEO طراحی می‌شوند تا در موتورهای جستجو رتبه بهتری بگیرند.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button 

                className={`faq-question ${openFaq === 4 ? "active" : ""}`}
                onClick={() => toggleFaq(4)}
              >
                <span>آیا وب‌سایت کسب‌وکار من را رشد می‌دهد؟</span>
                <span className="faq-icon">{openFaq === 4 ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFaq === 4 ? "open" : ""}`}>
                <p>
                  بله، یک وب‌سایت حرفه‌ای می‌تواند رشد چندین برابری برای کسب‌وکار شما به ارمغان بیاورد.
                </p>
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
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
        }

        .cta-container {
          display: flex;
          justify-content: center;
          padding: 40px 0;
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

        .types-section {
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

        .types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .types-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .type-card {
          padding: 32px 24px;
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .type-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(213, 175, 64, 0.15);
          border-color: rgba(213, 175, 64, 0.3);
        }

        .type-card h3 {
          font-size: 20px;

          font-weight: 600;
          color: #d5af40;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .type-card p {
          font-size: 15px;
          color: #ffffff;
          line-height: 1.7;
          font-weight: 400;
        }

        .trust-section {
          padding: 80px 24px;
        }

        .trust-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          opacity: 0;

          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .trust-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .trust-title {
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .trust-text {
          font-size: clamp(16px, 2.5vw, 18px);
          color: #ffffff;
          line-height: 1.8;

          font-weight: 400;
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
          max-height: 200px;
        }

        .faq-answer p {
          padding: 0 24px 20px;
          font-size: 15px;
          color: #ffffff;
          line-height: 1.7;
          font-weight: 400;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 20px 40px;

          }

          .info-section,
          .types-section,
          .trust-section,
          .faq-section {
            padding: 40px 20px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 40px;
          }

          .types-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .section-title {
            margin-bottom: 40px;

          }

          .faq-question {
            font-size: 16px;
            padding: 18px 20px;
          }

          .faq-answer p {
            padding: 0 20px 18px;
            font-size: 14px;
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
          .trust-text {
            font-size: 15px;
          }

          .info-card h2,
          .type-card h3 {
            font-size: 18px;
          }

          .info-card p,
          .type-card p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
