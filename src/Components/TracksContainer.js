import Tracks from "./Tracks";
import "./TracksContainer.css";
import UserBox from "./UserBox";

function TracksContainer() {
  return (
    <div className="tracks-container">
      <UserBox />
      <div className="tracks">
        <Tracks />
      </div>
    </div>
  );
}

export default TracksContainer;
