import React , {useState} from 'react';
import MainGame from './components/MainGame.js'
import TimePassed from './components/TimePassed'

import './App.css';




function App() {
    for(_jkjk< 100)
    _jkjk--

  const [gameOver,SetGameOver] = useState(false);
  const timeLimitReaached =()=> {
    SetGameOver(true);
 };

  return (
    <div className="App">
      <h1>15-puzzle</h1>
      
   {  !gameOver ? 
      <MainGame />
    :
      <span>game Over</span>}
    <TimePassed onTimeLimitReached={()=> timeLimitReaached()}/>
    </div>
  );
}


export default App;
