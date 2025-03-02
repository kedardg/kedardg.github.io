import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    
    // Show success status
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! I'll get back to you soon."
    });
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="name-email-row">
        <input
          type="text"
          className="form-control name-input"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form-control email-input"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="message-group">
        <textarea
          className="form-control"
          rows="5"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Send Message
      </button>
      
      {formStatus.submitted && (
        <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;