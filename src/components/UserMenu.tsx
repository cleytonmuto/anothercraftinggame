import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import './UserMenu.css';

export function UserMenu() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="user-menu" ref={menuRef}>
      <button 
        className="user-button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img 
          src={user.photoURL || undefined} 
          alt={user.displayName || 'User'} 
          className="user-avatar"
        />
        <span className="user-name">{user.displayName || user.email}</span>
        <span className="dropdown-arrow">▼</span>
      </button>
      {showMenu && (
        <div className="user-menu-dropdown">
          <div className="user-info">
            <img 
              src={user.photoURL || undefined} 
              alt={user.displayName || 'User'} 
              className="user-avatar-large"
            />
            <div className="user-details">
              <div className="user-display-name">{user.displayName || 'User'}</div>
              <div className="user-email">{user.email}</div>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

