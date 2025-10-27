"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function DecorationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#222";
      } else {
        header.style.backgroundColor = "#141414";
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
        <meta name="description" content="طراحی دکوراسیون داخلی و فضاهای مدرن با رعایت استانداردهای جهانی" />
        <meta name="keywords" content="دکوراسیون، طراحی داخلی، فضاهای مدرن، طراحی سفارشی" />
        <meta name="author" content="مجموعه سیمرغ" />
        <title>سیمرغ | طراحی دکوراسیون داخلی</title>
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
        {/* 🟣 بخش طراحی دکوراسیون */}
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
            طراحی دکوراسیون
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            در مجموعه سیمرغ ما به طراحی فضاهای داخلی و دکوراسیون‌های منحصر به فرد می‌پردازیم. هدف ما تبدیل فضاهای بی‌استفاده به محیط‌هایی جذاب و کاربردی است.
            <br />
            ما در سریع‌ترین زمان ممکن طراحی‌های حرفه‌ای و جذاب به شما تحویل می‌دهیم تا تجربه‌ای منحصر به فرد در فضای شما ایجاد کنیم.
          </p>
        </section>

        {/* 🟣 ویژگی‌های طراحی دکوراسیون */}
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
            ویژگی‌های طراحی دکوراسیون ما
          </h2>
          <ul
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
              listStyle: "none",
              padding: 0,
            }}
          >
            <li>طراحی سفارشی و متناسب با نیاز شما</li>
            <li>استفاده از متریال با کیفیت و مدرن</li>
            <li>ایجاد فضاهای کاربردی و بهینه برای شما</li>
            <li>رعایت استانداردهای بین‌المللی در طراحی</li>
          </ul>
        </section>

        {/* 🟣 بخش خوشحال می‌شویم که با شما همکاری کنیم */}
        <section
          style={{
            padding: "3rem",
            backgroundColor: "#141414",
            color: "#f5c518",
            marginTop: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",textAlign: "center",
          }}
        >
          {/* تایتل جدید */}
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              textAlign: "center",
              color: "#f5c518",
            }}
          >
            از همکاری با شما خوشحال خواهیم شد
          </h3>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "white",
              marginBottom: "2rem",
            }}
          >
            از همکاری با شما بسیار خوشحال خواهیم شد و به‌طور کامل در کنار شما خواهیم بود تا فضای دلخواه شما را طراحی کنیم.
            <br />
            در مجموعه سیمرغ همیشه آماده‌ایم تا در سریع‌ترین زمان ممکن و با بهترین کیفیت پروژه‌ها را انجام دهیم.
          </p>
        </section>
      </body>
    </html>
  );
}