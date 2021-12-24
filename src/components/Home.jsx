import heroImg from "../assets/img/hero-img.png";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1">
                            <div>
                                <h1>Factify App landing page</h1>
                                <h2 className="text-g">
                                    Factify application is devloped for giving world unknown facts
                                    to the user. Willing user can also switch them to creater and
                                    upload fantastic facts.
                                </h2>
                                <div className="button-container dfc">
                                    <a
                                        target="_0"
                                        href="https://play.google.com/store/apps/details?id=com.wekn.factify"
                                        className="btn download-btn"
                                    >
                                        <i className="bx bxl-play-store"></i> Google Play
                                    </a>
                                    <Link to="/adminlogin" className="btn download-btn">
                                        <i className="bx bx-globe"></i>Go To Admin
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img">
                            <img src={heroImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
