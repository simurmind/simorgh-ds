"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
const Contact = () => {
  return (
    <>
      <Head>
        <title>ارتباط با ما | سیمرغ</title>
        <meta name="description" content="راه‌های ارتباطی با مجموعه سیمرغ برای مشاوره و خدمات طراحی سایت و دکوراسیون" />
      </Head>

      <div className="contact-section">
        <div className="section-header">
          <h2>ارتباط با ما</h2>
        </div>

        <p className="intro-text">
          در مجموعه سیمرغ ما همواره آماده‌ایم تا به شما در زمینه‌های مختلف کمک کنیم. از طراحی سایت‌های سفارشی تا دکوراسیون‌های منحصر به فرد، هر سوال یا نیازی که دارید، ما در کنار شما خواهیم بود.
        </p>

        <div className="contact-info">
          <p>
            اگر شما یک دانشجوی با استعداد هستید که به دنبال فرصت‌های آموزشی و پروژه‌های چالش‌برانگیز در دنیای طراحی و تکنولوژی می‌گردید، ما در مجموعه سیمرغ به توانمندی‌های شما احترام می‌گذاریم. همکاری با شما برای ما فرصتی است تا در کنار هم به موفقیت‌های بزرگ دست یابیم.
          </p>
        </div>

        <div className="contact-details">
          <h3>راه‌های ارتباطی:</h3>
          <ul>
            <li>
              <strong>تلفن:</strong> <a href="tel:+981234567890">۰۹۱۸۷۵۷۰۵۵</a>
            </li>
            <li>
              <strong>آیدی تلگرام:</strong> <a href="https://t.me/SimorghAdmin">@SimorghAdmin</a>
            </li>
            <li>
              <strong>ایمیل:</strong> <a href="mailto:ahmadreza.rezaee65@gmail.com">ahmadreza.rezaee65@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;