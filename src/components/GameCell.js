import React ,{useState} from 'react';

function GameCell(props) {
    //const [row1,setRow1] = useState(utils.range(0,8));
    
    
      return (
        <div    
        onClick={() =>props.onClick(props.number)} 
        className={props.number === 0 ? 'GameCellZero':'GameCell'}
        style={{cursor:props.isClickable? 'pointer' :'default'}}        
        >
            <span className={props.number === 0 ? 'GameNumberZero':'GameNumber'}>
            {props.number} 
            </span>
        </div>
      );
}

    export default GameCell;
    