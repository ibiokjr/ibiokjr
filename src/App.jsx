import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LocalNavbar from './Components/LocalNavbar'
import Hero from './Components/Hero'
import './App.css'
import { Icon } from '@iconify/react'





export default class App extends Component {
  render() {
    return (
      <div>
        <LocalNavbar/>
        <Hero/>
        
      </div>
    )
  }
}
