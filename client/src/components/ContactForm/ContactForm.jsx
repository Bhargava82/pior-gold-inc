import React from "react";

const ContactForm = () => {
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" class="validate" />
            <label for="icon_prefix">Full Name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" class="validate" />
            <label for="icon_telephone">Telephone</label>
          </div>
          <div className="input-group">
            <span className="input-group-text id=" inputGroup-sizing-lg>
              Message
            </span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
