"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function PortfolioPage() {
  // تعریف state برای پروژه‌ها
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // فرض کنید که اطلاعات پروژه‌ها از یک API یا فایل JSON بارگذاری می‌شود
    const fetchedProjects = [
      {
        id: 1,
        title: "طراحی دیوار مرده",
        description:
          "در این پروژه، دیوار مرده با استفاده از ساعت دیواری خاص و گل‌های تزئینی، فضایی منحصر به فرد ایجاد کرده‌ایم.",
        beforeImage: "/portfolio/images/before1.jpg",
        afterImage: "/portfolio/images/after1.jpg",
      },
      {
        id: 2,
        title: "طراحی فضای زیرپله با گلخانه",
        description:
          "این طراحی فضای زیرپله با گیاهان و گلخانه‌ای کوچک، برای استفاده بهینه از فضا و زیباسازی ایجاد شده است.",
        beforeImage: "/portfolio/images/before2.jpg",
        afterImage: "/portfolio/images/after2.jpg",
      },
      {
        id: 3,
        title: "طراحی فضای زیرپله با چوب‌های طبیعی",
        description:
          "این پروژه طراحی فضای زیرپله با چوب‌های طبیعی و روشنایی مناسب برای ایجاد فضای دنج و گرم است. استفاده از دکوراتیوهای چوبی باعث جذابیت و کارایی بیشتر فضای زیرپله شده است.",
        beforeImage: "/portfolio/images/before3.jpg",
        afterImage: "/portfolio/images/after3.jpg",
      },
      {
        id: 4,
        title: "طراحی دفتر کار",
        description:
          "طراحی یک فضای کاری مدرن و راحت که به نیازهای تیم کمک کند و عملکرد بهتری داشته باشد.",
        beforeImage: "/portfolio/images/before4.jpg",
        afterImage: "/portfolio/images/after4.png",
      },
    ];

    // داده‌ها را به state اضافه می‌کنیم
    setProjects(fetchedProjects);
  }, []); // این تابع فقط در بارگذاری اولیه اجرا می‌شود

  return (
    <>
      <Head>
        <title>نمونه کارها | سیمرغ</title>
        <meta
          name="description"
          content="نمونه کارهای طراحی دکوراسیون توسط مجموعه سیمرغ"
        />
      </Head>

      <section className="sample-work-section">
        <div className="section-header">
          <h2>نمونه کارهای طراحی دکوراسیون</h2>
        </div>

        {/* نمایش لیست پروژه‌ها از state */}
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className="sample-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="before-after">
                <div className="before">
                  <h4>قبل از طراحی</h4>
                  <img
                    src={project.beforeImage}
                    alt="قبل از طراحی"
                    className="before-image"
                  />
                </div>
                <div className="after">
                  <h4>بعد از طراحی</h4>
                  <img
                    src={project.afterImage}
                    alt="بعد از طراحی"
                    className="after-image"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>در حال بارگذاری پروژه‌ها...</p>
        )}
      </section>

      {/* بخش نمونه کار طراحی سایت */}
      <section className="sample-work-section">
        <div className="section-header">
          <h2>نمونه کار طراحی سایت</h2>
        </div>

        <div className="sample-card">
          <h3>نمونه کار طراحی سایت</h3>
          <p>
            در آینده‌ای نزدیک، این بخش با بهترین سایت‌های طراحی شده توسط
            مجموعه سیمرغ پر خواهد شد. با اعتماد شما و توانمندی تیم ما، این
            بخش به زودی شاهد پیشرفت‌های بیشتری خواهد بود.
          </p>
        </div>
      </section>
    </>
  );
}
