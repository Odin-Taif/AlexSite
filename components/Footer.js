import footerStyle from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div>Artinote © {new Date().getUTCFullYear()} All right reserved.</div>
      <span> Developed by | Levantisk.© </span>
    </footer>
  );
};

export default Footer;
