import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../assets/css/ContactUs.css";

export const FormContact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const idService = "service_26q8m2q";
    const idTemplete = "template_dhtnrru";
    const apiKey = "ESnTW2WiKImNrZK28";

    emailjs.sendForm(idService, idTemplete, form.current, apiKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <form ref={form} action="" onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2 className="tittle-contact">Contact Us</h2>
        <p className="text-contact">Please fill this form</p>
      </div>
        <div className="inputGroup">
          <input
            type="text"
            autocomplete="off"
            name="username"
            id="username"
            required
          />
          <label for="name">Name</label>
        </div>
        <div className="inputGroup">
          <input
            type="email"
            autocomplete="off"
            name="email"
            id="email"
            required
          />
          <label for="name">Email</label>
        </div>
      <div className="inputGroup">
          <input
            type="text"
            autocomplete="off"
            name="message"
            id="message"
            required
          />
          <label for="name">Message</label>
        </div>
      <button className="btn-send">Send</button> 
    </form>
  );
};
