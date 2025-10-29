"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی بارگذاری از API
    setTimeout(() => {
      const fetchedProjects = [
        {
          id: 1,
          title: "طراحی دیوار مرده",
          category: "decoration",
          description:
            "در این پروژه، دیوار مرده با استفاده از ساعت دیواری خاص و گل‌های تزئینی، فضایی منحصر به فرد ایجاد کرده‌ایم.",
          beforeImage: "/portfolio/images/before1.jpg",
          afterImage: "/portfolio/images/after1.jpg",
          tags: ["دیوار", "تزئینی", "ساعت دیواری"],
        },
        {
          id: 2,
          title: "طراحی فضای زیرپله با گلخانه",
          category: "decoration",
          description:
            "این طراحی فضای زیرپله با گیاهان و گلخانه‌ای کوچک، برای استفاده بهینه از فضا و زیباسازی ایجاد شده است.",
          beforeImage: "/portfolio/images/before2.jpg",
          afterImage: "/portfolio/images/after2.jpg",
          tags: ["زیرپله", "گلخانه", "فضای سبز"],
        },
        {
          id: 3,
          title: "طراحی فضای زیرپله با چوب طبیعی",
          category: "decoration",
          description:
            "این پروژه طراحی فضای زیرپله با چوب‌های طبیعی و روشنایی مناسب برای ایجاد فضای دنج و گرم است.",
          beforeImage: "/portfolio/images/before3.jpg",
          afterImage: "/portfolio/images/after3.jpg",
          tags: ["چوب", "روشنایی", "مدرن"],
        },
        {
          id: 4,
          title: "طراحی دفتر کار مدرن",
          category: "decoration",
          description:
            "طراحی یک فضای کاری مدرن و راحت که به نیازهای تیم کمک کند و عملکرد بهتری داشته باشد.",
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
    { id: "all", label: "همه پروژه‌ها", icon: "🎨" },
    { id: "decoration", label: "دکوراسیون", icon: "✨" },
    { id: "website", label: "طراحی سایت", icon: "💻" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Head>
        <title>نمونه کارها | مجموعه سیمرغ</title>
        <meta
          name="description"
          content="نمونه کارهای طراحی دکوراسیون و طراحی سایت توسط مجموعه سیمرغ"
        />
        <meta name="keywords" content="نمونه کار، پروژه، دکوراسیون، طراحی سایت" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="portfolio-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">نمونه کارهای ما</h1>
          <p className="hero-subtitle">
            مجموعه‌ای از بهترین پروژه‌های طراحی شده توسط تیم سیمرغ
          </p>
        </section>

        {/* Category Filter */}
        <section className="filter-section">
          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="filter-icon">{cat.icon}</span>
                <span className="filter-label">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-section">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">در حال بارگذاری پروژه‌ها...</p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="projects-grid">
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
              <span className="empty-icon">📭</span>
              <p className="empty-text">هیچ پروژه‌ای در این دسته یافت نشد</p>
            </div>
          )}
        </section>

        {/* Coming Soon Section */}
        <section className="coming-soon-section">
          <div className="coming-soon-card">
            <div className="coming-soon-icon">💻</div>
            <h2 className="coming-soon-title">نمونه کارهای طراحی سایت</h2>
            <p className="coming-soon-text">
              در آینده‌ای نزدیک، این بخش با بهترین سایت‌های طراحی شده توسط
              مجموعه سیمرغ پر خواهد شد. با اعتماد شما و توانمندی تیم ما، این
              بخش به زودی شاهد پیشرفت‌های بیشتری خواهد بود.
            </p>
            <div className="coming-soon-badge">به زودی...</div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ============== CONTAINER ============== */
        .portfolio-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem;
        }

        /* ============== HERO SECTION ============== */
        .hero-section {
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.95) 0%,
            rgba(20, 20, 20, 0.98) 100%
          );
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
          background: radial-gradient(
            circle,
            rgba(245, 197, 24, 0.1) 0%,
            transparent 70%
          );
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

        /* ============== FILTER SECTION ============== */
        .filter-section {
          margin-bottom: 3rem;
          animation: fadeInUp 0.9s ease-out;
        }

        .filter-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.95) 0%,
            rgba(20, 20, 20, 0.98) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(245, 197, 24, 0.2);
          color: #e0e0e0;
          padding: 0.9rem 2rem;
          border-radius: 50px;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-btn:hover {
          transform: translateY(-3px);
          border-color: #f5c518;
          box-shadow: 0 8px 25px rgba(245, 197, 24, 0.3);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #f5c518, #ffd700);
          color: #000;
          border-color: #f5c518;
          box-shadow: 0 8px 25px rgba(245, 197, 24, 0.4);
        }

        .filter-icon {
          font-size: 1.3rem;
        }

        /* ============== PROJECTS SECTION ============== */
        .projects-section {
          margin-bottom: 3rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.95) 0%,
            rgba(20, 20, 20, 0.98) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(245, 197, 24, 0.2);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.8s ease-out both;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(245, 197, 24, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }

        .project-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: #f5c518;
          box-shadow: 0 15px 40px rgba(245, 197, 24, 0.3);
        }

        .project-header {
          margin-bottom: 1.5rem;
        }

        .project-title {
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1rem;
        }

        .project-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(245, 197, 24, 0.15);
          color: #f5c518;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(245, 197, 24, 0.3);
        }

        .project-description {
          color: #e0e0e0;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          line-height: 1.8;
          margin-bottom: 2rem;
          text-align: justify;
        }

        /* ============== BEFORE/AFTER ============== */
        .before-after-container {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1rem;
          align-items: center;
        }

        .image-box {
          position: relative;
        }

        .image-label {
          background: linear-gradient(135deg, #f5c518, #ffd700);
          color: #000;
          padding: 0.5rem 1rem;
          border-radius: 10px 10px 0 0;
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
        }

        .image-wrapper {
          border-radius: 0 0 12px 12px;
          overflow: hidden;
          border: 2px solid rgba(245, 197, 24, 0.3);
          border-top: none;
          position: relative;
          padding-top: 75%; /* 4:3 Aspect Ratio */
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
          transform: scale(1.1);
        }

        .arrow-divider {
          font-size: 2rem;
          color: #f5c518;
          animation: pulse 2s infinite;
        }

        /* ============== LOADING ============== */
        .loading-container {
          text-align: center;
          padding: 4rem 2rem;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(245, 197, 24, 0.2);
          border-top-color: #f5c518;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1.5rem;
        }

        .loading-text {
          color: #e0e0e0;
          font-size: 1.2rem;
        }

        /* ============== EMPTY STATE ============== */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }

        .empty-icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
        }

        .empty-text {
          color: #e0e0e0;
          font-size: 1.2rem;
        }

        /* ============== COMING SOON ============== */
        .coming-soon-section {
          animation: fadeInUp 1.2s ease-out;
        }

        .coming-soon-card {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.98) 0%,
            rgba(26, 26, 26, 0.95) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(245, 197, 24, 0.2);
          border-radius: 20px;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .coming-soon-card::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(245, 197, 24, 0.08) 0%,
            transparent 70%
          );
          animation: rotate 20s linear infinite;
        }

        .coming-soon-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          animation: bounce 2s infinite;
          position: relative;
          z-index: 1;
        }

        .coming-soon-title {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .coming-soon-text {
          color: #e0e0e0;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto 2rem;
          position: relative;
          z-index: 1;
        }

        .coming-soon-badge {
          background: linear-gradient(135deg, #f5c518, #ffd700);
          color: #000;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          display: inline-block;
          box-shadow: 0 8px 25px rgba(245, 197, 24, 0.4);
          position: relative;
          z-index: 1;
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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin {
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

        /* ============== RESPONSIVE - MOBILE SMALL ============== */
        @media screen and (max-width: 480px) {
          .portfolio-container {
            padding: 0.75rem;
          }

          .hero-section {
            padding: 2.5rem 1.5rem;
            margin-bottom: 2rem;
            border-radius: 16px;
          }

          .filter-container {
            gap: 0.75rem;
          }

          .filter-btn {
            padding: 0.7rem 1.5rem;
            font-size: 0.9rem;
          }

          .filter-icon {
            font-size: 1.1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .before-after-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .arrow-divider {
            transform: rotate(90deg);
          }

          .coming-soon-card {
            padding: 3rem 1.5rem;
          }

          .coming-soon-icon {
            font-size: 3.5rem;
          }
        }

        /* ============== RESPONSIVE - MOBILE MEDIUM ============== */
        @media screen and (min-width: 481px) and (max-width: 767px) {
          .portfolio-container {
            padding: 1rem;
          }

          .hero-section {
            padding: 3rem 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .before-after-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .arrow-divider {
            transform: rotate(90deg);
          }
        }

        /* ============== RESPONSIVE - TABLET ============== */
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          .portfolio-container {
            padding: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        /* ============== RESPONSIVE - DESKTOP ============== */
        @media screen and (min-width: 1025px) {
          .portfolio-container {
            padding: 2rem;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
          }
        }

        /* ============== LANDSCAPE MODE ============== */
        @media screen and (max-height: 600px) and (orientation: landscape) {
          .hero-section {
            padding: 2rem 1.5rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .coming-soon-card {
            padding: 2.5rem 2rem;
          }

          .coming-soon-icon {
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  );
}
