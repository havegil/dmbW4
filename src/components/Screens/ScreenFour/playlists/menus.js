import API from 'api'
import isNil from 'lodash/isNil'


import AllNewSubsMenu from '../components/2022w4/SubsMenu'

let showSKU = API.loc('test_sku_reduction');
if (isNil(showSKU)) showSKU = false;

let playlist = {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c9',
    frames: [
      {
        component: <AllNewSubsMenu />,
        duration: 10000000
      }

    ]
  };

let playlistSKU = {
    id: '79f24bde-8e25-495e-ac67-96cf93a064c0',
    frames: [
      {
        component: <AllNewSubsMenu />,
        duration: 10000000
      }
    ]
  };

if (showSKU) playlist = playlistSKU;

export default () => [playlist]
