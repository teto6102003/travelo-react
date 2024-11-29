import React, { useState } from "react";
import "./DestinationDetails.css"; 

const DestinationDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const mailtoLink = `mailto:hadirhussien14@gmail.com?subject=Join Inquiry&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hadirhussien14@gmail.com?subject=Newsletter Subscription&body=${encodeURIComponent(
      `Please add me to your newsletter list. My email is: ${email}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="DestinationDetails-container">
        <div className="section">
          <h2>Description</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p>
            Various versions of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words.
          </p>
          <p>
            <strong>Day-01</strong>
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words. There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <p>
            <strong>Day-02</strong>
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words. There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <p>
            <strong>Day-03</strong>
            <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words. There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>
        <br />
        <hr />
        <br />
        <div className="section">
          <h2>Contact for join</h2>
          <form onSubmit={handleSendEmail}>
            <div className="form-row">
              <div className="form-group">
                <input placeholder="Your Name" type="text" name="name" value={formData.name} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <input placeholder="Phone no." type="text" name="phone" value={formData.phone} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="newsletter">
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
      <div className="places">
        <h2>More Places</h2>
        <div className="place">
        <img
  alt="California"
  height="400"
  src="images/california-a.jpg"
  width="600"
/>
          <div className="details">
            <div className="price">$500</div>
            <div className="duration">5 Days</div>
            <h3>California</h3>
            <p>United States of America</p>
            <div className="reviews">
              <i className="fas fa-star"></i> 4.5 (25 Reviews)
            </div>
          </div>
        </div>
        <div className="place">
        <img
  alt="Korola Megna"
  height="400"
  src="images/Korola-Megna.jpg"
  width="600"
/>
          <div className="details">
            <div className="price">$500</div>
            <div className="duration">5 Days</div>
            <h3>Korola Megna</h3>
            <p>United States of America</p>
            <div className="reviews">
              <i className="fas fa-star"></i> 4.5 (25 Reviews)
            </div>
          </div>
        </div>
        <div className="place">
        <img
  alt="London"
  height="400"
  src="images/London.jpg"
  width="600"
/>
          <div className="details">
            <div className="price">$500</div>
            <div className="duration">5 Days</div>
            <h3>London</h3>
            <p>United States of America</p>
            <div className="reviews">
              <i className="fas fa-star"></i> 4.5 (25 Reviews)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
