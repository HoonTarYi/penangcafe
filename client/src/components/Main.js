import React, { Component } from 'react';
import jss from 'jss';

class Main extends Component {
  render() {
    return (

      <div>
        <div classNameName="bgimg  display-container  grayscale-min" id="home">
          <div classNameName=" display-bottomleft  center  padding-large  hide-small">
            <span className=" tag">24 Hours</span>
              </div>
              <div className=" display-middle  center">
                <span className=" text-white" style="font-size:90px">the Cafe</span>
                </div>
                  <div className=" display-bottomright  center  padding-large">
                    <span className=" text-white">Find Your Desire Cafe</span>
                      </div>
      </div>


      <div className=" sand  grayscale  large">

          <div className=" content" style="max-width:700px">
          <h5 className=" center  padding-64"><span className=" tag  wide">ABOUT THE CAFE</span></h5>
          <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
            <div className=" panel  leftbar  light-grey">
              <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
              <p>Chef, Coffeeist and Owner: Liam Brown</p>
            </div>
          <img src="cafe.jpg" style="width:100%;max-width:1000px" className=" margin-top" alt="img" />
          <p><strong>Opening hours:</strong></p>
          <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
        </div>
          </div>



      <div className=" container" id="menu">
        <div className=" content" style="max-width:700px">

          <h5 className=" center  padding-48"><span className=" tag  wide">Recommended MENU</span></h5>

          <div className=" row  center  card  padding">
            <a href="javascript:void(0)" onclick="openMenu(event, 'Eat');" id="myLink">
              <div className=" col s6 tablink">Eat</div>
            </a>
            <a href="javascript:void(0)" onclick="openMenu(event, 'Drinks');">
              <div className=" col s6 tablink">Drink</div>
            </a>
          </div>

          <div id="Eat" className=" container menu  padding-48  card">
            <h5>Bread Basket</h5>
            <p className=" text-grey">Assortment of fresh baked fruit breads and muffins</p>

            <h5>Honey Almond Granola with Fruits</h5>
            <p className=" text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates</p>

            <h5>Belgian Waffle</h5>
            <p className=" text-grey">Vanilla flavored batter with malted flour</p>

            <h5>Scrambled eggs</h5>
            <p className=" text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions</p>

            <h5>Blueberry Pancakes</h5>
            <p className=" text-grey">With syrup, butter and lots of berries</p>
          </div>

          <div id="Drinks" className=" container menu  padding-48  card">
            <h5>Americano</h5>
            <p className=" text-grey">A shot or two of espresso with hot water added</p>

            <h5>Cappuccino</h5>
            <p className=" text-grey">Espresso with a little bit of steamed milk topped with a lot of foam</p>

            <h5>Mocha</h5>
            <p className=" text-grey">Espresso with steamed milk and chocolate (you can add whipped cream as well!)</p>

            <h5>>Espresso</h5>
            <p className=" text-grey">Coffee brewed by forcing a small amount of nearly boiling water under pressure through finely ground beans.</p>

            <h5>Soda</h5>
            <p className=" text-grey">Coke, Sprite, Fanta, etc.</p>
          </div>
          <img src="menu.jpg" style="width:100%;max-width:1000px;margin-top:32px;"/>
          </div>
            </div>




      <div className=" center  light-grey  padding-48  large">
        <p>Powered by <a  title="W3.CSS" target="_blank" className=" hover-text-green">Cafe Tail</a></p>
      </div>
        </div>
    );
  }
}

export default Main;
