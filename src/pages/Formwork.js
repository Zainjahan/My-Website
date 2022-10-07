import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../components/style.css';

export const Formwork = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t1im6bq', 'template_opq3r8p', form.current, 'jjGozfQXkdwL7b9nH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className='head1' >Let's Talk!</h2>
      <p className='head2'>Tell us about your needs and challenges. Together, we can craft a powerful solution for your business.
      </p>
      <label className='head3' >What do you want to build? </label><br />
      <div className='head4'>
        <span className='new'>
        <input type="radio" value="Mobile App" />
        <label >Mobile App
        </label>
        </span>
        <span className='new'>
        <input type="radio" value="Website" />
        <label >Website</label>
        </span>
        <span className='new'>
        <input type="radio" value="Customization" /></span>
        <span>
        <label >Customization</label>
        <br/>
        <input type="radio" value="MVP Development" />
        </span>
        <span  className='new'>
        <label >MVP Development
        </label>
        <input type="radio" value="Startup Incubation" />
        </span>
        <span className='new'>
        <label >Startup Incubation
        </label>
        </span>
        <span className='new'>
        <input type="radio" value="Product Development" />
        <label >Product Development
        </label></span></div>
  
<br/>      <div className='head5'>
        <h1 className='head5'>Tell us briefly about your idea and requirements</h1>
        <textarea name="message" rows="10" cols="80">
        </textarea></div><br />
      <div className='head5'>
        <h1 className='head5'>When are you available for a short discovery call?
        </h1>
        <input className='head7' type="date" id="birthday" name="birthday" /><br /></div> 
      <h1 className='head5'>Your contact details
      </h1>

      <input type="text" name="user_name" placeholder='Name' />
      <input type="email" name="user_email" placeholder='Email' />
      <input type="Contact Number" name="user_contactnumber" placeholder='Contact Number' />
      <div class="row">

        <input type="submit" value="Send" />
      </div>
    </form>
  )
};