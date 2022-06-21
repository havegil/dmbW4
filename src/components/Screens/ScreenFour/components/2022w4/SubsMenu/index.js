import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import data from 'data/subs'

import './styles.css'

import AllNewSubsMenu from './images/strd_subs.jpg'

// import HeroesNYSmashed from '../images/heroes_ny_smashed_half.jpg'
// import HeroesNYSliced from '../images/heroes_ny_sliced_half.jpg'
// import HeroesPhillySmashed from '../images/heroes_philly_smashed_half.jpg'
// import HeroesPhillySliced from '../images/heroes_philly_sliced_half.jpg'
// import HeroesSmashed from '../images/heroes_smashed_half.jpg'
// import HeroesSliced from '../images/heroes_sliced_half.jpg'

// import RefreshNYCoke from '../images/refresh_ny_coke.jpg'
// import RefreshNYNoCoke from '../images/refresh_ny_no_coke.jpg'
// import RefreshPhillyCoke from '../images/refresh_philly_coke.jpg'
// import RefreshPhillyNoCoke from '../images/refresh_philly_no_coke.jpg'
// import RefreshCoke from '../images/refresh_coke.jpg'
// import RefreshNoCoke from '../images/refresh_no_coke.jpg'

@neocastDataProvider([
    'serves_coca_cola',
    'avocado_sliced',
    'layout_direction',
    'store_plus_sodium',
    'is_philadelphia_store'
])
  

export default class SubsMenu extends Component {

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
        <div className="all-new-subs-menu">

            <div className="subs-half" style={{ left: layoutDirection == "R2L" ? "0" : "auto", right: layoutDirection == "R2L" ? "auto" : "0" }}>
                
                <img src={AllNewSubsMenu} />

                {/* { isSodiumStore && isPhilly && !slicedAvocado && <img src={HeroesPhillySmashed} /> }
                { isSodiumStore && !isPhilly && !slicedAvocado && <img src={HeroesNYSmashed} /> }
                { isSodiumStore && isPhilly && slicedAvocado && <img src={HeroesPhillySliced} /> }
                { isSodiumStore && !isPhilly && slicedAvocado && <img src={HeroesNYSliced} /> }
                { !isSodiumStore && !slicedAvocado && <img src={HeroesSmashed} /> }
                { !isSodiumStore && slicedAvocado && <img src={HeroesSliced} /> } */}

                <div className="subs-price-block">
                    <div className=" soct6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="soct-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="soct-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>

                <div className="subs-price-block">
                    <div className="cbr6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className=" cbr-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="cbr-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>

                <div className="subs-price-block">
                    <div className="mm6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="mm-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="mm-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>

                <div className="subs-price-block">
                    <div className=" ccc6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className=" ccc-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="ccc-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>

                <div className="subs-price-block">
                    <div className="rsc6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="rsc-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="rsc-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>

                <div className="subs-price-block">
                    <div className="rb6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="rb-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="rb-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>

                <div className="subs-price-block">
                    <div className="bc6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="bc-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="bc-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>

                <div className="subs-price-block">
                    <div className=" vd6">${philyPrice6} 
                        <p className="cal">480</p>
                    </div>
                    <div className="vd-fl">${philyPrice12}
                        <p className="cal">960</p>
                    </div>
                    <div className="vd-pro">${philyPricePro}
                        <p className="cal">1190cal</p>
                    </div> 
                </div>
   

            </div>
        </div>
    )
    }
}
