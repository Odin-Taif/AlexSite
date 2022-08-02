import  {useRef} from 'react';
import{MdOutlineMailOutline} from 'react-icons/md';
import {BsWhatsapp,} from 'react-icons/bs';
import{BiPhoneCall} from'react-icons/bi';
import emailjs from 'emailjs-com';
import hireStyle from '../styles/hireForm.module.scss';


const HireForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7054qdy', 'template_q5iskbq', form.current, 'dWlURBGetKYlEjW64')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
        <section id='contact'>
                    <div className={hireStyle.contact__container} >
                      <div className={hireStyle.contact__options}>
                        <h1> Descripe your business needs and I will take you on a visual trip!</h1>
                      </div> 
                      <div className={hireStyle.contact__form}>
                        <form className={hireStyle.form}  ref={form} onSubmit={sendEmail}>
                          <input type="text" name='name' placeholder='Type Your Full Name' required/>
                          <input type="email" name='Email' placeholder='Type Your Email' required/>
                          <input type="text" name='text' placeholder='Type your business field' required/>
                          <textarea name="message" placeholder='Your Description'  rows="7" required></textarea>
                          <button type='submit' className={hireStyle.btn} >Send</button>
                        </form>
                      </div>
                      
                    </div>
        </section>
  )
}

export default HireForm;