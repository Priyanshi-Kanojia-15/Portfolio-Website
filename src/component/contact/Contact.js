import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     
    emailjs
      .sendForm(
        "service_7nv269z",
        "template_ngeedod",
        form.current,
        "RaoDAChbc784JGkAn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <SiGmail className="contact-icon" />
            <h4>Email</h4>
            <h5>kanojiapriyanshi15@gmail.com</h5>
            <a href="mailto:kanojiapriyanshi15@gmail.com" target="_blank">
              Send Me A message
            </a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8225823151</h5>
            <a href="https://api.whatsapp.com/send?phone+ 91 8225823151">
              Send Me A message
            </a>
          </article>
          <article className="contact-option">
            <AiFillLinkedin className="contact-icon" />
            <h4>Linkedin</h4>
            <h5>Priyanshi Kanojia</h5>
            <a href="https://api.whatsapp.com/send?phone+ 91 8225823151">
              Send Me A message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="your full name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
