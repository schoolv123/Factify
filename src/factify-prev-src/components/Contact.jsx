import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Totop from "./Totop";
export default function Contact() {
  const [fromData, setFromData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const changeHandler = (e) => {
    const { value, name } = e.target;

    setFromData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  const submitData = (e) => {
    alert("Message submitted admin will contact you soon");
  };
  return (
    <>
      <Navbar />
      <section className="contact container-fluid">
        <div className="container">
          <div className="heading">
            <h2 className="head text-uppercase">Contact Us</h2>
            <p className="sub-text">
              You can contact us through this steps. We will take care of your
              point adn will try to give reply as soon as posible. Our admin
              will give respose to you.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-4 pt-lg-0 order-2 order-lg-1">
              <div className="con-row">
                <div className="icon">
                  <i className="bx bxs-map"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>B05, Contai, West Bengal, India</p>
                </div>
              </div>
              <div className="con-row">
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <div className="text">
                  <h3>Email us</h3>
                  <p>service.edusolution@gmail.com</p>
                </div>
              </div>
              <div className="con-row">
                <div className="icon">
                  <i className="bx bx-phone"></i>
                </div>
                <div className="text">
                  <h3>Phone us</h3>
                  <p>+91 7589 55488 55</p>
                </div>
              </div>
              <div className="con-row">
                <div className="icon">
                  <i className="bx bx-time-five bx-flashing"></i>
                </div>
                <div className="text">
                  <h3>working hours</h3>
                  <p>
                    Mon - Fri: 10AM to 7PM <br />
                    Sunday: 10AM to 3PM
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-4 pt-lg-0 order-2 order-lg-1">
              <form className="contact-form">
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={fromData.name}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={fromData.email}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={fromData.subject}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    placeholder="Message"
                    className="form-control"
                    name="message"
                    rows="5"
                    required=""
                    value={fromData.message}
                    onChange={changeHandler}
                  ></textarea>
                </div>
                <div className="dfc">
                  <button className="btn btn-contact" onClick={submitData}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Totop />
    </>
  );
}
