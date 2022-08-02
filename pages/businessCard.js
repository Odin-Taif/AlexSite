import Head from 'next/head';
import QrContact from '../components/ContacQR/QrContact';
import HireForm from '../components/HireForm';
import businessCardStyle from '../styles/businessCard.module.scss'

const BusinessCard = () => {
  return (
    <div className={businessCardStyle.container} > 
      <Head>
        <title> |= BusinessCard </title>
        <meta name="keywords" content="my gallary containes all my art work." />
      </Head>
          <QrContact/>
          <HireForm/>   
    </div>
  )
}
export default BusinessCard;