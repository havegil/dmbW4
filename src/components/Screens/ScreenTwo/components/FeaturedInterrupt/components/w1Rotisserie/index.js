import { Component } from 'react'

import image from './background.png'

export default class W1RotisserieFeatured extends Component {
  render() {
    return (
      <div className='c-Promotion'>
        <img className='c-Promotion_background' src={image} />
      </div>
    )
  }
}