import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './buttons/PlayButton';
import PauseButton from './buttons/PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useEffect, useRef, useState } from 'react';
import SettingsContext from './SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {

 


    const settingInfo = useContext(SettingsContext)

    

    
    const [isPaused, setIspaused] = useState(true)
    const [mode, setMode] = useState('work')
    const [secondsLeft, setSecondsLeft] = useState(0)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode) 

    const tick = ()=>{
        secondsLeftRef.current--
        setSecondsLeft(secondsLeftRef.current)
    }

   
    


    useEffect(() => {

        const switchMode = () => {
            const nextMode = modeRef.current === 'work' ? 'brake' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingInfo.workMinutes  : settingInfo.brakeMinutes) * 60;
    
            modeRef.current = nextMode
            setMode(nextMode)
    
            setSecondsLeft(nextSeconds)
    
            secondsLeftRef.current = nextSeconds
        }
        
        secondsLeftRef.current = settingInfo.workMinutes *60;
        setSecondsLeft(secondsLeftRef.current)

       

        const interval = setInterval(() => {
            if (isPausedRef.current)
                return;
            if (secondsLeftRef.current === 0) {
                return switchMode()
            
            }

            tick()

        }, 100)

        return () => clearInterval(interval);

    }, [settingInfo])

   
    const totalSeconds = mode === 'work'
    ? settingInfo.workMinutes * 60
    : settingInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0'+seconds;

  

    return (
        <div className='w-full h-screen flex flex-col  '>
            <CircularProgressbar className='h-[40%] mt-8' 
          value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
        textColor:'#fff',
        pathColor:mode === 'work' ? red : green,
        tailColor:'rgba(255,255,255,.2)',
                
            })} />

            <div className='text-center mt-8 space-x-8'>
                {isPaused ? <PlayButton onClick ={()=>{setIspaused(false ); isPausedRef.current= false}} /> 
                : <PauseButton onClick ={()=>{setIspaused(true); isPausedRef.current= true}}/>}


            </div>

            <div className='mt-8 flex justify-center'>
                <SettingsButton onClick={() => settingInfo.setShowSettings(true)} />
            </div>

        </div>
    )
}

export default Timer
