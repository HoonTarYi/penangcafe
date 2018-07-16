import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (

      <header classNameName="bgimg w3-display-container w3-grayscale-min" id="home">
        <div classNameName="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
          <span className="w3-tag">24 Hours</span>
        </div>
        <div className="w3-display-middle w3-center">
          <span className="w3-text-white" style="font-size:90px">the Cafe</span>
        </div>
        <div className="w3-display-bottomright w3-center w3-padding-large">
          <span className="w3-text-white">Find Your Desire Cafe</span>
        </div>
      </header>

    <div>
      <div className="w3-sand w3-grayscale w3-large">

          <div className="w3-content" style="max-width:700px">
          <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
          <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
            <div className="w3-panel w3-leftbar w3-light-grey">
              <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
              <p>Chef, Coffeeist and Owner: Liam Brown</p>
            </div>
          <img src="cafe.jpg" style="width:100%;max-width:1000px" className="w3-margin-top" alt="img">
          <p><strong>Opening hours:</strong></p>
          <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
        </div>
          </div>
              </div>


      <div className="w3-container" id="menu">
        <div className="w3-content" style="max-width:700px">

          <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">Recommended MENU</span></h5>

          <div className="w3-row w3-center w3-card w3-padding">
            <a href="javascript:void(0)" onclick="openMenu(event, 'Eat');" id="myLink">
              <div className="w3-col s6 tablink">Eat</div>
            </a>
            <a href="javascript:void(0)" onclick="openMenu(event, 'Drinks');">
              <div className="w3-col s6 tablink">Drink</div>
            </a>
          </div>

          <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
            <h5>Bread Basket</h5>
            <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins</p><

            <h5>Honey Almond Granola with Fruits</h5>
            <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates</p>

            <h5>Belgian Waffle</h5>
            <p className="w3-text-grey">Vanilla flavored batter with malted flour</p>

            <h5>Scrambled eggs</h5>
            <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions</p>

            <h5>Blueberry Pancakes</h5>
            <p className="w3-text-grey">With syrup, butter and lots of berries</p>
          </div>

          <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
            <h5>Americano</h5>
            <p className="w3-text-grey">A shot or two of espresso with hot water added</p>

            <h5>Cappuccino</h5>
            <p className="w3-text-grey">Espresso with a little bit of steamed milk topped with a lot of foam</p>

            <h5>Mocha</h5>
            <p className="w3-text-grey">Espresso with steamed milk and chocolate (you can add whipped cream as well!)</p>

            <h5>>Espresso</h5>
            <p className="w3-text-grey">Coffee brewed by forcing a small amount of nearly boiling water under pressure through finely ground beans.</p>

            <h5>Soda</h5>
            <p className="w3-text-grey">Coke, Sprite, Fanta, etc.</p>
          </div>
          <img src="menu.jpg" style="width:100%;max-width:1000px;margin-top:32px;">
        </div>
      </div>




      <footer className="w3-center w3-light-grey w3-padding-48 w3-large">
        <p>Powered by <a  title="W3.CSS" target="_blank" className="w3-hover-text-green">Cafe Tail</a></p>
      </footer>
    );
  }
}

export default Main;
