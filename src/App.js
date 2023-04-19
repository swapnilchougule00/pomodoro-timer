import { useState } from "react";
import Settings from "./components/main/Settings";
import Timer from "./components/main/Timer";
import SettingsContext from "./components/main/SettingsContext";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import SignIn from "./components/SignIn";


function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(25)
  const [brakeMinutes, setBrakeMinutes] = useState(5)

  return (
    <div className="App bg-[#30384b] text-[#eee]">

      {/* <LoginPage/> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Timer" element={
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

        } />
      </Routes>





    </div>
  );
}

export default App;
