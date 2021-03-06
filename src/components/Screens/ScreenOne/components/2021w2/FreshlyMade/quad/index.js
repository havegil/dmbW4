import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1Text1 from '../images/Frame1Text1.png';
import Frame1Text2 from '../images/Frame1Text2.png';

import TurkeySub from '../images/TurkeySub.png';
import TurkeyTag from '../images/TurkeyTag.png';
import AmpUp from '../images/ampUp.png';

import SteakSub from '../images/SteakSub.png';
import SteakTag from '../images/SteakTag.png';
import Build from '../images/buildYours.png';

import YellowBar from '../images/yellowBar.png';
import Fresh from '../images/freshlyMade.png';

import TurkeyText from '../images/turkeyText.png';
import TurkeyText2 from '../images/turkeyText2.png';

import SteakText from '../images/steakText.png';
import SteakText2 from '../images/steakText2.png';

import Legal from '../images/Legal.png';


export default class FreshlyMade extends Component {

    componentDidMount() {
        let timeline = new TimelineMax();

        timeline
        .set([this.Frame1Text1,this.Frame1Text2], {y: 100, autoAlpha: 0})
        .set([this.blackBG,this.TurkeyTag, this.blackBG2, this.SteakTag, this.blackBG3, this.YellowBar, this.TurkeySub2, this.SteakSub2, this.Legal], {autoAlpha: 0})
        .set([this.TurkeySub,this.SteakSub, this.TurkeyText, this.TurkeyText2, this.SteakText, this.SteakText2], {autoAlpha: 0, x: 0} )
        .set(this.AmpUp, {y: -200})
        .set(this.Build, {y: 200})
        .set(this.Fresh, {autoAlpha: 0, y: 35})
        .set(this.SteakText, {x: -400})
        .set(this.TurkeyText, {x: 400, y: -20})
        .set(this.TurkeyText2, {y: -20})


        //--------------------------------------------//

        .to(this.Frame1Text1, 0.5, {y: 0, autoAlpha: 1}, .25)
        .to(this.Frame1Text2, 0.5, {y: 0, autoAlpha: 1}, .75)

        .to(this.TurkeySub, 9, {x: -1000, ease: "none"}, 1.9)

        .to([this.TurkeySub,this.blackBG], 0, {autoAlpha: 1}, 2)
        .to(this.TurkeyTag, 0.5, {autoAlpha: 1}, 2.5)
        .to(this.TurkeyTag, 0.5, {autoAlpha: 0}, 4.5)
        .to(this.AmpUp, 0.5, {y: 0}, 4.5)

        .to([this.SteakSub,this.blackBG2], 0, {autoAlpha: 1}, 6.4)
        .to(this.SteakSub, 9, {x: 1000, ease: "none"}, 6.5)
        .to(this.SteakTag, 0.5, {autoAlpha: 1}, 7)
        .to(this.SteakTag, 0.5, {autoAlpha: 0}, 9)
        .to(this.Build, 0.5, {y: 0}, 9.5)

        .to([this.blackBG3, this.YellowBar, this.TurkeySub2, this.SteakSub2, this.Legal], 0, {autoAlpha: 1}, 11.5)
        .to(this.Fresh, 0.5, {autoAlpha: 1, y: 0}, 11.75)

        .to([this.SteakText, this.TurkeyText], 1, {autoAlpha: 1, x: 0}, 12.25)
        .to([this.SteakText2, this.TurkeyText2], 1, {autoAlpha: 1}, 13.5)

    }

    render() {

    return (
        <div className="freshly-made-quad">
            <div className="yellow-bg"></div>
            <img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node }/>
            <img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node }/>

            <div className="black-bg" ref={(node) => this.blackBG = node }></div>
            <img src={TurkeySub} className="turkey1" ref={(node) => this.TurkeySub = node }/>
            <img src={TurkeyTag} ref={(node) => this.TurkeyTag = node }/>
            <img src={AmpUp} ref={(node) => this.AmpUp = node }/>

            <div className="black-bg" ref={(node) => this.blackBG2 = node }></div>
            <img src={SteakSub} className="steak1" ref={(node) => this.SteakSub = node }/>
            <img src={SteakTag} ref={(node) => this.SteakTag = node }/>
            <img src={Build} ref={(node) => this.Build = node }/>

            <div className="black-bg" ref={(node) => this.blackBG3 = node }></div>

            <img src={SteakText} ref={(node) => this.SteakText = node }/>
            <img src={SteakText2} ref={(node) => this.SteakText2 = node }/>
            <img src={TurkeyText} ref={(node) => this.TurkeyText = node }/>
            <img src={TurkeyText2} ref={(node) => this.TurkeyText2 = node }/>

            <img src={SteakSub} className="steak2" ref={(node) => this.SteakSub2 = node }/>
            <img src={TurkeySub} className="turkey2" ref={(node) => this.TurkeySub2 = node }/>
            <img src={YellowBar} ref={(node) => this.YellowBar = node }/>
            <img src={Legal} ref={(node) => this.Legal = node }/>
            <img src={Fresh} ref={(node) => this.Fresh = node }/>

        </div>
    )
    }
}
