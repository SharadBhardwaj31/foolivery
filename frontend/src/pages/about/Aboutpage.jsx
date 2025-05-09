import React from "react";
import "./style.css";

const Aboutpage = () => {
  return (
    <main>
      <section className="about">
        <div className="aboutContainer">
          <h1>ABOUT US !</h1>
        </div>
        <div className="box">
          <div className="boxLeft"></div>
          <div className="boxRight">
            <h1>About Us</h1> <br />
            <br />
            <p>
              <b>Fast. Reliable. Right to Your </b>
              <br />
              <br />
              At Foolivery, we believe delivery should be simple, seamless, and
              stress-free. Whether it's your favorite takeout, a last-minute
              gift, or a package that just can't wait, we’re here to bring it
              straight to your doorstep. <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="image">
        <div className="img">
          <div className="imgLeft">
            <button type="submit">Reserve</button>
            <h2>Book a table</h2>
          </div>
          <div className="imgRight">
            <button type="submit">Our Menu</button>
            <h2>Our Cocktails</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aboutpage;
