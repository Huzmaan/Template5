import React from "react";
import Map from "../Images/map.jpg";

const Where = () => {
  return (
    <div className="container-css">
      <div className="MainWhere-css " id="Where">
        <h5 className="WhereHeading-css">
          <span className="WhereHeadingText-css">WHERE TO FIND US</span>{" "}
        </h5>
        <p>Find us at some address at some place.</p>
        <img className="ImageWhere-css" src={Map} alt="Map" />
        <p>
          <strong className="Text">FYI!</strong> We offer full-service catering
          for any event, large or small. We understand your needs and we will
          cater the food to satisfy the biggerst criteria of them all, both look
          and taste.
        </p>
        <p>
          <strong> Reserve</strong> a table, ask for today's special or just
          send us a message:{" "}
        </p>
        <form>
          <p>
            <input
              className="inp-text-css"
              type="text"
              required
              name="name"
              placeholder="Name"
            />
          </p>
          <p>
            <input
              className="inp-text-css"
              type="number"
              required
              name="people"
              placeholder="How many People"
            />
          </p>
          <p>
            <input
              className="inp-text-css"
                   type="datetime-local"
               required
               name="date"
              placeholder="Date and time"
            value="2020-11-16T20:00"
            min="2020-11-16T20:00"
            />
          </p>
          <p>
            <input
              className="inp-text-css"
              type="text"
              required
              name="message"
              placeholder="Message \ Special requirments"
            />
          </p>
          <button className="btn-css">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Where;