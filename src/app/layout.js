"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // استفاده از useEffect برای اعمال تغییرات استایل فقط در سمت کلاینت
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#333"; // تغییر رنگ هدر در اسکرول
      } else {
        header.style.backgroundColor = "#141414"; // رنگ اولیه هدر
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <html lang="fa" dir="rtl">
      <Head>
        <title>سیمرغ | طراحی سایت و دکوراسیون</title>
        <meta
          name="description"
          content="مجموعه سیمرغ: تلفیق طراحی مدرن با اصالت ایرانی در سایت و دکوراسیون داخلی."
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
          background: "linear-gradient(45deg, #111, #333)", // افکت پس‌زمینه
        }}
      >
        <header
          style={{
            backgroundColor: "#141414",
            padding: "1.5rem 2rem",
            borderBottom: "1px solid #444", // اضافه کردن حاشیه‌ مشکی‌تر
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // سایه‌ی برجسته‌تر
            transition: "background-color 0.3s ease",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#f5c518",
              letterSpacing: "1px",
              transition: "transform 0.3s ease",
            }}
          >
            سیمرغ
          </div>
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "2rem",
                margin: 0,
                padding: 0,
                transition: "all 0.3s ease",
              }}
              className={isMenuOpen ? "show" : "hide"}
            >
              <li>
                <Link href="/" style={linkStyle}>
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/web-design" style={linkStyle}>
                  طراحی سایت
                </Link>
              </li>
              <li>
                <Link href="/decoration" style={linkStyle}>
                  طراحی دکوراسیون
                </Link>
              </li>
              <li>
                <Link href="/portfolio" style={linkStyle}>
                  نمونه کار
                </Link>
              </li>
              <li>
                <Link href="/contact" style={linkStyle}>
                  ارتباط با ما
                </Link>
              </li>
              <li>
                <Link href="/about" style={linkStyle}>
                  درباره ما
                </Link>
              </li>
            </ul>
            <button
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "2rem",
                color: "#f5c518",
                transition: "transform 0.3s ease",
              }}
              className="hamburger-menu"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </nav>
        </header>{/* main content */}

        <main style={{ flex: 1, padding: "3rem 2rem" }}>{children}</main>
        <footer
          style={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "#111",
            borderTop: "1px solid #222",
            color: "#999",
            fontSize: "1rem",
            boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          © {new Date().getFullYear()} مجموعه سیمرغ | طراحی و توسعه توسط احمدرضا رضائی
        </footer>
      </body>
    </html>
  );
}

const linkStyle = {
  color: "#f5c518",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
  padding: "5px 0",
  borderBottom: "2px solid transparent", // لینک بدون حاشیه
};

linkStyle["&:hover"] = {
  color: "#fff",
  borderBottom: "2px solid #fff", // لینک با حاشیه سفید هنگام هاور
};
