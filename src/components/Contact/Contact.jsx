import '../Contact/Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import React from 'react';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '29ca7c34-b1f0-4f21-9988-f48b8e07f38a');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Email Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send Us a Message{' '}
          <img
            src={msg_icon}
            alt=''
          />{' '}
        </h3>
        <p>
          Have a question or need assistance? We&apos;re here to help! Reach out
          to us via email or phone, and our friendly team will be happy to
          assist you.Your feedback is invaluable to us, so don&aspos;t hesitate
          to get in touch with any inquiries, suggestions, or concerns. We look
          forward to hearing from you and helping you on your tech journey!
        </p>
        <ul>
          <li>
            <img
              src={mail_icon}
              alt=''
            />{' '}
            techelevate@gmail.com
          </li>
          <li>
            <img
              src={phone_icon}
              alt=''
            />
            098765432347
          </li>
          <li>
            <img
              src={location_icon}
              alt=''
            />
            Address:C.No 78 green enclave Mohali Chandigarh
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            required
          />

          <label>Your Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            required
          />
          <label>Write your message here</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message here'
            required></textarea>
          <button
            type='submit'
            className='btn dark-btn'>
            Submit{' '}
            <img
              src={white_arrow}
              alt=''
            />{' '}
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
