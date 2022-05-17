import React from 'react'
import Base from '../core/Base'
import {isAutheticated} from "../auth/helper/index"
import { NavLink } from "react-router-dom";

const AdminDashBoard = () => {

  const {user :{name, email, role}} = isAutheticated();

  const adminLeftSide = () => {
    return(
      <div className="card">
          <h4 className="card-header bg-dark text-white">
            Admin Navigation
          </h4>
          <li className="list-group-item">
            <NavLink to={"/admin/create/category"} className="nav-link text-success" >Create Categories </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to={"/admin/create/product"} className="nav-link text-success" >Create Products </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to={"/admin/product"} className="nav-link text-success" >Manage Products </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to={"/admin/orders"} className="nav-link text-success" >Manage Orders </NavLink>
          </li>
        </div>
    )
  }

  const adminRightSide = () => {
    return(
        <div className="card mb-4">
          <h4 className="card-header">Admin Information</h4>
          <ul class="list-group">
          <li className="list-group-item">
              <span className="badge bg-success mr-2">Name:</span>{name}
            </li>
            <li className="list-group-item">
              <span className="badge bg-success mr-2">Email:</span>{email}
            </li>
            <li className="list-group-item">
              <span className="badge bg-danger">Admin Area</span>
            </li>
          </ul>
        </div>
    )
  }

  return (
    <Base title='Welcome to admin area' description='Manage all of your orders here' className='container bg-success p-4'>
      <div className="row">
        <div className="col-3">
          {adminLeftSide()}
        </div>
        <div className="col-9">
        {adminRightSide()}
        </div>
      </div>
      
    </Base>
  )
}

export default AdminDashBoard