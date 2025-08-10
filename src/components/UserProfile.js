// UserProfile.js
import React, { useState, useEffect } from 'react';
import { LogOut, Settings as SettingsIcon } from 'lucide-react';
import { useAuth } from './AuthProvider';

export const UserProfile = ({ compact = false }) => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (user) {
      // Generate a consistent seed from user's email or name
      const seed = user.email || user.displayName || Math.random().toString();
      // Using DiceBear's bottts style for anime-like avatars
      const url = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${encodeURIComponent(seed)}&size=80&backgroundType=gradientLinear`;
      setAvatarUrl(url);
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    setShowMenu(false);
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors w-full text-left"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt="User avatar" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${Math.random()}`;
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          )}
        </div>
        {!compact && (
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">{user.displayName || 'User'}</p>
            <p className="text-gray-400 text-xs truncate">{user.email}</p>
          </div>
        )}
      </button>

      {showMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
          <div className="absolute bottom-full left-0 mb-2 w-64 bg-gray-800 rounded-xl border border-gray-600 shadow-2xl z-50 overflow-hidden">
            <div className="p-4 border-b border-gray-600">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {avatarUrl ? (
                    <img 
                      src={avatarUrl} 
                      alt="User avatar" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 animate-pulse"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{user.displayName || 'User'}</p>
                  <p className="text-gray-400 text-sm truncate">{user.email}</p>
                </div>
              </div>
            </div>
            
            <div className="py-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-white/10 transition-colors">
                <SettingsIcon className="w-4 h-4" />
                <span>Settings</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-2 text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};