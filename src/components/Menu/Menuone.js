import React from 'react'
import Startermenu from '../Allmenus/FirstMenu/Startermenu';
import Offer from '../Allmenus/FirstMenu/Offers'
import Reservation from '../Allmenus/FirstMenu/Reservation';
import Bredcom from '../Bredcrumb/Main'
import Img from '../../assets/images/background/banner-image-2.jpg'
import menu_img from '../../assets/images/background/bg_img_menu.png'

function Menuone() {
  return (
    <>
      <Bredcom subtitle="Our Menu" title="DELICIOUS & AMAZING" Img={menu_img} />
      <Startermenu />
      <Offer />
      <Reservation />
    </>
  )
}

export default Menuone