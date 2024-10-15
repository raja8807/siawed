import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts/fonts";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SIAWED</title>
      </Head>
      <main className={`${fonts.font1} ${styles.body}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
