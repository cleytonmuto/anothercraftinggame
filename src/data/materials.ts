import { Material } from '../types/game';

export const materials: Material[] = [
  // Raw Materials
  { id: 'iron_ore', name: 'Iron Ore', type: 'raw', description: 'Raw iron ore found in mines', icon: '⛏️', rarity: 'common', baseValue: 5 },
  { id: 'copper_ore', name: 'Copper Ore', type: 'raw', description: 'Raw copper ore found in mines', icon: '⛏️', rarity: 'common', baseValue: 4 },
  { id: 'silver_ore', name: 'Silver Ore', type: 'raw', description: 'Raw silver ore found in mines', icon: '💎', rarity: 'uncommon', baseValue: 15 },
  { id: 'gold_ore', name: 'Gold Ore', type: 'raw', description: 'Raw gold ore found in mines', icon: '💎', rarity: 'rare', baseValue: 30 },
  { id: 'mithril_ore', name: 'Mithril Ore', type: 'raw', description: 'Rare mithril ore with magical properties', icon: '✨', rarity: 'epic', baseValue: 75 },
  { id: 'wood', name: 'Wood', type: 'raw', description: 'Basic wood from trees', icon: '🪵', rarity: 'common', baseValue: 2 },
  { id: 'leather', name: 'Leather', type: 'raw', description: 'Basic leather from animals', icon: '🦌', rarity: 'common', baseValue: 3 },
  { id: 'crystal_shard', name: 'Crystal Shard', type: 'raw', description: 'Magical crystal shard', icon: '💠', rarity: 'rare', baseValue: 50 },
  
  // Refined Materials
  { id: 'iron_ingot', name: 'Iron Ingot', type: 'refined', description: 'Refined iron ingot', icon: '🔩', rarity: 'common', baseValue: 15 },
  { id: 'copper_ingot', name: 'Copper Ingot', type: 'refined', description: 'Refined copper ingot', icon: '🔩', rarity: 'common', baseValue: 12 },
  { id: 'silver_ingot', name: 'Silver Ingot', type: 'refined', description: 'Refined silver ingot', icon: '🔩', rarity: 'uncommon', baseValue: 45 },
  { id: 'gold_ingot', name: 'Gold Ingot', type: 'refined', description: 'Refined gold ingot', icon: '🔩', rarity: 'rare', baseValue: 90 },
  { id: 'mithril_ingot', name: 'Mithril Ingot', type: 'refined', description: 'Refined mithril ingot with magical properties', icon: '✨', rarity: 'epic', baseValue: 225 },
  { id: 'steel_ingot', name: 'Steel Ingot', type: 'refined', description: 'Strong steel ingot', icon: '⚙️', rarity: 'uncommon', baseValue: 40 },
  { id: 'planks', name: 'Planks', type: 'refined', description: 'Processed wooden planks', icon: '🪵', rarity: 'common', baseValue: 6 },
  { id: 'tanned_leather', name: 'Tanned Leather', type: 'refined', description: 'Processed tanned leather', icon: '🦌', rarity: 'common', baseValue: 9 },
  { id: 'crystal_core', name: 'Crystal Core', type: 'refined', description: 'Refined magical crystal core', icon: '💠', rarity: 'rare', baseValue: 150 },
  
  // Components
  { id: 'iron_blade', name: 'Iron Blade', type: 'component', description: 'Basic iron blade component', icon: '⚔️', rarity: 'common', baseValue: 25 },
  { id: 'steel_blade', name: 'Steel Blade', type: 'component', description: 'Strong steel blade component', icon: '⚔️', rarity: 'uncommon', baseValue: 60 },
  { id: 'mithril_blade', name: 'Mithril Blade', type: 'component', description: 'Magical mithril blade component', icon: '✨', rarity: 'epic', baseValue: 300 },
  { id: 'wooden_handle', name: 'Wooden Handle', type: 'component', description: 'Basic wooden handle', icon: '🪵', rarity: 'common', baseValue: 8 },
  { id: 'leather_grip', name: 'Leather Grip', type: 'component', description: 'Leather-wrapped grip', icon: '🦌', rarity: 'common', baseValue: 12 },
];

