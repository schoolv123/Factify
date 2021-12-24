import { Switch, Route } from "react-router-dom";
import Error from "../components/Error";
import Adminpanel from "./Adminpanel";
import Dashboard from "./Dashboard";
import Postupload from "./Postupload";
export default function MyRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/admin" component={Adminpanel} />
        <Route exact path="/admin/" component={Adminpanel} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/uploadpost" component={Postupload} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
