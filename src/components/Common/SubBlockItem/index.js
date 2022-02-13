import { Component } from 'react'
import PropTypes from 'prop-types'
import API from 'api'

import BlockItem from 'components/Common/BlockItem'
import data from 'data/subs'

export default class SubBlockItem extends Component {

  static propTypes = {
    apiKey: PropTypes.string.isRequired,

    /**
     * If true, the key value will be used to look up the sub key
     */
    local: PropTypes.bool
  };

  constructor(props) {
    super(props)

    const {
      apiKey,
      local
    } = this.props

   

    const setValue = local
      ? API.loc(this.props.apiKey)
      : apiKey
    /**
     * Get data for this sub
     */


    this.subData = data.find((sub) => sub.apiMap === setValue)


    if (this.subData) {
      this.name = this.subData.label
    
      /**
       * Some sub line items only have one 'item'. Make sure to guard against that.
       */
      if (this.subData.sizes && this.subData.sizes.length) {
     
        this.price6 = this.subData.sizes[0].price
        this.cal6 = this.subData.sizes[0].calories
        this.pushRight = this.subData.pushRight || 0;
        this.indentCals = this.subData.indentCals !== undefined
          ? this.subData.indentCals
          : true;
        this.nextLine = this.subData.nextLine;

        if (this.subData.sizes.length > 1) {
          this.price12 = this.subData.sizes[1].price
          this.cal12 = this.subData.sizes[1].calories
        }

        if (this.subData.sizes.length > 2) {
          this.priceFl = this.subData.sizes[1].price
          this.calFl = this.subData.sizes[1].calories

          this.priceFlPro = this.subData.sizes[2].price
          this.calFlPro = this.subData.sizes[2].calories
        }
        console.log(this.priceFlPro)
        

        this.subtitle = this.subData.description !== undefined
          ? this.subData.description
          : false;
      }
    }

  }

  render() {

    if (!this.subData) {
      return null
    }
    let cals;

    if (this.cal6 && this.calFl && this.calFlPro) {
      cals = `${this.cal6} | ${this.calFl} | ${this.calFlPro}`
    } else if (this.cal6 && this.cal12) {
      cals = `${this.cal6} | ${this.cal12}`
    } else {
      cals = ''
    }

    /**
     * Only a 6in version is available
     */
    if (this.cal6 && !this.cal12) {
      cals = this.cal6
    }


    return (
      <BlockItem
        name={this.name}
        sodium={this.props.sodium}
        showSmall={this.props.showSmall}
        calories={cals}
        hideCalories={false}
        price6={this.price6}
        price12={this.price12}
        pricePro={ this.priceFlPro}
        indentCals={this.indentCals}
        additionalClasses={this.props.apiKey}
        decal6={this.props.decal6}
        decal12={this.props.decal12}
        decal12Color={this.props.decal12Color}
        subtitle={this.subtitle}
      />
    )
  }
}
