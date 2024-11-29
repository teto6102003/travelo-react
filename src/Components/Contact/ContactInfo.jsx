import React from 'react';
import './Contact.css';

const ContactInfo = () => {
  return (
    <div className="content-info-container">
      <div>
        <i className="fas fa-home"></i>
        <p><strong>Buttonwood, California.</strong><br /><span>Rosemead, CA 91770</span></p>
      </div>
      <div>
        <i className="fas fa-phone-alt"></i>
        <p><strong>+1 253 565 2365</strong><br /><span>Mon to Fri 9am to 6pm</span></p>
      </div>
      <div>
        <i className="fas fa-envelope"></i>
        <p><strong>support@colorlib.com</strong><br /><span>Send us your query anytime!</span></p>
      </div>
    </div>
  );
};

export default ContactInfo;
