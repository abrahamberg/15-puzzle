import React ,{useState} from 'react';
import GameCell from './GameCell.js'
import Logics from '../Logics.js';



function MainGame() {
  const [nums,setNums] = useState( Logics.shuffle([...Logics.range(1,15),0]) );
  const clickabels= Logics.calculateClickabels(nums);
  const CellClicked =(x)=> {
    
    
    if(clickabels.includes(x)) 
      setNums(Logics.switchPlace(nums,x));
        
    }
  return (
    <div className="MainGame">
     <div className="GameSpace">
    {nums.map(x=> <GameCell key={x} number={x}  isClickable={clickabels.includes(x)}  onClick={(num)=> CellClicked(num)}/>) } 
    </div>
    </div>
  );
}


export default MainGame;
