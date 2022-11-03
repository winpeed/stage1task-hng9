import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  return (
    <section className="form__wrapper">
      <h1 className="heading">Contact Me</h1>
      <p className="sub__heading">
        Hi there, contact me to ask me about anything you have in mind.
      </p>

      <form>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="first_name"
            id="first_name"
          />
        </div>

        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            name="last_name"
            id="last_name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yourname@email.com"
            name="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            name="message"
            id="message"
          ></textarea>
        </div>

        <div id="box__isAgree">
          <label htmlFor="isAgree">
            You agree to providing your data to {name} who may contact you.
          </label>
          <input type="checkbox" name="isAgree" id="isAgree" />
        </div>

        <button id="btn__submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
