import * as types from '../constants/ActionTypes'

export const resetGame = GameState => ({
    type: types.GAME_RESET,
    GameState
});

