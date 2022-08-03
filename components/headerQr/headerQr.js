import { useState } from "react";
import Image from "next/image";
import Modal from "../modal/modal";
import style from "./header.module.scss";

const HeaderQr = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={style.headerContainer}>
      <div className={style.infoBg}>
        <div className={style.videoContainer}>
          <video autoPlay loop muted src={"/BGVed.mp4"} type="video/mp4" />
        </div>
        <div className={style.InfoSecContent}></div>
        <div className={style.InfoSecContent}>
          <Image
            width="200px"
            height="200px"
            layout="fixed"
            src={"/myQR.png"}
            alt={"QR CODE"}
            priority={true}
            draggable={false}
            className={style.qrImage}
            onClick={() => setShow(true)}
          />
        </div>
        <Modal onClose={() => setShow(false)} show={show}></Modal>
      </div>
    </div>
  );
};
export default HeaderQr;

{
}
