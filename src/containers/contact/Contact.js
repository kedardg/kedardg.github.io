import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ContactForm from "../../components/contactForm/ContactForm";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className={isDark ? "dark-mode contact-div-main" : "light-mode contact-div-main"}>
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
          </div>
          
          <div className="contact-content">
            <div className="contact-left-section">
              <div className="contact-message">
                <h3>Let's Talk ☎️</h3>
                <p>Looking to collaborate on an AI project? Have questions about my experience or expertise? I'm excited to hear from you.</p>
                <p>Based in Arizona, available for remote opportunities worldwide.</p>
                <div className="contact-social">
                  <SocialMedia />
                </div>
              </div>
            </div>
            
            <div className="contact-right-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
