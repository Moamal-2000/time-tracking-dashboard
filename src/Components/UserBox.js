import { useContext, useEffect, useRef, useState } from "react";
import userImg from "../images/image-jeremy.png";
import { TimeAdverbsContext } from "./TracksContainer";
import "./UserBox.css";



function UserBox() {
  const switcherRef = useRef(null);
  const buttonsRef = useRef([]);
  const [buttons, setButtons] = useState([]);
  let timeAdverbState = useContext(TimeAdverbsContext);




  // Functions
  function handleDailyClick() {
  }

  function handleWeeklyClick() {
  }

  function handleMonthlyClick() {
  }




  // Use effect
  useEffect(() => {
    const buttons = switcherRef.current.querySelectorAll("button");
    buttonsRef.current = Array.from(buttons);
    setButtons(buttons);
  }, []);




  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");

      timeAdverbState = btn.textContent.toLowerCase();

      const isDaily = btn.textContent.toLowerCase() === "daily";
      const isWeekly = btn.textContent.toLowerCase() === "weekly";
      const isMonthly = btn.textContent.toLowerCase() === "monthly";
      if (isDaily) handleDailyClick();
      else if (isWeekly) handleWeeklyClick();
      else if (isMonthly) handleMonthlyClick();
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
        <button type="button" className="daily-button">
          Daily
        </button>
        <button type="button" className="weekly-button active">
          Weekly
        </button>
        <button type="button" className="monthly-button">
          Monthly
        </button>
      </div>
    </div>
  );
}

export default UserBox;
