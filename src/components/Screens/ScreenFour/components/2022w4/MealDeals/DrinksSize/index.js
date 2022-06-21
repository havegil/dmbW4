import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import drinksData from '../data'
import DrinkItem from 'components/Common/DrinkItem'
import DrinksBkg from './images/strd_drinks_size.jpg'

import './styles.css'

let imgBg = DrinksBkg;
let is20 = API.loc('show_20_oz_drink');

let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');

let servesCoke = API.loc('serves_coca_cola');
let servesCoffee = API.loc('serves_coffee');
let chipsCookies = API.loc('chips_2cookies_drink_price');

@neocastDataProvider([
  // Show Sizes
  'show_20_oz_drink',
  'show_21_oz_drink',
  'show_30_oz_drink',
  'show_40_oz_drink',

  // Fountain sizes
  'drinks_fountain_price_20oz',
  'drinks_fountain_price_21oz',
  'drinks_fountain_price_30oz',
  'drinks_fountain_price_40oz',

  'meal_deal_fountain_additional_price',
  'chips_1cookie_drink_price',
  'chips_2cookies_drink_price',
  'sides_chips_price',

  'serves_coca_cola',

  // Bottled
  'serves_bottled_drinks',
  'drinks_bottle_price',

  // Second column
  'drinks_milk_price',

  // Local options
  'drinks_local_option_one',
  'drinks_local_option_two',
  'drinks_local_option_three',
  'drinks_local_option_four'
])
export default class AllNewDrinksMenu extends Component {

  constructor(props) {
    super(props)

    const {
      show_20_oz_drink,
      show_21_oz_drink,
      show_30_oz_drink,
      show_40_oz_drink,

      drinks_fountain_price_20oz,
      drinks_fountain_price_21oz,
      drinks_fountain_price_30oz,
      drinks_fountain_price_40oz,

      drinks_local_option_one,
      drinks_local_option_two,
      drinks_local_option_three,
      drinks_local_option_four
    } = this.props;

    this.state = {
      currentFrame: 0
    }

    this.drinkSizes = []

    if (show_20_oz_drink && drinks_fountain_price_20oz)
      this.drinkSizes.push({
        size: 20,
        price: drinks_fountain_price_20oz
      })

    if (show_21_oz_drink && drinks_fountain_price_21oz)
      this.drinkSizes.push({
        size: 21,
        price: drinks_fountain_price_21oz
      })

    if (show_30_oz_drink && drinks_fountain_price_30oz)
      this.drinkSizes.push({
        size: 30,
        price: drinks_fountain_price_30oz
      })

    if (show_40_oz_drink && drinks_fountain_price_40oz)
      this.drinkSizes.push({
        size: 40,
        price: drinks_fountain_price_40oz
      })

    /**
     * Local options
     */
    // Option 1
    this.localOption1 = API.loc(drinks_local_option_one);
    const localOption1Data = drinksData.find((d) => d.apiMap === drinks_local_option_one)

    if (this.localOption1 && localOption1Data) {
      this.localOption1 = localOption1Data.label
      this.local1Cal = localOption1Data.sizes[0].calories || '000'
      this.local1Price = localOption1Data.sizes[0].price
    }

    // Option 2
    this.localOption2 = API.loc(drinks_local_option_two);
    const localOption2Data = drinksData.find((d) => d.apiMap === drinks_local_option_two)

    if (this.localOption2 && localOption2Data) {
      this.localOption2 = localOption2Data.label
      this.local2Cal = localOption2Data.sizes[0].calories || '000'
      this.local2Price = localOption2Data.sizes[0].price
    }

    // Option 3
    this.localOption3 = API.loc(drinks_local_option_three);
    const localOption3Data = drinksData.find((d) => d.apiMap === drinks_local_option_three)

    if (this.localOption3 && localOption3Data) {
      this.localOption3 = localOption3Data.label
      this.local3Cal = localOption3Data.sizes[0].calories || '000'
      this.local3Price = localOption3Data.sizes[0].price
    }

    // Option 4
    this.localOption4 = API.loc(drinks_local_option_four);
    const localOption4Data = drinksData.find((d) => d.apiMap === drinks_local_option_four)

    if (this.localOption4 && localOption4Data) {
      this.localOption4 = localOption4Data.label
      this.local4Cal = localOption4Data.sizes[0].calories || '000'
      this.local4Price = localOption4Data.sizes[0].price
    }
  }

  componentWillReceiveProps(nextProps) {
    let nextFrame = nextProps.currentFrameCount % this.drinkSizes.length;
    this.setState({currentFrame: nextFrame})
    console.log(this.state);
  }

  render() {
    const {
      show_20_oz_drink,
      show_21_oz_drink,
      show_30_oz_drink,
      show_40_oz_drink,

      drinks_fountain_price_20oz,
      drinks_fountain_price_21oz,
      drinks_fountain_price_30oz,
      drinks_fountain_price_40oz,

      meal_deal_fountain_additional_price,

      chips_1cookie_drink_price,
      chips_2cookies_drink_price,
      sides_chips_price,

      serves_coca_cola,

      serves_bottled_drinks,
      drinks_bottle_price,

      drinks_milk_price
    } = this.props;

    return (
      <div className='all-new-drinks-menu'>

        <img src={imgBg} className='bg'/>

            
        { !isSodiumStore &&
              <span className={`chips-cookie-price`}>${chips_2cookies_drink_price}</span>
            }
    
        { isSodiumStore && !isPhilly &&
          <span className={`chips-cookie-price`} >${chips_2cookies_drink_price}</span>
        }

        { isSodiumStore && isPhilly &&
          <span className={`chips-cookie-price`} >${chips_2cookies_drink_price}</span>
        }

        <div className="drink-price-block">
            <div className="fd-sml">S ${drinks_fountain_price_20oz} 
                <p className="cal">0-240</p>
            </div>
            <div className="fd-med">M ${drinks_fountain_price_30oz}
                <p className="cal">0-370</p>
            </div>
            <div className="fd-lrg">L ${drinks_fountain_price_40oz}
                <p className="cal">0-490cal</p>
            </div> 
        </div>   

        <div className="drink-price-block">
            <div className="bd">${drinks_bottle_price} 
                <span className="cal cal-nowrap">0-300cal</span>
            </div>
        </div>  

        <div className="drink-price-block">
            <div className="fbc">${drinks_fountain_price_20oz} 
                <span className="cal cal-nowrap">200-230cal</span>
            </div>
        </div>    

        <div className="drink-price-block">
            <div className="milk">${drinks_milk_price} 
                <span className="cal cal-nowrap">100cal</span>
            </div>
        </div>  

        <div className="drink-price-block">
            <div className="chips">${sides_chips_price} 
                <span className="cal cal-nowrap">140-260cal</span>
            </div>
        </div>  

   
      </div>
    )
  }
}
