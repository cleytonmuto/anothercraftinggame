import { createContext, useContext, ReactNode } from 'react';
import { useGameState } from '../hooks/useGameState';
import { useAuth } from './AuthContext';

const GameContext = createContext<ReturnType<typeof useGameState> | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const gameState = useGameState(user?.uid || null);
  return <GameContext.Provider value={gameState}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
}

