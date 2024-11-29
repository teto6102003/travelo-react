import React, { useState } from 'react';
import "./SubscribeSection.css"; 

const Subscribe = () => {

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hadirhussien14@gmail.com?subject=Newsletter Subscription&body=${encodeURIComponent(
      `Please add me to your newsletter list. My email is: ${email}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="Subscribe-container">
        <h2>Subscribe Our Newsletter</h2>
        <p>
          Subscribe newsletter to get offers and about new places to discover.
        </p>
        <form onSubmit={handleSubscribe}>
          <div>
            <input placeholder="Your mail" type="email" value={email} onChange={handleEmailChange} />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
  );
};

export default Subscribe;
