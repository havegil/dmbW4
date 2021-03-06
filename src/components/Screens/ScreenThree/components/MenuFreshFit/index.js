import { Component } from 'react'
import API from 'api'
import isNil from 'lodash/isNil'

import neocastDataProvider from 'api/neocastDataProvider'

import SubLineItem from 'components/Common/SubLineItem'
import SubBlockItem from 'components/Common/SubBlockItem'
import SubImage from './images/subs.png'

import './styles.css'

@neocastDataProvider([
  'decal_options',
  'veggie_decal_price',
  'bf_ham_decal_price',
  'chopped_salad_addon_price',
  'chopped_salad_price',
  'chopped_salad_type'
])
export default class FreshFitMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentFrameCount: 0
    }
  }

  render() {

    // pre-process some decal metadata because it got more complicated
    let decals = {}
    if (this.props.decal_options == 'starting_at') {
      decals['veggie_delite'] = {
        decal12: this.props.veggie_decal_price || '499',
        decal12Color: 'green'
      }
      decals['bf_ham'] = {
        decal12: this.props.bf_ham_decal_price || '499',
        decal12Color: 'green'
      }
    } else if (this.props.decal_options == 'footlong') {
      decals['veggie_delite'] = {
        decal12: this.props.veggie_decal_price || '499'
      }
      decals['bf_ham'] = {
        decal12: this.props.bf_ham_decal_price || '499'
      }
    } else if (this.props.decal_options == 'footlong_alt') {
      decals['veggie_delite'] = {
        decal12: this.props.veggie_decal_price || '499'
      }
    }

    const {
      chopped_salad_addon_price,
      chopped_salad_price,
      chopped_salad_type } = this.props;

    // Default values
    let saladPriceType = "addon"
    let saladPrice = chopped_salad_addon_price // Old key by default
    let saladPriceFormatted = "$"

    let hasNewSaladPriceType = !isNil(API.loc('chopped_salad_type'))

    let isRBSkuTest = !isNil(API.loc('test_sku_roast_beef'))

    // We added the "addon" and "full" salad price types
    // addon : Put a "+" at the beginning to show the value is added
    // full : The full set price, useful for fixed-price promotions
    if (hasNewSaladPriceType)
    {
      saladPriceType = chopped_salad_type
      saladPrice = chopped_salad_price
    }

    // Prepend the needed prefixes
    saladPriceFormatted += saladPrice
    if (saladPriceType == "addon") saladPriceFormatted = "+ " + saladPriceFormatted


    return (
      <div className={`c-MenuFresh`}>

        <img src={SubImage} className='subImage'/>

        <div className={`freshHeader`}>
            <h1>Make It Fresh Fit<sup>&reg;</sup>.</h1>
            <h2>  6" /Footlong</h2>
        </div>

        <div className={`blockItems`}>
            <SubBlockItem apiKey='turkey_breast'/>
            <SubBlockItem apiKey='soct'/>
            <SubBlockItem apiKey='subway_club'/>
            {!isRBSkuTest && <SubBlockItem apiKey='roast_beef'/> }
            <SubBlockItem apiKey='rotisserie_style_chicken'/>
            <SubBlockItem apiKey='bf_ham' {...decals['bf_ham']}/>
            <SubBlockItem apiKey='veggie_delite' {...decals['veggie_delite']}/>
            <SubBlockItem apiKey='oven_roasted_chicken' {...decals['oven_roasted']}/>
        </div>

        {chopped_salad_addon_price &&
          <div className='saladType'>{saladPriceFormatted}</div>
        }

        {/* Footer */}
        <div className='c-Menus_footer'>

          <div className='c-Menus_copyright'>
            <div className='legalContent'>
              Fresh Fit&reg; refers to 6" sub on 9-grain wheat bread with all the fresh vegetables.
              Fresh Fit&reg; subs are prepared in front of you and are not a diet program.
              <br/>
               Calories refer to subs prepared to standard recipe on
               9-grain wheat bread with lettuce, tomatoes, onion,
               green peppers and cucumbers. Prices do not include any applicable taxes.
            </div>
          </div>
        </div>

      </div>
    );
  }
}

