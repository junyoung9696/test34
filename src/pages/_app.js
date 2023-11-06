import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>예비창업 패키지</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
