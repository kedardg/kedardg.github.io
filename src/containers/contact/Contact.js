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
            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-left-section">
              <p className="contact-email">{contactInfo.email_address}</p>
              <SocialMedia />
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
