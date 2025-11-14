export type MaterialType = 'raw' | 'refined' | 'component';

export interface Material {
  id: string;
  name: string;
  type: MaterialType;
  description: string;
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  baseValue: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'weapon' | 'armor' | 'tool' | 'consumable' | 'misc';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  value: number;
  stats?: {
    attack?: number;
    defense?: number;
    durability?: number;
  };
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: 'refining' | 'crafting';
  inputs: Array<{ materialId: string; quantity: number }>;
  output: { itemId?: string; materialId?: string; quantity: number };
  craftingTime: number; // in seconds
  level: number;
}

export interface InventoryItem {
  id: string;
  quantity: number;
  type: 'material' | 'item';
}

