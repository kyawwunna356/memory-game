import './App.css';
import React, { useEffect, useState } from 'react';
import Setting from './components/Setting';
import Home from './components/Home';
import useSound from 'use-sound';
// import bicycle from './music/bicycle.mp3'


export const StateContext = React.createContext();

function App() {
  const [playActive] = useSound(
    './music/bicycle.mp3',
    { volume: 1 }
  );
  useEffect(() => playActive(),[])
  const [start,setStart] = useState(true)
  const [finalConfig, setFinalConfig] = useState({})

  // function handleClick(){
  //   console.log('click')
  //   playActive()
  // }
  
  return (
    <div>
        {
          start ? 
          <>
          <Setting finalConfig={finalConfig} setFinalConfig={setFinalConfig} start={start} setStart={setStart}/>
        </>
        : 
        <StateContext.Provider value={setStart}>
          <Home finalConfig={finalConfig}/>
          
        </StateContext.Provider>
        }
        
    </div>
  );
}

export default App;
