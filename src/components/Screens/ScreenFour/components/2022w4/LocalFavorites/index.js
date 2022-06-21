import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import SubLineItem from 'components/Common/SubLineItem'
import data from 'data/subs'

import './styles.css'

import AllNewLocalFavs from './images/strd_local_favorites.jpg'
import NoneCokelocalFavs from './images/local_favs_non_coke.jpg'


@neocastDataProvider([
    'serves_coca_cola',
    'avocado_sliced',
    'layout_direction',
    'store_plus_sodium',
    'is_philadelphia_store'
])


export default class LocalFavorites extends Component {

    render() {

    let servesCoke = API.loc('serves_coca_cola');
    let slicedAvocado = API.loc('avocado_sliced');
    let isSodiumStore = API.loc('store_plus_sodium');
    let isPhilly = API.loc('is_philadelphia_store');
    let layoutDirection = API.loc('layout_direction');
    
    let philyPrice6  = API.loc('big_philly_cheesesteak_price_6in');
    let philyPrice12 = API.loc('big_philly_cheesesteak_price_12in');
    let philyPricePro = API.loc('big_philly_cheesesteak_price_pro');

    let LocalFavsBkg = AllNewLocalFavs;
    if(!servesCoke){
        LocalFavsBkg = NoneCokelocalFavs;
    }

    
    return (
        <div className="all-new-local-favs">
            <img src={LocalFavsBkg} className='bg'/> 
            {/* <SubLineItem apiKey='local_option_one'   priceSeparator='|' local/>
            <SubLineItem apiKey='local_option_two'   priceSeparator='|' local/>
            <SubLineItem apiKey='local_option_three' priceSeparator='|' local/>
            <SubLineItem apiKey='local_option_four'  priceSeparator='|' local/>
            <SubLineItem apiKey='local_option_five'  priceSeparator='|' local/> */}

        </div>
    )
    }
}
