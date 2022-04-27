import React from "react";
import { useState, useRef } from "react";
import "./contact.scss";
import { Phone, Mail, GitHub } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import SC from "../../themes/styledComponents";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const [nameCheck, setNameCheck] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [subjectCheck, setSubjectCheck] = useState("");
  const [messageCheck, setMessageCheck] = useState("");
  const formRef = useRef();
  const email = "joseangeltelecom@gmail.com";
  const phone = "+51 972 420 425";
  const github = "github.com/Joseangeltelecom";
  const [active, setActive] = useState("email");
  const [contactInfo, setContactInfo] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    console.log("public_key", process.env.REACT_APP_PUBLIC_KEY);
    if (nameCheck === "") {
      setMessage("Include your name!");
    } else if (emailCheck === "") {
      setMessage("Include your email!");
    } else if (subjectCheck === "") {
      setMessage("Include a subject!");
    } else if (messageCheck === "") {
      setMessage("Include a message!");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage("Message Sent!");
          },
          (error) => {
            console.log(error.text);
            setMessage("An error occured :(");
          }
        );
    }
    setMessageVisible(true);
    setTimeout(async function () {
      setMessageVisible(false);
    }, 3300);
  };

  const handleInfo = (variable, str) => {
    setActive(str);
    setContactInfo(variable);
  };

  return (
    <SC.GradientBackground className="contact section" id="contact">
      <div className="container">
        <div className="contact-container-left">
          <h2>Lets get in touch</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <SC.ContactInput
              type="text"
              placeholder="Name"
              name="user_name"
              onChange={(e) => setNameCheck(e.target.value)}
            />
            <SC.ContactInput
              type="email"
              placeholder="Email"
              name="user_email"
              onChange={(e) => setEmailCheck(e.target.value)}
            />
            <SC.ContactInput
              type="text"
              placeholder="Subject"
              name="user_subject"
              onChange={(e) => setSubjectCheck(e.target.value)}
            />
            <SC.ContactMessage
              placeholder="Message"
              name="message"
              onChange={(e) => setMessageCheck(e.target.value)}
            ></SC.ContactMessage>
            <SC.ContactButton type="submit">Send</SC.ContactButton>
          </form>
        </div>
        <div className="contact-container-right">
          <div className="right-content">
            <h3>Contact Info</h3>
            <p>Feel free to contact me or check me out on other platforms</p>
            <div className="info">
              {/* email */}
              <SC.ContactItem className="item-container">
                <SC.ContactIcon
                  className={
                    active === "email"
                      ? "contact-icon-container active"
                      : "contact-icon-container"
                  }
                  onClick={() => handleInfo(email, "email")}
                >
                  <Mail className="icon" />
                </SC.ContactIcon>
                <div className="item-details">
                  <span className="item-span-title">Email:</span>
                  <span className="item-span" id="email-contact-span">
                    {email}
                  </span>
                </div>
              </SC.ContactItem>
              {/* phone */}
              <SC.ContactItem className="item-container">
                <SC.ContactIcon
                  className={
                    active === "phone"
                      ? "contact-icon-container active"
                      : "contact-icon-container"
                  }
                  onClick={() => handleInfo(phone, "phone")}
                >
                  <Phone className="icon" />
                </SC.ContactIcon>
                <div className="item-details">
                  <span className="item-span-title">Phone:</span>
                  <span className="item-span" id="phone-contact-span">
                    {phone}
                  </span>
                </div>
              </SC.ContactItem>
              {/* github */}
              <SC.ContactItem className="item-container">
                <SC.ContactIcon
                  className={
                    active === "github"
                      ? "contact-icon-container active"
                      : "contact-icon-container"
                  }
                  onClick={() => handleInfo(github, "github")}
                >
                  <GitHub className="icon" />
                </SC.ContactIcon>
                <div className="item-details">
                  <span className="item-span-title">Github:</span>
                  <a
                    className="item-span"
                    id="gitHub-contact-span"
                    href="https://github.com/Joseangeltelecom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {github}
                  </a>
                </div>
              </SC.ContactItem>
            </div>
            <div className="mobile-info-container">{contactInfo}</div>
          </div>
        </div>
      </div>
      <div
        className={
          messageVisible ? "message-container active" : "message-container"
        }
      >
        <div className="message">{message}</div>
      </div>
    </SC.GradientBackground>
  );
}
