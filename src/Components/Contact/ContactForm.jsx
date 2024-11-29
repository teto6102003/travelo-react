import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:hadirhussien14@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    
    <div className="content-form-container">
      <h2>Get in Touch</h2>
      <input type="text" placeholder="Enter Subject" name="subject" value={formData.subject} onChange={handleChange}/>
      <div className="content-half-width">
        <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange}/>
      </div>
      <div className="content-half-width">
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
      </div>
      <textarea placeholder="Enter Message" name="message" value={formData.message} onChange={handleChange}></textarea>
      <button type="button" onClick={handleSend}>SEND</button>
    </div>
  );
};

export default ContactForm;


