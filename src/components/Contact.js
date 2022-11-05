import React, { useState, useEffect } from "react";

function Contact() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("Praise Obende");
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    isAgree: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    console.log(formData);
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();
  };

  const handleValidation = () => {
    if (
      formData.first_name === "" ||
      formData.last_name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setIsError(true);
    }
  };

  useEffect(() => {}, [isError]);

  return (
    <section className="form__wrapper">
      <h1 className="heading">Contact Me</h1>
      <p className="sub__heading">
        Hi there, contact me to ask me about anything you have in mind.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="first_name"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          {isError && formData.first_name === "" && (
            <span className="error__text">Please enter your first name</span>
          )}
        </div>

        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            name="last_name"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          {isError && formData.last_name === "" && (
            <span className="error__text">Please enter your last name</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yourname@email.com"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {isError && formData.email === "" && (
            <span className="error__text">Please enter your email address</span>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={
              isError && formData.message === "" ? "textarea__error" : ""
            }
            required
          ></textarea>
          {isError && formData.message === "" && (
            <span className="error__text">Please enter a message</span>
          )}
        </div>

        <div id="box__isAgree">
          <label htmlFor="isAgree">
            You agree to providing your data to {name} who may contact you.
          </label>
          <input
            type="checkbox"
            name="isAgree"
            id="isAgree"
            checked={formData.isAgree}
            onChange={() =>
              setFormData((prevData) => {
                return {
                  ...prevData,
                  isAgree: !prevData.isAgree,
                };
              })
            }
          />
        </div>

        <button id="btn__submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
