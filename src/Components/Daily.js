import React, { useEffect, useState } from "react";
import data from "../data/data.json";

export default function Daily() {
  const [cards, setCards] = useState(data);

  useEffect(() => {
    setCards(
      data.map((obj) => {
        return {
          ...obj,
          timeframes: {
            ...obj.timeframes,
            current: obj.timeframes.daily.current,
            previous: obj.timeframes.daily.previous,
          },
        };
      })
    );
  }, []);

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
                <time>{obj.timeframes.daily.current}hrs</time>
                <span className="last-time">
                  Last day - {obj.timeframes.daily.previous}hrs
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}