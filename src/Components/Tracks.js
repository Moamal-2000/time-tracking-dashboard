import { Route, Routes } from "react-router-dom";
import Daily from "./Daily";
import Monthly from "./Monthly";
import "./Tracks.css";
import Weekly from "./Weekly";

function Tracks() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Weekly />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/monthly" element={<Monthly />} />
    </Routes>
    </>
  );
}

export default Tracks;
