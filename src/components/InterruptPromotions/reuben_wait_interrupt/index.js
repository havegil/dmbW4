import { Component } from 'react'

import Frame1 from './images/1.png'
import Frame2 from './images/2.png'
import Frame3 from './images/3.png'

import Full from './images/itsback.jpg'
import LTO from './images/lto.png'

import './styles.css'


export default class ReubenWaitInterrupt extends Component {

  componentDidMount() {

    const delayTime = 1.5
    const animationTime = 2
    const animationOverlap = "-=1"

    // Create Timeline
    var master = new TimelineMax()
    var panel1 = new TimelineLite()

    panel1
      .set(this.Frame1, { transform: 'translate3d(0, -1080px, 0)'})
      .set(this.Frame2, { transform: 'translate3d(0, -1080px, 0)'})
      .set(this.Frame3, { transform: 'translate3d(0, -1080px, 0)'})
      .set(this.Full, { transform: 'translate3d(0, -1080px, 0)'})
      .set(this.LTO, { opacity: 0 })
      .to(this.Frame1, animationTime, { transform: 'translate3d(0, 0, 0)', ease: Power4.easeIn}, animationOverlap)
      .to(this.Frame2, animationTime, { transform: 'translate3d(0, 0, 0)', ease: Power4.easeIn}, animationOverlap)
      .to(this.Frame3, animationTime, { transform: 'translate3d(0, 0, 0)', ease: Power4.easeIn}, animationOverlap)
      .to(this.Full, animationTime, { transform: 'translate3d(0, 0, 0)', ease: Power4.easeIn}, "+=1")
      .to(this.LTO, 0.5, { opacity: 1 }, "+=1.0")

    master.add(panel1)
  }

  render() {
    return (
      <div className='c-RubenWaitInterrupt'>
        <img src={Frame1} className='frame1' ref={(node) => this.Frame1 = node}/>
        <img src={Frame2} className='frame2' ref={(node) => this.Frame2 = node}/>
        <img src={Frame3} className='frame3' ref={(node) => this.Frame3 = node}/>
        <img src={Full} className='full' ref={(node) => this.Full = node}/>
        <img src={LTO} className='lto' ref={(node) => this.LTO = node}/>
      </div>
    )
  }
}
