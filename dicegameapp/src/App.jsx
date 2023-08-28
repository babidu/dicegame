import './App.css'
import { PlayGame } from './Components/PlayGame';
import StartGame from './Components/StartGame';
import { useState } from 'react';

function App() {
  const [isPlay, setIsPlay] = useState(false);

  const toggle = () => {
    setIsPlay(!isPlay);
  }


  return (
    <>

      {
        isPlay ? <StartGame /> : <PlayGame
          toggleBtn={toggle}
        />
      }

    </>
  )
}

export default App
