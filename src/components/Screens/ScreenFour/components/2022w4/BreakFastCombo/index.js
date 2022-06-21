import { Component } from 'react'
import API from 'api'
import AllNewBreakfastComboNoCoke from './images/breakfast_combo_none_coke.jpg'
import AllNewBreakfastComboCoke from './images/strd_breakfast_combo.jpg'


//import noCoffee from './no-coffee.png'

import LineItem from 'components/Common/LineItem'
import neocastDataProvider from 'api/neocastDataProvider'

import "./styles.css";

let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');
const isLAStore = API.loc('breakfast_la_store')

let comboPrice = API.loc('breakfast_combo_price');
let isFarmhouse = API.loc('farmhouse_combo');

if (isFarmhouse) {
  comboPrice = API.loc('farmhouse_combo_price');
}

/**
 * Convenience function for getting a price for a breakfast option
 */
 const getPrice = (price, fallback) => {
  return (price && price !== '0.00')
    ? price
    : fallback
}

let servesCoke = API.loc('serves_coca_cola');
let servesCoffee = API.loc('serves_coffee');
let bgImage = AllNewBreakfastComboCoke;

if (!servesCoke) bgImage = AllNewBreakfastComboNoCoke;

if (isSodiumStore)
{
  bgImage = imgCokeNY
  if (!servesCoke) bgImage = AllNewBreakfastComboNoCoke;
}

if (isSodiumStore && isPhilly)
{
  bgImage = imgCokePhilly
  if (!servesCoke) bgImage = AllNewBreakfastComboNoCoke;
}

let chipsCookies = API.loc('chips_2cookies_drink_price');

@neocastDataProvider([
  'bfast_price_6in',
  'bfast_price_12in',

  'bfast_egg_and_cheese_price_6in',
  'bfast_egg_and_cheese_price_12in',
  'bfast_egg_and_cheese_price_croissant',

  'bfast_turkey_egg_and_cheese_price_6in',
  'bfast_turkey_egg_and_cheese_price_12in',
  'bfast_turkey_egg_and_cheese_price_croissant',

  'bfast_bacon_egg_and_cheese_price_6in',
  'bfast_bacon_egg_and_cheese_price_12in',
  'bfast_bacon_egg_and_cheese_price_croissant',

  'bfast_steak_egg_and_cheese_price_6in',
  'bfast_steak_egg_and_cheese_price_12in',

  'bfast_bf_ham_egg_and_cheese_price_6in',
  'bfast_bf_ham_egg_and_cheese_price_12in',
  'bfast_bf_ham_egg_and_cheese_price_croissant',

  // Local options
  'bfast_local_option_one',
  'bfast_local_option_two',

  'farmhouse_combo',
  'farmhouse_combo_price',
  'breakfast_combo',
  'breakfast_combo_price',
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

  'kids_milk_price',
  'drinks_milk_price',

  'serves_coca_cola',

  // Bottled
  'serves_bottled_drinks',
  'drinks_bottle_price',

  // Second column
  'drinks_milk_price',

  
	'coffee_price_12oz',
	'coffee_price_16oz',

  'sides_cookies_price_1ct',
  'sides_chips_price',

  // Local options
  'drinks_local_option_one',
  'drinks_local_option_two',
  'drinks_local_option_three',
  'drinks_local_option_four'
])

export default class AllNewBreakfastCombo extends Component {

    render() {
        const {
          bfast_price_6in,
          bfast_price_12in,
          bfast_egg_and_cheese_price_6in,
          bfast_egg_and_cheese_price_12in,
          bfast_egg_and_cheese_price_croissant,
          bfast_bacon_egg_and_cheese_price_6in,
          bfast_bacon_egg_and_cheese_price_12in,
          bfast_bacon_egg_and_cheese_price_croissant,
          bfast_steak_egg_and_cheese_price_6in,
          bfast_steak_egg_and_cheese_price_12in,
          bfast_bf_ham_egg_and_cheese_price_6in,
          bfast_bf_ham_egg_and_cheese_price_12in,
          bfast_bf_ham_egg_and_cheese_price_croissant,
    
          bfast_turkey_egg_and_cheese_price_6in,
          bfast_turkey_egg_and_cheese_price_12in,
          bfast_turkey_egg_and_cheese_price_croissant,
    
          breakfast_combo,
          breakfast_combo_price,
    
          meal_deal_fountain_additional_price,
    
          chips_1cookie_drink_price,
          chips_2cookies_drink_price,
    
          serves_coca_cola,
    
          coffee_price_12oz,
          coffee_price_16oz

        } = this.props;
        return (
          <div className='all-new-breakfast-combo'>
            <img src={bgImage} />
    
            {/* { !servesCoffee &&
               <img className='no-coffee' src={noCoffee} />
            } */}
    
            { !isSodiumStore &&
              <span className={`price`} style={{left: 680, top: 56}}>${chipsCookies}</span>
            }
    
            { isSodiumStore && !isPhilly &&
              <span className={`price`} style={{left: 720, top: 56}}>${chipsCookies}</span>
            }
    
            { isSodiumStore && isPhilly &&
              <span className={`price`} style={{left: 710, top: 56}}>${chipsCookies}</span>
            }
           
    
            <span className={`price`} style={{left: 217, top: 761}}>
              ${bfast_bf_ham_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
              ${bfast_bf_ham_egg_and_cheese_price_12in}
            </span>
    
            <span className={`price`} style={{left: 222, top: 859}}>
              ${bfast_steak_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
              ${bfast_steak_egg_and_cheese_price_12in}
            </span>
    
            <span className={`price`} style={{left: 222, top: 956}}>
              ${bfast_bacon_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
              ${bfast_bacon_egg_and_cheese_price_12in}
            </span>
    
            <span className={`price`} style={{left: 700, top: 761}}>
              ${bfast_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
              ${bfast_egg_and_cheese_price_12in}
            </span>
    
            {servesCoffee &&
            <span className={`price price-white`} style={{left: 703, top: 984}}>
              ${breakfast_combo_price}
            </span>
            }
        </div>
    )
    }
}
