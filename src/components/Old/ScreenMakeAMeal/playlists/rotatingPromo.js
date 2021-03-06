import CoffeePromo from 'components/SecondaryPromotions/coffee_2017w2'
import MakeItAMeal2017w2 from 'components/SecondaryPromotions/make_it_a_meal_2017w2'
import Breakfast2017w2 from 'components/SecondaryPromotions/breakfast_2017w2'

import SubwayApp from 'components/SecondaryPromotions/SubwayApp'
// import CompleteYourMeal from 'components/SecondaryPromotions/CompleteYourMeal'
import DoUsAFlavor from 'components/SecondaryPromotions/DoUsAFlavor'

import HotDrinksMenu from 'components/HotDrinksMenu'

import API from 'api'

/**
 * Playlist conditions
 */
import {
  isBreakfastTime,
  isLunchTime,
  isDinnerTime,
  servesBreakfast,
  servesBreakfastAllDay,
  isRestaurantOfTheFuture
} from 'components/PlaylistDJ/conditions'


/**
 * If a store has the mobile app panel enabled
 * @type {Boolean}
 */
const mobileKey = API.loc('has_mobile_app')
const hasMobileApp = mobileKey === null || mobileKey;
const subwayAppConditions = [
  {
    name: 'Show subway app if `has_mobile_app` is not set or true',
    predicate: () => hasMobileApp
  }
]

/**
 * ROTF stores show the same thing most of the time
 * @type {Array}
 */
const ROTFRotation = [
  {
    component: <HotDrinksMenu />,
    duration: 15000
  },
  {
    component: <CoffeePromo />,
    duration: 15000
  },
  {
    component: <HotDrinksMenu />,
    duration: 15000
  },
  {
    component: <DoUsAFlavor />,
    duration: 13500
  },
  {
    component: <HotDrinksMenu />,
    duration: 15000
  },
  {
    component: <SubwayApp />,
    duration: 15000,
    conditions: subwayAppConditions
  }
];


const nonROTFRotation = [
  {
    component: <DoUsAFlavor />,
    duration: 13500
  },
  {
    component: <SubwayApp />,
    duration: 15000,
    conditions: subwayAppConditions
  }
];


export default [
  // Testing
  // {
  //   id: "1",
  //   frames: [
  //     {
  //       component: <DoUsAFlavor />,
  //     }
  //   ]
  // },

  /**
   * Breakfast all day for ROTF
   */
  {
    id: '1de902e4-5350-4bd5-9350-873c4197bbc6',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isBreakfastTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotation
  },

  /**
   * Breakfast all day for non-ROTF
   */
  {
    id: '41687719-2c45-4099-95dc-367fb4c8cdd5',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isBreakfastTime
    ],

    frames: nonROTFRotation
  },

  /**
   * Breakfast for ROTF
   */
  {
    id: 'bbdf27c6-b74f-400e-9e2b-baaa4e2f4d2c',
    conditions: [
      servesBreakfast,
      isBreakfastTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotation
  },

  /**
   * Breakfast for non-ROTF
   */
  {
    id: 'ba1b55a1-6ca8-427f-a2e4-093c3c1f8f9f',
    conditions: [
      servesBreakfast,
      isBreakfastTime
    ],

    frames: nonROTFRotation
  },

  /**
   * Lunch if breakfast is all day for ROTF
   */
  {
    id: 'dfe53d84-f0e1-4c7e-bf9b-6096d19f7754',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isLunchTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotation
  },

  /**
   * Lunch if breakfast is all day for non-ROTF
   */
  {
    id: 'fc0753b4-b7a7-4528-8cf2-841d7e52a966',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isLunchTime
    ],

    frames: nonROTFRotation
  },

  /**
   * Lunch if breakfast for ROTF
   */
  {
    id: '26a0f11a-a53c-4914-add8-197214b8d3f5',
    conditions: [
      servesBreakfast,
      isLunchTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotation
  },

  /**
   * Lunch if breakfast for non-ROTF
   */
  {
    id: 'f3e38290-2c7d-4ae5-9072-7413f7e91ba8',
    conditions: [
      servesBreakfast,
      isLunchTime
    ],

    frames: nonROTFRotation
  },

  /**
   * Dinner if breakfast is all day for ROTF
   */
  {
    id: 'f710e1d7-0d16-4347-8e1e-402ca4eb58d7',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isDinnerTime,
      isRestaurantOfTheFuture
    ],

    frames: ROTFRotation
  },

  /**
   * Dinner if breakfast is all day for non-ROTF
   */
  {
    id: '74de81c6-5b3e-4bf6-a6a0-bf194749a51f',
    conditions: [
      servesBreakfast,
      servesBreakfastAllDay,
      isDinnerTime
    ],

    frames: nonROTFRotation
  },


  /**
   * Dinner if breakfast for ROTF
   */
  {
    id: '7619ed83-3644-4dcd-9e74-8d66873ac0db',
    conditions: [
      servesBreakfast,
      isDinnerTime,
      isRestaurantOfTheFuture
    ],

    frames: [
      {
        component: <HotDrinksMenu />,
        duration: 15000
      },
      {
        component: <Breakfast2017w2 />,
        duration: 15000
      },
      {
        component: <HotDrinksMenu />,
        duration: 15000
      },
      {
        component: <DoUsAFlavor />,
        duration: 13500
      },
      {
        component: <HotDrinksMenu />,
        duration: 15000
      },
      {
        component: <SubwayApp />,
        duration: 15000,
        conditions: subwayAppConditions
      }
    ]
  },


  /**
   * Dinner if breakfast for non-ROTF
   */
  {
    id: 'aff30df0-3cf0-4c6a-933f-00303d836f42',
    conditions: [
      servesBreakfast,
      isDinnerTime
    ],

    frames: [
      {
        component: <DoUsAFlavor />,
        duration: 13500
      },
      {
        component: <Breakfast2017w2 />,
        duration: 15000
      }
    ]
  },

  /**
   * Default for ROTF
   */
  {
    id: '65ec2abe-f332-450a-8c96-a785cf3d7eba',
    conditions: [
      isRestaurantOfTheFuture
    ],
    frames: ROTFRotation
  },

  /**
   * Default
   */
  {
    id: '1221c5aa-aeaf-4598-97cb-d39718f6bbc2',
    frames: nonROTFRotation
  },
]
