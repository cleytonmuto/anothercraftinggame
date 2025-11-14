import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GameProvider, useGame } from './context/GameContext';
import { LoginScreen } from './components/LoginScreen';
import { UserMenu } from './components/UserMenu';
import { MiningPanel } from './components/MiningPanel';
import { RefiningPanel } from './components/RefiningPanel';
import { CraftingPanel } from './components/CraftingPanel';
import { InventoryPanel } from './components/InventoryPanel';
import './App.css';

type Tab = 'mining' | 'refining' | 'crafting' | 'inventory';

function GameApp() {
  const { user, loading } = useAuth();
  const { loading: gameLoading } = useGame();
  const [activeTab, setActiveTab] = useState<Tab>('mining');

  if (loading || gameLoading) {
    return (
      <div className="app">
        <div className="loading-screen">
          <div className="loading-spinner">⚒️</div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>⚒️ Crafting Game</h1>
            <p className="subtitle">Mine, Refine, and Craft Epic Items!</p>
          </div>
          <UserMenu />
        </div>
      </header>

      <nav className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'mining' ? 'active' : ''}`}
          onClick={() => setActiveTab('mining')}
        >
          ⛏️ Mining
        </button>
        <button 
          className={`tab-button ${activeTab === 'refining' ? 'active' : ''}`}
          onClick={() => setActiveTab('refining')}
        >
          🔥 Refining
        </button>
        <button 
          className={`tab-button ${activeTab === 'crafting' ? 'active' : ''}`}
          onClick={() => setActiveTab('crafting')}
        >
          ⚒️ Crafting
        </button>
        <button 
          className={`tab-button ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          🎒 Inventory
        </button>
      </nav>

      <main className="app-content">
        {activeTab === 'mining' && <MiningPanel />}
        {activeTab === 'refining' && <RefiningPanel />}
        {activeTab === 'crafting' && <CraftingPanel />}
        {activeTab === 'inventory' && <InventoryPanel />}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <GameApp />
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
