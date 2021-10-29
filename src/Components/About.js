import React from 'react'
import CoffeShop from '../Images/coffeeshop.jpg'
 
const About = () => {
    return (
        <div className="container-css">
            <div className="MainAbout-css" id="About">
            <h5 className="AboutHeading-css">
                <span className="AboutHeadingText-css">
                ABOUT  THE CAFE </span></h5>
            <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
            <div className="AboutContainer-css">
                <p><i>
                "Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.
                    </i></p>
                    <p>Chef, Coffeeist and Owner: Liam Brow</p>
            </div>
            <img className="ImageAbout-css" src={CoffeShop} alt=""/>
            <p> <strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
            <p><strong> Address:</strong> 15 Adr street, 5015, NY</p>
        </div>
        </div>

    )
}

export default About
