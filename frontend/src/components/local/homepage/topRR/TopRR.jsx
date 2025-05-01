import React from "react";
import "./topRR.css";
import location1 from "../../../../assets/restaurants/location_list_1.jpg";
import location2 from "../../../../assets/restaurants/location_list_2.jpg";
import location3 from "../../../../assets/restaurants/location_list_3.jpg";
import location4 from "../../../../assets/restaurants/location_list_4.jpg";
import location5 from "../../../../assets/restaurants/location_list_5.jpg";
import location6 from "../../../../assets/restaurants/location_list_6.jpg";


const TopRR = () => {
    return(
       <section className="topRR">
                   <div className="topRRContainer">
                       <h2>Top Rated Restaurants</h2>
                       <p className="topRRDesc">
                           Cum doctus civibus efficiantur in imperdiet deterruisset.
                       </p>
                       <div className="topRRBoxes">
                           <div className="topRRBoxesLeft">
                               <a href="/">
                         <div className="topRRBox">
                         <div className="topRRBoxLeft">
                           <img src={location1} />
                       </div>
                         <div className="topRRBoxRight">
                         <span>Italian</span>
                         <h3>La Monnalisa</h3>
                         <p>8 Patriot Square E2 9NF</p>
                         <small>Average Price $30</small>
                        </div>
                     </div>
                   </a>
                   <a href="/"
                   ><div className="topRRBox">
                     <div className="topRRBoxLeft">
                       <img src={location2}/>
                     </div>
                     <div className="topRRBoxRight">
                       <span>Italian</span>
                       <h3>La Monnalisa</h3>
                       <p>8 Patriot Square E2 9NF</p>
                       <small>Average Price $30</small>
                     </div>
                   </div></a
                 >
                 <a href="/"
                   ><div className="topRRBox">
                     <div className="topRRBoxLeft">
                       <img src={location3} />
                     </div>
                     <div className="topRRBoxRight">
                       <span>Italian</span>
                       <h3>La Monnalisa</h3>
                       <p>8 Patriot Square E2 9NF</p>
                       <small>Average Price $30</small>
                     </div>
                   </div></a
                 >
               </div>
               <div className="topRRBoxesRight">
                 <a href="/"
                   ><div className="topRRBox">
                     <div className="topRRBoxLeft">
                       <img src={location4}/>
                     </div>
                     <div className="topRRBoxRight">
                       <span>Italian</span>
                       <h3>La Monnalisa</h3>
                       <p>8 Patriot Square E2 9NF</p>
                       <small>Average Price $30</small>
                     </div>
                   </div></a
                 >
                 <a href="/"
                   ><div className="topRRBox">
                     <div className="topRRBoxLeft">
                       <img src={location5} />
                     </div>
                     <div className="topRRBoxRight">
                       <span>Italian</span>
                       <h3>La Monnalisa</h3>
                       <p>8 Patriot Square E2 9NF</p>
                       <small>Average Price $30</small>
                     </div>
                   </div></a
                 >
                 <a href="/"
                   ><div className="topRRBox">
                     <div className="topRRBoxLeft">
                       <img src={location6} />
                     </div>
                     <div className="topRRBoxRight">
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
    );
};

export default TopRR;