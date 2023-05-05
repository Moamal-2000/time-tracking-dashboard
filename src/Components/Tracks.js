import { Route, Routes } from "react-router-dom";
import Daily from "./Daily";
import Monthly from "./Monthly";
import "./Tracks.css";
import Weekly from "./Weekly";

function Tracks() {
  return (
    <Routes>
      <Route path="time-tracking-dashboard/" element={<Weekly />} />
      <Route path="time-tracking-dashboard/daily" element={<Daily />} />
      <Route path="time-tracking-dashboard/monthly" element={<Monthly />} />
    </Routes>
  );
}

export default Tracks;
