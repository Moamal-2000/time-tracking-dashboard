import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../images/image-jeremy.png";
import "./UserBox.css";

function UserBox() {
  const switcherRef = useRef(null);
  const buttonsRef = useRef([]);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const buttons = switcherRef.current.querySelectorAll("button");
    buttonsRef.current = Array.from(buttons);
    setButtons(buttons);
  }, []);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  return (
    <div className="user-box">
      <div className="user-info">
        <div className="img-holder">
          <img src={userImg} alt="" />
        </div>

        <div>
          <span>Report for</span>
          <h2 className="user-name">Jeremy Robson</h2>
        </div>
      </div>

      <div className="switcher-container" ref={switcherRef}>
        <Link to="/daily">
          <button type="button" className="daily-button">
            Daily
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="weekly-button active">
            Weekly
          </button>
        </Link>
        <Link to="/monthly">
          <button type="button" className="monthly-button">
            Monthly
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserBox;
