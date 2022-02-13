import { Component } from 'react';

import API from 'api'

import isNil from 'lodash/isNil'

import neocastDataProvider from 'api/neocastDataProvider'

import LineItem from 'components/Common/LineItem'
import Calories from 'components/Common/Calories'
import FootlongHeader from 'components/Common/ColumnHeaders/Footlong'
import SixInchHeader from 'components/Common/ColumnHeaders/SixInch'

import './styles.css'


/**
 * These are calories for local options - they keep changing, and it's a longer
 * process for RDM to update them.
 */
const localCals = {
  extras_avocado: '60/120',
  extras_pepperoni: '80/160',
  extras_guacamole: '70/140',
  extras_spicy_guacamole: '70/140'
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

  'gluten_free_bread',
  'gluten_free_bread_price',

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
export default class ExtrasMenu extends Component {

  constructor(props) {
    super(props)

    this.local1 = getLocalOptionData(this.props.extras_local_option_one)
    this.local2 = getLocalOptionData(this.props.extras_local_option_two)
    this.local3 = getLocalOptionData(this.props.extras_local_option_three)

    const { gluten_free_bread } = this.props

    this.hasGlutenFreeBread = !isNil(gluten_free_bread)
      ? JSON.parse(gluten_free_bread)
      : false
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
      extras_cheese_price_12in
    } = this.props


    return (
      <div className={`c-ExtrasMenu ${this.props.layout}`}>

        {/* Header */}
        <div className='c-Header_row'>

          <div className='c-Header_column c-Header_column-spacer'>
            <div className='c-Menus_header'>
              GET EXTRAS.
              <span className={'c-Menus_caption c-Menus_caption-highlight headerCal' }>
                Added cal
              </span>
            </div>
          </div>

          <div className='c-Header_column'>
            <SixInchHeader />
          </div>

          <div className='c-Header_column'>
            <FootlongHeader />
          </div>

        </div>

        {/* Bacon */}
        <LineItem
          name={'Bacon'}
          calories={'80/160'}
          price6={extras_bacon_price_6in}
          price12={extras_bacon_price_12in}
          expand={false}
          suffix=""
        />

        {/* Deluxe */}
        {deluxe_addon_price_6in && deluxe_addon_price_12in &&
          <div className='c-TableList_row'>
            <div className='c-TableList_column'>

              <div className='c-Menus_title c-Menus_title-left'>
                <Calories nextLine indentCals={false} suffix="">25-130/50-260</Calories>
                Deluxe
                <span className='c-Menus_caption c-Sub_caption'>
                  50% more meat
                </span>


              </div>
            </div>

            <div className='c-TableList_column c-TableList-center'>
              <div className='c-Menus_title c-Menus_title-left'>
                ${deluxe_addon_price_6in}
              </div>
            </div>

            <div className='c-TableList_column'>
              <div className='c-Menus_title c-Menus_title-center'>
                ${deluxe_addon_price_12in}
              </div>
            </div>
          </div>
        }

        {/* Double Meat */}
        <LineItem
          name={'Double Meat'}
          calories={'50-260/100-520'}
          price6={extras_double_meat_price_6in}
          price12={extras_double_meat_price_12in}
          nextLine
          expand={false}
          indentCals={false}
          suffix=""
        />

        {/* Extra Cheese */}
        <LineItem
          name={'Extra Cheese'}
          calories={'40-60/80-120'}
          price6={extras_cheese_price_6in}
          price12={extras_cheese_price_12in}
          nextLine
          expand={false}
          indentCals={false}
          suffix=""
        />


        {/* Local option 1 */}
        {this.local1.isValid &&
          <LineItem
            {...this.local1}
            nextLine
            expand={false}
            indentCals={false}
            suffix=""
          />
        }

        {/* Local option 2 */}
        {this.local2.isValid &&
          <LineItem
            {...this.local2}
            nextLine
            expand={false}
            indentCals={false}
            suffix=""
          />
        }

        {/* Local option 3 */}
        {this.local3.isValid &&
          <LineItem
            {...this.local3}
            nextLine
            expand={false}
            indentCals={false}
            suffix=""
          />
        }

        {this.hasGlutenFreeBread &&
          <div className='glutenLineItem'>
            <div className='c-TableList_row'>
              <div className='c-TableList_column'>

                <span className='c-Menus_title c-Menus_title-left'>
                  Gluten-Free Bread<sup>**</sup>
                    <span className='c-Menus_caption c-Menus_caption-highlight'><span className='cals'>340 cal</span></span>
                </span>

              </div>

              <div className='c-TableList_column c-TableList-center'>
                <div className='c-Menus_title c-Menus_title-left'>
                ${this.props.gluten_free_bread_price}
                </div>
              </div>
            </div>
          </div>
        }

        {this.hasGlutenFreeBread &&
              <div className='legalContent' style={{ top: 5, left: -5 }}>
                ** The Gluten-Free bread is manufactured in a Gluten-Free facility. However, other menu items and ingredients in our restaurants
                contain gluten and are prepared on shared equipment, so we cannot guarantee that our menu items are 100% Gluten Free.
              </div>
            }

      </div>
    );
  }
}
