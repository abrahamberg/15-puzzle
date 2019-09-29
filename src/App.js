import React, { useState } from "react";
import MainGame from "./components/MainGame.js";
import TimePassed from "./components/TimePassed";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";

const rootReducer = (state = {}, action) => {
  return state;
};
const store = createStore(rootReducer);

function App() {
  const [gameOver, SetGameOver] = useState(false);
  const timeLimitReaached = () => {
    SetGameOver(true);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <h1>15-puzzle</h1>
        {!gameOver ? <MainGame /> : <span>game Over</span>}
        <TimePassed onTimeLimitReached={() => timeLimitReaached()} />
      </div>
    </Provider>
  );
}

export default App;
