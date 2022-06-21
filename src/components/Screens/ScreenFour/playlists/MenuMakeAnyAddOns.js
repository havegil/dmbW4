import isNil from 'lodash/isNil'
import API from 'api'

import AllNewMakeAny from '../components/2022w4/MakeAnySubs'
import AllNewSubsAddOns from '../components/2022w4/SubsAddOns'

let SubsMakeAny = AllNewMakeAny;
let SubsAddOns  = AllNewSubsAddOns;

export default [
  {
    id: "1",
    frames: [
      {
        component: <SubsMakeAny />,
        duration: 250000 //25000
      },
      {
        component: <SubsAddOns />,
        duration: 25000
      },
    ]
  }
]
