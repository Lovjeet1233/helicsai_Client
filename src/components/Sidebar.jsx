import React from 'react';

import { 
  BarChart3, 
  Calendar, 
  Users, 
  Sparkles, 
  Target, 
  TrendingUp,
  Palette,
  Sword
} from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'brand-analysis', name: 'Brand Analysis', icon: Palette },
    { id: 'competitors', name: 'Competitors', icon: Target },
    { id: 'strategy', name: 'Strategy', icon: TrendingUp },
    { id: 'calendar', name: 'Calendar', icon: Calendar },
    { id: 'content-generator', name: 'Content Generator', icon: Sparkles },
    { id: 'war-mode', name: 'War Mode', icon: Sword, special: true },
    { id: 'team', name: 'Team', icon: Users }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-poppins">Helics.ai</h1>
            <p className="text-xs text-gray-400">AI Marketing Platform</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentView === item.id 
                  ? item.special 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' 
                    : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                  : 'hover:bg-gray-800 text-gray-300 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
              {item.special && !currentView.includes(item.id) && (
                <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-4">
          <h3 className="font-semibold text-sm mb-2">Upgrade to Pro</h3>
          <p className="text-xs text-gray-400 mb-3">Get unlimited AI generations and advanced analytics</p>
          <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;