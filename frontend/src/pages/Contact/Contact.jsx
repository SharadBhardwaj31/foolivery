import React from "react";
import "./style.css";
import { LifeBuoy, MapPin, CloudUpload } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <section className="home">
        <div className="homeContainer">
          <h1>Contact Foolivery</h1>
          <p>A successful restaurant experience</p>
        </div>
      </section>

      <section className="container">
        <div className="containerBoxes">
          <div className="box1">
            <LifeBuoy size={40} />
            <h2>Help Center</h2>
            <br />
            <a href="#0">+91 423-23-221</a>
            <a href="#0">- help@foolivery.com</a>
            <br />
            <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
          </div>
          <div className="box2">
            <MapPin size={40} />
            <h2>Address</h2>
            <br />
            <p>6th Forrest Ray, London - 10001 UK</p>
            <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
          </div>
          <div className="box3">
            <CloudUpload size={40} />
            <h2>Submissions</h2>
            <br />
            <a href="#0">+94 423-23-221</a>

            <a href="#0">- order@foolivery.com</a>
            <br />
            <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
