import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Btn from './Btn'
import Card from './card'
import { Icon } from '@iconify/react';

export default class Hero extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div >
        <div className='hero-img'>
            <div className='container pt-5'>
                <h1 className='display-4 fw-bold mb-3 pt-4'>Design a better Website <br/>template</h1>
                <p className= 'mb-4 pt-2 fs-5'>Building your brand's website and get detailed insights on how templates <br/>are created</p>
                <Btn title='FREE DOWNLOAD' btn='btn-success' rounded='rounded-0' padding='p-2' btnSize='btn-lg'/>
            </div>
            <div> {<Icon icon="ep:video-play" className='video'/>}</div>
            <div className='container d-flex mt-5 p-5 bg-white'>
                <div className='d-flex'>
                    <div className='col-4'>
                        <Card title= {<Icon icon="emojione-monotone:light-bulb" className='icon'/>}
                            subtitle='Intuitive Thinking'
                            text='lorem jgggkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkkgkgg'/>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='col-4'>
                        <Card title={<Icon icon="ph:carrot" className='icon' />}
                            subtitle='Orange For Carrots'
                            text='lorem jgggkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkkgkgg'/>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='col-4'>
                        <Card title={<Icon icon="ph:infinity-thin" className='icon' />}
                            subtitle='Infinite Possibilities'
                            text='lorem jgggkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkkgkgg'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

