import React, { useState } from "react";
import GameCell from "./GameCell.js";
import Logics from "../Logics.js";

const MainGame = gameState => {
  const [nums, setNums] = useState(Logics.shuffle([...Logics.range(1, 15), 0])); //create a arry from 1 to 15 and 0 and shuffle it
  const clickabels = Logics.calculateClickabels(nums); //calculate which cells are playable arry of cell numbers
  const CellClicked = cellClicked => {
    if (clickabels.includes(cellClicked))
      setNums(Logics.switchPlace(nums, cellClicked));
  };
  return (
    <div className="MainGame">
      <div className="GameSpace">
        {nums.map(CellNo => (
          <GameCell
            key={CellNo}
            number={CellNo}
            isClickable={clickabels.includes(CellNo)}
            onClick={CellClicked}
          />
        ))}
      </div>
    </div>
  );
};

export default MainGame;
