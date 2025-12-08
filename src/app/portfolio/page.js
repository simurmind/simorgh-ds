
"use client";
import React, { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      const fetchedProjects = [
        {
          id: 1,
          title: "طراحی دیوار مرده",
          category: "decoration",
          description:

            "بازطراحی ساختار بصری با هدف ایجاد انسجام میان رنگ، نورپردازی و چیدمان عناصر دکوراتیو جهت ایجاد فضایی منحصربه‌فرد.",
          beforeImage: "/portfolio/images/before1.jpg",
          afterImage: "/portfolio/images/after1.jpg",
          tags: ["دیوار", "تزئینی", "ساعت دیواری"],
        },
        {
          id: 2,
          title: "طراحی فضای زیرپله با گلخانه",
          category: "decoration",
          description:
            "تبدیل فضای خالی زیرپله به محیطی سبز و دلنشین با استفاده از گیاهان طبیعی و نورپردازی هدفمند برای بهینه‌سازی کاربری.",
          beforeImage: "/portfolio/images/before2.jpg",
          afterImage: "/portfolio/images/after2.jpg",
          tags: ["زیرپله", "گلخانه", "فضای سبز"],

        },
        {
          id: 3,
          title: "طراحی فضای زیرپله با چوب طبیعی",
          category: "decoration",
          description:
            "ترکیب چوب طبیعی با روشنایی غیرمستقیم جهت خلق فضایی گرم و دنج که هم زیبایی بصری و هم کارکرد عملی را به همراه دارد.",
          beforeImage: "/portfolio/images/before3.jpg",
          afterImage: "/portfolio/images/after3.jpg",
          tags: ["چوب", "روشنایی", "مدرن"],
        },
        {
          id: 4,
          title: "طراحی دفتر کار مدرن",
          category: "decoration",
          description:
            "طراحی محیط کاری مینیمال با تمرکز بر بهره‌وری، استفاده از رنگ‌های خنثی و چیدمانی که انرژی مثبت را در فضا جریان می‌دهد.", 
          beforeImage: "/portfolio/images/before4.jpg",
          afterImage: "/portfolio/images/after4.png",
          tags: ["دفتر کار", "مدرن", "کاربردی"],
        },
      ];

      setProjects(fetchedProjects);
      setIsLoading(false);
    }, 1000);
  }, []);

  const categories = [
    { id: "all", label: "همه پروژه‌ها" },
    { id: "decoration", label: "دکوراسیون" },
    { id: "website", label: "طراحی سایت" },
  ];

  const filteredProjects =
    selectedCategory === "all"

      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section className="hero" id="hero">
        <div className={`hero-content ${visibleSections.has("hero") ? "visible" : ""}`}>
          <h1 className="hero-title">منتخبی از نمونه پروژه‌های انجام‌شده</h1>
          <p className="hero-description">
            در این مجموعه، بخشی از پروژه‌هایی که توسط متخصصین مجموعه سیمرغ دیزاین اجرا شده‌اند نمایش داده می‌شود.
            این نمونه‌ها با هدف ارتقای تجربه بصری و استانداردهای طراحی مدرن انجام شده‌اند و به‌زودی بخش نمونه‌کارهای
            تیمی نیز تکمیل خواهد شد.
          </p>
        </div>
      </section>


      <section className="filter-section" id="filter">
        <div className="container">
          <div className={`filter-container ${visibleSections.has("filter") ? "visible" : ""}`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="container">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">در حال بارگذاری پروژه‌ها...</p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className={`projects-grid ${visibleSections.has("projects") ? "visible" : ""}`}>
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card"
                  style={{ animationDelay: `${index * 0.1}s` }}

                >
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tags">
                      {project.tags?.map((tag, i) => (
                        <span key={i} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="before-after-container">
                    <div className="image-box before-box">

                      <div className="image-label">قبل از طراحی</div>
                      <div className="image-wrapper">
                        <img
                          src={project.beforeImage}
                          alt="قبل از طراحی"
                          className="project-image"
                        />
                      </div>
                    </div>

                    <div className="arrow-divider">
                      <span className="arrow-icon">←</span>
                    </div>

                    <div className="image-box after-box">
                      <div className="image-label">بعد از طراحی</div>

                      <div className="image-wrapper">
                        <img
                          src={project.afterImage}
                          alt="بعد از طراحی"
                          className="project-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <p className="empty-text">هیچ پروژه‌ای در این دسته یافت نشد</p>
            </div>
          )}
        </div>
      </section>

      <section className="coming-soon-section" id="coming-soon">
        <div className="container">
          <div className={`coming-soon-card ${visibleSections.has("coming-soon") ? "visible" : ""}`}>
            <svg className="coming-soon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" 

strokeLinejoin="round"/>
              <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="coming-soon-title">نمونه کارهای طراحی سایت</h2>
            <p className="coming-soon-text">
              بخش نمونه پروژه‌های طراحی سایت در حال آماده‌سازی و مستندسازی است. به‌زودی نسخه‌های آنلاین و توضیح مراحل طراحی،
              به صورت رسمی نمایش داده خواهد شد.
            </p>
            <div className="coming-soon-badge">در حال تکمیل…</div>
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

        .filter-section {
          padding: 40px 24px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .filter-container {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }


        .filter-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-btn {
          background: transparent;
          border: 1px solid rgba(213, 175, 64, 0.2);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 24px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: -0.3px;
        }

        .filter-btn:hover {
          border-color: rgba(213, 175, 64, 0.4);
          background: rgba(213, 175, 64, 0.05);

        }

        .filter-btn.active {
          background: #d5af40;
          color: #0f0f0f;
          border-color: #d5af40;
          font-weight: 600;
        }

        .projects-section {
          padding: 40px 24px 60px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

        }

        .projects-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card {
          background: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.8s ease-out both;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(213, 175, 64, 0.3);

          box-shadow: 0 12px 32px rgba(213, 175, 64, 0.12);
        }

        .project-header {
          margin-bottom: 16px;
        }

        .project-title {
          font-size: clamp(18px, 3vw, 22px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .project-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(213, 175, 64, 0.1);
          color: #d5af40;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid rgba(213, 175, 64, 0.2);
        }

        .project-description {
          color: #ffffff;
          font-size: clamp(14px, 2.5vw, 16px);
          line-height: 1.7;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .before-after-container {
          display: grid;
          grid-template-columns: 1fr auto 1fr;

          gap: 16px;
          align-items: center;
        }

        .image-box {
          position: relative;
        }

        .image-label {
          background: #d5af40;
          color: #0f0f0f;
          padding: 6px 12px;
          border-radius: 8px 8px 0 0;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
        }

        .image-wrapper {
          border-radius: 0 0 12px 12px;
          overflow: hidden;
          border: 1px solid rgba(213, 175, 64, 

0.2);
          border-top: none;
          position: relative;
          padding-top: 75%;
        }

        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .image-wrapper:hover .project-image {
          transform: scale(1.08);
        }

        .arrow-divider {
          font-size: 24px;
          color: #d5af40;

          animation: pulse 2s infinite;
        }

        .loading-container {
          text-align: center;
          padding: 60px 24px;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(213, 175, 64, 0.2);
          border-top-color: #d5af40;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 16px;
        }

        .loading-text {
          color: #ffffff;
          font-size: 16px;

          font-weight: 400;
        }

        .empty-state {
          text-align: center;
          padding: 60px 24px;
        }

        .empty-icon {
          width: 64px;
          height: 64px;
          color: #d5af40;
          margin: 0 auto 20px;
          display: block;
          opacity: 0.7;
        }

        .empty-text {
          color: #ffffff;
          font-size: 18px;
          font-weight: 400;
        }


        .coming-soon-section {
          padding: 60px 24px 80px;
        }

        .coming-soon-card {
          background: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(213, 175, 64, 0.15);
          border-radius: 20px;
          padding: 60px 32px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .coming-soon-card.visible {
          opacity: 1;
          transform: translateY(0);
        }


        .coming-soon-icon {
          width: 80px;
          height: 80px;
          color: #d5af40;
          margin: 0 auto 28px;
          display: block;
          stroke-width: 1.5;
        }

        .coming-soon-title {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 600;
          color: #d5af40;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .coming-soon-text {
          color: #ffffff;
          font-size: clamp(15px, 2.5vw, 17px);
          line-height: 1.8;

          max-width: 700px;
          margin: 0 auto 32px;
          font-weight: 400;
        }

        .coming-soon-badge {
          background: #d5af40;
          color: #0f0f0f;
          padding: 12px 32px;
          border-radius: 24px;
          font-size: 15px;
          font-weight: 600;
          display: inline-block;
          letter-spacing: -0.3px;
        }

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

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.08);
          }
        }

        @media (max-width: 768px) {

          .hero {
            padding: 60px 20px 40px;
          }

          .filter-section,
          .projects-section,
          .coming-soon-section {
            padding: 40px 20px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .before-after-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .arrow-divider {
            transform: rotate(90deg);

          }

          .coming-soon-card {
            padding: 40px 24px;
          }

          .coming-soon-icon {
            width: 64px;
            height: 64px;
          }

          .empty-icon {
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px;
          }

          .hero-description,
          .coming-soon-text {
            font-size: 15px;
          }

          .project-card {
            padding: 20px;
          }

          .project-title {
            font-size: 18px;
          }

          .project-description {
            font-size: 14px;
          }

          .filter-btn {
            font-size: 14px;
            padding: 8px 18px;
          }
        }


        @media screen and (max-height: 600px) and (orientation: landscape) {
          .hero {
            padding: 50px 20px 30px;
          }

          .project-card {
            padding: 20px;
          }

          .coming-soon-card {
            padding: 40px 24px;
          }

          .coming-soon-icon {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
    </>

  );
}
