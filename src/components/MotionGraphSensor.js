import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/MotionGraphSensor.css';

function MotionGraphSensor({ data, selectedRange, onRangeChange }) {
  const ranges = ['Last 3 hours', 'Last 24 hours', 'Last 7 days', 'Last 30 days'];

  return (
    <div className="motion-graph-sensor sensor-graph">
      <h3>Motion Graph Sensor</h3>
      <div className="range-selector">
        {ranges.map((range) => (
          <button
            key={range}
            className={selectedRange === range ? 'active' : ''}
            onClick={() => onRangeChange(range)}
          >
            {range}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data[selectedRange]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="velocity" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MotionGraphSensor;
