import { useContext, useEffect, useState } from "react";
import data from "../data/data.json";
import "./Tracks.css";
import { TimeAdverbsContext } from "./TracksContainer";

function Tracks(props) {
  const [cards, setCards] = useState(data);
  let timeAdverbState = useContext(TimeAdverbsContext);
  let lastTimeVerbText;

  const {timeVerbs} = props
  if (timeVerbs === 'daily') lastTimeVerbText = 'Last Day';
  if (timeVerbs === 'weekly') lastTimeVerbText = 'Last Week';
  if (timeVerbs === 'monthly') lastTimeVerbText = 'Last Month';



  useEffect(() => {
    setCards(
      data.map((obj) => {
        return {
          ...obj,
          timeframes: {
            ...obj.timeframes,
            current: obj.timeframes[timeAdverbState].current,
            previous: obj.timeframes[timeAdverbState].previous,
          },
        };
      })
    );
  }, [timeAdverbState]);

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
                <time>{obj.timeframes.current}hrs</time>
                <span className="last-time">{lastTimeVerbText} - {obj.timeframes.previous}hrs</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Tracks;
