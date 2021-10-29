import React, { useState } from "react";
import Coffee from "../Images/coffeehouse2.jpg";

const Menu = () => {
    const[currentId,SetCurrentId] =useState(false);
  return (
    <div className="container-css">
      <div className="MainMenu-css" id="Menu">
        <h5 className="MenuHeading-css">
          <span className="MenuHeadingText-css">THE MENU</span>
        </h5>
        <div className="MenuChart-css">
          <a onClick={()=>SetCurrentId(true)}    className="Menu-text">
            Eat
          </a>
          <a  onClick={()=>SetCurrentId(false)} className="Menu-text">
            Drink
          </a>
        </div>
        <div className="Menu-css">
         {currentId ? <div id="Eat">
            <h5 className="Menu-title">Bread Basket</h5>
            <p className="Menu-description">Assortment of fresh baked fruit breads and muffins 5.50</p>
            <h5 className="Menu-title">Honey Almond Granola with Fruits</h5>
            <p className="Menu-description">
              Natural cereal of honey toasted oats, raisins, almonds and dates
              7.00
            </p>
            <h5 className="Menu-title"> Belgian Waffle</h5>
            <p className="Menu-description"> Vanilla flavored batter with malted flour 7.50</p>
            <h5 className="Menu-title">Scrambled eggs </h5>
            <p className="Menu-description">
              Scrambled eggs, roasted red pepper and garlic, with green onions
              7.50
            </p>
            <h5 className="Menu-title">Blueberry Pancakes </h5>
            <p className="Menu-description">With syrup, butter and lots of berries 8.50 </p>
          </div>:
          <div id="Drink">
            <h5 className="Menu-title">Coffee </h5>
            <p className="Menu-description">Regular coffee 2.50</p>
            <h5 className="Menu-title">Chocolato </h5>
            <p className="Menu-description">Chocolate espresso with milk 4.50</p>
            <h5 className="Menu-title">Corretto</h5>
            <p className="Menu-description">Whiskey and coffee 5.00</p>
            <h5 className="Menu-title">Iced tea</h5>
            <p className="Menu-description">Hot tea, except not hot 3.00</p>
            <h5 className="Menu-title">Soda</h5>
            <p className="Menu-description">Coke, Sprite, Fanta, etc. 2.50</p>
          </div>}
        </div>
        <img className="ImageMenu-css" src={Coffee} alt="Coffee" />
      </div>
    </div>
  );
};

export default Menu;
