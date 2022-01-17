import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  useEffect(() => {
    Aos.init({ duration: 3000 });
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      emailjs
        .sendForm(
          'service_u2pik0p',
          'template_vb6yhcy',
          form.current,
          'user_MXPxeCsiO7GcRzjmt5AF3'
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
      toast.success('Email Sent', {
        icon: '📧',
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormValue({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [formErrors, isSubmit]);

  const sendEmail = e => {
    e.preventDefault();
    setFormErrors(validation(formValue));
    setIsSubmit(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validation = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = 'Please enter your name';
    }
    if (!values.email) {
      errors.email = 'Please enter your email';
    } else if (!regex.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!values.message) {
      errors.message = 'Message cannot be empty';
    }
    return errors;
  };

  return (
    <div id='contact'>
      <div data-aos='zoom-in' className='container'>
        <h1 className='z-2'>&lt; Contact Me /&gt;</h1>
        <div className='contact-container'>
          <div className='contact-img'></div>
          <div className='form-container'>
            <form ref={form} onSubmit={sendEmail}>
              <h1>Send me an email</h1>
              <div className='form-item'>
                <label htmlFor=''>Name</label>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={formValue.name}
                  onChange={handleChange}
                />
                <p>{formErrors.name}</p>
              </div>
              <div className='form-item'>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={formValue.email}
                  onChange={handleChange}
                />
                <p>{formErrors.email}</p>
              </div>
              <div className='form-item'>
                <label htmlFor=''>Message</label>
                <textarea
                  placeholder='Message'
                  name='message'
                  value={formValue.message}
                  onChange={handleChange}
                />
                <p>{formErrors.message}</p>
              </div>
              <div className='form-item'>
                <input className='btn' type='submit' value='Send' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
