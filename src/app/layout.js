
"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
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

  const navLinks = [
    { href: "/", label: "صفحه اصلی" },
    {
      href: "#",
      label: "خدمات ما",
      hasSubmenu: true,
      submenu: [
        { href: "/web-design", label: "طراحی سایت" },
        { href: "/decoration", label: "دکوراسیون" },
      ],
    },

    { href: "/portfolio", label: "نمونه کار" },
    { href: "/contact", label: "ارتباط با ما" },
    { href: "/about", label: "درباره ما" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="google-site-verification" content="5U1W7lbKuQF6uA5q45pBvc1yK3EptfE97vLATDkiipE" />

        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <header className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
          <div className="container">

            <a href="/" className="logo">
              سیمرغ دیزاین
            </a>

            <nav className="nav-desktop">
              {navLinks.map((link) => (
                <div key={link.href} className="nav-item">
                  {link.hasSubmenu ? (
                    <>
                      <button
                        className="nav-link-btn"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {link.label}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"

                          style={{ marginRight: "4px" }}
                        >
                          <path d="M6 8L2 4h8z" />
                        </svg>
                      </button>
                      {isServicesOpen && (
                        <div
                          className="submenu"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {link.submenu.map((sublink) => (
                            <a
                              key={sublink.href}
                              href={sublink.href}
                              className="submenu-link"
                            >
                              {sublink.label}

                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className={`nav-link ${pathname === link.href ? "active" : ""}`}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <button
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!

isMenuOpen)}
              aria-label="منوی موبایل"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <div className={`menu-mobile ${isMenuOpen ? "open" : ""}`}>
          <nav>
            {navLinks.map((link, i) => (
              <div key={link.href} style={{ animationDelay: `${i * 0.05}s` }}>
                {link.hasSubmenu ? (
                  <>
                    <button
                      className={`mobile-link ${pathname === link.href ? "active" : ""}`}
                      onClick={() => 

setIsServicesOpen(!isServicesOpen)}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        style={{
                          transform: isServicesOpen ? "rotate(180deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path d="M8 10L4 6h8z" />
                      </svg>
                    </button>
                    <div className={`mobile-submenu ${isServicesOpen ? "open" : ""}`}>
                      {link.submenu.map((sublink) => (

                        <a
                          key={sublink.href}
                          href={sublink.href}
                          className="mobile-submenu-link"
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={`mobile-link ${pathname === link.href ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

        </div>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-center">
              <div className="footer-logo">
                <h3>سیمرغ دیزاین</h3>
              </div>
              
              <div className="footer-links">
                <a href="/portfolio">مشاهده نمونه کارها</a>
                <a href="/web-design">طراحی سایت</a>
                <a href="/decoration">دکوراسیون</a>
                <a href="/contact">دعوت به همکاری</a>
              </div>

              <div className="footer-phone">

                <a href="tel:09187634731">09187634731</a>
              </div>

              <div className="footer-links">
                <a href="/contact">درباره ما</a>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} مجموعه سیمرغ دیزاین | طراحی و توسعه توسط احمدرضا رضائی
              </p>
            </div>
          </div>
        </footer>

        <style jsx>{`
          .header {

            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1000;
            background: rgba(10, 10, 10, 0.95);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .header.visible {
            transform: translateY(0);
          }

          .header.hidden {
            transform: translateY(-100%);
          }

          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0.75rem 1.5rem;

            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 1.25rem;
            font-weight: 700;
            color: #f5c518;
            text-decoration: none;
            letter-spacing: 0.5px;
            transition: color 0.3s;
          }

          .logo:hover {
            color: #ffd700;
          }

          .nav-desktop {
            display: none;
            gap: 0.25rem;
            align-items: center;

          }

          .nav-item {
            position: relative;
          }

          .nav-link,
          .nav-link-btn {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.875rem;
            padding: 0.5rem 0.875rem;
            border-radius: 6px;
            transition: all 0.3s;
            white-space: nowrap;
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          .nav-link:hover,
          .nav-link-btn:hover,
          .nav-link.active {
            color: #f5c518;
          }

          .submenu {
            position: absolute;
            top: 100%;
            right: 0;
            background: rgba(10, 10, 10, 0.98);
            padding: 0.75rem;
            min-width: 180px;
            margin-top: 0.5rem;
            border-radius: 8px;
            z-index: 1001;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            opacity: 0;
            animation: fadeInSubmenu 0.3s ease forwards;
          }

          @keyframes fadeInSubmenu {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .submenu-link {
            display: block;
            color: #fff;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            padding: 0.5rem 0.875rem;
            border-radius: 6px;
            transition: all 0.3s ease;
            text-align: right;

            margin-bottom: 0.25rem;
          }

          .submenu-link:last-child {
            margin-bottom: 0;
          }

          .submenu-link:hover {
            color: #f5c518;
            background: rgba(245, 197, 24, 0.1);
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            gap: 4px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 6px;
            z-index: 1001;
          }

          .hamburger span {
            width: 22px;
            height: 2px;
            background: #f5c518;
            border-radius: 2px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hamburger.open span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
          }

          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }

          .hamburger.open span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);

          }

          .menu-mobile {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(10, 10, 10, 0.98);
            z-index: 999;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
          }

          .menu-mobile.open {
            right: 0;
          }

          .menu-mobile nav {
            padding: 4.5rem 1.5rem 2rem;
            display: flex;

            flex-direction: column;
            gap: 0.5rem;
          }

          .mobile-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            padding: 0.875rem 1rem;
            border-radius: 0;
            background: none;
            transition: all 0.3s;
            opacity: 0;
            animation: fadeIn 0.4s ease forwards;
            border: none;
            cursor: pointer;

            text-align: right;
          }

          .mobile-link:hover,
          .mobile-link.active {
            color: #f5c518;
          }

          .mobile-submenu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.3s ease;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 0;
            padding-right: 1rem;
            opacity: 0;
          }

          .mobile-submenu.open {
            max-height: 300px;

            margin-top: 0.75rem;
            opacity: 1;
          }

          .mobile-submenu-link {
            display: block;
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            padding: 0.875rem 1rem;
            border-radius: 0;
            background: none;
            transition: all 0.3s ease;
            text-align: right;
            border: none;
          }

          .mobile-submenu-link:hover {
            color: #f5c518;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(10px);
            }
          }

          .main {
            min-height: calc(100vh - 300px);
            padding: 4.5rem 1rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          .footer {
            background: linear-gradient(180deg, #0a0a0a 0%, #111 100%);
            margin-top: 3rem;

          }

          .footer .container {
            display: block;
            padding: 3rem 1.5rem 2rem;
          }

          .footer-center {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .footer-logo h3 {
            color: #f5c518;
            font-size: 1.5rem;
            margin: 0;
            text-align: center;
          }

          .footer-links {

            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .footer-links a {
            color: #fff;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 400;
          }

          .footer-links a:hover {
            color: #f5c518;
          }

          .footer-phone a {
            color: #fff;
            text-decoration: none;
            font-size: 1.25rem;
            font-weight: 500;

            letter-spacing: 1px;
          }

          .footer-phone a:hover {
            color: #f5c518;
          }

          .footer-bottom {
            text-align: center;
            padding: 1rem 0 0;
            margin-top: 2rem;
            border-top: 1px solid rgba(245, 197, 24, 0.1);
            color: #fff;
            font-size: 0.8rem;
          }

          .footer-bottom p {
            margin: 0;
          }

          @media (min-width: 768px) {
            .container {

              padding: 0.875rem 2rem;
            }

            .logo {
              font-size: 1.35rem;
            }

            .main {
              padding: 5rem 2rem 3rem;
            }

            .footer .container {
              padding: 3.5rem 2rem 2rem;
            }

            .footer-links {
              gap: 2.5rem;
            }

            .menu-mobile nav {
              padding: 5rem 2rem 2rem;
            }

          }

          @media (min-width: 1024px) {
            .nav-desktop {
              display: flex;
            }

            .hamburger,
            .menu-mobile {
              display: none;
            }

            .logo {
              font-size: 1.5rem;
            }

            .footer-links {
              gap: 3rem;
            }
          }

          :global(body) {

            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            color: #fff;
            font-family: "Vazirmatn", sans-serif;
            min-height: 100vh;
            overflow-x: hidden;
          }

          :global(html) {
            scroll-behavior: smooth;
          }

          :global(*) {
            box-sizing: border-box;
          }
        `}</style>
      </body>
    </html>
  );
}