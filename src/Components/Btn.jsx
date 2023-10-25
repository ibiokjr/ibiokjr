import React, { Component } from 'react'


export default class Btn extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <button type='button' className={`btn ${this.props.btnSize} ${this.props.padding} ${this.props.btn} ${this.props.rounded} ${this.props.text} ${this.props.color}${this.props.style} shadow-sm`}>{this.props.title}
      </button>
    )
  }
}
