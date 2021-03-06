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


import imgMOZZ   from './images/FRESH_MOZZ.png'
import imgMoz1   from './images/moz-1.png'
import imgMoz2   from './images/moz-2.png'
import imgMoz3   from './images/moz-3.png'

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

  return {
    isValid: true,
    name: local.data,
    price6: API.loc(`${localOptionKey}_price_6in`),
    price12: API.loc(`${localOptionKey}_price_12in`),
    calories: `${localCals[localOptionKey]}`
  }
}

const disableGuac = API.loc('guacamole_disable');


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

  'extras_mozzarella_price_6in',
  'extras_mozzarella_price_12in',

  'extras_avocado_price_6in',
  'extras_avocado_price_12in',

  'sides_local_option_one',
  'sides_local_option_two',

  'guacamole_disable',

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

    this.local1 = getLocalOptionData(this.props.extras_local_option_one)
    this.local2 = getLocalOptionData(this.props.extras_local_option_two)
    this.local3 = getLocalOptionData(this.props.extras_local_option_three)

    /**
     * Local option 1
     */

     // If it is 11am, use the base price
    let localCheck1 = (sides_local_option_one == null ? null : sides_local_option_one.replace("_11am", ""));
    this.localOption1 = API.loc(localCheck1);

    if (this.localOption1) {

      if (localCheck1 !== sides_local_option_one) {
        this.localOption1 = `${this.localOption1}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local1_price = API.loc(`${localCheck1}_price`)
      this.local1_cals = API.net(`${localCheck1}_cal`)

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
      this.local2_cals = API.net(`${localCheck2}_cal`)

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
  {/*}  let localCheck3 = (sides_local_option_three == null ? null : sides_local_option_three.replace("_11am", ""));
    this.localOption3 = API.loc(localCheck3);

    if (this.localOption3) {

      if (localCheck3 !== sides_local_option_three) {
        this.localOption3 = `${this.localOption3}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local3_price = API.loc(`${localCheck3}_price`)
      this.local3_cals = API.net(`${localCheck3}_cal`)

      if (!isBreakfastSide(localCheck3)) listSidesNoBreakfast.push({
        side: localCheck3,
        name: API.loc(`${localCheck3}`),
        price: this.local3_price,
        cals: this.local3_cals
      });
    }
  */}

    // Extras
    this.extras1 = API.loc(`extras_local_option_one`);
    if (this.extras1 && this.extras1 != "extras_guacamole")
    {
      let extras1 = {
        key: this.extras1,
        name:    API.loc(`${this.extras1}`),
        price6:  API.loc(`${this.extras1}_price_6in`),
        price12: API.loc(`${this.extras1}_price_12in`),
        cals:   localCals[this.extras1] || 0,
      }
      listExtras.push(extras1)
    }
    this.extras2 = API.loc(`extras_local_option_two`);
    if (this.extras2 && this.extras2 != "extras_guacamole" && this.props.gluten_free_bread == false)
    {
      let extras2 = {
        key: this.extras2,
        name:    API.loc(`${this.extras2}`),
        price6:  API.loc(`${this.extras2}_price_6in`),
        price12: API.loc(`${this.extras2}_price_12in`),
        cals:   localCals[this.extras2] || 0,
      }
      listExtras.push(extras2)
    }


{/*
    this.extras3 = API.loc(`extras_local_option_three`);
    if (this.extras3 && this.extras3 != "extras_guacamole")
    {
      let extras3 = {
        key: this.extras3,
        name:    API.loc(`${this.extras3}`),
        price6:  API.loc(`${this.extras3}_price_6in`),
        price12: API.loc(`${this.extras3}_price_12in`),
        cals:   localCals[this.extras3] || 0,
      }
      listExtras.push(extras3)
    }
*/}

  }
  

  
  componentDidMount() {
    if (this.props.player == 'dual') {}

    const Beat = 11;
    const Fade = 0.4;

    // Create Timeline
    let master = new TimelineMax({repeat: -1});
    if (listExtras.length == 0 && !this.hasGlutenFreeBread) {
      master
        .set(this.footer1, { opacity: 1 })
        .set(this.footer2, { opacity: 0 })
        .set(this.footer3, { opacity: 0 })

    } else if (listExtras.length == 0 && this.hasGlutenFreeBread) {
      master
        .set(this.footer1, { opacity: 1 })
        .set(this.footer2, { opacity: 0 })
        .set(this.footer3, { opacity: 0 })

        .to(this.footer1, Fade, { opacity: 0}, Beat * 1)
        .to(this.footer3, Fade, { opacity: 1}, Beat * 1)

        .to(this.footer3, Fade, { opacity: 0}, Beat * 2)
        .to(this.footer1, Fade, { opacity: 1}, Beat * 2);

    } else {
      master
        .set(this.footer1, { opacity: 1 })
        .set(this.footer2, { opacity: 0 })
        .set(this.footer3, { opacity: 0 })

        .set([this.moz3], {opacity: 0})

        .to(this.footer1, Fade, { opacity: 0}, Beat * 1)
        .to(this.footer2, Fade, { opacity: 1}, Beat * 1)

        .to(this.footer2, Fade, { opacity: 0}, Beat * 2)
        .to(this.footer3, Fade, { opacity: 1}, Beat * 2)

        .to(this.footer3, Fade, { opacity: 0}, Beat * 3)
        .to(this.footer1, Fade, { opacity: 1}, Beat * 3);

    {/* .to(this.MOZZ, 0.5, { opacity: 0}, (Beat * 1 + 2))
        .fromTo(this.moz2, 0.5,
          {top: "-100", opacity:0},
          {top: "0", opacity:1}, (Beat * 1 + 2.3))
        .fromTo(this.moz3, 0.5,
          {top: "-120", opacity:0},
          {top: "-30", opacity:1}, (Beat * 1 + 2.8)) */}
    }
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
      extras_mozzarella_price_6in,
      extras_mozzarella_price_12in,
      extras_pepperoni_price_6in,
      extras_pepperoni_price_12in,
      extras_avocado_price_6in,
      extras_avocado_price_12in,
      sides_chips_price,
      sides_cookies_price_1ct,
      sides_apples_price,
      gluten_free_bread_price
    } = this.props


    function guacamoleAddon() {
    return (
    <div className='f-col f-2'>
      <div className='wrapper'>
        <div className="image">
          <img src={imgGuac}/>
        </div>
        <div className='title'>Guacamole</div>
        <div className='pricing'>
          6" <strong>${extras_guacamole_price_6in}</strong> 80 cal<br/>
          Footlong <strong>${extras_guacamole_price_12in}</strong> 160 cal
        </div>
      </div>
    </div>
    )}



    return (
      <div className='bigFooter'>

        <div className='footer-1' ref={(node) => this.footer1 = node }>

          <div className='footer-title'>ADD<br/>EXTRAS.</div>

          <div className='f-col f-1'>
            <div className='wrapper'>
              <div className="image">
                <img src={imgDeluxe}/>
              </div>
              <div className='title'>Deluxe<sup>*</sup></div>
              <div className='pricing'>
                6" <strong>${deluxe_addon_price_6in}</strong> 25-130 cal<br/>
                Footlong <strong>${deluxe_addon_price_12in}</strong> 50-260 cal
              </div>
            </div>
          </div>

          <div className='f-col f-2'>
            <div className='wrapper'>
              <div className="image">
                <img src={imgDouble}/>
              </div>
              <div className='title'>Double Meat</div>
              <div className='pricing'>
                6" <strong>${extras_double_meat_price_6in}</strong> 50-260 cal<br/>
                Footlong <strong>${extras_double_meat_price_12in}</strong> 100-520 cal
              </div>
            </div>
          </div>

          <div className='f-col f-3'>
            <div className='wrapper'>
              <div className="image">
                <img src={imgCheese}/>
              </div>
              <div className='title'>Extra Cheese</div>
              <div className='pricing'>
                6" <strong>${extras_cheese_price_6in}</strong> 40-60 cal<br/>
                Footlong <strong>${extras_cheese_price_12in}</strong> 80-120 cal
              </div>
            </div>
          </div>

        </div>

        <div className='footer-2' ref={(node) => this.footer2 = node }>

          <div className='footer-title'>ADD<br/>EXTRAS.</div>

          <div className='f-col f-1'>
            <div className='wrapper'>
              <div className="image">
                <img src={imgBacon}/>
              </div>
              <div className='title'>Bacon</div>
              <div className='pricing'>
                6" <strong>${extras_bacon_price_6in}</strong> 80 cal<br/>
                Footlong <strong>${extras_bacon_price_12in}</strong> 160 cal
              </div>
            </div>
          </div>

          {/* Toggle guac */}
          {disableGuac ? '' : guacamoleAddon()}

{/*         <div className='f-col f-3'>
            <div className='wrapper'>
              <div className="image">
                <img src={imgMoz1} ref={(node) => this.moz1 = node}/>
                <img className='moz moz-2' src={imgMoz2} ref={(node) => this.moz2 = node}/>
                <img className='moz moz-3' src={imgMoz3} ref={(node) => this.moz3 = node}/>
              </div>
              <div className='title'>Mozzarella</div>
              <div className='pricing'>
                6" <strong>${extras_mozzarella_price_6in}</strong> 90 cal<br/>
                Footlong <strong>${extras_mozzarella_price_12in}</strong> 180 cal
              </div>
            </div>
            <img className='moz MOZZ' src={imgMOZZ} ref={(node) => this.MOZZ = node}/>
           </div>
*/}
          {false && //listExtras[0] &&
            <div className={`f-col f-3 f-`+listExtras[0].key}>
              <div className='wrapper'>
                <div className="image">
                  <img src={imageLookup[listExtras[0].key]}/>
                </div>
                <div className='title'>{listExtras[0].name}</div>
                <div className='pricing'>
                  6" <strong>${listExtras[0].price6}</strong> {listExtras[0].cals[0]} cal<br/>
                  Footlong <strong>${listExtras[0].price12}</strong> {listExtras[0].cals[1]} cal
                </div>
              </div>
            </div>
          }

        </div>

        <div className='footer-3' ref={(node) => this.footer3 = node }>

          <div className='footer-title'>ADD<br/>EXTRAS.</div>

          {listExtras[0] &&
            <div className={`f-col f-1 f-`+listExtras[0].key}>
              <div className='wrapper'>
                <div className="image">
                  <img src={imageLookup[listExtras[0].key]}/>
                </div>
                <div className='title'>{listExtras[0].name}</div>
                <div className='pricing'>
                  6" <strong>${listExtras[0].price6}</strong> {listExtras[0].cals[0]} cal<br/>
                  Footlong <strong>${listExtras[0].price12}</strong> {listExtras[0].cals[1]} cal
                </div>
              </div>
            </div>
          }

          {listExtras[1] &&
            <div className={`f-col f-2 f-`+listExtras[1].key}>
              <div className='wrapper'>
                <div className="image">
                  <img src={imageLookup[listExtras[1].key]}/>
                </div>
                <div className='title'>{listExtras[1].name}</div>
                <div className='pricing'>
                  6" <strong>${listExtras[1].price6}</strong> {listExtras[1].cals[0]} cal<br/>
                  Footlong <strong>${listExtras[1].price12}</strong> {listExtras[1].cals[1]} cal
                </div>
              </div>
            </div>
          }

          {this.hasGlutenFreeBread &&
            <div className='f-bread'>
              <div className='title'>Gluten-Free <br/>Bread*</div>
              <div className='pricing'>
                6" +<strong>${gluten_free_bread_price}</strong> 340 cal<br/>
              </div>
              <img src={imgBread}/>
              <div className='disclaimer'>
                * The Gluten-Free bread is manufactured in a Gluten-Free facility.
                However, other menu items and ingredients in our restaurants contain
                gluten and are prepared on shared equipment, so we cannot guarantee
                that our menu items are 100% Gluten-Free.
              </div>
            </div>
          }

        </div>

      </div>
    );
  }
}
