// import API module for NEOCAST querying and query validation
import API from 'api'

// all of the fresh fit and signature subs
export default [
/**********************************************************************************************************************
FRESH FIT SUBS
**********************************************************************************************************************/
  {
    id          : 'roast_beef',
    apiMap      : 'roast_beef',
    label       : 'Roast Beef',
    menu        : 'freshFit',
    order       : 6,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 300,
        price    : API.loc('roast_beef_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 600,
        price    : API.loc('roast_beef_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 780,
        price    : API.loc('roast_beef_price_pro')
      }
    ]
  },
  {
    id          : 'subway_club',
    apiMap      : 'subway_club',
    label       : 'Subway Club<span class="restricted">®</span>',
    menu        : 'freshFit',
    order       : 3,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : false,
    sotd        : false, //'Turkey Breast, Roast Beef, Black Forest Ham',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 310,
        price    : API.loc('subway_club_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 620,
        price    : API.loc('subway_club_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 840,
        price    : API.loc('subway_club_price_pro')
      }
    ]
  },
  {
    id          : 'turkey_breast',
    apiMap      : 'turkey_breast',
    label       : 'Turkey Breast',
    menu        : 'freshFit',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Wednesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 250,
        price    : API.loc('turkey_breast_price_6in'),
        meal     : API.loc('turkey_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 500,
        price    : API.loc('turkey_breast_price_12in')
      }
    ]
  },

  {
    id          : 'oven_roasted_turkey',
    apiMap      : 'oven_roasted_turkey',
    label       : 'Oven-Roasted Turkey',
    menu        : 'freshFit',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Wednesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 260,
        price    : API.loc('oven_roasted_turkey_price_6in'),
        meal     : API.loc('turkey_meal_price')
      },
      {
        id       : 'fl',
        label    : 'FOOTLONG',
        calories : 520,
        price    : API.loc('oven_roasted_turkey_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 650,
        price    : API.loc('oven_roasted_turkey_price_pro')
      }
    ]
  },
  {
    id          : 'tuna',
    apiMap      : 'tuna',
    label       : 'Tuna',
    menu        : 'freshFit',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Wednesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 440,
        price    : API.loc('tuna_price_6in'),
        meal     : API.loc('turkey_meal_price')
      },
      {
        id       : 'fl',
        label    : 'FOOTLONG',
        calories : 880,
        price    : API.loc('tuna_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1390,
        price    : API.loc('tuna_price_pro')
      }
    ]
  },

  {
    id          : 'spicy_italian',
    apiMap      : 'spicy_italian',
    label       : 'Spicy Italian',
    menu        : 'freshFit',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Wednesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 440,
        price    : API.loc('spicy_italian_price_6in'),
        meal     : API.loc('turkey_meal_price')
      },
      {
        id       : 'fl',
        label    : 'FOOTLONG',
        calories : 880,
        price    : API.loc('spicy_italian_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1390,
        price    : API.loc('spicy_italian_price_pro')
      }
    ]
  },

  {
    id          : 'black_forest_ham',
    apiMap      : 'black_forest_ham',
    label       : 'Black Forest Ham',
    menu        : 'freshFit',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Wednesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 270,
        price    : API.loc('black_forest_ham_price_6in'),
        meal     : API.loc('turkey_meal_price')
      },
      {
        id       : 'fl',
        label    : 'FOOTLONG',
        calories : 540,
        price    : API.loc('black_forest_ham_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 670,
        price    : API.loc('black_forest_ham_price_pro')
      }
    ]
  },

  {
    id          : 'meatball_marinara',
    apiMap      : 'meatball_marinara',
    label       : 'Meatball Marinara',
    menu        : 'freshFit',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Wednesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 400,
        price    : API.loc('meatball_marinara_price_6in'),
        meal     : API.loc('turkey_meal_price')
      },
      {
        id       : 'fl',
        label    : 'FOOTLONG',
        calories : 800,
        price    : API.loc('meatball_marinara_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1280,
        price    : API.loc('meatball_marinara_price_pro')
      }
    ]
  },

  {
    id          : 'cold_cut_combo',
    apiMap      : 'cold_cut_combo',
    label       : 'Cold Cut Combo',
    menu        : 'freshFit',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Wednesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 300,
        price    : API.loc('cold_cut_combo_price_6in'),
        meal     : API.loc('turkey_meal_price')
      },
      {
        id       : 'fl',
        label    : 'FOOTLONG',
        calories : 600,
        price    : API.loc('cold_cut_combo_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 820,
        price    : API.loc('cold_cut_combo_price_pro')
      }
    ]
  },


  {
    id          : 'rotisserie_style_chicken',
    apiMap      : 'rotisserie_style_chicken',
    label       : 'Rotisserie-Style Chicken',
    menu        : 'freshFit',
    order       : 2,
    active      : true,
    local       : false,
    feature     : true,
    new         : true,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 300,
        price    : API.loc('rotisserie_style_chicken_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 600,
        price    : API.loc('rotisserie_style_chicken_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 800,
        price    : API.loc('rotisserie_style_chicken_price_pro')
      }
    ]
  },
  {
    id          : 'oven_roasted_chicken',
    apiMap      : 'oven_roasted_chicken',
    label       : 'Oven Roasted Chicken',
    menu        : 'freshFit',
    order       : 4,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Tuesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 270,
        price    : API.loc('oven_roasted_chicken_price_6in'),
        meal     : API.loc('orc_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 540,
        price    : API.loc('oven_roasted_chicken_price_12in')
      }
    ]
  },
  {
    id          : 'crispy_chicken',
    apiMap      : 'crispy_chicken',
    label       : 'Crispy Chicken',
    menu        : 'freshFit',
    order       : 4,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Tuesday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 400,
        price    : API.loc('crispy_chicken_fresh_fit_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 800,
        price    : API.loc('crispy_chicken_fresh_fit_price_12in')
      }
    ]
  },
  {
    id          : 'veggie_delite',
    apiMap      : 'veggie_delite',
    label       : 'Veggie Delite<span class="restricted">®</span>',
    menu        : 'freshFit',
    order       : 7,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 230,
        price    : API.loc('veggie_delite_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 460,
        price    : API.loc('veggie_delite_price_12in')
      }
    ]
  },
  {
    id          : 'black_forest_ham',
    apiMap      : 'bf_ham',
    label       : 'Black Forest Ham',
    menu        : 'freshFit',
    order       : 8,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Saturday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 260,
        price    : API.loc('bf_ham_price_6in'),
        meal     : API.loc('bf_ham_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 520,
        price    : API.loc('bf_ham_price_12in')
      }
    ]
  },
  {
    id          : 'sweet_onion_chicken_teriyaki',
    apiMap      : 'soct',
    label       : 'Sweet Onion Chicken<br/>Teriyaki',
    menu        : 'freshFit',
    order       : 9,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Monday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 330,
        price    : API.loc('soct_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 660,
        price    : API.loc('soct_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 790,
        price    : API.loc('soct_price_pro')
      }
    ]
  },




/**********************************************************************************************************************
SIGNATURE SUBS
**********************************************************************************************************************/
  {
    id          : 'chicken_bacon_ranch',
    apiMap      : 'chicken_bacon_ranch',
    label       : 'Chicken &amp;<br/>Bacon Ranch',
    menu        : 'signature',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes      : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 520,
        price    : API.loc('chicken_bacon_ranch_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1040,
        price    : API.loc('chicken_bacon_ranch_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1220,
        price    : API.loc('chicken_bacon_ranch_price_pro')
      }
    ]
  },
  {
    id          : 'chicken_rotisserie_bacon_ranch',
    apiMap      : 'chicken_rotisserie_bacon_ranch',
    label       : 'Rotisserie-Style Chicken & Bacon Ranch Melt',
    menu        : 'signature',
    order       : 5,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes      : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 640,
        price    : API.loc('chicken_rotisserie_bacon_ranch_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1280,
        price    : API.loc('chicken_rotisserie_bacon_ranch_price_12in')
      }
    ]
  },
  {
    id          : 'steak_cheese',
    apiMap      : 'steak_cheese',
    label       : 'Steak &amp; Cheese',
    menu        : 'signature',
    order       : 2,
    active      : true,
    local       : false,
    feature     : true,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 340,
        price    : API.loc('steak_cheese_price_6in'),
        meal     : API.loc('steak_cheese_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 680,
        price    : API.loc('steak_cheese_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 890,
        price    : API.loc('steak_cheese_price_pro')
      }
    ]
  },
  {
    id          : 'italian_bmt',
    apiMap      : 'italian_bmt',
    label       : 'Italian B.M.T.<span class="restricted">®</span>',
    menu        : 'signature',
    pushRight   : 7,
    order       : 3,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Thursday', //'Salami, Pepperoni, Black Forest Ham',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 380,
        price    : API.loc('italian_bmt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 760,
        price    : API.loc('italian_bmt_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1010,
        price    : API.loc('italian_bmt_price_pro')
      }
    ]
  },
  {
    id          : 'tuna',
    apiMap      : 'tuna',
    label       : 'Tuna',
    menu        : 'signature',
    order       : 4,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Friday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 450,
        price    : API.loc('tuna_price_6in'),
        meal     : API.loc('tuna_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 900,
        price    : API.loc('tuna_price_12in')
      }
    ]
  },
  {
    id          : 'meatball_marinara',
    apiMap      : 'meatball_marinara',
    label       : 'Meatball Marinara',
    menu        : 'signature',
    order       : 7,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : true,
    sotd        : 'Sunday',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 430,
        price    : API.loc('meatball_marinara_price_6in'),
        meal     : API.loc('meatball_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 860,
        price    : API.loc('meatball_marinara_price_12in')
      }
    ]
  },
  {
    id          : 'cold_cut_combo',
    apiMap      : 'cold_cut_combo',
    label       : 'Cold Cut Combo',
    menu        : 'signature',
    order       : 6,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : false,
    sotd        : false, // 'Ham, Salami, Bologna (Turkey Based)',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 330,
        price    : API.loc('cold_cut_combo_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 660,
        price    : API.loc('cold_cut_combo_price_12in')
      }
    ]
  },
  {
    id          : 'spicy_italian',
    apiMap      : 'spicy_italian',
    label       : 'Spicy Italian',
    menu        : 'signature',
    order       : 7,
    active      : true,
    local       : false,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 450,
        price    : API.loc('spicy_italian_price_6in'),
        meal     : API.loc('spicy_italian_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 900,
        price    : API.loc('spicy_italian_price_12in')
      }
    ]
  },





/**********************************************************************************************************************
LOCAL SUBS
**********************************************************************************************************************/
  {
    id          : 'absolute_angus_steak_patty',
    apiMap      : 'absolute_angus_steak_patty',
    label       : 'Absolute Angus Steak Patty',
    menu        : 'signature',
    order       : 15,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('absolute_angus_steak_patty_cal_price_6in'),
        price    : API.loc('absolute_angus_steak_patty_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('absolute_angus_steak_patty_cal_12in'),
        price    : API.loc('absolute_angus_steak_patty_price_12in')
      }
    ]
  },
  {
    id          : 'angus_steak_melt',
    apiMap      : 'angus_steak_melt',
    label       : 'Angus Steak Melt',
    menu        : 'signature',
    order       : 16,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('angus_steak_melt_cal_price_6in'),
        price    : API.loc('angus_steak_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('angus_steak_melt_cal_12in'),
        price    : API.loc('angus_steak_melt_price_12in')
      }
    ]
  },
  {
    id          : 'blt',
    apiMap      : 'blt',
    label       : 'B.L.T.',
    menu        : 'signature',
    order       : 17,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('blt_cal_price_6in'),
        price    : API.loc('blt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('blt_cal_12in'),
        price    : API.loc('blt_price_12in')
      }
    ]
  },
  {
    id          : 'bbq_rib',
    apiMap      : 'bbq_rib',
    label       : 'BBQ Rib',
    menu        : 'signature',
    order       : 18,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('bbq_rib_cal_price_6in'),
        price    : API.loc('bbq_rib_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('bbq_rib_cal_12in'),
        price    : API.loc('bbq_rib_price_12in')
      }
    ]
  },
  {
    id          : 'big_cheesy',
    apiMap      : 'big_cheesy',
    label       : 'Big Cheesy',
    menu        : 'signature',
    order       : 19,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('big_cheesy_cal_price_6in'),
        price    : API.loc('big_cheesy_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('big_cheesy_cal_12in'),
        price    : API.loc('big_cheesy_price_12in')
      }
    ]
  },
  {
    id          : 'buffalo_chicken',
    apiMap      : 'buffalo_chicken',
    label       : 'Buffalo Chicken',
    menu        : 'signature',
    order       : 20,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 420,
        price    : API.loc('buffalo_chicken_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 840,
        price    : API.loc('buffalo_chicken_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 880,
        price    : API.loc('buffalo_chicken_price_pro')
      }
    ]
  },
  {
    id          : 'big_hot_pastrami_melt',
    apiMap      : 'big_hot_pastrami_melt',
    label       : 'Big Hot Pastrami Melt',
    menu        : 'signature',
    order       : 21,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('big_hot_pastrami_melt_cal_price_6in'),
        price    : API.loc('big_hot_pastrami_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('big_hot_pastrami_melt_cal_12in'),
        price    : API.loc('big_hot_pastrami_melt_price_12in')
      }
    ]
  },
  {
    id          : 'big_philly_cheesesteak',
    apiMap      : 'big_philly_cheesesteak',
    label       : 'Big Philly Cheesesteak',
    menu        : 'signature',
    order       : 22,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('big_philly_cheesesteak_cal_price_6in'),
        price    : API.loc('big_philly_cheesesteak_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('big_philly_cheesesteak_cal_12in'),
        price    : API.loc('big_philly_cheesesteak_price_12in')
      }
    ]
  },
  {
    id          : 'chicken_fajita',
    apiMap      : 'chicken_fajita',
    label       : 'Chicken Fajita',
    menu        : 'signature',
    order       : 23,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chicken_fajita_cal_price_6in'),
        price    : API.loc('chicken_fajita_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chicken_fajita_cal_12in'),
        price    : API.loc('chicken_fajita_price_12in')
      }
    ]
  },
  {
    id          : 'chicken_marinara',
    apiMap      : 'chicken_marinara',
    label       : 'Chicken Marinara',
    menu        : 'signature',
    order       : 24,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chicken_marinara_cal_price_6in'),
        price    : API.loc('chicken_marinara_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chicken_marinara_cal_12in'),
        price    : API.loc('chicken_marinara_price_12in')
      }
    ]
  },
  {
    id          : 'chicken_pizziola_melt',
    apiMap      : 'chicken_pizziola_melt',
    label       : 'Chicken Pizziola Melt',
    menu        : 'signature',
    order       : 25,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chicken_pizziola_melt_cal_price_6in'),
        price    : API.loc('chicken_pizziola_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chicken_pizziola_melt_cal_12in'),
        price    : API.loc('chicken_pizziola_melt_price_12in')
      }
    ]
  },
  {
    id          : 'chicken_salad',
    apiMap      : 'chicken_salad',
    label       : 'Chicken Salad',
    menu        : 'signature',
    order       : 26,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chicken_salad_cal_price_6in'),
        price    : API.loc('chicken_salad_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chicken_salad_cal_12in'),
        price    : API.loc('chicken_salad_price_12in')
      }
    ]
  },
  {
    id          : 'chicken_strips',
    apiMap      : 'chicken_strips',
    label       : 'Chicken Strips',
    menu        : 'signature',
    order       : 27,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chicken_strips_cal_price_6in'),
        price    : API.loc('chicken_strips_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chicken_strips_cal_12in'),
        price    : API.loc('chicken_strips_price_12in')
      }
    ]
  },
  {
    id          : 'chipotle_chicken',
    apiMap      : 'chipotle_chicken',
    label       : 'Chipotle Chicken',
    menu        : 'signature',
    order       : 28,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chipotle_chicken_cal_price_6in'),
        price    : API.loc('chipotle_chicken_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chipotle_chicken_cal_12in'),
        price    : API.loc('chipotle_chicken_price_12in')
      }
    ]
  },
  {
    id          : 'chipotle_steak',
    apiMap      : 'chipotle_steak',
    label       : 'Chipotle Steak',
    menu        : 'signature',
    order       : 29,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chipotle_steak_cal_price_6in'),
        price    : API.loc('chipotle_steak_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chipotle_steak_cal_12in'),
        price    : API.loc('chipotle_steak_price_12in')
      }
    ]
  },
  {
    id          : 'egg_salad',
    apiMap      : 'egg_salad',
    label       : 'Egg Salad',
    menu        : 'signature',
    order       : 30,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('egg_salad_cal_price_6in'),
        price    : API.loc('egg_salad_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('egg_salad_cal_12in'),
        price    : API.loc('egg_salad_price_12in')
      }
    ]
  },
  {
    id          : 'egg_and_cheese_omelet',
    apiMap      : 'egg_and_cheese_omelet',
    label       : 'Egg &amp; Cheese Omelet',
    menu        : 'signature',
    order       : 31,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('egg_and_cheese_omelet_cal_price_6in'),
        price    : API.loc('egg_and_cheese_omelet_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('egg_and_cheese_omelet_cal_12in'),
        price    : API.loc('egg_and_cheese_omelet_price_12in')
      }
    ]
  },
  {
    id          : 'falafel',
    apiMap      : 'falafel',
    label       : 'Falafel',
    menu        : 'signature',
    order       : 32,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('falafel_cal_price_6in'),
        price    : API.loc('falafel_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('falafel_cal_12in'),
        price    : API.loc('falafel_price_12in')
      }
    ]
  },
  {
    id          : 'meatball_and_pepperoni',
    apiMap      : 'meatball_and_pepperoni',
    label       : 'Meatball & Pepperoni',
    menu        : 'signature',
    order       : 33,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('meatball_and_pepperoni_cal_price_6in'),
        price    : API.loc('meatball_and_pepperoni_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('meatball_and_pepperoni_cal_12in'),
        price    : API.loc('meatball_and_pepperoni_price_12in')
      }
    ]
  },
  {
    id          : 'orchard_chicken_salad',
    apiMap      : 'orchard_chicken_salad',
    label       : 'Orchard Chicken Salad',
    menu        : 'signature',
    order       : 34,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('orchard_chicken_salad_cal_price_6in'),
        price    : API.loc('orchard_chicken_salad_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('orchard_chicken_salad_cal_12in'),
        price    : API.loc('orchard_chicken_salad_price_12in')
      }
    ]
  },
  {
    id          : 'pastrami',
    apiMap      : 'pastrami',
    label       : 'Pastrami',
    menu        : 'signature',
    order       : 35,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('pastrami_cal_price_6in'),
        price    : API.loc('pastrami_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('pastrami_cal_12in'),
        price    : API.loc('pastrami_price_12in')
      }
    ]
  },
  {
    id          : 'pizza',
    apiMap      : 'pizza',
    label       : 'Pizza',
    menu        : 'signature',
    order       : 36,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('pizza_cal_price_6in'),
        price    : API.loc('pizza_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('pizza_cal_12in'),
        price    : API.loc('pizza_price_12in')
      }
    ]
  },
  {
    id          : 'pizza_sub',
    apiMap      : 'pizza_sub',
    label       : 'Pizza Sub',
    menu        : 'signature',
    order       : 37,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('pizza_sub_cal_price_6in'),
        price    : API.loc('pizza_sub_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('pizza_sub_cal_12in'),
        price    : API.loc('pizza_sub_price_12in')
      }
    ]
  },
  {
    id          : 'seafood_and_crab',
    apiMap      : 'seafood_and_crab',
    label       : 'Seafood & Crab',
    menu        : 'signature',
    order       : 38,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('seafood_and_crab_cal_price_6in'),
        price    : API.loc('seafood_and_crab_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('seafood_and_crab_cal_12in'),
        price    : API.loc('seafood_and_crab_price_12in')
      }
    ]
  },
  {
    id          : 'the_feast',
    apiMap      : 'the_feast',
    label       : 'The Feast',
    menu        : 'signature',
    order       : 39,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('the_feast_cal_price_6in'),
        price    : API.loc('the_feast_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('the_feast_cal_12in'),
        price    : API.loc('the_feast_price_12in')
      }
    ]
  },
  {
    id          : 'turkey_and_bacon_avocado',
    apiMap      : 'turkey_and_bacon_avocado',
    label       : 'Turkey & Bacon Avocado',
    menu        : 'signature',
    order       : 40,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('turkey_and_bacon_avocado_cal_price_6in'),
        price    : API.loc('turkey_and_bacon_avocado_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('turkey_and_bacon_avocado_cal_12in'),
        price    : API.loc('turkey_and_bacon_avocado_price_12in')
      }
    ]
  },
  {
    id          : 'turkey_and_bacon',
    apiMap      : 'turkey_and_bacon',
    label       : 'Turkey & Bacon',
    menu        : 'signature',
    order       : 41,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('turkey_and_bacon_cal_price_6in'),
        price    : API.loc('turkey_and_bacon_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('turkey_and_bacon_cal_12in'),
        price    : API.loc('turkey_and_bacon_price_12in')
      }
    ]
  },
  {
    id          : 'veggie_patty',
    apiMap      : 'veggie_patty',
    label       : 'Veggie Patty',
    menu        : 'signature',
    order       : 42,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('veggie_patty_cal_price_6in'),
        price    : API.loc('veggie_patty_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('veggie_patty_cal_12in'),
        price    : API.loc('veggie_patty_price_12in')
      }
    ]
  },
  {
    id          : 'chicken_parmesan',
    apiMap      : 'chicken_parmesan',
    label       : 'Chicken Parmesan',
    menu        : 'signature',
    order       : 43,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('chicken_parmesan_cal_price_6in'),
        price    : API.loc('chicken_parmesan_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('chicken_parmesan_cal_12in'),
        price    : API.loc('chicken_parmesan_price_12in')
      }
    ]
  },
  {
    id          : 'subway_seafood_sensation',
    apiMap      : 'subway_seafood_sensation',
    label       : 'Subway Seafood Sensation',
    menu        : 'signature',
    order       : 44,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('subway_seafood_sensation_cal_price_6in'),
        price    : API.loc('subway_seafood_sensation_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('subway_seafood_sensation_cal_12in'),
        price    : API.loc('subway_seafood_sensation_price_12in')
      }
    ]
  },
  {
    id          : 'subway_melt',
    apiMap      : 'subway_melt',
    label       : 'Subway Melt<span class="restricted">®</span>',
    menu        : 'signature',
    order       : 45,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('subway_melt_cal_price_6in'),
        price    : API.loc('subway_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('subway_melt_cal_12in'),
        price    : API.loc('subway_melt_price_12in')
      }
    ]
  },
  {
    id          : 'salami',
    apiMap      : 'salami',
    label       : 'Salami',
    menu        : 'signature',
    order       : 46,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('salami_cal_price_6in'),
        price    : API.loc('salami_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('salami_cal_12in'),
        price    : API.loc('salami_price_12in')
      }
    ]
  },
  {
    id          : 'steak_and_bacon_melt',
    apiMap      : 'steak_and_bacon_melt',
    label       : 'Steak & Bacon Melt',
    menu        : 'signature',
    order       : 47,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('steak_and_bacon_melt_cal_price_6in'),
        price    : API.loc('steak_and_bacon_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('steak_and_bacon_melt_cal_12in'),
        price    : API.loc('steak_and_bacon_melt_price_12in')
      }
    ]
  },
  {
    id          : 'turkey_italiano_melt',
    apiMap      : 'turkey_italiano_melt',
    label       : 'Turkey Italiano Melt',
    menu        : 'signature',
    order       : 48,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('turkey_italiano_melt_cal_price_6in'),
        price    : API.loc('turkey_italiano_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('turkey_italiano_melt_cal_12in'),
        price    : API.loc('turkey_italiano_melt_price_12in')
      }
    ]
  },
  {
    id          : 'mediterranean_chicken',
    apiMap      : 'mediterranean_chicken',
    label       : 'Mediterranean Chicken',
    menu        : 'signature',
    order       : 49,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('mediterranean_chicken_cal_price_6in'),
        price    : API.loc('mediterranean_chicken_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('mediterranean_chicken_cal_12in'),
        price    : API.loc('mediterranean_chicken_price_12in')
      }
    ]
  },
  {
    id          : 'mediterranean_steak',
    apiMap      : 'mediterranean_steak',
    label       : 'Mediterranean Steak',
    menu        : 'signature',
    order       : 50,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('mediterranean_steak_cal_price_6in'),
        price    : API.loc('mediterranean_steak_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('mediterranean_steak_cal_12in'),
        price    : API.loc('mediterranean_steak_price_12in')
      }
    ]
  },
  {
    id          : 'fritos_chicken_enchilada_melt',
    apiMap      : 'fritos_chicken_enchilada_melt',
    label       : 'Fritos Chicken Enchilada Melt',
    menu        : 'signature',
    order       : 51,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    indentCals  : false,
    nextLine    : true,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 580,
        price    : API.loc('fritos_chicken_enchilada_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1160,
        price    : API.loc('fritos_chicken_enchilada_melt_price_12in')
      }
    ]
  },
  {
    id          : 'caeser_chicken_melt',
    apiMap      : 'caeser_chicken_melt',
    label       : 'Caesar Chicken Melt',
    menu        : 'signature',
    order       : 52,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('caeser_chicken_melt_cal_price_6in'),
        price    : API.loc('caeser_chicken_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('caeser_chicken_melt_cal_12in'),
        price    : API.loc('caeser_chicken_melt_price_12in')
      }
    ]
  },
  {
    id          : 'caeser_steak_melt',
    apiMap      : 'caeser_steak_melt',
    label       : 'Caesar Steak Melt',
    menu        : 'signature',
    order       : 53,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('caeser_steak_melt_cal_price_6in'),
        price    : API.loc('caeser_steak_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('caeser_steak_melt_cal_12in'),
        price    : API.loc('caeser_steak_melt_price_12in')
      }
    ]
  },
  {
    id          : 'turkey_breast_and_cheese_double_meat',
    apiMap      : 'turkey_breast_and_cheese_double_meat',
    label       : 'Turkey Breast and Cheese Double Meat', // label for this item is missing from NEOCAST API
    menu        : 'signature',
    indentCals  : false,
    order       : 54,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('turkey_breast_and_cheese_double_meat_cal_price_6in'),
        price    : API.loc('turkey_breast_and_cheese_double_meat_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('turkey_breast_and_cheese_double_meat_cal_12in'),
        price    : API.loc('turkey_breast_and_cheese_double_meat_price_12in')
      }
    ]
  },
  {
    id          : 'bbq_bacon_angus_melt',
    apiMap      : 'bbq_bacon_angus_melt',
    label       : 'BBQ Bacon Angus Melt', // label for this item is missing from NEOCAST API
    menu        : 'signature',
    order       : 55,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('bbq_bacon_angus_melt_cal_price_6in'),
        price    : API.loc('bbq_bacon_angus_melt_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('bbq_bacon_angus_melt_cal_12in'),
        price    : API.loc('bbq_bacon_angus_melt_price_12in')
      }
    ]
  },
  {
    id          : 'turkey_bacon_guacamole',
    apiMap      : 'turkey_bacon_guacamole',
    label       : 'Turkey and Bacon Guacamole',
    menu        : 'signature',
    order       : 56,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 440,
        // API.net('turkey_bacon_guacamole_cal_price_6in'),
        price    : API.loc('turkey_bacon_guacamole_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 880,
        // API.net('turkey_bacon_guacamole_cal_12in'),
        price    : API.loc('turkey_bacon_guacamole_price_12in')
      }
    ]
  },
  {
    id          : 'turkey_bf_ham',
    apiMap      : 'turkey_bf_ham',
    label       : 'Turkey Breast &amp; Black Forest Ham',
    menu        : 'signature',
    indentCals  : false,
    order       : 57,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    pushRight   : 10,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('turkey_bf_ham_cal_price_6in'),
        price    : API.loc('turkey_bf_ham_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('turkey_bf_ham_cal_12in'),
        price    : API.loc('turkey_bf_ham_price_12in')
      }
    ]
  },
  {
    id          : 'malibu_veggie_patty',
    apiMap      : 'malibu_veggie_patty',
    label       : 'Malibu Veggie Patty',
    menu        : 'signature',
    order       : 58,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('malibu_veggie_patty_cal_price_6in'),
        price    : API.loc('malibu_veggie_patty_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('malibu_veggie_patty_cal_12in'),
        price    : API.loc('malibu_veggie_patty_price_12in')
      }
    ]
  },
  {
    id          : 'black_bean_patty',
    apiMap      : 'black_bean_patty',
    label       : 'Black Bean Patty',
    menu        : 'signature',
    order       : 59,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('black_bean_patty_cal_price_6in'),
        price    : API.loc('black_bean_patty_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('black_bean_patty_cal_12in'),
        price    : API.loc('black_bean_patty_price_12in')
      }
    ]
  },
  {
    id          : 'round_cheese_pizza',
    apiMap      : 'round_cheese_pizza',
    label       : 'Round Cheese Pizza',
    menu        : 'signature',
    order       : 60,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('round_cheese_pizza_cal_price_6in'),
        price    : API.loc('round_cheese_pizza_price_6in')
      }
    ]
  },
  {
    id          : 'flatizza',
    apiMap      : 'flatizza',
    label       : 'Flatizza',
    menu        : 'signature',
    order       : 61,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('flatizza_cal_price_6in'),
        price    : API.loc('flatizza_price_6in')
      }
    ]
  },
  {
    id          : 'corned_beef_reuben',
    apiMap      : 'corned_beef_reuben',
    label       : 'Corned Beef Reuben',
    menu        : 'signature',
    order       : 62,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('corned_beef_reuben_cal_price_6in'),
        price    : API.loc('corned_beef_reuben_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('corned_beef_reuben_cal_12in'),
        price    : API.loc('corned_beef_reuben_price_12in')
      }
    ]
  },
  {
    id          : 'turkey_reuben',
    apiMap      : 'turkey_reuben',
    label       : 'Turkey Reuben',
    menu        : 'signature',
    order       : 63,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : API.net('turkey_reuben_cal_price_6in'),
        price    : API.loc('turkey_reuben_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : API.net('turkey_reuben_cal_12in'),
        price    : API.loc('turkey_reuben_price_12in')
      }
    ]
  },
  {
    id          : 'carved_turkey',
    apiMap      : 'carved_turkey',
    label       : 'Carved Turkey',
    menu        : 'signature',
    order       : 64,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 330,
        price    : API.loc('autumn_carved_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 670,
        price    : API.loc('autumn_carved_price_12in')
      }
    ]
  },
  {
    id          : 'club_bacon',
    apiMap      : 'club_bacon',
    label       : 'Subway Club<span class="restricted">®</span> now with bacon',
    menu        : 'signature',
    order       : 65,
    active      : false,
    local       : true,
    feature     : false,
    sotw        : false,
    sotd        : false,
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 330,
        price    : API.loc('club_bacon_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 660,
        price    : API.loc('club_bacon_price_12in')
      }
    ]
  },

  {
    id: 'chipotle_southwest_steak_and_cheese_wrap',
    apiMap: 'chipotle_southwest_steak_and_cheese_wrap',
    label: 'Chipotle Southwest Steak and Cheese',
    description: 'Shaved steak with chipotle sauce on a tomato basil wrap',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 690,
        price    : API.loc('chipotle_southwest_steak_and_cheese_wrap_price')
      },
    ]
  },

  {
    id: 'chipotle_steak_fiesta_wrap',
    apiMap: 'chipotle_steak_fiesta_wrap',
    label: 'Chipotle Steak Fiesta Wrap',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 710,
        price    : API.loc('chipotle_steak_fiesta_wrap_price')
      },
    ]
  },

  {
    id: 'rotisserie_chicken_caesar_wrap',
    apiMap: 'rotisserie_chicken_caesar_wrap',
    label: 'Savory Rotisserie-Style Chicken Caesar',
    description: 'Piled rotisserie-style chicken, Caesar dressing on a spinach wrap',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 730,
        price    : API.loc('rotisserie_chicken_caesar_wrap_price')
      },
    ]
  },

  {
    id: 'chicken_caesar_wrap',
    apiMap: 'chicken_caesar_wrap',
    label: 'Chicken Caesar',
    description: 'Chicken strips, Monterey cheddar, grated Parmesan with Caesar sauce on a Spinach Wrap',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 610,
        price    : API.loc('chicken_caesar_wrap_price')
      },
    ]
  },

  {
    id: 'turkey_bacon_guacamole_wrap',
    apiMap: 'turkey_bacon_guacamole_wrap',
    label: 'Turkey Bacon Guacamole',
    description: 'Oven-roasted turkey, bacon and guacamole on a tomato basil wrap',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 810,
        price    : API.loc('turkey_bacon_guacamole_wrap_price')
      },
    ]
  },

  {
    id: 'steak_club',
    apiMap: 'steak_club',
    label: 'Steak Club',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 490,
        price    : API.loc('steak_club_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 980,
        price    : API.loc('steak_club_price_12in')
      }
    ]
  },

  {
    id: 'sw_chicken_club',
    apiMap: 'southwest_chicken_club',
    label: 'Southwest Chicken Club',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 580,
        price    : API.loc('sw_chicken_club_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1160,
        price    : API.loc('sw_chicken_club_price_footlong')
      }
    ]
  },

  {
    id: 'american_club',
    apiMap: 'american_club',
    label: 'All-American Club',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 510,
        price    : API.loc('american_club_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1020,
        price    : API.loc('american_club_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 960,
        price    : API.loc('american_club_price_pro')
      }
    ]
  },

  {
    id: 'pepperoni_sub',
    apiMap: 'pepperoni_sub',
    label: 'Pepperoni',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 480,
        price    : API.loc('pepperoni_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 960,
        price    : API.loc('pepperoni_price_footlong')
      }
    ]
  },

  {
    id: 'triple_meat',
    apiMap: 'triple_meat',
    label: 'Triple Meat',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 620,
        price    : API.loc('triple_meat_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1140,
        price    : API.loc('triple_meat_price_footlong')
      }
    ]
  },

  {
    id: 'supreme',
    apiMap: 'supreme',
    label: 'Supreme',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 580,
        price    : API.loc('supreme_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 670,
        price    : API.loc('supreme_price_footlong')
      }
    ]
  },

  {
    id: 'turkey_italiano',
    apiMap: 'turkey_italiano',
    label: 'Ultimate Turkey Italiano',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 670,
        price    : API.loc('turkey_italiano_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1340,
        price    : API.loc('turkey_italiano_price_footlong')
      }
    ]
  },

  {
    id: 'ultimate_steak',
    apiMap: 'ultimate_steak',
    label: 'Ultimate Steak',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 600,
        price    : API.loc('ultimate_steak_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1200,
        price    : API.loc('ultimate_steak_price_footlong')
      }
    ]
  },

  {
    id: 'value_test_horseradish_chicken_bacon',
    apiMap: 'value_test_horseradish_chicken_bacon',
    label: 'Horseradish, Chicken and Bacon',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 570,
        price    : API.loc('horseradish_chicken_bacon_price_6in') || API.loc('horseradish_chicken_bacon_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1140,
        price    :  API.loc('horseradish_chicken_bacon_price_12in') || API.loc('horseradish_chicken_bacon_12in')
      }
    ]
  },

  {
    id: 'autumn_carved',
    apiMap: 'autumn_carved',
    label: 'Autumn Carved Turkey',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 420,
        price    : API.loc('autumn_carved_turkey_price_6in') || API.loc('autumn_carved_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 840,
        price    :  API.loc('autumn_carved_turkey_price_12in') || API.loc('autumn_carved_price_12in')
      }
    ]
  },

  {
    id: 'chipotle_cheesesteak',
    apiMap: 'chipotle_cheesesteak',
    label: 'Chipotle Cheesesteak',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 390,
        price    : API.loc('chipotle_cheesesteak_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 780,
        price    : API.loc('chipotle_cheesesteak_price_12in')
      }
    ]
  },

  {
    id: 'steak_collection_peppercorn',
    apiMap: 'steak_collection_peppercorn',
    label: 'Peppercorn Aioli',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 390,
        price    : API.loc('peppercorn_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 780,
        price    : API.loc('peppercorn_price_12in')
      }
    ]
  },

  {
    id: 'ultimate_spicy_italian',
    apiMap: 'ultimate_spicy_italian',
    label: 'Ultimate Spicy Italian',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 730,
        price    : API.loc('ultimate_spicy_italian_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1460,
        price    : API.loc('ultimate_spicy_italian_price_12in')
      }
    ]
  },

  {
    id: 'ultimate_meatball_marinara',
    apiMap: 'ultimate_meatball_marinara',
    label: 'Ultimate Meatball Marinara',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 730,
        price    : API.loc('ultimate_meatball_marinara_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1460,
        price    : API.loc('ultimate_meatball_marinara_price_12in')
      }
    ]
  },

  {
    id: 'thai_chicken_sub',
    apiMap: 'thai_chicken_sub',
    label: 'Thai Chicken',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 390,
        price    : API.loc('thai_chicken_sub_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 780,
        price    : API.loc('thai_chicken_sub_price_12in')
      }
    ]
  },

  {
    id: 'italian_ciabatta_price',
    apiMap: 'italian_ciabatta_price',
    label: 'Italian Ciabatta',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 670,
        price    : API.loc('italian_ciabatta_price')
      }
    ]
  },


  {
    id: 'turkey_meatball_marinara',
    apiMap: 'turkey_meatball_marinara',
    label: 'Turkey Meatball Marinara',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 450,
        price    : API.loc('turkey_meatball_marinara_price_6in')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 900,
        price    : API.loc('turkey_meatball_marinara_price_12in')
      }
    ]
  },

  {
    id: 'turkey_bacon_avocado_wrap',
    apiMap: 'turkey_bacon_avocado_wrap',
    label: 'Turkey Bacon & Avocado',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 750,
        price    : API.loc('turkey_bacon_guacamole_wrap_price')
      },
    ]
  },
  {
    id: 'cali_steak',
    apiMap: 'cali_steak',
    label: 'Steak Cali Fresh',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 610,
        price    : API.loc('cali_steak_price_6in'),
        meal     : API.loc('cali_steak_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1220,
        price    : API.loc('cali_steak_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1610,
        price    : API.loc('cali_steak_price_pro')
      }
    ]
  },
  {
    id: 'cali_turkey',
    apiMap: 'cali_turkey',
    label: 'Turkey Cali Fresh',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 560,
        price    : API.loc('cali_turkey_price_6in'),
        meal     : API.loc('cali_turkey_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1120,
        price    : API.loc('cali_turkey_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1400,
        price    : API.loc('cali_turkey_price_pro')
      }
    ]
  },
  {
    id: 'baja_steak',
    apiMap: 'baja_steak',
    label: 'Baja Steak & Jack',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 390,
        price    : API.loc('baja_steak_price_6in'),
        meal     : API.loc('baja_steak_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 780,
        price    : API.loc('baja_steak_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1020,
        price    : API.loc('baja_steak_price_pro')
      }
    ]
  },
  {
    id: 'baja_chicken',
    apiMap: 'baja_chicken',
    label: 'Baja Chicken',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 500,
        price    : API.loc('baja_chicken_price_6in'),
        meal     : API.loc('baja_chicken_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1000,
        price    : API.loc('baja_chicken_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1180,
        price    : API.loc('baja_chicken_price_pro')
      }
    ]
  },
  {
    id: 'baja_chicken_bacon',
    apiMap: 'baja_chicken_bacon',
    label: 'Baja Chicken & Bacon',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 500,
        price    : API.loc('baja_chicken_bacon_price_6in'),
        meal     : API.loc('baja_chicken_bacon_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 1000,
        price    : API.loc('baja_chicken_bacon_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 1180,
        price    : API.loc('baja_chicken_bacon_price_pro')
      }
    ]
  },
  {
    id: 'honey_mustard_RSC',
    apiMap: 'honey_mustard_RSC',
    label: 'Honey Mustard Rotisserie-Style Chicken',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 320,
        price    : API.loc('honey_mustard_RSC_price_6in'),
        meal     : API.loc('honey_mustard_RSC_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 640,
        price    : API.loc('honey_mustard_RSC_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 820,
        price    : API.loc('honey_mustard_RSC_price_pro')
      }
    ]
  },
  {
    id: 'baja_turkey',
    apiMap: 'baja_turkey_avocado',
    label: 'Baja Turkey Avocado',
    sizes       : [
      {
        id       : '6',
        label    : 'SIX"',
        calories : 400,
        price    : API.loc('baja_turkey_avocado_price_6in'),
        meal     : API.loc('baja_turkey_avocado_meal_price')
      },
      {
        id       : '12',
        label    : 'FOOTLONG',
        calories : 800,
        price    : API.loc('baja_turkey_avocado_price_12in')
      },
      {
        id       : 'flpro',
        label    : 'FOOTLONGPRO',
        calories : 910,
        price    : API.loc('baja_turkey_avocado_price_pro')
      }
    ]
  },

]
