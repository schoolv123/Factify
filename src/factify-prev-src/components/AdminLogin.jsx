import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Totop from "./Totop";

export default function AdminLogin() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [udata, setUdata] = React.useState();
  const [islogin, setIslogin] = React.useState(false);
  const [msg, setMsg] = React.useState(null);
  const url = "https://factstar.000webhostapp.com/api/login";
  const submitData = async () => {
    if (email !== "" && pass !== "")
      try {
        let response = await fetch(url, {
          method: "post",
          body: JSON.stringify({
            key: "api22653atfact45atanu",
            userEmail: email,
            password: pass
          })
        });
        let array = await response.json();
        if (array.status) {
          let userData = array.data;
          setUdata(userData);
          setIslogin(true);
        } else {
          setIslogin(false);
          setMsg(array.message);
        }
      } catch (err) {
        console.log(err);
      }
    else {
      console.log("Please fill all the filds");
      setMsg("Please fill all the filds");
    }
  };
  if (islogin) {
    return <Redirect to="/admin" />;
  }
  return (
    <>
      <Navbar />
      <section className="container-fluid admin-login">
        <div className="container">
          <div className="row no-gutter justify-content-center">
            <div className="col-md-4 col-sm-4 col-lg-4">
              <form className="login-form card shadow">
                {msg && (
                  <>
                    <div
                      className="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        }}
                      >
                        <strong>{msg}</strong>
                        <button
                          type="button"
                          className="btn"
                          onClick={() => {
                            setMsg(null);
                          }}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
                <h4>Login</h4>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="dfc mt-4">
                  <button
                    className="btn btn-login"
                    type="button"
                    onClick={submitData}
                  >
                    Login
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
