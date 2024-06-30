import React from 'react'
import { Link } from 'react-router-dom'
import bg22 from '../../../assets/images/background/bg-22.png'
import bg23 from '../../../assets/images/background/bg-23.png'
import menusdesertone from '../../../assets/images/resource/menus-desert.jpg'
import menusdrinksone from '../../../assets/images/resource/menus-drinks.jpg'
import pannacotta from '../../../assets/images/resource/panna_cotta.jpg'
import drinks_menu_img from '../../../assets/images/resource/drinks_img.png'

function Offers() {
    return (
        <>
            <section className="menu-one">
                <div className="left-bg"><img src={bg22} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>sweet & sweet</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Desserts</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={pannacotta} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Banana Katsu With Ice Cream</Link></h5></div><div className="price"><span>₹400</span></div></div>
                                        {/* <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div> */}
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Mango Mousse <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>₹350</span></div></div>
                                        {/* <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div> */}
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Creme Brulee</Link></h5></div><div className="price"><span>₹350</span></div></div>
                                        {/* <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div> */}
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Mango Sticky Rice <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>₹450</span></div></div>
                                        {/* <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="menu-one alternate">
                <div className="right-bg-2"><img src={bg23} alt="" title="" /></div>
                <div className="auto-container">

                    <div className="title-box centered">
                        <div className="subtitle"><span>hot & cold</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Drinks Menu</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={drinks_menu_img} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Fancy Daisy</Link></h5></div><div className="price"><span>₹525</span></div></div>
                                        <div className="text desc"><Link to="#">Blue pea infused gin, lavender syrup, cucumber, lime juice</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Japanese Samurai <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>₹645</span></div></div>
                                        <div className="text desc"><Link to="#">Whiskey, tea reduction, rosemary syrup, aromatic bitter</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Aam Panna</Link></h5></div><div className="price"><span>₹445</span></div></div>
                                        <div className="text desc"><Link to="#">Tequila, Fresh Mango, green chilli, lime juice, aam panna syrup</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Sparking Gimlet <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>₹445</span></div></div>
                                        <div className="text desc"><Link to="#">Gin, lavender and rose syrup, apple juice and fresh lime</Link></div>
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

export default Offers