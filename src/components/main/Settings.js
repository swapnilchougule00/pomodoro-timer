import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import SettingsContext from './SettingsContext'
import BackButton from './buttons/BackButton'

function Settings() {
    const settingInfo = useContext(SettingsContext)

    return (
    <div className='w-full h-screen flex flex-col items-center space-y-4'>

      <label className='mt-8 '> Work : {settingInfo.workMinutes}:00</label>
      <ReactSlider
        className='h-[40px] md:w-[300px] w-[200px]  border-2 border-red-600 rounded-3xl'
        thumbActiveClassName='thumb'
        trackClassName='track'
        value={settingInfo.workMinutes}
        min={1}
        max={120}
        onChange={newValue=>settingInfo.setWorkMinutes(newValue)}
      />
      <label > Brake : {settingInfo.brakeMinutes}:00</label>
      <ReactSlider
        className='h-[40px] md:w-[300px] w-[200px]  border-2 border-green-600 rounded-3xl'
        thumbClassName='thumbBrake'
        value={settingInfo.brakeMinutes}
        min={1}
        max={120}
        onChange={newValue=>settingInfo.setBrakeMinutes(newValue)}
      />

      <div>
        <BackButton onClick={()=>settingInfo.setShowSettings(false)}/>
      </div>
    </div>
  )
}

export default Settings
