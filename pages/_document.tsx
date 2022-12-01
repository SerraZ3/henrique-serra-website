import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

// import { Container } from './styles';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
