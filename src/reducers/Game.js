import * as types from '../constants/ActionTypes'

const game = (state = [], action) => {
    switch (action.type) {
        case types.CHANGE_GAME_STATE:
            return [
                ...state,
                {
                    GameState: action.GameState
                }
            ];
        default:
            return state;
    }
};

export default game;
