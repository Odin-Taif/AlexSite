import Head from "next/head";
import StateProvider from "../pages/useContextFile";
import HomePage1 from "../components/homePage1";
import HomePage2 from "../components/homePage2";

export default function Home() {
  return (
    <>
      <Head>
        <title> |= main </title>
        <meta name="keywords" content="web development" />
      </Head>

      <HomePage1 />

      {/* <HomePage2/>  */}
    </>
  );
}
