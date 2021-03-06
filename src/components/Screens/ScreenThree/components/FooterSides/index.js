import { Component } from 'react'

import API from 'api'
import isNil from 'lodash/isNil'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import imgBg from './images/bg.png'

import imgDeluxe from './images/deluxe.png'
import imgDouble from './images/double.png'
import imgCheese from './images/cheese.png'
import imgBacon  from './images/bacon.png'
import imgGuac   from './images/guac.png'

import imgPepperoni from './images/pepperoni.png'
import imgAvocado   from './images/avocado.png'

import imgApple  from './images/apple.png'
import imgChips  from './images/chips.png'
import imgCookie from './images/cookie.png'
import imgBread  from './images/bread.png'

import imgBiscuits  from './images/biscuits.png'
import imgHashbrown  from './images/hashbrowns.png'
import imgCinnamon from './images/cinnamon.png'
import imgMuffin  from './images/muffin.png'
import imgBagel  from './images/bagel.png'
import imgEnglishMuffin  from './images/english-muffin.png'
import imgBiscuit  from './images/biscuit.png'

import imgChili  from './images/chili.png'
import imgBrownie  from './images/brownie.png'
import imgSoup  from './images/soup.png'

import './styles.css'

/**
 * These are calories for local options - they keep changing, and it's a longer
 * process for RDM to update them.
 */
const localCals = {
  extras_avocado: [60, 120],
  extras_pepperoni: [80, 160],
  extras_guacamole: [70, 140],
  extras_spicy_guacamole: [70, 140],
  sides_chili: [360],
  sides_brownie: ['350-370']
}

const imageLookup = {
  'sides_chili': imgChili,
  'sides_brownie': imgBrownie,
  'sides_soup': imgSoup,

  'sides_biscuits_and_gravy': imgBiscuits,
  'sides_hash_browns': imgHashbrown,
  'sides_cinnamon_rolls': imgCinnamon,
  'sides_muffins': imgMuffin,
  'sides_bagel': imgBagel,
  'sides_english_muffin': imgEnglishMuffin,
  'sides_biscuit': imgBiscuit,

  'extras_avocado': imgAvocado,
  'extras_pepperoni': imgPepperoni,
}

const getLocalOptionData = (localOptionKey = 'extras_local_option_one') => {
  const local = API.v.loc(localOptionKey)
  if (!local.isValid) {
    return {
      isValid: false
    };
  }

  console.log('TEST: ' + `${localCals[localOptionKey]}`)

  return {
    isValid: true,
    name: local.data,
    price6: API.loc(`${localOptionKey}_price_6in`),
    price12: API.loc(`${localOptionKey}_price_12in`),
    calories: `${localCals[localOptionKey]}`
  }
}

const BreakfastSides = [
  // 'sides_cinnamon_rolls',
  // 'sides_cinnamon_rolls_11am',
  // 'sides_hash_browns',
  // 'sides_hash_browns_11am',
  // 'sides_muffins',
  // 'sides_muffins_11am',
  // 'sides_biscuits_and_gravy',
  // 'sides_biscuits_and_gravy_11am',
]


let isBreakfastSide = (item) => {
  return BreakfastSides.indexOf(item) > -1
}

let listSidesNoBreakfast = [];
let listExtras = [];

@neocastDataProvider([
  /**
   * These are part of every Extras menu.
   */
  'extras_bacon_price_6in',
  'extras_bacon_price_12in',

  'deluxe_addon_price_6in',
  'deluxe_addon_price_12in',

  'extras_double_meat_price_6in',
  'extras_double_meat_price_12in',

  'extras_cheese_price_6in',
  'extras_cheese_price_12in',


  'sides_chips_price',
  'sides_cookies_price_1ct',
  'sides_apples_price',

  'gluten_free_bread',
  'gluten_free_bread_price',

  'extras_pepperoni_price_6in',
  'extras_pepperoni_price_12in',

  'extras_guacamole_price_6in',
  'extras_guacamole_price_12in',

  'extras_avocado_price_6in',
  'extras_avocado_price_12in',

  'gluten_free_bread_price',

  'sides_local_option_one',
  'sides_local_option_two',

  /**
   * Local options.
   *
   * If either of these keys are specified, then the corresponding
   * prices and calorie information should be looked up.
   */
  'extras_local_option_one',
  'extras_local_option_two',
  'extras_local_option_three'
])
export default class BigFooter extends Component {

  constructor(props) {
    super(props)

    const {
      gluten_free_bread,
      serves_bfast_all_day,

      sides_local_option_one,
      sides_local_option_two,
      sides_local_option_three
    } = this.props;

    this.hasGlutenFreeBread = !isNil(gluten_free_bread)
      ? JSON.parse(gluten_free_bread)
      : false

    this.local1 = getLocalOptionData(this.props.sides_local_option_one)
    this.local2 = getLocalOptionData(this.props.sides_local_option_two)
    this.local3 = getLocalOptionData(this.props.extras_local_option_three)


    /**
     * Local option 1
     */

     // If it is 11am, use the base price
    let localCheck1 = (sides_local_option_one == null ? null : sides_local_option_one.replace("_11am", ""));
    this.localOption1 = API.loc(localCheck1);

    console.log('LOG: ' + this.localOption1)
    console.log('LOG1: ' + this.localCheck1)

    if (this.localOption1) {

      if (localCheck1 !== sides_local_option_one) {
        this.localOption1 = `${this.localOption1}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local1_price = API.loc(`${localCheck1}_price`)

      if (this.local1.calories !== 'undefined' && this.local1.calories !== undefined) {
        this.local1_cals = this.local1.calories
      } else {
        this.local1_cals = API.net(`${localCheck1}_cal`)
      }

      if (!isBreakfastSide(localCheck1)) listSidesNoBreakfast.push({
        side: localCheck1,
        name: API.loc(`${localCheck1}`),
        price: this.local1_price,
        cals: this.local1_cals
      });

    }

    // console.log(this.localOption1, this.local1_price, this.local1_cals);

    /**
     * Local option 2
     */
    let localCheck2 = (sides_local_option_two == null ? null : sides_local_option_two.replace("_11am", ""));
    this.localOption2 = API.loc(localCheck2);

    if (this.localOption2) {

      if (localCheck2 !== sides_local_option_two) {
        this.localOption2 = `${this.localOption2}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local2_price = API.loc(`${localCheck2}_price`)

      if (this.local2.calories !== 'undefined' && this.local2.calories !== undefined) {
        this.local2_cals = this.local2.calories
      } else {
        this.local2_cals = API.net(`${localCheck2}_cal`)
      }

      if (!isBreakfastSide(localCheck2)) listSidesNoBreakfast.push({
        side: localCheck2,
        name: API.loc(`${localCheck2}`),
        price: this.local2_price,
        cals: this.local2_cals
      });
    }

    /**
     * Local option 3
     */
    let localCheck3 = (sides_local_option_three == null ? null : sides_local_option_three.replace("_11am", ""));
    this.localOption3 = API.loc(localCheck3);

    if (this.localOption3) {

      if (localCheck3 !== sides_local_option_three) {
        this.localOption3 = `${this.localOption3}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local3_price = API.loc(`${localCheck3}_price`)

      if (this.local3.calories !== 'undefined' && this.local3.calories !== undefined) {
        this.local3_cals = this.local3.calories
      } else {
        this.local3_cals = API.net(`${localCheck3}_cal`)
      }

      if (!isBreakfastSide(localCheck3)) listSidesNoBreakfast.push({
        side: localCheck3,
        name: API.loc(`${localCheck3}`),
        price: this.local3_price,
        cals: this.local3_cals
      });
    }

    // Extras
    this.extras1 = API.loc(`extras_local_option_one`);
    if (this.extras1 && this.extras1 != "extras_guacamole")
    {
      let extras1 = {
        key: this.extras1,
        name:    API.loc(`${this.extras1}`),
        price6:  API.loc(`${this.extras1}_price_6in`),
        price12: API.loc(`${this.extras1}_price_12in`),
        cals:   localCals[this.extras1],
      }

      listExtras.push(extras1)
    }

    this.extras2 = API.loc(`extras_local_option_two`);
    if (this.extras2 && this.extras2 != "extras_guacamole")
    {
      let extras2 = {
        key: this.extras2,
        name:    API.loc(`${this.extras2}`),
        price6:  API.loc(`${this.extras2}_price_6in`),
        price12: API.loc(`${this.extras2}_price_12in`),
        cals:   localCals[this.extras2],
      }

      listExtras.push(extras2)
    }

    console.log("LOCALS", this.localOption1);

  }

  componentDidMount() {
    if (this.props.player == 'dual') {}

  }

  render() {

    const {
      extras_bacon_price_6in,
      extras_bacon_price_12in,
      deluxe_addon_price_6in,
      deluxe_addon_price_12in,
      extras_double_meat_price_6in,
      extras_double_meat_price_12in,
      extras_cheese_price_6in,
      extras_cheese_price_12in,
      extras_guacamole_price_6in,
      extras_guacamole_price_12in,
      extras_pepperoni_price_6in,
      extras_pepperoni_price_12in,
      extras_avocado_price_6in,
      extras_avocado_price_12in,
      sides_chips_price,
      sides_cookies_price_1ct,
      sides_apples_price,
      gluten_free_bread_price
    } = this.props

    return (
      <div className='footerSides'>

        <div className='footer-1' ref={(node) => this.footer1 = node }>

          <div className='footer-title'>ADD<br/>SIDES.</div>

          <div className='f-col f-1'>
            <div className='wrapper'>
              <img src={imgChips}/>
              <div className='title'>Chips</div>
              <div className='pricing'>
                <strong>${sides_chips_price}</strong><br/>
                130-340 cal
              </div>
            </div>
          </div>

          <div className='f-col f-2'>
            <div className='wrapper'>
              <img src={imgCookie}/>
              <div className='title'>Cookie</div>
              <div className='pricing'>
                <strong>${sides_cookies_price_1ct}</strong><br/>
                200-210 cal
              </div>
            </div>
          </div>

          <div className='f-col f-3'>
            <div className='wrapper'>
              <img src={imgApple}/>
              <div className='title'>Applesauce</div>
              <div className='pricing'>
                <strong>${sides_apples_price}</strong><br/>
                45 cal
              </div>
            </div>
          </div>

          {listSidesNoBreakfast[0] &&
            <div className={`f-col f-4 f-`+listSidesNoBreakfast[0].side}>
              <div className='wrapper'>
                <img src={imageLookup[listSidesNoBreakfast[0].side]}/>
                <div className='title' dangerouslySetInnerHTML={{__html: listSidesNoBreakfast[0].name}}></div>
                <div className='pricing'>
                  <strong>${listSidesNoBreakfast[0].price}</strong><br/>
                  {listSidesNoBreakfast[0].cals} cal
                </div>
              </div>
            </div>
          }

          {listSidesNoBreakfast[1] &&
            <div className={`f-col f-5 f-`+listSidesNoBreakfast[1].side}>
              <div className='wrapper'>
                <img src={imageLookup[listSidesNoBreakfast[1].side]}/>
                <div className='title' dangerouslySetInnerHTML={{__html: listSidesNoBreakfast[1].name}}></div>
                <div className='pricing'>
                  <strong>${listSidesNoBreakfast[1].price}</strong><br/>
                  {listSidesNoBreakfast[1].cals} cal
                </div>
              </div>
            </div>
          }

        </div>

        {/* TODO: Move this to Panel 3
        <div className='footer-3' ref={(node) => this.footer3 = node }>
          <div className='footerTitle'>SIDE <br/>HUSTLE.</div>
          <div className='footerSub'>Add some SIDES.</div>

          <div className='f-col f-deluxe'>
            <div className='wrapper'>
              <img src={imgApple}/>
              <div className='title'>Apples</div>
              <div className='one price'>${sides_apples_price}</div>
              <div className='one cals'>25-130 cal</div>
            </div>
          </div>

          <div className='f-col f-double'>
            <div className='wrapper'>
              <img src={imgChips}/>
              <div className='title'>Chips</div>
              <div className='one price'>${sides_chips_price}</div>
              <div className='one cals'>50-260 cal</div>
            </div>
          </div>

          <div className='f-col f-cheese'>
            <div className='wrapper'>
              <img src={imgCookie}/>
              <div className='title'>Cookie</div>
              <div className='one price'>${sides_cookies_price_1ct}</div>
              <div className='one cals'>200-230 cal</div>
            </div>
          </div>

          {listSidesNoBreakfast[0] &&
            <div className={`f-col f-bacon f-`+listSidesNoBreakfast[0].side}>
              <div className='wrapper'>
                <img src={imageLookup[listSidesNoBreakfast[0].side]}/>
                <div className='title'>{listSidesNoBreakfast[0].name}</div>
                <div className='one price'>${listSidesNoBreakfast[0].price}</div>
                <div className='one cals'>{listSidesNoBreakfast[0].cals} cal</div>
              </div>
            </div>
          }

          {listSidesNoBreakfast[1] &&
            <div className={`f-col f-five f-`+listSidesNoBreakfast[1].side}>
              <div className='wrapper'>
                <img src={imageLookup[listSidesNoBreakfast[1].side]}/>
                <div className='title'>{listSidesNoBreakfast[1].name}</div>
                <div className='one price'>${listSidesNoBreakfast[1].price}</div>
                <div className='one cals'>{listSidesNoBreakfast[1].cals} cal</div>
              </div>
            </div>
          }

        </div>
        */}

      </div>
    );
  }
}
