import Head from "next/head";

import HomePage1 from "../components/homePages/homePage1";

export default function Home() {
  return (
    <>
      <Head>
        <title> |= main </title>
        <meta name="keywords" content="web development" />
      </Head>
      <HomePage1 />
    </>
  );
}
