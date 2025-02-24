import { createContext, useReducer, useMemo } from "react";
import playerReducer from "./PlayerReducer";
import menPlayerEntries from "../data/arsenal/menPlayerEntries";

// Initial State
const initialState = {
  players: menPlayerEntries
};

// Create Context
export const PlayerContext = createContext(initialState);

// Provider Component
export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Actions
  function setPlayers(players) {
    dispatch({ type: "SET_PLAYERS", payload: players });
  }

  function addPlayer(player) {
    dispatch({ type: "ADD_PLAYER", payload: player });
  }

  function removePlayer(id) {
    dispatch({ type: "REMOVE_PLAYER", payload: id });
  }

  function updatePlayer(updatedPlayer) {
    dispatch({ type: "UPDATE_PLAYER", payload: updatedPlayer });
  }

  // Memoizing the context value to optimize performance
  const value = useMemo(() => ({
    players: state.players,
    setPlayers,
    addPlayer,
    removePlayer,
    updatePlayer,
  }), [state.players]);

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};
