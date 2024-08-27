import React, { useState } from 'react';
import MotionGraphSensor from './MotionGraphSensor';
import LatencySensorGraph from './LatencySensorGraph';
import BatterySensorGraph from './BatterySensorGraph';
import InternetSensorGraph from './InternetSensorGraph';  // Import the new component
import mockData from '../data/mockData';
import '../styles/Dashboard.css';

function Dashboard() {
  const [selectedRange, setSelectedRange] = useState('Last 3 hours');

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <div className="dashboard">
      <MotionGraphSensor
        data={mockData['Motion Graph Sensor']}
        selectedRange={selectedRange}
        onRangeChange={handleRangeChange}
      />
      <LatencySensorGraph
        data={mockData['Latency Sensor Graph']}
        selectedRange={selectedRange}
        onRangeChange={handleRangeChange}
      />
      <BatterySensorGraph
        data={mockData['Battery Graph Sensor']}
        selectedRange={selectedRange}
        onRangeChange={handleRangeChange}
      />
      <InternetSensorGraph  // Add the new component here
        data={mockData['Internet Sensor Graph']}
        selectedRange={selectedRange}
        onRangeChange={handleRangeChange}
      />
    </div>
  );
}

export default Dashboard;
