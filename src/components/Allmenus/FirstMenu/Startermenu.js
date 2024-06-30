import React from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/bg-16.png'
import bgtwo from '../../../assets/images/background/bg-17.png'
import bgthree from '../../../assets/images/background/bg-18.png'
import menuone from '../../../assets/images/resource/menus-1.jpg'
import menutwo from '../../../assets/images/resource/menus-2.jpg'
import chili_img from '../../../assets/images/resource/chilli_menu_one.jpg' 
import sushi_img from '../../../assets/images/resource/Sushi_platter.jpg' 

function Startermenu() {
    return (
        <>
            <section className="menu-one">
                <div className="right-bg"><img src={bgone} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>STARTER MENU</span></div>
                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Appetizers</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={chili_img} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Kung Pao</Link></h5></div><div className="price"><span>₹400</span></div></div>
                                        <div className="text desc"><Link to="#">Boneless chicken, Assorted Vegetables, Cashew nuts with chilli oil</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Chilli Bean <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>₹320</span></div></div>
                                        <div className="text desc"><Link to="#">Chilli bean sauce, Assorted vegetables and scallions</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Bookham </Link></h5></div><div className="price"><span>₹400</span></div></div>
                                        <div className="text desc"><Link to="#">Green lettuce, Bell peppers and served with chilli sauce </Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Sozo Special Chicken <span className="s-info">Chefs Special</span></Link></h5></div><div className="price"><span>₹400</span></div></div>
                                        <div className="text desc"><Link to="#">Nuts, Fried shallots and Boneless Chicken</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu-one alternate">
                <div className="left-bg"><img src={bgtwo} alt="" title="" /></div>
                <div className="right-bg-2"><img src={bgthree} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Delicious</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Sushi</h2>

                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={sushi_img} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Smoked Yougan</Link></h5></div><div className="price"><span>₹695</span></div></div>
                                        <div className="text desc"><Link to="#">Prawns, Avocado and Sliced cheese with Smokey Sauce</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Kani Tempura <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>₹695</span></div></div>
                                        <div className="text desc"><Link to="#">Crab Stick, avocado, cucumber, shichimi togarashi with avocado mayo</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Flaming Sozo Special</Link></h5></div><div className="price"><span>₹695</span></div></div>
                                        <div className="text desc"><Link to="#">Salmon, avocado crab stick and cucumber</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Fried Pink Alaska <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>₹695</span></div></div>
                                        <div className="text desc"><Link to="#">Salmon, Cream Cheese and Avocado</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Startermenu