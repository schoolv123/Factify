import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about container-fluid">
      <div className="container">
        <div className="heading">
          <h2 className="head">Abouts</h2>
          <p className="sub-text">
            We are Factify get in touch of you. We will take care of your point
            adn will try to give reply as soon as posible. Our admin will give
            respose to you.
          </p>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-done">
              <li>
                <i className="bx bx-check-double"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
              <li>
                <i className="bx bx-check-double"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit
              </li>
              <li>
                <i className="bx bx-check-double"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <Link to="/contact" className="btn-learn-more">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
