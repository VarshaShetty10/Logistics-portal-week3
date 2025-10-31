import React, { useState, useEffect } from 'react';

const ShipmentTracking = () => {
  const [shipments, setShipments] = useState([]);

  // Mock data for shipments
  useEffect(() => {
    const mockShipments = [
      { id: 1, trackingNumber: 'SHP001', status: 'In Transit', origin: 'Warehouse A', destination: 'Store B', estimatedDelivery: '2024-01-20' },
      { id: 2, trackingNumber: 'SHP002', status: 'Delivered', origin: 'Warehouse B', destination: 'Store C', estimatedDelivery: '2024-01-18' },
      { id: 3, trackingNumber: 'SHP003', status: 'Pending', origin: 'Warehouse C', destination: 'Store D', estimatedDelivery: '2024-01-25' },
    ];
    setShipments(mockShipments);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Shipment Tracking</h1>
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Delivery</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shipments.map(shipment => (
              <tr key={shipment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shipment.trackingNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.origin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.estimatedDelivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentTracking;