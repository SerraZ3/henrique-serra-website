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
      </Head>

      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Main;
