import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Farm2Fridge - Admin Portal</title>
        <meta name="description" content="Farm2Fridge eGroceryMart Admin Portal - Manage your grocery business efficiently" />
        <meta name="keywords" content="Farm2Fridge, Grocery, Admin, eCommerce, Fresh Food" />
        <meta name="author" content="Farm2Fridge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 