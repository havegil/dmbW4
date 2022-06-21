import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
//import data from 'data/subs'

import './styles.css'

import MakeAnyAndCoke from './images/strd_make_any_footlong.jpg'
import MakeAnyNoCoke from './images/make_any_footlong_no_coke.jpg'


let imgBg = MakeAnyAndCoke;
let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');
let servesCoke = API.loc('serves_coca_cola');

if (isSodiumStore)
{
//   imgBg = bgNY

//   if (isPhilly)
//   {
//     imgBg = bgPhilly
//   }
 }

 

@neocastDataProvider([

  'serves_coca_cola',

  // Bottled
  'serves_bottled_drinks',
  'drinks_bottle_price',

  // Second column
  'melt_addon_price',
  'signature_wraps_price',
])

export default class MakeAnySubs extends Component {

    
  constructor(props) {
    super(props)

    this.state = {
      currentFrame: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    let nextFrame = nextProps.currentFrameCount % 8;
    this.setState({currentFrame: nextFrame})
    console.log(this.state);
  }

  render() {
    const {
      signature_wraps_price,
      chopped_salad_addon_price,
      melt_addon_price,
     } = this.props;


    let philyPrice6  = API.loc('big_philly_cheesesteak_price_6in');
    let philyPrice12 = API.loc('big_philly_cheesesteak_price_12in');
    let philyPricePro = API.loc('big_philly_cheesesteak_price_pro');
    
    return (
        <div className="all-new-make-any">

            <div className="make-any-half">
                
                { servesCoke && <img src={MakeAnyAndCoke} /> }
                { !servesCoke && <img src={MakeAnyNoCoke} /> }

                { melt_addon_price &&
          
                    <div className="make-any-price-block">
                        {/* { !isSodiumStore &&
                            <span style={{left: 26, top: 676}}><em>Add</em> $ {melt_addon_price}</span>
                        }

                        { isSodiumStore && !isPhilly &&
                            <span style={{left: 26, top: 676}}><em>Add</em> $ {melt_addon_price}</span>
                        }

                        {isSodiumStore && isPhilly &&
                            <span style={{left: 26, top: 676}}><em>Add</em> $ {melt_addon_price}</span>
                        } */}
                        <div className="melt-fl">Add ${melt_addon_price}</div>
                        <div className="melt6">Add ${melt_addon_price}</div>
                        <div className="salad">Add ${chopped_salad_addon_price}</div>
                    </div>

                }

                {/* { signature_wraps_price &&

                    <div>
                    { !isSodiumStore &&
                        <span className={`price`} style={{left: 242, top: 266}}>$ {signature_wraps_price}</span>
                    }

                    { isSodiumStore && !isPhilly &&
                        <span className={`price`} style={{left: 242, top: 256}}>$ {signature_wraps_price}</span>
                    }

                    {isSodiumStore && isPhilly &&
                        <span className={`price`} style={{left: 358, top: 316}}>$ {signature_wraps_price}</span>
                    }
                    </div>
                } */}

                {/* { chopped_salad_addon_price &&

                    <div>
                    { !isSodiumStore &&
                        <span className={`price`} style={{left: 248, top: 457}}>$ {chopped_salad_addon_price}</span>
                    }

                    { isSodiumStore && !isPhilly &&
                        <span className={`price`} style={{left: 248, top: 432}}>$ {chopped_salad_addon_price}</span>
                    }

                    {isSodiumStore && isPhilly &&
                        <span className={`price`} style={{left: 248, top: 504}}>$ {chopped_salad_addon_price}</span>
                    }
                    </div>
                } */}

            </div>

        </div>
    )
    }
}
