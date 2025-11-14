import { useState } from 'react';
import { recipes } from '../data/recipes';
import { useGame } from '../context/GameContext';
import './RefiningPanel.css';

const refiningRecipes = recipes.filter(r => r.category === 'refining');

export function RefiningPanel() {
  const { gameState, hasEnoughMaterials, removeFromInventory, addToInventory, addExperience, getMaterial } = useGame();
  const [activeRefining, setActiveRefining] = useState<Map<string, number>>(new Map());

  const startRefining = (recipeId: string) => {
    const recipe = refiningRecipes.find(r => r.id === recipeId);
    if (!recipe) return;

    if (!hasEnoughMaterials(recipe.inputs)) {
      alert('Not enough materials!');
      return;
    }

    if (activeRefining.has(recipeId)) {
      alert('Already refining this item!');
      return;
    }

    // Remove materials
    recipe.inputs.forEach(input => {
      removeFromInventory(input.materialId, input.quantity);
    });

    // Start refining timer
    setActiveRefining(prev => new Map(prev).set(recipeId, recipe.craftingTime));

    const interval = setInterval(() => {
      setActiveRefining(prev => {
        const newMap = new Map(prev);
        const current = newMap.get(recipeId);
        
        if (current && current > 1) {
          newMap.set(recipeId, current - 1);
          return newMap;
        } else {
          // Refining complete
          newMap.delete(recipeId);
          clearInterval(interval);
          
          // Add output to inventory
          if (recipe.output.materialId) {
            addToInventory(recipe.output.materialId, recipe.output.quantity, 'material');
          }
          addExperience(recipe.level * 5);
          
          return newMap;
        }
      });
    }, 1000);
  };

  return (
    <div className="refining-panel">
      <h2>Refining</h2>
      <div className="recipes-grid">
        {refiningRecipes.map(recipe => {
          const timeRemaining = activeRefining.get(recipe.id) || 0;
          const canCraft = hasEnoughMaterials(recipe.inputs) && timeRemaining === 0;

          return (
            <div key={recipe.id} className={`recipe-card ${!canCraft ? 'disabled' : ''}`}>
              <div className="recipe-header">
                <h3>{recipe.name}</h3>
                <div className="recipe-level">Lv. {recipe.level}</div>
              </div>
              <p className="recipe-description">{recipe.description}</p>
              
              <div className="recipe-inputs">
                <div className="recipe-label">Required:</div>
                {recipe.inputs.map(input => {
                  const material = getMaterial(input.materialId);
                  const hasEnough = gameState.inventory.get(input.materialId)?.quantity || 0;
                  return (
                    <div key={input.materialId} className={`recipe-item ${hasEnough >= input.quantity ? 'has-enough' : 'missing'}`}>
                      <span>{material?.icon} {material?.name}</span>
                      <span>{hasEnough}/{input.quantity}</span>
                    </div>
                  );
                })}
              </div>

              <div className="recipe-output">
                <div className="recipe-label">Output:</div>
                {recipe.output.materialId && (
                  <div className="recipe-item">
                    {(() => {
                      const material = getMaterial(recipe.output.materialId!);
                      return (
                        <>
                          <span>{material?.icon} {material?.name}</span>
                          <span>x{recipe.output.quantity}</span>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>

              {timeRemaining > 0 ? (
                <div className="refining-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${((recipe.craftingTime - timeRemaining) / recipe.craftingTime) * 100}%` }}
                    />
                  </div>
                  <div className="progress-text">{timeRemaining}s remaining</div>
                </div>
              ) : (
                <button 
                  onClick={() => startRefining(recipe.id)} 
                  disabled={!canCraft}
                  className="craft-button"
                >
                  Start Refining
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

