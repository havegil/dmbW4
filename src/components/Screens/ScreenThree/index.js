import { Component } from 'react'
import PropTypes from 'prop-types'
import PlaylistDJ from 'components/Common/PlaylistDJ'


import './styles.css'

// Playlists
import playlistMenus from './playlists/menus'
import playlistFooters from './playlists/footers'

export default class PanelThree extends Component {
  static propTypes = {
    player: PropTypes.oneOf(['quad', 'dual'])
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`screen-3 ` + this.props.screenClass}>

        <section className={`s-Body`}>
            <PlaylistDJ
              playlists={playlistMenus(this.props.player,this.props.layout)}
              {...this.props}
            />
        </section>
        <section className={`s-Footer`}>
            <PlaylistDJ
              playlists={playlistFooters(this.props.player,this.props.layout)}
              {...this.props}
              
            />
        </section>

      </div>
    )
  }
}
