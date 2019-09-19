import React ,{useEffect,useState} from 'react';



let maxSecs = 3;


function TimePassed(props) {
    const [secondsPased, setSecondsPased] = useState(0);
    
    useEffect(() => {
        if (secondsPased < maxSecs ) {
        const timerId = setTimeout(() => {
            setSecondsPased(secondsPased + 1);
        }, 1000);
          return () => clearTimeout(timerId);
        }
    });  

    if(secondsPased === maxSecs){
        props.onTimeLimitReached();
    }
  

    return (
        <h3>{secondsPased} passed</h3>
    );
  }
  
  
  export default TimePassed;