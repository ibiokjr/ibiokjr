import React, { Component } from 'react';
import Btn from './Btn';
export default class LocalNavbar extends Component {
  render() {
    return (
      <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Atomic</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQs</a>
            </li>

          </ul>
        </div>
        <Btn title="Login" btn= 'btn-success' rounded='rounded-pill' padding='px-3' btnSize='btn-sm'/>
        <Btn title="Sign Up" btn= 'btn-light' rounded='rounded-pill' padding='px-3' btnSize='btn-sm'/>

      </div>
    </nav></div>
    )
  }
}
