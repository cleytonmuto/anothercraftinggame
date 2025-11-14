import { useState, useEffect } from 'react';
import { materials } from '../data/materials';
import { useGame } from '../context/GameContext';
import './MiningPanel.css';

const mineableMaterials = materials.filter(m => m.type === 'raw');

interface MiningNode {
  id: string;
  materialId: string;
  remaining: number;
  respawnTime: number;
}

export function MiningPanel() {
  const { addToInventory, addExperience } = useGame();
  const [miningNodes, setMiningNodes] = useState<MiningNode[]>(() => 
    mineableMaterials.map((m, i) => ({
      id: `node_${i}`,
      materialId: m.id,
      remaining: 5,
      respawnTime: 0
    }))
  );
  const [miningProgress, setMiningProgress] = useState<Map<string, number>>(new Map());
  const [isMining, setIsMining] = useState<Map<string, boolean>>(new Map());

  useEffect(() => {
    const interval = setInterval(() => {
      setMiningNodes(prev => prev.map(node => ({
        ...node,
        respawnTime: node.respawnTime > 0 ? node.respawnTime - 1 : 0,
        remaining: node.respawnTime === 1 ? 5 : node.remaining
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startMining = (nodeId: string) => {
    const node = miningNodes.find(n => n.id === nodeId);
    if (!node || node.remaining === 0 || node.respawnTime > 0) return;
    if (isMining.get(nodeId)) return;

    setIsMining(prev => new Map(prev).set(nodeId, true));
    setMiningProgress(prev => new Map(prev).set(nodeId, 0));

    const miningTime = 3000; // 3 seconds
    const interval = 100;
    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += interval;
      setMiningProgress(prev => new Map(prev).set(nodeId, (progress / miningTime) * 100));

      if (progress >= miningTime) {
        clearInterval(progressInterval);
        setIsMining(prev => {
          const newMap = new Map(prev);
          newMap.delete(nodeId);
          return newMap;
        });
        setMiningProgress(prev => {
          const newMap = new Map(prev);
          newMap.delete(nodeId);
          return newMap;
        });

        // Add material to inventory
        const material = materials.find(m => m.id === node.materialId);
        if (material) {
          const quantity = 1 + Math.floor(Math.random() * 2); // 1-2 materials
          addToInventory(node.materialId, quantity, 'material');
          addExperience(5);

          // Update node
          setMiningNodes(prev => prev.map(n => 
            n.id === nodeId 
              ? { ...n, remaining: n.remaining - 1, respawnTime: n.remaining === 1 ? 30 : 0 }
              : n
          ));
        }
      }
    }, interval);
  };

  return (
    <div className="mining-panel">
      <h2>Mining & Gathering</h2>
      <div className="mining-nodes">
        {miningNodes.map(node => {
          const material = materials.find(m => m.id === node.materialId);
          if (!material) return null;

          const mining = isMining.get(node.id);
          const progress = miningProgress.get(node.id) || 0;
          const canMine = node.remaining > 0 && node.respawnTime === 0 && !mining;

          return (
            <div key={node.id} className={`mining-node ${!canMine ? 'disabled' : ''}`}>
              <div className="node-icon">{material.icon}</div>
              <div className="node-info">
                <div className="node-name">{material.name}</div>
                <div className="node-stats">
                  <span>Remaining: {node.remaining}</span>
                  {node.respawnTime > 0 && (
                    <span className="respawn-timer">Respawn: {node.respawnTime}s</span>
                  )}
                </div>
              </div>
              {mining && (
                <div className="mining-progress-bar">
                  <div 
                    className="mining-progress-fill" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
              <button 
                onClick={() => startMining(node.id)} 
                disabled={!canMine}
                className="mine-button"
              >
                {mining ? 'Mining...' : node.respawnTime > 0 ? 'Respawn...' : 'Mine'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

