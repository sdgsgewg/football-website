export default function playerReducer(state, action) {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        ...state,
        players: action.payload,
      };
    case "ADD_PLAYER":
      return { ...state, players: [...state.players, action.payload] };
    case "REMOVE_PLAYER":
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };
    case "UPDATE_PLAYER":
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.id ? action.payload : player
        ),
      };
    default:
      return state;
  }
}
