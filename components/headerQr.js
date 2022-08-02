import headerStyle from "../styles/header.module.scss";

const HeaderQr = () => {
  return (
    <div className={headerStyle.headerContainer}>
      <div className={headerStyle.infoBg}>
        <video autoPlay loop muted src={"/BGVed.mp4"} type="video/mp4" />
        <div className={headerStyle.InfoSecContent}></div>
        <div className={headerStyle.InfoSecContent}>
          <img src={"/myQR.png"} />
        </div>
      </div>
    </div>
  );
};
export default HeaderQr;
