"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../app/globals.css";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#222"; // تغییر رنگ هدر به خاکستری
      } else {
        header.style.backgroundColor = "#141414"; // برگشت به رنگ اصلی
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <Head>
        <title>سیمرغ | طراحی سایت و دکوراسیون</title>
        <meta
          name="description"
          content="مجموعه سیمرغ: تلفیق طراحی مدرن با اصالت ایرانی در سایت و دکوراسیون داخلی."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        style={{
          margin: 0,
          backgroundColor: "#0b0b0b",
          color: "#f5c518",
          fontFamily: "'Vazirmatn', sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* هدر */}
        <header
          style={{
            backgroundColor: "#141414",
            padding: "1rem 2rem",
            borderBottom: "1px solid #333",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease", // انیمیشن تغییر رنگ
          }}
        >
          {/* محتوی هدر */}
        </header>

        {/* اهداف مجموعه سیمرغ */}
        <section
          style={{
            padding: "3rem",
            backgroundColor: "#141414",
            color: "#f5c518",
            marginTop: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            اهداف مجموعه سیمرغ
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            مجموعه سیمرغ با هدف تبدیل شدن به یکی از بهترین تیم‌های استارتاپی دنیا، در تلاش است تا با همکاری با دانشجویان ایرانی از تمامی دانشگاه‌ها و رشته‌ها، فضایی نوآورانه و پویا ایجاد کند.
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            هدف ما این است که این استعدادهای جوان و مشتاق، به همراه مجموعه سیمرغ، به رشد و پیشرفت متقابل برسند. این همکاری‌ها به گونه‌ای طراحی شده‌اند که ضمن بهره‌مندی از توانمندی‌های فردی، به توسعه هدفمند و تحقق رویاهای بزرگ مشترک کمک کنند.
          </p>
        </section>

        {/* خدمات ما */}
        <section
          style={{
            padding: "3rem",
            backgroundColor: "#141414",
            color: "#f5c518",
            marginTop: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          <h2
          style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            خدمات ما
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {/* طراحی سایت */}
            <div
              style={{
                backgroundColor: "#333",
                padding: "2rem",
                borderRadius: "8px",
                width: "48%",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#f5c518",
                  backgroundColor: "#333",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                طراحی سایت
              </h3>
              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  marginTop: "1.5rem",
                }}
              >
                طراحی سایت‌های مدرن، سریع و کاربرپسند با استفاده از جدیدترین تکنولوژی‌های روز دنیا.
              </p>
            </div>

            {/* طراحی دکوراسیون */}
            <div
              style={{
                backgroundColor: "#333",
                padding: "2rem",
                borderRadius: "8px",
                width: "48%",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#f5c518",
                  backgroundColor: "#333",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                طراحی دکوراسیون
              </h3>
              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  marginTop: "1.5rem",
                }}
              >
                طراحی فضاهای داخلی منحصر به فرد و کاربردی که به محیط شما شخصیت می‌دهند و آن را به یک اثر هنری تبدیل می‌کنند.
              </p>
            </div>
          </div>
        </section>

        {/* ارتباط با کارشناسان */}
        <section
          style={{
            padding: "3rem",
            backgroundColor: "#222",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            marginTop: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#f5c518",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            ارتباط با کارشناسان
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
              backgroundColor: "#f5c518",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            برای مشاوره و دریافت اطلاعات بیشتر درباره خدمات طراحی سایت و دکوراسیون، می‌توانید از راه‌های ارتباطی زیر استفاده کنید:
          </p>
          <ul
            style={{
              listStyleType: "none",padding: 0,
              textAlign: "center",
            }}
          >
            <li style={{ marginBottom: "1rem" }}>
              <strong>شماره تلفن:</strong> <a href="tel:09187570577" style={{ color: "#f5c518" }}>۰۹۱۸۷۵۷۰۵۷۷</a>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <strong>آیدی تلگرام:</strong> <a href="https://t.me/SimorghAdmin" style={{ color: "#f5c518" }}>@SimorghAdmin</a>
            </li>
          </ul>
        </section>
      </body>
    </html>
  );
}
