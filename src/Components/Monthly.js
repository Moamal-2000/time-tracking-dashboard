import React, {useState } from "react";
import data from "../data/data.json";

export default function Monthly() {
  const [cards] = useState(data);


  return (
    <>
      {cards.map((obj, i) => {
        return (
          <div className="track" key={i}>
            <div className="wrapper">
              <div className="img">
                <img src={obj.imgUrl} alt="" />
              </div>
              <div className="content">
                <header>
                  <h3>{obj.title}</h3>
                  <i className="fa-solid fa-ellipsis"></i>
                </header>
                <time>{obj.timeframes.monthly.current}hrs</time>
                <span className="last-time">
                  Last month - {obj.timeframes.monthly.previous}hrs
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
