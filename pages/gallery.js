import Head from 'next/head';
import ArtSelctions from "../components/Gallery/ArtSelctions";
import {
  servicesLineOne,
  servicesLineTwo,
  servicesLineThree,
  liberatedT,
} from "../components/Gallery/artData";
import Viewmore from "../components/Viewmore";
import galleryStyle from "../styles/gallery.module.scss";

const Gallery = (props) => {
  return (
    <>
      <Head>
        <title> |= Gallery </title>
        <meta name="keywords" content="my gallary containes all my art work." />
      </Head>
      <div className={galleryStyle.container}>
        <ArtSelctions {...props.servicesLineOne} />
      </div>
      {/* <Viewmore servicesLineTwo={props.servicesLineTwo} /> */}
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {
      liberatedT: liberatedT,
      servicesLineOne: servicesLineOne,
      servicesLineTwo: servicesLineTwo,
      servicesLineThree: servicesLineThree,
    },
  };
}

export default Gallery;
