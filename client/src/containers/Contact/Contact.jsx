import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Contact Pior Gold</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <h1>Contact Info</h1>
          <h6>678.549.4567</h6>
          <h6>706.348.5505</h6>
        </div>
        <div className="col s6">
          <h1>Send Us an Email</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
