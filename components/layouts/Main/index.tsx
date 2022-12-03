import Head from "next/head";
import React from "react";

// import { Container } from './styles';
interface IProps {
  children: JSX.Element | null;
  title?: string;
}
const Main: React.FC<IProps> = ({
  children,
  title = "Henrique Serra Soluções",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link> */}
      </Head>

      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Main;
