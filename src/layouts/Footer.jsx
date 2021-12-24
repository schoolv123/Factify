import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer container-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-3 footer-col">
                            <div className="footer-contact">
                                <h3 className="text-uppercase">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="footer-logo mx-2"
                                        height="30"
                                        width="30"
                                        style={{ borderRadius: 5 }}
                                    />
                                    Factify
                                </h3>
                                <p>
                                    B05 Contai <br />
                                    West Bengal
                                    <br />
                                    India <br />
                                </p>
                                <p>
                                    <strong>Phone:</strong>{" "}
                                    <a className="contact-hov" href="callto:+91 7589 55488 55">
                                        +91 7589 55488 55
                                    </a>
                                    <br />
                                    <strong>Email:</strong>{" "}
                                    <a
                                        className="contact-hov"
                                        href="mailto:service.edusolution@gmail.com"
                                    >
                                        service.edusolution@gmail.com
                                    </a>
                                    <br />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-3 footer-col">
                            <div className="links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="home">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="about">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="features">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="terms">
                                            Terms of service
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="privacy">
                                            Privacy policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-3 footer-col">
                            <div className="services">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="/">
                                            Web Design
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="/">
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="/">
                                            Application Development
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="/">
                                            Product Management
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <Link className="alink" to="/">
                                            Logo Design
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-3 footer-col">
                            <div className="our-social-link">
                                <h4>Our Social Networks</h4>
                                <p>You can connect us through this social media. </p>
                                <div className="social-links mt-3">
                                    <a className="alink" target="_0" href="https://twitter.com">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                    <a className="alink" target="_0" href="https://facebook.com">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                    <a className="alink" target="_0" href="https://instagram.com">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                    <a className="alink" target="_0" href="https://skype.com">
                                        <i className="bx bxl-skype"></i>
                                    </a>
                                    <a className="alink" target="_0" href="https://linkedin.com">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright container-fluid">
                <div className="copy">
                    <p>
                        &copy; Copyright <span>Factify</span>. All Rights Reserved.
                    </p>
                    <p className="copy-small">
                        Designed by <span>WEKN Developers</span>.
                    </p>
                </div>
            </section>
        </>
    );
}
