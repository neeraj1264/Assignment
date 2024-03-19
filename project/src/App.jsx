import React, { useState } from 'react';
import TimelineMindmap from './component/TimelineMindmap';
import './App.css'
const App = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const timelineData = [
    {
      key: '1',
      title: ' Research',
      description: 'This phase involves conducting research to gather information.',
      children: [
        {
          key: '2',
          title: 'External',
          description: 'This phase involves conducting research to gather information.',
          children: [
            {
              key: '3',
              title: 'B2C',
              description: 'This phase involves conducting research to gather information.',
              children: [
                {
                  key: '18',
                  title: 'online',
                  description: 'This phase involves conducting research to gather information.',
                },
                {
                  key: '19',
                  title: 'Interview ',
                  description: 'This phase involves conducting research to gather information.',
                },
                {
                  key: '20',
                  title: 'Public data',
                  description: 'This phase involves conducting research to gather information.',
                },
                {
                  key: '21',
                  title: 'Health',
                  description: 'This phase involves conducting research to gather information.',
                },
              ],
            },
            {
              key: '4',
              title: 'B2C',
              description: 'This phase involves conducting research to gather information.',
            },
          ],
        },
        {
          key: '5',
          title: 'Internal',
          description: 'This phase involves conducting research to gather information.',
        },
      ],
    },
    {
      key: '6',
      title: ' Planning',
      description: 'This phase involves conducting research to gather information.',
      children: [
        {
          key: '7',
          title: 'PRD',
          description: 'This phase involves conducting research to gather information.',
        },
        {
          key: '8',
          title: 'Specs',
          description: 'This phase involves conducting research to gather information.',
        },
      ],
    },
    {
      key: '9',
      title: 'Designing',
      description: 'This phase involves conducting research to gather information.',
      children: [
        {
          key: '10',
          title: 'Hardware',
          description: 'This phase involves conducting research to gather information.',
        },
        {
          key: '11',
          title: 'Software',
          description: 'This phase involves conducting research to gather information.',
        },
      ],
    },
    {
      key: '12',
      title: 'Manufacturing',
      description: 'This phase involves conducting research to gather information.',
      children: [
        {
          key: '13',
          title: 'Material',
          description: 'This phase involves conducting research to gather information.',
        },
        {
          key: '14',
          title: 'Production',
          description: 'This phase involves conducting research to gather information.',
        },
      ],
    }, {
      key: '15',
      title: 'Sales/Marketing',
      description: 'This phase involves conducting research to gather information.',
      children: [
        {
          key: '16',
          title: 'Online',
          description: 'This phase involves conducting research to gather information.',
        },
        {
          key: '17',
          title: 'DealerShip',
          description: 'This phase involves conducting research to gather information.',
        },
      ],
    },
  ];
  return (
    <div className="app-container">
      <TimelineMindmap 
        data={timelineData} 
      />

    </div>
  );
};

export default App;