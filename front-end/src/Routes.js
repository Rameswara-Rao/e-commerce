import React from "react";
import {
  BrowserRouter,
  Routes as NewRouter,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";


const Routes = () => {
  return (
    <BrowserRouter>
      <NewRouter>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />


      </NewRouter>
    </BrowserRouter>
  );
};

export default Routes;
