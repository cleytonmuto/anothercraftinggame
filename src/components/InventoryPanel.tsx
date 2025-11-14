import { useGame } from '../context/GameContext';
import { materials } from '../data/materials';
import { items } from '../data/items';
import './InventoryPanel.css';

export function InventoryPanel() {
  const { gameState, getMaterial, getItem } = useGame();

  const inventoryArray = Array.from(gameState.inventory.values());

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return '#95a5a6';
      case 'uncommon': return '#2ecc71';
      case 'rare': return '#3498db';
      case 'epic': return '#9b59b6';
      case 'legendary': return '#f39c12';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="inventory-panel">
      <div className="inventory-header">
        <h2>Inventory</h2>
        <div className="player-stats">
          <div className="stat">
            <span className="stat-label">Level:</span>
            <span className="stat-value">{gameState.level}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Gold:</span>
            <span className="stat-value gold">💰 {gameState.gold}</span>
          </div>
          <div className="stat">
            <span className="stat-label">XP:</span>
            <span className="stat-value">{gameState.experience}/{gameState.level * 100}</span>
          </div>
        </div>
      </div>
      
      {inventoryArray.length === 0 ? (
        <div className="empty-inventory">
          <p>Your inventory is empty. Start mining to collect materials!</p>
        </div>
      ) : (
        <div className="inventory-grid">
          {inventoryArray.map(invItem => {
            const material = invItem.type === 'material' ? getMaterial(invItem.id) : null;
            const item = invItem.type === 'item' ? getItem(invItem.id) : null;
            const entity = material || item;
            
            if (!entity) return null;

            return (
              <div 
                key={invItem.id} 
                className="inventory-item"
                style={{ borderColor: getRarityColor(entity.rarity) }}
              >
                <div className="item-icon">{entity.icon}</div>
                <div className="item-info">
                  <div className="item-name">{entity.name}</div>
                  <div className="item-quantity">x{invItem.quantity}</div>
                  {item?.stats && (
                    <div className="item-stats">
                      {item.stats.attack && <span>⚔️ {item.stats.attack}</span>}
                      {item.stats.defense && <span>🛡️ {item.stats.defense}</span>}
                    </div>
                  )}
                </div>
                <div 
                  className="rarity-indicator"
                  style={{ backgroundColor: getRarityColor(entity.rarity) }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

