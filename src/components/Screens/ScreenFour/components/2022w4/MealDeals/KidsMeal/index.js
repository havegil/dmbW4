import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import drinksData from '../data'

//import DrinkItem from 'components/Common/DrinkItem'

import bg from './images/strd_kidsmeal.jpg'
import './styles.css'

let imgBg = bg;


let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');

if (isSodiumStore)
{
  imgBg = bgNY //#Gil Nordelus show alternate items for Sodium

  if (isPhilly)
  {
    imgBg = bgPhilly
  }
}


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

  'serves_coca_cola',

  // Bottled
  'serves_bottled_drinks',
  'drinks_bottle_price',

  // Second column
  'melt_addon_price',
  'drinks_milk_price',
  'signature_wraps_price',
  'chopped_salad_addon_price',
  'kids_milk_price',
  'kids_applesauce_price',
  'kids_meal_price',
  'drinks_honestkids_price',
  'kids_meal_california',

  // Local options
  'drinks_local_option_one',
  'drinks_local_option_two',
  'drinks_local_option_three',
  'drinks_local_option_four'
])

export default class KidsMeal extends Component {
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
    }

    componentWillReceiveProps(nextProps) {
        let nextFrame = nextProps.currentFrameCount % 8;
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

            serves_coca_cola,

            serves_bottled_drinks,
            drinks_bottle_price,
            signature_wraps_price,
            chopped_salad_addon_price,
            kids_milk_price,
            kids_applesauce_price,
            kids_meal_price,
            drinks_honestkids_price,
            kids_meal_california,

            melt_addon_price,
            drinks_milk_price
        } = this.props;

    let servesCoke = API.loc('serves_coca_cola');
    let slicedAvocado = API.loc('avocado_sliced');
    let isSodiumStore = API.loc('store_plus_sodium');
    let isPhilly = API.loc('is_philadelphia_store');
    let layoutDirection = API.loc('layout_direction');
   
    let philyPrice6  = API.loc('big_philly_cheesesteak_price_6in');
    let philyPrice12 = API.loc('big_philly_cheesesteak_price_12in');
    let philyPricePro = API.loc('big_philly_cheesesteak_price_pro');

    
    return (
        <div className="all-new-kids-meal">
            <img src={imgBg} className='bg'/>

            <div className={`ForKids`}>
            <h2>Fresh Fit For Kids<sup>®</sup> Meal
                { kids_meal_california &&
                <span>Mini sub, applesauce and low-fat white milk ${kids_meal_price}</span>
                }
                { !kids_meal_california &&
                <span>Mini sub, applesauce and juice or low-fat white milk ${kids_meal_price}</span>
                }            
            </h2>

            { kids_meal_california &&
                <div className={'kidsItems'}>
                <div className={'col'}>
                    <div className={'kidsItem'}>
                    <h2>Veggie Delite<sup>®</sup></h2>
                    <div className={'kidsCals'}>315 cal</div>
                    </div>

                    <div className={'kidsItem'}>
                    <h2>Oven-Roasted Turkey</h2>
                    <div className={'kidsCals'}>345 cal</div>
                    </div>

                    <div className={'kidsItem'}>
                    <h2>Black Forest Ham</h2>
                    <div className={'kidsCals'}>345 cal</div>
                    </div>
                </div>

                <div className={'col'}>
                    <h3>Sides</h3>

                    <div className={'kidsItem'}>
                    <h2>Honest Kids<sup>®</sup> Juice</h2>
                    <div className={'kidsCals'}>35 cal</div>
                    <div className={'amount'}>${drinks_honestkids_price}</div>
                    </div>

                    <div className={'kidsItem'}>
                    <h2>Applesauce</h2>
                    <div className={'kidsCals'}>45 cal</div>
                    <div className={'amount'}>${kids_applesauce_price}</div>
                    </div>

                    <div className={'kidsItem'}>
                    <h2>Milk</h2>
                    <div className={'kidsCals'}>130 cal</div>
                    <div className={'amount'}>${kids_milk_price}</div>
                    </div>
                </div>
                </div>
            }

            { !kids_meal_california &&
                <div className={'kidsItems'}>
                <div className={'col'}>
                    <div className={'kidsItem'}>
                    <h2>Veggie Delite<sup>®</sup></h2>
                    <div className={'kidsCals'}>315 cal</div>
                    </div>

                    <div className={'kidsItem'}>
                    <h2>Oven-Roasted Turkey</h2>
                    <div className={'kidsCals'}>345 cal</div>
                    </div>

                    <div className={'kidsItem'}>
                    <h2>Black Forest Ham</h2>
                    <div className={'kidsCals'}>345 cal</div>
                    </div>
                </div>

                <div className={'col'}>
                    <h3>Sides</h3>
                    <div className={'kidsItem'}>
                    <h2>Applesauce</h2>
                    <div className={'kidsCals'}>45 cal</div>
                    <div className={'amount'}>${kids_applesauce_price}</div>
                    </div>

                    <div className={'kidsItem'}>
                    <h2>Milk</h2>
                    <div className={'kidsCals'}>130 cal</div>
                    <div className={'amount'}>${kids_milk_price}</div>
                    </div>
                </div>
                </div>
            }         

            </div>

        </div>
    )
    }
}
