import Head from "next/head";
import { useRouter } from "next/router";
import DetailPage from "./detailpage";

import {
  servicesLineOne,
  // servicesLineTwo,
  // servicesLineThree,
  // liberatedT,
} from "../../components/Gallery/artData";

const DynamicComponent = () => {
  const router = useRouter();
  const dataID = router.query.storyID;
  return (
    <div>
      <Head>
        <title> | Stories </title>
        <meta name="keywords" content="my gallary containes all my art work." />
      </Head>
      <div>
        {(servicesLineOne.cards || []).map((card) => {
          return card.id == dataID ? (
            <DetailPage key={card.id} {...card} />
          ) : null;
        })}
      </div>
    </div>
  );
};
export default DynamicComponent;
