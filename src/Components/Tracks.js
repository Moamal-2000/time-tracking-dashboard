import React, { useState } from "react";
import { useTimesContext } from "../App";
import data from "../data/data.json";
import "./Tracks.css";

function Tracks() {
  const [cards] = useState(data);
  const { times } = useTimesContext();



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
                <time>{obj.timeframes[times].current}hrs</time>
                <span className="last-time">
                  Last month - {obj.timeframes[times].previous}hrs
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Tracks;
