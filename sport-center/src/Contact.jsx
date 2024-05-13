import React from "react";
import "./App.css";
const Contact = () => {
  return (
    <>
      <section>
        <div className="contact" id="contact">
          <div className="contact-section">
            <h2>CONTACT US</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              voluptatum eius aliquam velit, asperiores, esse sunt magnam iure
              cum quos expedit.
            </p>
          </div>
          <div className="contact-menu">
            <div className="appointment">
              <div className="contact-info">
                <div className="phone-info">
                  <h3>Mobile Number</h3>
                  <p>+135 773 321 4442</p>
                </div>
                <div className="email-info">
                  <h3>Email Address</h3>
                  <p>demo@demo.com</p>
                </div>
              </div>

              <div className="form">
                <h3>Make An Appointment</h3>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  id="yourEmail"
                  name="yourEmail"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div className="googleMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8916554124617!2d28.967613294902915!3d41.027626244362295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab91ef219e13d%3A0x99c136f220088f3!2sPatika.dev%20-%20Bootcamp!5e0!3m2!1str!2str!4v1713884374515!5m2!1str!2str"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
