import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./index";
import Menu from "./Menu/index";

const App = () => {
  
  return (
    <Router>
      <div>
        <Menu />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
