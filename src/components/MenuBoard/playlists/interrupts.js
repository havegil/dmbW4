import { Component } from 'react'

import SignatureWrapInterrupt from 'components/InterruptPromotions/signature_wrap_interrupt'
import CaesarInterrupt from 'components/InterruptPromotions/caesar_interrupt'
import CheesyGarlicInterrupt from 'components/InterruptPromotions/cheesy_garlic_interrupt'
import UltimateSpicyInterrupt from 'components/InterruptPromotions/ultimate_spicy_interrupt'

// 2019w2
import SignatureWrapW2 from 'components/InterruptPromotions/signature_wrap_w2'

//2019w3
import ClubInterrupt from 'components/InterruptPromotions/club_interrupt'

//2019w4
import CiabattaChicken from 'components/InterruptPromotions/ciabatta_collection_interrupt/chicken'
import CiabattaItalian from 'components/InterruptPromotions/ciabatta_collection_interrupt/italian'
import CiabattaSteak from 'components/InterruptPromotions/ciabatta_collection_interrupt/steak'

//2019w5
import PitSmokedBrisketInterrupt from 'components/InterruptPromotions/pit_smoked_brisket_interrupt'

//2019w6
import CheesyGarlicInterrupt2 from 'components/InterruptPromotions/cheesy_garlic_interrupt_2'

//2020w2
import TurkeyBaconGuacSlots from 'components/InterruptPromotions/turkey_bacon_guac_slots_interrupt'

//2021w2
import ProteinBowlsInterrupt from 'components/InterruptPromotions/protein_bowls'

//2021w3
import FreshMeltsInterrupt from 'components/InterruptPromotions/melts_interrupt'

class EmptyPlaceholder extends Component {
  render = () => <div />
}

// Playlist conditions
import { keyIsValue } from 'components/Common/PlaylistDJ/conditions'

// ---------------------------------------------
export default [
  {
    id: '273ed55f-d8ec-4eac-a348-87d2551b4cc4',
    frames: [

      //XXX: for testing
      // {
      //   conditions: [keyIsValue('menu_interrupt_back', 'melts_interrupt')],
      //   component: <FreshMeltsInterrupt />,
      //   duration: 12000,
      //   animationDuration: 12000
      // },
      {
        component: <EmptyPlaceholder />,
        duration: 60000,
        animationDuration: 60000
      }
    ]
  }
]
