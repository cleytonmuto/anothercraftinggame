import { Recipe } from '../types/game';

export const recipes: Recipe[] = [
  // Refining Recipes
  {
    id: 'refine_iron',
    name: 'Refine Iron Ore',
    description: 'Smelt iron ore into iron ingots',
    category: 'refining',
    inputs: [{ materialId: 'iron_ore', quantity: 3 }],
    output: { materialId: 'iron_ingot', quantity: 1 },
    craftingTime: 5,
    level: 1
  },
  {
    id: 'refine_copper',
    name: 'Refine Copper Ore',
    description: 'Smelt copper ore into copper ingots',
    category: 'refining',
    inputs: [{ materialId: 'copper_ore', quantity: 3 }],
    output: { materialId: 'copper_ingot', quantity: 1 },
    craftingTime: 5,
    level: 1
  },
  {
    id: 'refine_silver',
    name: 'Refine Silver Ore',
    description: 'Smelt silver ore into silver ingots',
    category: 'refining',
    inputs: [{ materialId: 'silver_ore', quantity: 3 }],
    output: { materialId: 'silver_ingot', quantity: 1 },
    craftingTime: 8,
    level: 2
  },
  {
    id: 'refine_gold',
    name: 'Refine Gold Ore',
    description: 'Smelt gold ore into gold ingots',
    category: 'refining',
    inputs: [{ materialId: 'gold_ore', quantity: 3 }],
    output: { materialId: 'gold_ingot', quantity: 1 },
    craftingTime: 10,
    level: 3
  },
  {
    id: 'refine_mithril',
    name: 'Refine Mithril Ore',
    description: 'Smelt mithril ore into mithril ingots',
    category: 'refining',
    inputs: [{ materialId: 'mithril_ore', quantity: 3 }],
    output: { materialId: 'mithril_ingot', quantity: 1 },
    craftingTime: 15,
    level: 5
  },
  {
    id: 'make_steel',
    name: 'Create Steel',
    description: 'Combine iron and coal to make steel',
    category: 'refining',
    inputs: [{ materialId: 'iron_ingot', quantity: 2 }, { materialId: 'copper_ingot', quantity: 1 }],
    output: { materialId: 'steel_ingot', quantity: 1 },
    craftingTime: 12,
    level: 3
  },
  {
    id: 'process_wood',
    name: 'Process Wood',
    description: 'Turn wood into planks',
    category: 'refining',
    inputs: [{ materialId: 'wood', quantity: 2 }],
    output: { materialId: 'planks', quantity: 1 },
    craftingTime: 3,
    level: 1
  },
  {
    id: 'tan_leather',
    name: 'Tan Leather',
    description: 'Process leather into tanned leather',
    category: 'refining',
    inputs: [{ materialId: 'leather', quantity: 2 }],
    output: { materialId: 'tanned_leather', quantity: 1 },
    craftingTime: 4,
    level: 1
  },
  {
    id: 'refine_crystal',
    name: 'Refine Crystal',
    description: 'Refine crystal shards into crystal cores',
    category: 'refining',
    inputs: [{ materialId: 'crystal_shard', quantity: 2 }],
    output: { materialId: 'crystal_core', quantity: 1 },
    craftingTime: 20,
    level: 4
  },
  
  // Component Recipes
  {
    id: 'make_iron_blade',
    name: 'Forge Iron Blade',
    description: 'Forge an iron blade component',
    category: 'crafting',
    inputs: [{ materialId: 'iron_ingot', quantity: 2 }],
    output: { materialId: 'iron_blade', quantity: 1 },
    craftingTime: 8,
    level: 2
  },
  {
    id: 'make_steel_blade',
    name: 'Forge Steel Blade',
    description: 'Forge a steel blade component',
    category: 'crafting',
    inputs: [{ materialId: 'steel_ingot', quantity: 2 }],
    output: { materialId: 'steel_blade', quantity: 1 },
    craftingTime: 12,
    level: 3
  },
  {
    id: 'make_mithril_blade',
    name: 'Forge Mithril Blade',
    description: 'Forge a mithril blade component',
    category: 'crafting',
    inputs: [{ materialId: 'mithril_ingot', quantity: 2 }],
    output: { materialId: 'mithril_blade', quantity: 1 },
    craftingTime: 20,
    level: 5
  },
  {
    id: 'make_wooden_handle',
    name: 'Craft Wooden Handle',
    description: 'Craft a wooden handle',
    category: 'crafting',
    inputs: [{ materialId: 'planks', quantity: 1 }],
    output: { materialId: 'wooden_handle', quantity: 1 },
    craftingTime: 3,
    level: 1
  },
  {
    id: 'make_leather_grip',
    name: 'Craft Leather Grip',
    description: 'Craft a leather grip',
    category: 'crafting',
    inputs: [{ materialId: 'tanned_leather', quantity: 1 }],
    output: { materialId: 'leather_grip', quantity: 1 },
    craftingTime: 4,
    level: 1
  },
  
  // Item Crafting Recipes
  {
    id: 'craft_iron_sword',
    name: 'Craft Iron Sword',
    description: 'Combine iron blade and handle to make a sword',
    category: 'crafting',
    inputs: [{ materialId: 'iron_blade', quantity: 1 }, { materialId: 'wooden_handle', quantity: 1 }],
    output: { itemId: 'iron_sword', quantity: 1 },
    craftingTime: 10,
    level: 2
  },
  {
    id: 'craft_steel_sword',
    name: 'Craft Steel Sword',
    description: 'Combine steel blade and handle to make a sword',
    category: 'crafting',
    inputs: [{ materialId: 'steel_blade', quantity: 1 }, { materialId: 'wooden_handle', quantity: 1 }, { materialId: 'leather_grip', quantity: 1 }],
    output: { itemId: 'steel_sword', quantity: 1 },
    craftingTime: 15,
    level: 3
  },
  {
    id: 'craft_silver_sword',
    name: 'Craft Silver Sword',
    description: 'Combine silver ingot and handle to make a silver sword',
    category: 'crafting',
    inputs: [{ materialId: 'silver_ingot', quantity: 3 }, { materialId: 'wooden_handle', quantity: 1 }, { materialId: 'leather_grip', quantity: 1 }],
    output: { itemId: 'silver_sword', quantity: 1 },
    craftingTime: 18,
    level: 4
  },
  {
    id: 'craft_mithril_sword',
    name: 'Craft Mithril Sword',
    description: 'Combine mithril blade and handle to make a legendary sword',
    category: 'crafting',
    inputs: [{ materialId: 'mithril_blade', quantity: 1 }, { materialId: 'wooden_handle', quantity: 1 }, { materialId: 'leather_grip', quantity: 1 }],
    output: { itemId: 'mithril_sword', quantity: 1 },
    craftingTime: 25,
    level: 5
  },
  {
    id: 'craft_crystal_blade',
    name: 'Craft Crystal Blade',
    description: 'Combine mithril blade and crystal core to make a legendary weapon',
    category: 'crafting',
    inputs: [{ materialId: 'mithril_blade', quantity: 1 }, { materialId: 'crystal_core', quantity: 1 }, { materialId: 'leather_grip', quantity: 1 }],
    output: { itemId: 'crystal_blade', quantity: 1 },
    craftingTime: 30,
    level: 6
  },
  {
    id: 'craft_iron_axe',
    name: 'Craft Iron Axe',
    description: 'Combine iron ingot and handle to make an axe',
    category: 'crafting',
    inputs: [{ materialId: 'iron_ingot', quantity: 2 }, { materialId: 'wooden_handle', quantity: 1 }],
    output: { itemId: 'iron_axe', quantity: 1 },
    craftingTime: 10,
    level: 2
  },
  {
    id: 'craft_iron_dagger',
    name: 'Craft Iron Dagger',
    description: 'Combine iron ingot and handle to make a dagger',
    category: 'crafting',
    inputs: [{ materialId: 'iron_ingot', quantity: 1 }, { materialId: 'wooden_handle', quantity: 1 }],
    output: { itemId: 'iron_dagger', quantity: 1 },
    craftingTime: 8,
    level: 2
  },
  {
    id: 'craft_leather_armor',
    name: 'Craft Leather Armor',
    description: 'Combine tanned leather to make armor',
    category: 'crafting',
    inputs: [{ materialId: 'tanned_leather', quantity: 3 }],
    output: { itemId: 'leather_armor', quantity: 1 },
    craftingTime: 12,
    level: 2
  },
  {
    id: 'craft_iron_armor',
    name: 'Craft Iron Armor',
    description: 'Combine iron ingots to make armor',
    category: 'crafting',
    inputs: [{ materialId: 'iron_ingot', quantity: 5 }, { materialId: 'leather_grip', quantity: 2 }],
    output: { itemId: 'iron_armor', quantity: 1 },
    craftingTime: 20,
    level: 3
  },
  {
    id: 'craft_steel_armor',
    name: 'Craft Steel Armor',
    description: 'Combine steel ingots to make strong armor',
    category: 'crafting',
    inputs: [{ materialId: 'steel_ingot', quantity: 5 }, { materialId: 'leather_grip', quantity: 2 }],
    output: { itemId: 'steel_armor', quantity: 1 },
    craftingTime: 25,
    level: 4
  },
  {
    id: 'craft_mining_pick',
    name: 'Craft Mining Pick',
    description: 'Combine iron ingot and wood to make a mining tool',
    category: 'crafting',
    inputs: [{ materialId: 'iron_ingot', quantity: 2 }, { materialId: 'wood', quantity: 1 }],
    output: { itemId: 'mining_pick', quantity: 1 },
    craftingTime: 8,
    level: 1
  },
];

