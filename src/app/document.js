import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          {/* وارد کردن فونت وزیرمتن از CDN */}
          <link
            href="https://cdn.jsdelivr.net/npm/fontsource-vazirmatn@5.2.8"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
