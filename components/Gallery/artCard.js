import Link from "next/link";
import Image from "next/image";
import cardStyle from "../../styles/artCard.module.scss";

const ServiCard = ({ title, cardIcon, imgLink }) => {
  return (
    <div className={cardStyle.wrapper}>
      <Link href={imgLink}>
        <div>
          <Image
            height="100px"
            width="100px"
            layout="responsive"
            src={cardIcon}
            draggable="false"
          />
          <div className={cardStyle.overlay}>
            <div className={cardStyle.text}> | {title} </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiCard;
