import API from 'api'
import isNil from 'lodash/isNil'

import MenuClassic from '../components/MenuClassic'
import MenuFreshFit from '../components/MenuFreshFit'

import MenuFreshFitKeto1 from '../components/MenuFreshFitKeto1'
import MenuFreshFitKeto2 from '../components/MenuFreshFitKeto2'

import MenuFreshFitKeto1SKU from '../components/MenuFreshFitKeto1SKU'
import MenuFreshFitKeto2SKU from '../components/MenuFreshFitKeto2SKU'

import MenuFreshFit2020New from '../components/MenuFreshFit2020New'

import FanFaves from '../components/FanFaves'

let showSKU = API.loc('test_sku_reduction');
if (isNil(showSKU)) showSKU = false;

let playlist = {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c9',
    frames: [
      // {
      //   component: <MenuFreshFit2020New />,
      //   duration: 15000
      // },
      {
        component: <FanFaves />,
        duration: 15000
      }

    ]
  };

let playlistSKU = {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c0',
    frames: [
      {
        // component: <MenuFreshFit2020New />,
        duration: 15000
      },
      {
        component: <FanFaves />,
        duration: 15000
      }
    ]
  };

if (showSKU) playlist = playlistSKU;

export default () => [playlist]
