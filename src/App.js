import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Settings from "./components/main/Settings";
import Timer from "./components/main/Timer";
import SettingsContext from "./components/main/SettingsContext";


function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(1)
  const [brakeMinutes, setBrakeMinutes] = useState(1)

  return (
    <div className="App bg-[#30384b] text-[#eee]">

      {/* <LoginPage/> */}

      <SettingsContext.Provider value={{
        showSettings,
        workMinutes,
        brakeMinutes,
        setWorkMinutes,
        setBrakeMinutes,
        setShowSettings
      }}>

        {showSettings ? <Settings /> : <Timer />}

      </SettingsContext.Provider>



    </div>
  );
}

export default App;
