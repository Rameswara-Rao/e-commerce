import React from 'react'
import "../styles.css"
import { API } from '../backend'
import Base from './Base'

const  Home = () => {
    console.log("API IS ", API)
  return (
    <div>
        <Base title='Home Page' description='Welcome to store'>
        <h1>Hello Rameswara Rao</h1>
        </Base>
    </div>
  )
}

export default Home