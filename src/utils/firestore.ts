import { doc, getDoc, setDoc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { db } from '../config/firebase';
import { GameState, InventoryItem } from '../types/game';

// Convert Map to object for Firestore
export function inventoryMapToObject(inventory: Map<string, InventoryItem>): Record<string, InventoryItem> {
  const obj: Record<string, InventoryItem> = {};
  inventory.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
}

// Convert object to Map from Firestore
export function inventoryObjectToMap(obj: Record<string, InventoryItem>): Map<string, InventoryItem> {
  const map = new Map<string, InventoryItem>();
  Object.entries(obj).forEach(([key, value]) => {
    map.set(key, value);
  });
  return map;
}

// Convert GameState to Firestore format
export function gameStateToFirestore(state: GameState) {
  return {
    inventory: inventoryMapToObject(state.inventory),
    level: state.level,
    experience: state.experience,
    gold: state.gold,
    lastUpdated: new Date().toISOString(),
  };
}

// Convert Firestore data to GameState
export function firestoreToGameState(data: any): GameState {
  return {
    inventory: data.inventory ? inventoryObjectToMap(data.inventory) : new Map(),
    level: data.level || 1,
    experience: data.experience || 0,
    gold: data.gold || 100,
  };
}

// Get user's game state from Firestore
export async function getGameState(userId: string): Promise<GameState | null> {
  try {
    const docRef = doc(db, 'gameStates', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return firestoreToGameState(docSnap.data());
    }
    return null;
  } catch (error) {
    console.error('Error getting game state:', error);
    return null;
  }
}

// Save game state to Firestore
export async function saveGameState(userId: string, state: GameState): Promise<void> {
  try {
    const docRef = doc(db, 'gameStates', userId);
    await setDoc(docRef, gameStateToFirestore(state), { merge: true });
  } catch (error) {
    console.error('Error saving game state:', error);
    throw error;
  }
}

// Subscribe to game state changes
export function subscribeToGameState(
  userId: string,
  callback: (state: GameState | null) => void
): Unsubscribe {
  const docRef = doc(db, 'gameStates', userId);
  
  return onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback(firestoreToGameState(docSnap.data()));
      } else {
        callback(null);
      }
    },
    (error) => {
      console.error('Error subscribing to game state:', error);
      callback(null);
    }
  );
}

