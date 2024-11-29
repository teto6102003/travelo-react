import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    feedback: '',
    suggestions: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link with form data
    const mailtoLink = `mailto:hadirhussien14@gmail.com?subject=Feedback from ${formData.firstname} ${formData.lastname}&body=${encodeURIComponent(
      `Name: ${formData.firstname} ${formData.lastname}\nFeedback: ${formData.feedback}\nSuggestions: ${formData.suggestions}`
    )}`;

    // Open the mailto link to send the email
    window.location.href = mailtoLink;
  };

  return (
    <div className="Feedback-Form-container">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>How would you rate our services?</label>
          </div>
          <div className="col-75">
            <input
              type="radio"
              id="excellent"
              name="feedback"
              value="Excellent"
              onChange={handleInputChange}
            />
            <label htmlFor="excellent">Excellent</label><br />
            <input
              type="radio"
              id="verygood"
              name="feedback"
              value="Very Good"
              onChange={handleInputChange}
            />
            <label htmlFor="verygood">Very Good</label><br />
            <input type="radio" id="good" name="feedback" value="Good" onChange={handleInputChange} />
            <label htmlFor="good">Good</label><br />
            <input type="radio" id="average" name="feedback" value="Average" onChange={handleInputChange} />
            <label htmlFor="average">Average</label><br />
            <input type="radio" id="poor" name="feedback" value="Poor" onChange={handleInputChange} />
            <label htmlFor="poor">Poor</label>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="suggestions">Suggestions</label>
          </div>
          <div className="col-75">
            <textarea
              id="suggestions"
              name="suggestions"
              placeholder="Write something.."
              style={{ height: "200px" }}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
