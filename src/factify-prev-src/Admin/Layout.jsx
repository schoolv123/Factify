import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Adminroute from "./Adminroute";
import Aside from "./Aside";
import Main from "./Main";

export default function Layout() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <Router>
        <div className={`app ${toggled ? "toggled" : ""}`}>
          <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
          <Adminroute />
          <Main handleToggleSidebar={handleToggleSidebar} />
        </div>
      </Router>
    </>
  );
}
