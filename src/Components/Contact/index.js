import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Contact = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="col-md-12">
          <h4>{contact.contact1}</h4>
          <h1 className="size-50">{contact.contact2}</h1>
          <div className="h-50" />
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <h3>{contact.contact3}</h3>
          <p>{contact.contact4}</p>
          <h3>{contact.contact5}</h3>
          <p>{contact.contact6}</p>
          <h3>{contact.contact7}</h3>
          <p>{contact.contact8}</p>
          <h3>{contact.contact9}</h3>
          <p>{contact.contact10}</p>
          <div className="clearfix" />
          <div className="h-50" />
        </div>
        <div className="col-md-8" data-aos="fade-up">
          <form
            className="contact-bg"
            id="contact-form"
            name="contact"
            method="post"
            noValidate="novalidate"
          >
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your E-mail"
            />
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
            />
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              style={{ height: 120 }}
              defaultValue={""}
            />
            <button
              id="submit"
              type="submit"
              name="submit"
              className="btn btn-glance"
            >
              {contact.contact11}
            </button>
            <div id="success">
              <p className="green textcenter"> {contact.contact12} </p>
            </div>
            <div id="error">
              <p> {contact.contact13} </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
