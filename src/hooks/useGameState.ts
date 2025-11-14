import { useState, useCallback, useEffect, useRef } from 'react';
import { InventoryItem } from '../types/game';
import { materials } from '../data/materials';
import { items } from '../data/items';
import { getGameState, saveGameState, subscribeToGameState } from '../utils/firestore';

export interface GameState {
  inventory: Map<string, InventoryItem>;
  level: number;
  experience: number;
  gold: number;
}

export function useGameState(userId: string | null = null) {
  const [gameState, setGameState] = useState<GameState>({
    inventory: new Map(),
    level: 1,
    experience: 0,
    gold: 100
  });
  const [loading, setLoading] = useState(true);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Load game state from Firestore when user logs in
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    let mounted = true;

    // Load initial state
    getGameState(userId).then((savedState) => {
      if (mounted) {
        if (savedState) {
          setGameState(savedState);
        } else {
          // New user - save initial state
          const initialState: GameState = {
            inventory: new Map(),
            level: 1,
            experience: 0,
            gold: 100
          };
          setGameState(initialState);
          saveGameState(userId, initialState).catch((error) => {
            console.error('Failed to save initial game state:', error);
          });
        }
      }
      setLoading(false);
    });

    // Subscribe to real-time updates
    unsubscribeRef.current = subscribeToGameState(userId, (state) => {
      if (mounted && state) {
        setGameState(state);
      }
    });

    return () => {
      mounted = false;
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [userId]);

  // Debounced save function
  const saveToFirestore = useCallback((state: GameState) => {
    if (!userId) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      saveGameState(userId, state).catch((error) => {
        console.error('Failed to save game state:', error);
      });
    }, 1000); // Debounce saves by 1 second
  }, [userId]);

  const addToInventory = useCallback((id: string, quantity: number, type: 'material' | 'item') => {
    setGameState(prev => {
      const newInventory = new Map(prev.inventory);
      const existing = newInventory.get(id);
      
      if (existing) {
        newInventory.set(id, { ...existing, quantity: existing.quantity + quantity });
      } else {
        newInventory.set(id, { id, quantity, type });
      }
      
      const newState = { ...prev, inventory: newInventory };
      saveToFirestore(newState);
      return newState;
    });
  }, [saveToFirestore]);

  const removeFromInventory = useCallback((id: string, quantity: number) => {
    setGameState(prev => {
      const newInventory = new Map(prev.inventory);
      const existing = newInventory.get(id);
      
      if (existing) {
        const newQuantity = existing.quantity - quantity;
        if (newQuantity <= 0) {
          newInventory.delete(id);
        } else {
          newInventory.set(id, { ...existing, quantity: newQuantity });
        }
      }
      
      const newState = { ...prev, inventory: newInventory };
      saveToFirestore(newState);
      return newState;
    });
  }, [saveToFirestore]);

  const hasEnoughMaterials = useCallback((requirements: Array<{ materialId: string; quantity: number }>) => {
    return requirements.every(req => {
      const item = gameState.inventory.get(req.materialId);
      return item && item.quantity >= req.quantity;
    });
  }, [gameState.inventory]);

  const getInventoryItem = useCallback((id: string) => {
    return gameState.inventory.get(id);
  }, [gameState.inventory]);

  const getMaterial = useCallback((id: string) => {
    return materials.find(m => m.id === id);
  }, []);

  const getItem = useCallback((id: string) => {
    return items.find(i => i.id === id);
  }, []);

  const addGold = useCallback((amount: number) => {
    setGameState(prev => {
      const newState = { ...prev, gold: prev.gold + amount };
      saveToFirestore(newState);
      return newState;
    });
  }, [saveToFirestore]);

  const removeGold = useCallback((amount: number) => {
    setGameState(prev => {
      const newState = { ...prev, gold: Math.max(0, prev.gold - amount) };
      saveToFirestore(newState);
      return newState;
    });
  }, [saveToFirestore]);

  const addExperience = useCallback((amount: number) => {
    setGameState(prev => {
      const newExp = prev.experience + amount;
      const expForNextLevel = prev.level * 100;
      
      let newState: GameState;
      if (newExp >= expForNextLevel) {
        newState = {
          ...prev,
          experience: newExp - expForNextLevel,
          level: prev.level + 1
        };
      } else {
        newState = { ...prev, experience: newExp };
      }
      
      saveToFirestore(newState);
      return newState;
    });
  }, [saveToFirestore]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return {
    gameState,
    loading,
    addToInventory,
    removeFromInventory,
    hasEnoughMaterials,
    getInventoryItem,
    getMaterial,
    getItem,
    addGold,
    removeGold,
    addExperience
  };
}

