import { Component } from 'react'
import PropTypes from 'prop-types'
import PlaylistDJ from 'components/Common/PlaylistDJ'

import './styles.css'


let TimerLength = 4000

import AllNewSubsMenu from './components/2022w4/SubsMenu'
import MenuMakeAnyAddOns from './playlists/MenuMakeAnyAddOns'

import SecondaryPromotions from './playlists/secondaryPromotions'
import Sides from './playlists/sides'


export default class ScreenFour extends Component {

  static propTypes = {
    player: PropTypes.oneOf(['quad', 'dual'])
  }

  constructor(props) {
    super(props)
    this.state = {
      intervalId: null,
      currentFrameCount: 0
    }
  }

  componentDidMount() {
    this.state.intervalId = setInterval(this.timer.bind(this), TimerLength)
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer() {
    this.setState({ currentFrameCount: this.state.currentFrameCount + 1 })
  }

  render() {
    return (
      <div className={this.props.screenClass}>
        <div className={`s-Four`}>
          <section className={`s-Secondary`}>

            <AllNewSubsMenu {...this.props} />
                      
            <PlaylistDJ {...this.props} playlists={MenuMakeAnyAddOns} queued={false} currentFrameCount={this.state.currentFrameCount} />

          </section>

          <section className={`s-Sides`}>
 
            <PlaylistDJ
              {...this.props}
              playlists={SecondaryPromotions}
              queued={false}
              currentFrameCount={this.state.currentFrameCount}
            />

            <PlaylistDJ 
              {...this.props} 
              playlists={Sides} 
              queued={false} 
              currentFrameCount={this.state.currentFrameCount} 
            />          

          </section>
        </div>
      </div>
    )
  }
}
