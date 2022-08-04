import Head from "next/head";
import BussinessCard from "../components/bussinessCard/bussinessCard";
import ContactForm from "../components/contactForm/contactForm";
import style from "../components/bussinessCard/bussinessCard.module.scss";

const BusinessCard = () => {
  return (
    <div className={style.container}>
      <Head>
        <title> |= BusinessCard </title>
        <meta name="keywords" content="my gallary containes all my art work." />
      </Head>
      <BussinessCard />
      <ContactForm />
    </div>
  );
};
export default BusinessCard;
