"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <meta name="description" content="مجموعه سیمرغ: طراحی مدرن و سئو شده سایت و دکوراسیون" />
        <meta name="keywords" content="طراحی سایت، دکوراسیون، سئو، طراحی مدرن، طراحی فروشگاهی" />
        <meta name="author" content="مجموعه سیمرغ" />
        <title>سیمرغ | طراحی سایت و دکوراسیون</title>
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
        {/* 🟣 بخش طراحی سایت */}
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
            طراحی سایت سئو شده
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            طراحی سایت‌هایی که از ابتدا با رعایت اصول سئو ساخته می‌شوند تا در موتورهای جستجو رتبه بالاتری داشته باشند. این سایت‌ها شامل ساختار مناسب URL‌ها، متا تگ‌ها، بهینه‌سازی تصاویر و محتوا هستند.
            <br />
            مدت زمان طراحی: ۷ تا ۱۵ روز
          </p>
        </section>

        {/* 🟣 بخش طراحی سایت فروشگاهی */}
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
            طراحی سایت فروشگاهی
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            طراحی سایت‌های فروشگاهی با سیستم‌های پرداخت آنلاین، سبد خرید، مدیریت محصولات و موجودی به شما کمک می‌کند که به راحتی محصولات خود را بفروشید. این سایت‌ها باید به گونه‌ای طراحی شوند که تجربه خرید مشتریان را بهبود دهند و امنیت آن‌ها تضمین شود.
            <br />
            مدت زمان طراحی: ۷ تا ۱۲ روز
          </p>
        </section>

        {/* 🟣 بخش طراحی سایت شرکتی */}
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
            طراحی سایت شرکتی
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            طراحی سایت‌های شرکتی برای کسب‌وکارهایی است که می‌خواهند خدمات خود را به بهترین نحو معرفی کنند. این سایت‌ها معمولاً ساده و کاربرپسند هستند، اما می‌توانند ویژگی‌های خاصی مانند فرم‌های ارتباطی، گالری‌ها و بخش‌های اختصاصی داشته باشند.
            <br />
            مدت زمان طراحی: ۳ تا ۷ روز
          </p>
        </section>

        {/* 🟣 بخش طراحی سایت خبری و رسانه‌ای */}
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
            طراحی سایت خبری و رسانه‌ای
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            طراحی سایت‌های خبری برای رسانه‌ها و سازمان‌هایی است که نیاز به انتشار روزانه اخبار و مطالب دارند. این سایت‌ها به سیستم مدیریت محتوا (CMS) پیشرفته نیاز دارند و باید به راحتی قابلیت به‌روزرسانی و انتشار اخبار را داشته باشند. این سایت‌ها معمولاً سرعت بارگذاری بالا و دسترسی آسان به محتوای جدید دارند.
            <br />
            مدت زمان طراحی: ۷ تا ۱۵ روز
          </p>
        </section>

        {/* 🟣 بخش طراحی سایت شخصی یا بلاگ */}
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
            طراحی سایت شخصی یا بلاگ
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            این نوع سایت‌ها برای افرادی طراحی می‌شوند که می‌خواهند محتوای شخصی خود را به اشتراک بگذارند. طراحی این سایت‌ها ساده و سریع است و معمولاً به‌طور خاص برای نویسندگان و بلاگرها ساخته می‌شوند تا مقالات و تجربیات خود را به راحتی منتشر کنند.
            <br />
            مدت زمان طراحی: ۲ تا ۳ روز
          </p>
        </section>

        {/* 🟣 بخش تخفیف دانشجویی */}
        <section
          style={{
            padding: "3rem",
            backgroundColor: "#222",
            color: "#f5c518",
            marginTop: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            تخفیف ویژه برای دانشجویان و دانش‌آموزان
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              color: "white",
              backgroundColor: "#f5c518",padding: "1rem",
              borderRadius: "5px",
            }}
          >
            برای تمامی دانشجویان و دانش‌آموزان تخفیف ویژه‌ای در نظر گرفته‌ایم. برای دریافت این تخفیف کافی است که هنگام ثبت سفارش سایت یا دکوراسیون خود، مدارک تحصیلی خود را ارسال کنید و از ۱۰٪ تخفیف بهره‌مند شوید.
          </p>
        </section>

        {/* 🟣 بخش ترغیب به همکاری */}
        <section
          style={{
            padding: "3rem",
            backgroundColor: "#222",
            color: "#f5c518",
            marginTop: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            خوشحال می‌شویم که با شما همکاری کنیم
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            مجموعه سیمرغ با سال‌ها تجربه در طراحی سایت و دکوراسیون آماده همکاری با شما است. ما به شما کمک می‌کنیم تا سایت و دکوراسیون خود را به بهترین نحو طراحی و پیاده‌سازی کنید. خوشحال می‌شویم که این همکاری را آغاز کنیم و به رشد برند شما کمک کنیم.
          </p>
        </section>
      </body>
    </html>
  );
}
