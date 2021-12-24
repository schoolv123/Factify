import { Switch, Route } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Features from "../components/Features";
import Home from "../components/Home";
import Main from "../components/Main";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import AdminLogin from "../components/AdminLogin";
import Adminroute from "../Admin/Adminroute";
export default function MyRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/adminlogin" component={AdminLogin} />
        <Route exact path="/admin" component={Adminroute} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
