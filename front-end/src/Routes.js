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
import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";

const Routes = () => {
  return (
    <BrowserRouter>
      <NewRouter>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* User Routes */}
        <Route
          path="/user/dashboard"
          element={
            <PrivateRoutes>
              <UserDashBoard />
            </PrivateRoutes>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoutes>
              <AdminDashBoard />
            </AdminRoutes>
          }
        />
        <Route
          path="/admin/create/category"
          element={
            <AdminRoutes>
              <AddCategory />
            </AdminRoutes>
          }
        />
      </NewRouter>
    </BrowserRouter>
  );
};

export default Routes;
