import React from 'react';

const Dashboard = () => {
  const quickStats = [
    { title: 'Active Shipments', value: '12', color: 'blue', icon: '📦' },
    { title: 'Warehouse Items', value: '245', color: 'green', icon: '🏭' },
    { title: 'Pending Deliveries', value: '8', color: 'yellow', icon: '🚚' },
    { title: 'Today\'s Updates', value: '23', color: 'purple', icon: '📊' },
  ];

  const recentActivities = [
    { action: 'New shipment created', time: '2 min ago', user: 'Admin' },
    { action: 'Inventory updated', time: '15 min ago', user: 'Warehouse Manager' },
    { action: 'Delivery completed', time: '1 hour ago', user: 'Driver' },
    { action: 'Low stock alert', time: '3 hours ago', user: 'System' },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome to your logistics management portal</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => window.location.href = '#shipments'}
              className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
            >
              <div className="text-2xl mb-2">📦</div>
              <div className="font-medium">Track Shipment</div>
            </button>
            <button 
              onClick={() => window.location.href = '#warehouse'}
              className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center"
            >
              <div className="text-2xl mb-2">🏭</div>
              <div className="font-medium">View Inventory</div>
            </button>
            <button 
              onClick={() => window.location.href = '#live-status'}
              className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-center"
            >
              <div className="text-2xl mb-2">📡</div>
              <div className="font-medium">Live Updates</div>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-medium">Reports</div>
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-4">System Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <div className="font-medium">API Services</div>
            <div className="text-sm text-gray-600">All Systems Operational</div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <div className="font-medium">Database</div>
            <div className="text-sm text-gray-600">Connected</div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <div className="font-medium">Live Updates</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <div className="font-medium">Security</div>
            <div className="text-sm text-gray-600">Protected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;