function Contact() {
  
  return (
    <div className="container contact ">
      <div className="pt-5  pb-1"></div>
      <h2 className="main-title text-center ">CONTACT</h2>
      <div className="col-md-12 -0">
        <div className="row justify-content-center align-item-center">
          <div className="col-md-3 ms-0 mb-1">
            <input name="name" placeholder="Name" className="contact-input" />
          </div>

          <div className="col-md-3 mb-1">
            <input name="email" placeholder="Email" className="contact-input" />
          </div>
          <div className="col-md-3 mb-1">
            <input
              name="subject"
              placeholder="Subject"
              className="contact-input"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea "
          />
      </div>

      <br></br>
      <div className="row justify-content-end m-0 p-0">
        <div className="col-md-3 m-0 p-0">
          <input className="form-btn" type="submit" value="Send Message" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
