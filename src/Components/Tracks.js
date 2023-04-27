import axios from "axios";
import { useEffect, useState } from "react";
import "./Tracks.css";

function Tracks() {
  const [cards, setCards] = useState([]);

  const getData = async () => {
    const data = await axios({
      method: "get",
      url: "http://localhost:8000/cards",
    });
    setCards(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {cards.map((obj, i) => {
        console.log(obj);
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
