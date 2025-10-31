
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "سیمرغ دیزاین",
    alternateName: "Simorgh Design",
    url: "https://simorghdesign.ir",
    logo: "https://simorghdesign.ir/images/Logo.jpg",
    description: "طراحی سایت‌های مدرن، سریع و کاربرپسند با استفاده از جدیدترین تکنولوژی‌های روز دنیا",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // بستن منو هنگام تغییر مسیر
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // جلوگیری از اسکرول body وقتی منو باز است
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/web-design", label: "طراحی سایت" },
    { href: "/decoration", label: "دکوراسیون" },
    { href: "/portfolio", label: "نمونه کار" },
    { href: "/contact", label: "ارتباط با ما" },
    { href: "/about", label: "درباره ما" },
  ];

  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>سیمرغ | طراحی سایت و دکوراسیون</title>
        <meta
          name="description"
          content="مجموعه سیمرغ: تلفیق طراحی مدرن با اصالت ایرانی در سایت و دکوراسیون داخلی."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="5U1W7lbKuQF6uA5q45pBvc1yK3EptfE97vLATDkiipE" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simorghdesign.ir" />
        <meta property="og:title" content="سیمرغ | طراحی سایت و دکوراسیون" />
        <meta property="og:description" content="طراحی سایت‌های مدرن، سریع و کاربرپسند با استفاده از جدیدترین تکنولوژی‌های روز دنیا" />
        <meta property="og:image" content="https://simorghdesign.ir/images/Logo.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سیمرغ | طراحی سایت و دکوراسیون" />
        <meta name="twitter:description" content="طراحی سایت‌های مدرن، سریع و کاربرپسند با استفاده از جدیدترین تکنولوژی‌های روز دنیا" />
        <meta name="twitter:image" content="https://simorghdesign.ir/images/Logo.jpg" />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        {/* Header */}
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="header-container">
            {/* Logo */}
            <Link href="/" className="logo">
              سیمرغ
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={pathname === link.href ? "active" : ""}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hamburger Menu Button */}
            <button
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="منوی موبایل"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "active" : ""}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <main className="main-content">{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>سیمرغ</h3>
              <p>تلفیق طراحی مدرن با اصالت ایرانی</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>دسترسی سریع</h4>
                <ul>
                  <li>
                    <Link href="/web-design">طراحی سایت</Link>
                  </li>
                  <li>
                    <Link href="/decoration">دکوراسیون</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">نمونه کار</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>ارتباط با ما</h4>
                <ul>
                  <li>
                    <Link href="/contact">تماس</Link>
                  </li>
                  <li>
                    <Link href="/about">درباره ما</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} مجموعه سیمرغ | طراحی و توسعه توسط احمدرضا رضائی
            </p>
          </div>
        </footer>

        <style jsx>{`
          /* ============== HEADER STYLES ============== */
          .header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(20, 20, 20, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(245, 197, 24, 0.1);
            transition: all 0.3s ease;
          }

          .header.scrolled {
            background: rgba(20, 20, 20, 0.98);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            border-bottom-color: rgba(245, 197, 24, 0.3);
          }

          .header-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1.2rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          /* ============== LOGO ============== */
          .logo {
            font-size: 2rem;
            font-weight: 700;
            color: #f5c518;
            text-decoration: none;
            letter-spacing: 2px;
            transition: all 0.3s ease;
            position: relative;
          }

          .logo::after {
            content: "";
            position: absolute;
            bottom: -5px;
            right: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #f5c518, #ffd700);
            transition: width 0.3s ease;
          }

          .logo:hover::after {
            width: 100%;
          }

          /* ============== DESKTOP NAVIGATION ============== */
          .desktop-nav {
            display: none;
          }

          .desktop-nav ul {
            display: flex;
            list-style: none;
            gap: 0.5rem;
            margin: 0;
            padding: 0;
          }

          .desktop-nav a {
            color: #f5c518;
            text-decoration: none;
            font-weight: 600;
            padding: 0.7rem 1.2rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
            white-space: nowrap;
          }

          .desktop-nav a::before {
            content: "";
            position: absolute;
            bottom: 0;
            right: 50%;
            width: 0;
            height: 2px;
            background: #f5c518;
            transition: all 0.3s ease;
          }

          .desktop-nav a:hover,
          .desktop-nav a.active {
            background: rgba(245, 197, 24, 0.1);
            color: #ffd700;
          }

          .desktop-nav a:hover::before,
          .desktop-nav a.active::before {
            width: 80%;
            right: 10%;
          }

          /* ============== HAMBURGER MENU ============== */
          .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 8px;
            z-index: 1001;
          }

          .hamburger span {
            width: 28px;
            height: 3px;
            background: #f5c518;
            border-radius: 3px;
            transition: all 0.3s ease;
          }

          .hamburger.open span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
          }

          .hamburger.open span:nth-child(2) {
            opacity: 0;
            transform: translateX(20px);
          }

          .hamburger.open span:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -8px);
          }

          /* ============== MOBILE NAVIGATION ============== */
          .mobile-nav-overlay {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(10px);
            z-index: 999;
            transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            overflow-y: auto;
          }

          .mobile-nav-overlay.open {
            right: 0;
          }

          .mobile-nav {
            padding: 6rem 2rem 2rem;
          }

          .mobile-nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .mobile-nav a {
            display: block;
            color: #f5c518;
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: 600;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            transition: all 0.3s ease;
            border: 1px solid rgba(245, 197, 24, 0.2);
            background: rgba(255, 255, 255, 0.02);
          }

          .mobile-nav a:hover,
          .mobile-nav a.active {
            background: rgba(245, 197, 24, 0.15);
            border-color: #f5c518;
            transform: translateX(-5px);
          }

          /* ============== MAIN CONTENT ============== */
          .main-content {
            min-height: calc(100vh - 400px);
            padding: 2rem 1rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          /* ============== FOOTER ============== */
          .footer {
            background: linear-gradient(180deg, #0a0a0a 0%, #111 100%);
            border-top: 1px solid rgba(245, 197, 24, 0.2);
            margin-top: 4rem;
          }

          .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 3rem 2rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-brand h3 {
            color: #f5c518;
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }

          .footer-brand p {
            color: #999;
            font-size: 0.95rem;
          }

          .footer-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-column h4 {
            color: #f5c518;
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .footer-column ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-column a {
            color: #999;
            text-decoration: none;
            display: block;
            padding: 0.5rem 0;
            transition: all 0.3s ease;
          }

          .footer-column a:hover {
            color: #f5c518;
            transform: translateX(-5px);
          }

          .footer-bottom {
            text-align: center;
            padding: 1.5rem 2rem;
            border-top: 1px solid rgba(245, 197, 24, 0.1);
            color: #666;
            font-size: 0.9rem;
          }

          /* ============== RESPONSIVE TABLET ============== */
          @media (min-width: 768px) {
            .header-container {
              padding: 1.5rem 3rem;
            }

            .main-content {
              padding: 3rem 2rem;
            }

            .footer-content {
              grid-template-columns: 1.5fr 1fr;
              padding: 4rem 3rem;
            }

            .footer-links {
              grid-template-columns: 1fr 1fr;
            }

            .mobile-nav a {
              font-size: 1.5rem;
            }
          }

          /* ============== RESPONSIVE DESKTOP ============== */
          @media (min-width: 1024px) {
            .desktop-nav {
              display: block;
            }

            .hamburger {
              display: none;
            }

            .mobile-nav-overlay {
              display: none;
            }

            .logo {
              font-size: 2.2rem;
            }

            .footer-content {
              grid-template-columns: 2fr 1fr;
            }
          }

          /* ============== BODY STYLES ============== */
          :global(body) {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            color: #f5c518;
            font-family: "Vazirmatn", sans-serif;
            min-height: 100vh;
            overflow-x: hidden;
          }

          :global(html) {
            scroll-behavior: smooth;
          }

          /* ============== ANIMATIONS ============== */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mobile-nav ul li {
            animation: fadeIn 0.5s ease forwards;
          }

          .mobile-nav ul li:nth-child(1) {
            animation-delay: 0.1s;
          }
          .mobile-nav ul li:nth-child(2) {
            animation-delay: 0.15s;
          }
          .mobile-nav ul li:nth-child(3) {
            animation-delay: 0.2s;
          }
          .mobile-nav ul li:nth-child(4) {
            animation-delay: 0.25s;
          }
          .mobile-nav ul li:nth-child(5) {
            animation-delay: 0.3s;
          }
          .mobile-nav ul li:nth-child(6) {
            animation-delay: 0.35s;
          }
        `}</style>
      </body>
    </html>
  );
}
