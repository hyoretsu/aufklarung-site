import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export const siteName = 'Aufklärung - Revista de Filosofia';

class MyDocument extends Document {
 render(): ReactElement {
  return (
   <Html>
    <Head>
     <link rel="apple-touch-icon" sizes="60x60" href="apple-touch-icon-60x60.png" />
     <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png" />
     <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png" />
     <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
     <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
     <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f78f22" />
     <link rel="manifest" href="/site.webmanifest" />
     <meta name="application-name" content={siteName} />
     <meta name="apple-mobile-web-app-title" content={siteName} />
     <meta name="msapplication-TileColor" content="#f78f22" />
     <meta name="theme-color" content="#f78f22" />
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
