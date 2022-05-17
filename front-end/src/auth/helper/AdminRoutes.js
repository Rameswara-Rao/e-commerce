import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import { isAutheticated} from "./index"

const AdminRoutes = ({children}) => {
    const auth = isAutheticated();
    const admin = isAutheticated().user.role;
    return auth && admin === 1 ? children : <Navigate to="/signin" />;
}

export default AdminRoutes;