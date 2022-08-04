import ContactForm from "../components/contactForm/contactForm";
import BussinessCard from "../components/bussinessCard/bussinessCard";

import style from "../pagesStyle/aboutPage.module.scss";

const About = () => {
  return (
    <div className={style.aboutPage}>
      <BussinessCard />
      <ContactForm />
    </div>
  );
};

export default About;
