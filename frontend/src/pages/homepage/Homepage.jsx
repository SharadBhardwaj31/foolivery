import"./Style.css";
import logo from "../../assets/logo.png";
import cat1 from "../../assets/category/home_cat_bakery.jpg";
import cat2 from "../../assets/category/home_cat_chinesse.jpg";
import cat3 from "../../assets/category/home_cat_hamburgher.jpg";
import cat4 from "../../assets/category/home_cat_pizza.jpg";
import cat5 from "../../assets/category/home_cat_sushi.jpg";
import cat6 from "../../assets/category/home_cat_vegetarian.jpg";
import location1 from "../../assets/restaurants/location_list_1.jpg";
import location2 from "../../assets/restaurants/location_list_2.jpg";
import location3 from "../../assets/restaurants/location_list_3.jpg";
import location4 from "../../assets/restaurants/location_list_4.jpg";
import location5 from "../../assets/restaurants/location_list_5.jpg";
import location6 from "../../assets/restaurants/location_list_6.jpg";
import how1 from "../../assets/cta/how_1.svg";
import how2 from "../../assets/cta/how_2.svg";
import how3 from "../../assets/cta/how_3.svg";



const Homepage = () => {
    return (
      <>


     <header>
        <nav>
            <div class="logo">
                <img src={logo} />

            </div>
            <div class="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">SignUp</a></li>
                </ul>
            </div>
        </nav>
     </header>


     <main>
        {/* <!-- Hero Section --> */}
         <section class="hero">
            <div class="heroContainer">
                <h1 id="myh1">Delivery or Takeaway Food</h1>
                <h2>The best restaurants at the best price</h2>
                <div class="heroSearch">
                <input placeholder="Address, neighborhood....."/>
                <button id="btn">Search</button>
                </div>
                <p>
                Trending: <span><a href="/">Sushi</a></span>
                <span><a href="/">Burger</a></span>
                <span><a href="/">Chinese</a></span>
                <span><a href="/">Pizza</a></span>
                </p>

            </div>

         </section>
         <section class="categories">
            <div class="catContainer">
                <h2>Popular Categories</h2>
                <p class="catDesc">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
                <div class="catBoxes">
                    <div class="catBox">
                        <img src={cat4} />
                        <div class="catBoxContent">
                            <h3>Pizza</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div class="catBox">
                        <img src={cat5}/>
                        <div class="catBoxContent">
                            <h3>Japense</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div class="catBox">
                        <img src={cat3} />
                        <div class="catBoxContent">
                            <h3>Burhgers</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div class="catBox">
                        <img src={cat6}/>
                        <div class="catBoxContent">
                            <h3>Vegetarian</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div class="catBox">
                        <img src={cat1} />
                        <div class="catBoxContent">
                            <h3>Bakery</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                    <div class="catBox">
                        <img src={cat2} />
                        <div class="catBoxContent">
                            <h3>Chinese</h3>
                            <p>Avg price $40</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
         <section class="topRR">
            <div class="topRRContainer">
                <h2>Top Rated Restaurants</h2>
                <p class="topRRDesc">
                    Cum doctus civibus efficiantur in imperdiet deterruisset.
                </p>
                <div class="topRRBoxes">
                    <div class="topRRBoxesLeft">
                        <a href="/">
                  <div class="topRRBox">
                  <div class="topRRBoxLeft">
                    <img src={location1} />
                </div>
                  <div class="topRRBoxRight">
                  <span>Italian</span>
                  <h3>La Monnalisa</h3>
                  <p>8 Patriot Square E2 9NF</p>
                  <small>Average Price $30</small>
                 </div>
              </div>
            </a>
            <a href="/"
            ><div class="topRRBox">
              <div class="topRRBoxLeft">
                <img src={location2}/>
              </div>
              <div class="topRRBoxRight">
                <span>Italian</span>
                <h3>La Monnalisa</h3>
                <p>8 Patriot Square E2 9NF</p>
                <small>Average Price $30</small>
              </div>
            </div></a
          >
          <a href="/"
            ><div class="topRRBox">
              <div class="topRRBoxLeft">
                <img src={location3} />
              </div>
              <div class="topRRBoxRight">
                <span>Italian</span>
                <h3>La Monnalisa</h3>
                <p>8 Patriot Square E2 9NF</p>
                <small>Average Price $30</small>
              </div>
            </div></a
          >
        </div>
        <div class="topRRBoxesRight">
          <a href="/"
            ><div class="topRRBox">
              <div class="topRRBoxLeft">
                <img src={location4}/>
              </div>
              <div class="topRRBoxRight">
                <span>Italian</span>
                <h3>La Monnalisa</h3>
                <p>8 Patriot Square E2 9NF</p>
                <small>Average Price $30</small>
              </div>
            </div></a
          >
          <a href="/"
            ><div class="topRRBox">
              <div class="topRRBoxLeft">
                <img src={location5} />
              </div>
              <div class="topRRBoxRight">
                <span>Italian</span>
                <h3>La Monnalisa</h3>
                <p>8 Patriot Square E2 9NF</p>
                <small>Average Price $30</small>
              </div>
            </div></a
          >
          <a href="/"
            ><div class="topRRBox">
              <div class="topRRBoxLeft">
                <img src={location6} />
              </div>
              <div class="topRRBoxRight">
                <span>Italian</span>
                <h3>La Monnalisa</h3>
                <p>8 Patriot Square E2 9NF</p>
                <small>Average Price $30</small>
              </div>
            </div>
        </a>
                     </div>
                </div>
            </div>
         </section>
         <section class="start">
          <div class="startContainer">
            <div class="startContent">
            <h3>FOOLIVERY DELIVERY</h3>
            <h1>We Deliver to your Office</h1>
            <p>Enjoy a tasty food in minutes!</p>
            <button>Start Now!</button>
          </div>
          </div>

         </section>
         <section class="cta">
          <div class="ctaContainer">
            <div class="ctaLeft">
              <div class="ctaBox">
                <div class="ctaBoxChild">
                  <img src={how1}/>
                  <h3>Easly Order</h3>
                  <p>
                    Faucibus ante, in porttitor tellus blandit et. Phasellus
                    tincidunt metus lectus sollicitudin.
                  </p>
                </div>
                <div class="ctaBoxChild">
                  <img src={how2} />
                  <h3>Quick Delivery</h3>
                  <p>
                    Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                    hendrerit nulla, id vestibulum.
                  </p>
                </div>
              </div>
              <div class="ctaBox">
                <div class="ctaBoxChild">
                  <img src={how3} />
                  <h3>Enjoy Food</h3>
                  <p>
                    Morbi convallis bibendum urna ut viverra. Maecenas quis
                    consequat libero, a feugiat eros.
                  </p>
                </div>
              </div>
            </div>
            <div class="ctaRight">
              <h2>Start Ordering Now</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet libero id nisi euismod, sed porta est consectetur
                deserunt.
              </p>
              <small
                >Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</small
              >
              <div><a href="">Register</a></div>
            </div>
          </div>
        </section>
     </main>

     {/* <!-- Footer --> */}
       <footer>
        <div class="fContainer">
          <div class="fTab">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Login</a></li>
            </ul>
          </div>
          <div class="fTab">
            <h3>CATEGORIES</h3>
            <ul>
              <li><a href="/">Top Categories</a></li>
              <li><a href="/">Best Rated</a></li>
              <li><a href="/">Best Price</a></li>
              <li><a href="/">Latest Submissions</a></li>
            </ul>
          </div>
          <div class="fTab">
            <h3>CONTACTS</h3>
            <ul>
              <li>
                <a href="/">
                  97845 Baker st. 567<br />
                  Los Angeles - US</a
                >
              </li>
              <li><a href="/">+94 423-23-221</a></li>
              <li><a href="/">info@domain.com</a></li>
            </ul>
          </div>
          <div class="fTab">
            <h3>KEEP IN TOUCH</h3>
            <input placeholder="Your Email" />
          </div>
        </div>
      </footer>
      </>
    );
};

export default Homepage;