import { useState } from 'react';
import {
  Activity, User, Target, Utensils, Calendar, Trophy, Settings, Menu
} from 'lucide-react';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Activities from './components/Activities';
import Goals from './components/Goals';
import Nutrition from './components/Nutrition';
import Workouts from './components/Workouts';

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: Activity },
  { id: 'activities', name: 'Activities', icon: Calendar },
  { id: 'workouts', name: 'Workouts', icon: Trophy },
  { id: 'nutrition', name: 'Nutrition', icon: Utensils },
  { id: 'goals', name: 'Goals', icon: Target },
  { id: 'profile', name: 'Profile', icon: User },
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'activities': return <Activities />;
      case 'workouts': return <Workouts />;
      case 'nutrition': return <Nutrition />;
      case 'goals': return <Goals />;
      case 'profile': return <Profile />;
      default: return <Dashboard />;
    }
  };

  return (
// Inside your App.jsx return()
<div className="flex min-h-screen bg-gray-50">
  {/* Sidebar */}
  <div className={`transition-all duration-300 ease-in-out bg-white shadow-md 
    ${sidebarOpen ? 'w-64' : 'w-16'} 
    hidden sm:block`}>
    
    <div className="flex items-center justify-center h-16 px-4">
      <div className="flex items-center space-x-3 overflow-hidden">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Activity className="w-5 h-5 text-white" />
        </div>
        {sidebarOpen && <span className="text-xl font-bold text-gray-900">FitTracker</span>}
      </div>
    </div>

    <nav className="mt-4 px-2">
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center w-full px-3 py-2 rounded-lg mb-1 transition-colors duration-200 ${
              activeTab === item.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {sidebarOpen && item.name}
          </button>
        );
      })}
    </nav>
  </div>

  {/* Main Section */}
  <div className="flex-1 flex flex-col">
    {/* Header */}
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center space-x-4">
        {/* Hamburger menu always on top bar */}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-gray-700 sm:block">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800 capitalize">
          {navigation.find(item => item.id === activeTab)?.name}
        </h1>
      </div>
      <div className="flex items-center space-x-3">
        <Settings className="w-5 h-5 text-gray-500" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </header>

    {/* Page Content */}
    <main className="p-4 flex-grow overflow-y-auto">
      {renderActiveComponent()}
    </main>
  </div>
</div>

  );
}

export default App;
