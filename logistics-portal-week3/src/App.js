import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ShipmentTracking from './components/ShipmentTracking';
import WarehouseDashboard from './components/WarehouseDashboard';
import LiveStatusUpdates from './components/LiveStatusUpdates';
import Login from './components/Login';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userRole, setUserRole] = useState('admin'); // Simulated authentication

  const renderView = () => {
    if (!isAuthenticated) {
      return <Login onLogin={() => setIsAuthenticated(true)} />;
    }

    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'shipments':
        return <ShipmentTracking />;
      case 'warehouse':
        return <WarehouseDashboard />;
      case 'live-status':
        return <LiveStatusUpdates />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-600">Logistics Portal</h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentView === 'dashboard' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('shipments')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentView === 'shipments' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Shipments
              </button>
              <button
                onClick={() => setCurrentView('warehouse')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentView === 'warehouse' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Warehouse
              </button>
              <button
                onClick={() => setCurrentView('live-status')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentView === 'live-status' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Live Status
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Admin</span>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderView()}
      </main>
    </div>
  );
}

export default App;