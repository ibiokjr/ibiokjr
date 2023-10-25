import React, { Component } from 'react'
import { Icon } from '@iconify/react';


export default class card extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <div className='card' style={{width:`18`,border:`0`}}>
            <div className='card-body'>
                <h5 className='card-title'>{this.props.title}</h5>
                <h5 className='card-subtitle mb-2 text-body-secondary'>{this.props.subtitle}</h5>
                <p className='card-text'>{this.props.text}</p>

            </div>

        </div>
      </div>
    )
  }
}



