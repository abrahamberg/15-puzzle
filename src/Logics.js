const Logics ={

    calculateClickabels:(a)=>{
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
      },
      
      switchPlace:(a,num)=>{
        const ind0 = a.indexOf(0); 
        const indNum = a.indexOf(num);
        let newA = [...a];
        newA[ind0] = num;
        newA[indNum] = 0;
      
        return newA;
      },
      
      
      shuffle:(array)=>{
        let randomeMoves = Math.floor(Math.random() * 800) + 300; //Decide how many times you want to shaffle
        let currentArry = [...array];
        for (let i = 0; i < randomeMoves; i++) { 
          let possibleNumbers = Logics.calculateClickabels(currentArry);
          let chosenNo = Logics.randomeToSwap(possibleNumbers);  //chose ramdomly one of options. 
          currentArry = Logics.switchPlace(currentArry,chosenNo); // swap the place of the number with 0
        }
        return currentArry;
      
      },
      
      randomeToSwap:(arry)=>  arry[Math.floor(Math.random()*arry.length)],
      range:(min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

}

export default Logics;