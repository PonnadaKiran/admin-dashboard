const mockData = {
    'Internet Sensor Graph': {
      'Last 3 hours': [{ time: '01:00', value: 100 }, { time: '02:00', value: 120 }, { time: '03:00', value: 80 }],
      'Last 24 hours': [{ time: '01:00', value: 90 }, { time: '02:00', value: 110 }, { time: '03:00', value: 100 }],
      'Last 7 days': [{ time: '2024-07-03', value: 100 }, { time: '2024-07-04', value: 120 }, { time: '2024-07-05', value: 80 }],
      'Last 30 days': [{ time: '2024-06-03', value: 90 }, { time: '2024-06-10', value: 110 }, { time: '2024-06-17', value: 100 }]
    },
    'Motion Graph Sensor': {
    'Last 3 hours': [
      { time: '01:00', value: 50 },
      { time: '02:00', value: 60 },
      { time: '03:00', value: 40 },
    ],
    'Last 24 hours': [
      { time: '01:00', value: 30 },
      { time: '06:00', value: 80 },
      { time: '12:00', value: 50 },
      { time: '18:00', value: 90 },
      { time: '23:00', value: 40 },
    ],
    'Last 7 days': [
      { time: '2024-07-03', value: 70 },
      { time: '2024-07-04', value: 30 },
      { time: '2024-07-05', value: 60 },
      { time: '2024-07-06', value: 90 },
      { time: '2024-07-07', value: 40 },
    ],
  },
  'Latency Sensor Graph': {
    'Last 3 hours': [
      { time: '22:00', value: 20 },
      { time: '23:00', value: 40 },
      { time: '00:00', value: 50 },
    ],
    'Last 24 hours': [
      { time: '01:00', value: 60 },
      { time: '06:00', value: 30 },
      { time: '12:00', value: 70 },
      { time: '18:00', value: 20 },
      { time: '23:00', value: 90 },
    ],
    'Last 7 days': [
      { time: '2024-07-03', value: 100 },
      { time: '2024-07-04', value: 80 },
      { time: '2024-07-05', value: 60 },
      { time: '2024-07-06', value: 40 },
      { time: '2024-07-07', value: 20 },
    ],
  },
  'Battery Graph Sensor': {
    'Last 3 hours': [
      { time: '22:00', value: 70 },
      { time: '23:00', value: 60 },
      { time: '00:00', value: 50 },
    ],
    'Last 24 hours': [
      { time: '01:00', value: 100 },
      { time: '06:00', value: 90 },
      { time: '12:00', value: 80 },
      { time: '18:00', value: 70 },
      { time: '23:00', value: 60 },
    ],
    'Last 7 days': [
      { time: '2024-07-03', value: 50 },
      { time: '2024-07-04', value: 60 },
      { time: '2024-07-05', value: 70 },
      { time: '2024-07-06', value: 80 },
      { time: '2024-07-07', value: 90 },
    ],
  },
  };
  
  export default mockData;
  