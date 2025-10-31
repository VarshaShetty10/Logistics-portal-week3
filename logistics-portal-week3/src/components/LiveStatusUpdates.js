import React, { useState, useEffect } from 'react';

const LiveStatusUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [isConnected, setIsConnected] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const initialUpdates = [
      {
        id: 1,
        type: 'shipment',
        message: 'Shipment #SHP-001 has left the warehouse',
        timestamp: new Date(Date.now() - 300000).toISOString(), // 5 minutes ago
        priority: 'info'
      },
      {
        id: 2,
        type: 'inventory',
        message: 'Low stock alert: Mechanical Keyboard (SKU: MK002)',
        timestamp: new Date(Date.now() - 600000).toISOString(), // 10 minutes ago
        priority: 'warning'
      },
      {
        id: 3,
        type: 'delivery',
        message: 'Delivery #DEL-123 completed successfully',
        timestamp: new Date(Date.now() - 900000).toISOString(), // 15 minutes ago
        priority: 'success'
      }
    ];

    setUpdates(initialUpdates);

    // Simulate receiving new updates
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        type: ['shipment', 'inventory', 'delivery'][Math.floor(Math.random() * 3)],
        message: `New update: ${['Shipment dispatched', 'Inventory updated', 'Delivery in progress'][Math.floor(Math.random() * 3)]}`,
        timestamp: new Date().toISOString(),
        priority: ['info', 'warning', 'success'][Math.floor(Math.random() * 3)]
      };
      
      setUpdates(prev => [newUpdate, ...prev.slice(0, 9)]); // Keep only last 10 updates
    }, 15000); // New update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'success':
        return '🟢';
      case 'warning':
        return '🟡';
      case 'error':
        return '🔴';
      default:
        return '🔵';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'shipment':
        return '📦';
      case 'inventory':
        return '📊';
      case 'delivery':
        return '🚚';
      default:
        return 'ℹ️';
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const updateTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - updateTime) / 60000);
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return updateTime.toLocaleDateString();
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Live Status Updates</h1>
            <p className="text-gray-600">Real-time monitoring of logistics operations</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">
              {isConnected ? 'Live' : 'Disconnected'}
            </span>
          </div>
        </div>
      </div>

      {/* Updates Feed */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="max-h-96 overflow-y-auto">
          {updates.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No updates available
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {updates.map((update) => (
                <div key={update.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-xl">
                      {getTypeIcon(update.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{getPriorityIcon(update.priority)}</span>
                        <span className="text-sm font-medium text-gray-900 capitalize">
                          {update.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatTime(update.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{update.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <span>Refresh Data</span>
          <span>🔄</span>
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <span>Export Report</span>
          <span>📊</span>
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <span>Settings</span>
          <span>⚙️</span>
        </button>
      </div>

      {/* System Status */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-3">System Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl">📦</div>
            <div className="font-medium">Shipment API</div>
            <div className="text-sm text-green-600">Online</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl">🏭</div>
            <div className="font-medium">Warehouse API</div>
            <div className="text-sm text-green-600">Online</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl">🚚</div>
            <div className="font-medium">Delivery API</div>
            <div className="text-sm text-green-600">Online</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl">📡</div>
            <div className="font-medium">Live Updates</div>
            <div className="text-sm text-green-600">Active</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStatusUpdates;