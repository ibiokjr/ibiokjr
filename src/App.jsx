import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import './App.css'
import { Icon } from '@iconify/react'





export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero/>
        
      </div>
    )
  }
}
