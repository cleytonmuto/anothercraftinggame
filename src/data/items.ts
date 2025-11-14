import { Item } from '../types/game';

export const items: Item[] = [
  // Weapons
  {
    id: 'iron_sword',
    name: 'Iron Sword',
    description: 'A basic iron sword',
    icon: '🗡️',
    category: 'weapon',
    rarity: 'common',
    value: 50,
    stats: { attack: 10, durability: 50 }
  },
  {
    id: 'steel_sword',
    name: 'Steel Sword',
    description: 'A strong steel sword',
    icon: '⚔️',
    category: 'weapon',
    rarity: 'uncommon',
    value: 150,
    stats: { attack: 25, durability: 75 }
  },
  {
    id: 'silver_sword',
    name: 'Silver Sword',
    description: 'A silver sword effective against undead',
    icon: '🗡️',
    category: 'weapon',
    rarity: 'rare',
    value: 300,
    stats: { attack: 40, durability: 80 }
  },
  {
    id: 'mithril_sword',
    name: 'Mithril Sword',
    description: 'A legendary mithril sword with magical properties',
    icon: '✨',
    category: 'weapon',
    rarity: 'epic',
    value: 800,
    stats: { attack: 75, durability: 100 }
  },
  {
    id: 'crystal_blade',
    name: 'Crystal Blade',
    description: 'A magical crystal-infused blade',
    icon: '💠',
    category: 'weapon',
    rarity: 'legendary',
    value: 1500,
    stats: { attack: 100, durability: 120 }
  },
  {
    id: 'iron_axe',
    name: 'Iron Axe',
    description: 'A basic iron axe',
    icon: '🪓',
    category: 'weapon',
    rarity: 'common',
    value: 45,
    stats: { attack: 12, durability: 45 }
  },
  {
    id: 'iron_dagger',
    name: 'Iron Dagger',
    description: 'A quick iron dagger',
    icon: '🗡️',
    category: 'weapon',
    rarity: 'common',
    value: 35,
    stats: { attack: 8, durability: 40 }
  },
  
  // Armor
  {
    id: 'leather_armor',
    name: 'Leather Armor',
    description: 'Basic leather protection',
    icon: '🛡️',
    category: 'armor',
    rarity: 'common',
    value: 60,
    stats: { defense: 8, durability: 50 }
  },
  {
    id: 'iron_armor',
    name: 'Iron Armor',
    description: 'Sturdy iron armor',
    icon: '🛡️',
    category: 'armor',
    rarity: 'uncommon',
    value: 200,
    stats: { defense: 20, durability: 70 }
  },
  {
    id: 'steel_armor',
    name: 'Steel Armor',
    description: 'Strong steel armor',
    icon: '🛡️',
    category: 'armor',
    rarity: 'rare',
    value: 500,
    stats: { defense: 35, durability: 85 }
  },
  
  // Tools
  {
    id: 'mining_pick',
    name: 'Mining Pick',
    description: 'A tool for mining ores',
    icon: '⛏️',
    category: 'tool',
    rarity: 'common',
    value: 30,
    stats: { durability: 100 }
  },
];

