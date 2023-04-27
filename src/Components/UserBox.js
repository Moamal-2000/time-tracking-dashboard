import { useEffect, useRef, useState } from "react";
import userImg from "../images/image-jeremy.png";
import "./UserBox.css";

function UserBox() {
  const switcherRef = useRef(null);
  const buttonsRef = useRef([]);
  const [buttons, setButtons] = useState([]);



  // Functions
  function handleDailyClick() {}

  function handleWeeklyClick() {}

  function handleMonthlyClick() {}


  // Use effect
  useEffect(() => {
    const buttons = switcherRef.current.querySelectorAll("button");
    buttonsRef.current = Array.from(buttons);
    setButtons(buttons);
  }, []);





  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'))

      btn.classList.add('active')
    })
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
        <button
          type="button"
          className="daily-button"
          onClick={() => handleDailyClick()}
        >
          Daily
        </button>
        <button
          type="button"
          className="weekly-button active"
          onClick={() => handleWeeklyClick()}
        >
          Weekly
        </button>
        <button
          type="button"
          className="monthly-button"
          onClick={() => handleMonthlyClick()}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default UserBox;
