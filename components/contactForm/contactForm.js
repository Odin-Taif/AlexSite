import { useRef } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import emailjs from "emailjs-com";
import style from "./contactForm.module.scss";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7054qdy",
        "template_q5iskbq",
        form.current,
        "dWlURBGetKYlEjW64"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <div className={style.contactContainer}>
        <div className={style.contactForm}>
          <form className={style.form} ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Type Your Full Name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Type Your Email"
              required
            />
            <input
              type="text"
              name="text"
              placeholder="Type your business field"
              required
            />
            <textarea
              name="message"
              placeholder="Your Description"
              rows="7"
              required
            ></textarea>
            <button type="submit" className={style.formBtn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
