import React ,{useState} from 'react';
import GameCell from './components/GameCell.js'
import './App.css';

const calculateClickabels=(a)=>{
  const ind = a.indexOf(0); 
  const vert = Math.floor(ind /4)  ;
  const horz = ind % 4 ;

  let clickabelsIndx=[];
  let clickabels=[];
  if(horz!==0)
    clickabelsIndx.push(ind -1);
  if(horz!==3)
    clickabelsIndx.push(ind + 1);
  if(vert!==0)
    clickabelsIndx.push(ind -4);
  if(vert!==3)
    clickabelsIndx.push(ind + 4);

    clickabelsIndx.map( x=> clickabels.push(a[x]));
 
  return clickabels;
}

const switchPlace=(a,num)=>{
  const ind0 = a.indexOf(0); 
  const indNum = a.indexOf(num);
  let newA = [...a];
  newA[ind0] = num;
  newA[indNum] = 0;

  return newA;
}


const shuffle=(array)=>{
  let randomeMoves = Math.floor(Math.random() * 800) + 300; //Decide how many times you want to shaffle
  let currentArry = [...array];
  for (let i = 0; i < randomeMoves; i++) { 
    let possibleNumbers = calculateClickabels(currentArry);
    let chosenNo = randomeToSwap(possibleNumbers);
    currentArry = switchPlace(currentArry,chosenNo);
  }
  return currentArry;

};

const randomeToSwap =(arry)=>  arry[Math.floor(Math.random()*arry.length)];
const range = (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i);



function App() {
const [nums,setNums] = useState( shuffle(range(0,15)) );

const CellClicked =(x)=> {
  
   const clickabels= calculateClickabels(nums);
  if(clickabels.includes(x)) 
    setNums(switchPlace(nums,x));
}


  return (
    <div className="App">
     <div className="GameSpace">
    {nums.map(x=> <GameCell key={x} number={x}  onClick={(num)=> CellClicked(num)}/>) } 
    </div>
    </div>
  );
}


export default App;
