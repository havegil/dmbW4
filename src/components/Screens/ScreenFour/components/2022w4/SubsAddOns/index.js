import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import data from 'data/subs'

import './styles.css'

import SubsAddOnsBkg from './images/strd_addons.jpg'


@neocastDataProvider([
    'serves_coca_cola',
    'avocado_sliced',
    'layout_direction',
    'store_plus_sodium',
    'is_philadelphia_store'
])
  

export default class SubsAddOns extends Component {

    render() {

    let servesCoke = API.loc('serves_coca_cola');
    let slicedAvocado = API.loc('avocado_sliced');
    let isSodiumStore = API.loc('store_plus_sodium');
    let isPhilly = API.loc('is_philadelphia_store');
    let layoutDirection = API.loc('layout_direction');

    let HoneyMustardChickenData = data.find((sub) => sub.id == "honey_mustard_RSC");
    let HoneyMustardChickenPrice6 = API.loc('honey_mustard_RSC_price_6in');
    let HoneyMustardChickenPrice12 = API.loc('honey_mustard_RSC_price_12in');
    let HoneyMustardChickenPricePro = API.loc('honey_mustard_RSC_price_pro');

    let CaliTurkeyData = data.find((sub) => sub.id == "cali_turkey");
    let CaliTurkeyPrice6 = API.loc('cali_turkey_price_6in');
    let CaliTurkeyPrice12 = API.loc('cali_turkey_price_12in');
    let CaliTurkeyPricePro = API.loc('cali_turkey_price_pro');

    let BajaSteakData = data.find((sub) => sub.id == "baja_steak");
    let BajaSteakPrice6 = API.loc('baja_steak_price_6in');
    let BajaSteakPrice12 = API.loc('baja_steak_price_12in');
    let BajaSteakPricePro = API.loc('baja_steak_price_pro');

    let BajaChickenData = data.find((sub) => sub.id == "baja_chicken");
    let BajaChickenPrice6 = API.loc('baja_chicken_bacon_price_6in');
    let BajaChickenPrice12 = API.loc('baja_chicken_bacon_price_12in');
    let BajaChickenPricePro = API.loc('baja_chicken_bacon_price_pro');

    let MozzaMeatData = data.find((sub) => sub.id == 'mozza_meat');
    let MozzaMeatPrice6 = API.loc('mozza_meat_price_6in');
    let MozzaMeatPrice12 = API.loc('mozza_meat_price_12in');
    let MozzaMeatPricePro = API.loc('mozza_meat_price_pro');

    let SupremeMeatsData = data.find((sub) => sub.id == 'supreme_meats');
    let SupremeMeatsPrice6 = API.loc('supreme_meats_price_6in');
    let SupremeMeatsPrice12 = API.loc('supreme_meats_price_12in');
    let SupremeMeatsPricePro = API.loc('supreme_meats_price_pro');

    let CapicolaPrice6 = API.loc('add-on_capicola_price_6in');
    let CapicolaPrice12 = API.loc('add-on_capicola_price_12in');
    let CapicolaPricePro = API.loc('add-on_capicola_price_pro');

    
    let philyPrice6  = API.loc('big_philly_cheesesteak_price_6in');
    let philyPrice12 = API.loc('big_philly_cheesesteak_price_12in');
    let philyPricePro = API.loc('big_philly_cheesesteak_price_pro');

    
    return (
        <div className="all-new-addons">

            <div className="addons-half" style={{ left: layoutDirection == "R2L" ? "auto" : "0", right: layoutDirection == "R2L" ? "0" : "auto" }}>
                 <img src={SubsAddOnsBkg} />


                <div className="addons-price-block">
                    <div className="pepperoni6">${philyPrice6} 
                        <p className="cal">80</p>
                    </div>
                    <div className="pepperoni-fl">${philyPrice12}
                        <p className="cal">160cal</p>
                    </div>
                </div>

                <div className="addons-price-block">
                    <div className="s-avocado6">${philyPrice6} 
                        <p className="cal">70</p>
                    </div>
                    <div className="s-avocado-fl">${philyPrice12}
                        <p className="cal">140cal</p>
                    </div>
                </div>

                <div className="addons-price-block">
                    <div className="bel-mozz6">${philyPrice6} 
                        <p className="cal">40</p>
                    </div>
                    <div className="bel-mozz-fl">${philyPrice12}
                        <p className="cal">80cal</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="addons-price-block">
                    <div className="bacon6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="bacon-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                </div>

                <div className="addons-price-block">
                    <div className="ext-cheese6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="ext-cheese-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                </div>

                <div className="addons-price-block">
                    <div className="capicola6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="capicola-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                </div>
            </div>

        </div>
    )
    }
}
