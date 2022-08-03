import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./modal.module.scss";
// import QrImage from "../../public/Assests/myQR.png";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });
  return (
    <div className={style.modal} onClick={props.onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalBody}>
          <Image
            priority={true}
            width="400px"
            height="400px"
            src={"/myQR.png"}
            alt={"QR CODE"}
            className={style.modalQr}
          />
        </div>
        <div className={style.modalFooter}>
          <button className={style.modalBtn} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
