import { Component } from 'react'
import PropTypes from 'prop-types'
import API from 'api'

import Calories from 'components/Common/Calories'
import SodiumWarning from 'components/Common/SodiumWarning'

import './styles.css'

export default class LineItem extends Component {
  static propTypes = {
    expand: PropTypes.bool
  }

  static defaultProps = {
    expand: true
  }

  render() {
    const {
      name = '',
      calories,
      hideCalories,
      priceC,
      showCroissant = false,
      price6,
      price12,
      priceStyle = {},
      priceSeparator = '',
      expand,
      suffix = 'cal',
      titleClass = '',
      additionalClasses = '',
      decal6 = false,
      decal12 = false,
      decal12Color = 'blue',
      subtitle = false
    } = this.props;

    return (
      <div className={`c-TableList_row c-${additionalClasses}`}>

        <div className='c-TableList_column'>
          <div className={`c-Menus_title c-Menus_title-left ${expand ? 'c-Menus_title-v-expand' : ''}`}>

            {/* dangerouslySetInnerHTML is used because some strings are
                escaped as HTML. We can use this safely because this will never be
                Javascript.
            */}
            <span
              className={`sub_title ${titleClass}`}
              dangerouslySetInnerHTML={{ __html: name }}
              style={(name && name.length > 26 && !name.includes('span'))
                ? { marginBottom: 7 }
                : {}
              }
            />

            {!hideCalories &&
              <Calories {...this.props}>
                {calories}
              </Calories>
            }

            {subtitle &&
              <div className='c-Menus_subtitle'>
                <span>{subtitle}</span>
              </div>
            }

          </div>
        </div>

        {/* {price6 &&
          <div className='c-TableList_column c-TableList-center'>
            <div className='c-Price c-Menus_title c-Menus_title-left' style={priceStyle}>
              <span className={titleClass}>
                <span>
                  ${`${price6}`.replace('$', '')}
                </span>
              </span>
            </div>
          </div>
        }

        {price12 &&
          <div className='c-TableList_column'>
            <div className='c-Price c-Menus_title c-Menus_title-center'>
              <span className={titleClass}>
                <span>
                  {priceSeparator != '' ? priceSeparator : '\u00A0'}${`${price12}`.replace('$', '')}
                  {(() => {
                    if (decal12) {
                      let clean = decal12.replace('.', '')
                      let dollars = clean.slice(0, -2)
                      let cents = clean.slice(-2)
                      return (
                        <div className={'decal decal12 ' + decal12Color}>
                          <div className='price'>
                            <span className='sign'>$</span>
                            <span className='dollars'>{dollars}</span>
                            <span className='cents'>{cents}</span>
                          </div>
                          <div className='label'>Footlong</div>
                        </div>
                      )
                    }
                  })()}
                </span>
              </span>
            </div>
          </div>
        } */}

      </div>
    )
  }
}
