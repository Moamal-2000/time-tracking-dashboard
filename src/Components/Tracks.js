import { useState } from "react";
import "./Tracks.css";
import data from "../data/data.json"

function Tracks() {
  const [cards, setCards] = useState(data);


  return (
    <>
      {cards.map((obj, i) => {
        console.log(obj.timeframes.daily.current);
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
                <time>{obj.timeframes.daily.current}</time>
                <span className="last-time">
                  {obj.timeframes.daily.previous}
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
