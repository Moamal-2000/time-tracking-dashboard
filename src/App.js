import { createContext, useContext, useState } from "react";
import "./App.css";
import Main from "./Components/Main";

const TimesContext = createContext();


function App() {
  const [times, setTimes] = useState("weekly");

  return (
    <div className="App">
      <TimesContext.Provider value={{ times, setTimes }}>
        <Main />
      </TimesContext.Provider>
    </div>
  );
}


export default App;

export const useTimesContext = () => useContext(TimesContext);
