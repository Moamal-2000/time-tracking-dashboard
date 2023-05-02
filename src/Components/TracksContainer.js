import { createContext } from "react";
import Tracks from "./Tracks";
import "./TracksContainer.css";
import UserBox from "./UserBox";

export const TimeAdverbsContext = createContext();

function TracksContainer() {
  return (
    <TimeAdverbsContext.Provider value="weekly">
      <div className="tracks-container">
        <UserBox />
        <div className="tracks">
          <Tracks timeVerbs="weekly" />
        </div>
      </div>
    </TimeAdverbsContext.Provider>
  );
}

export default TracksContainer;
