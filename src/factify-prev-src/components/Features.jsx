import FeaturesIcon from "../assets/img/features.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Totop from "./Totop";

export default function Features() {
  return (
    <>
      <Navbar />
      <section id="features" className="features container-fluid">
        <div className="container">
          <div className="section-title">
            <h2>App Features</h2>
            <p>
              Factify application is devloped for giving world unknown facts to
              the user. Willing user can also switch them to creater and upload
              fantastic facts.
            </p>
          </div>
          <div className="row no-gutters">
            <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 icon-box">
                    <i className="bx bx-receipt"></i>
                    <h4>Total free entertainment</h4>
                    <p>
                      We will provide totaly free entertainment platefrom for
                      curious people who are interested in world amazing facts.
                    </p>
                  </div>
                  <div className="col-md-6 icon-box">
                    <i className="bx bx-cube-alt"></i>
                    <h4>3d user interface</h4>
                    <p>
                      Hear we provide 3 daimensional user expriance first as
                      viewer, creator, admin.
                    </p>
                  </div>
                  <div className="col-md-6 icon-box">
                    <i className="bx bx-images"></i>
                    <h4>Graphical content</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                  <div className="col-md-6 icon-box">
                    <i className="bx bx-shield"></i>
                    <h4>Full Secure</h4>
                    <p>
                      We are keeping your details and password with high
                      security methods. Your password will be always encrypted.{" "}
                    </p>
                  </div>
                  <div className="col-md-6 icon-box">
                    <i className="bx bx-atom"></i>
                    <h4>World wild user attachment</h4>
                    <p>
                      Et fuga et deserunt et enim. Dolorem architecto ratione
                      tensa raptor marte
                    </p>
                  </div>
                  <div className="col-md-6 icon-box">
                    <i className="bx bx-id-card"></i>
                    <h4>Best administration</h4>
                    <p>
                      Est autem dicta beatae suscipit. Sint veritatis et sit
                      quasi ab aut inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2">
              <img src={FeaturesIcon} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Totop />
    </>
  );
}
