import footerStyle from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <span>Artinote © {new Date().getUTCFullYear()} All right reserved.</span>
      <span> Developed by | Levantisk.© </span>
    </footer>
  );
};
