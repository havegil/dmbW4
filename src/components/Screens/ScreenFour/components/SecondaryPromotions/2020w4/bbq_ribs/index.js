import React from 'react'
import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import BG from './images/bg_panel.jpg'


@neocastDataProvider([
  'bbq_rib_price_6in',
  'bbq_rib_price_12in',
  'meal_deal_fountain_additional_price'
])

export default class BBQRibs extends Component {

  render() {

  let price_6in = API.loc('bbq_rib_price_6in')
  let price_12in = API.loc('bbq_rib_price_12in')
  let addonPrice = API.loc('meal_deal_fountain_additional_price')

  let mealPrice = (parseFloat(price_12in) + parseFloat(addonPrice)).toFixed(2);

  return(
    <div className="c-bbq-ribs">
      <img src={BG} />
      <p className="subhead">Get a BBQ Rib<br />Footlong Meal<br/>for ${mealPrice}</p>
      <p className="six-inch">${price_6in}</p>
      <p className="footlong">${price_12in}</p>
    </div>
  )
  }
}
