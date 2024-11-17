const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="col-md-12">
          <h4>04</h4>
          <h1 className="size-50">Contact Me</h1>
          <div className="h-50" />
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <h3>My Phone Number:</h3>
          <p>+62 895397571327</p>
          <h3>My Email:</h3>
          <p>kussoyafirst@gmail.com</p>
          <h3>My Instagram:</h3>
          <p>@AfrstLaurn</p>
          <h3>My Facebook:</h3>
          <p>Afirst Kussoy</p>
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
              Send
            </button>
            <div id="success">
              <p className="green textcenter">
                {" "}
                Your message was sent successfully! I will be in touch as soon
                as I can.{" "}
              </p>
            </div>
            <div id="error">
              <p>
                {" "}
                Something went wrong, try refreshing and submitting the form
                again.{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
