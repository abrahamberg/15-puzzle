import React ,{useState} from 'react';
import GameCell from './components/GameCell.js'
import './App.css';

const CalculateClickabels=(a)=>{
  const ind = a.indexOf(0); 
  const vert = Math.floor(ind /3)  ;
  const horz = ind % 3 ;
  console.log('v',vert,'h',horz);
  return [1,3,4];
}

const CalculateNewArry=(a,num)=>{
  const ind0 = a.indexOf(0); 
  const indNum = a.indexOf(num);
  let newA = [...a];
  newA[ind0] = num;
  newA[indNum] = 0;
  console.log('newa',newA);
  return newA;
}

const shuffle=(array)=> {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function App() {
const [nums,setNums] = useState( shuffle(utils.range(0,8)) );
const [clickabels,setClickabels] = useState(CalculateClickabels(nums));

const CellClicked =(x)=> {
  // if(clickabels.includes(x)) 
  // console.log({x},'clicked');
  setNums(CalculateNewArry(nums,x));
}

console.log(nums);
  return (
    <div className="App">
     <div className="GameSpace">
    {nums.map(x=> <GameCell key={x} number={x}  onClick={(num)=> CellClicked(num)}/>) } 
    </div>
    </div>
  );
}



// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(max * Math.random()),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length)];
  },
};

export default App;
