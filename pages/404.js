import style from "../styles/pageNotfound.module.scss"
import Head from 'next/head';
import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <Head>
        <title> |= 404 </title>
        <meta name="keywords" content="my gallary containes all my art work." />
      </Head>
       <div className={style.container}>
       <Link href="/"> Take me home</Link>
       </div>
    </div>
  )
}

export default NotFound;