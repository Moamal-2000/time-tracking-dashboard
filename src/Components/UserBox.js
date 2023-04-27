import userImg from "../images/image-jeremy.png";
import "./UserBox.css";

function UserBox() {
  return (
    <div className="user-box">
      <div className="user-info">
        <div className="img-holder">
          <img src={userImg} alt="" />
        </div>

        <span>Report for</span>
        <h2 className="user-name">Jeremy Robson</h2>
      </div>

      <div className="switcher-container">
        <button type="button" className="daily-button">Daily</button>
        <button type="button" className="weekly-button">Weekly</button>
        <button type="button" className="monthly-button">Monthly</button>
      </div>
    </div>
  );
}

export default UserBox;
