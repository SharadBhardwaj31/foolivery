import React from "react";
import "./cta.css";

import how1 from "../../../../assets/cta/how_1.svg";
import how2 from "../../../../assets/cta/how_2.svg";
import how3 from "../../../../assets/cta/how_3.svg";

const Cta = () => {
  return (
    <section className="cta">
      <div className="ctaContainer">
        <div className="ctaLeft">
          <div className="ctaBox">
            <div className="ctaBoxChild">
              <img src={how1} />
              <h3>Easly Order</h3>
              <p>
                Faucibus ante, in porttitor tellus blandit et. Phasellus
                tincidunt metus lectus sollicitudin.
              </p>
            </div>
            <div className="ctaBoxChild">
              <img src={how2} />
              <h3>Quick Delivery</h3>
              <p>
                Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                hendrerit nulla, id vestibulum.
              </p>
            </div>
          </div>
          <div className="ctaBox">
            <div className="ctaBoxChild">
              <img src={how3} />
              <h3>Enjoy Food</h3>
              <p>
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros.
              </p>
            </div>
          </div>
        </div>
        <div className="ctaRight">
          <h2>Start Ordering Now</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet libero id nisi euismod, sed porta est consectetur
            deserunt.
          </p>
          <small>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </small>
          <div>
            <a href="">Register</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
