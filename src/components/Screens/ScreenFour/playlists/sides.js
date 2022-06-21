import isNil from 'lodash/isNil'
import API from 'api'

// import DrinkMenu from '../components/DrinksMenu'
// import SidesMenu from '../components/SidesMenu'
// import HotDrinksMenu from '../components/HotDrinksMenu'

// import KidsMeal from '../components/KidsMeal'
// import KidsMealOpt2 from '../components/KidsMealOpt2'
// import KidsMealEvergreen from '../components/KidsMealEvergreen'


// 2022w4 All New Breakfast Combo
import AllNewBreakfastCombo from  '../components/2022w4/BreakFastCombo'
// 2022w4 All New Local Favorites
import AllNewLocalFavorites from  '../components/2022w4/LocalFavorites'

export default [
  {
    id: "35",
    frames: [
      {
        component: <AllNewLocalFavorites />,
        duration: 25000,
      },
      {            
        component: <AllNewBreakfastCombo />,
        duration: 25000,
      }
        
    ]
  }

]
