import React from 'react';

const latestNews = [
  {
    id: 1,
    title: 'Breaking: Major Tech Merger Announced',
    time: '1 minute ago'
  },
  {
    id: 2,
    title: 'Olympic Committee Reveals 2030 Host City',
    time: '3 minutes ago'
  },
  {
    id: 3,
    title: 'Renewable Energy Breakthrough in Solar Efficiency',
    time: '5 minutes ago'
  },
  {
    id: 4,
    title: 'Global Markets React to Federal Reserve Decision',
    time: '7 minutes ago'
  },
  {
    id: 5,
    title: 'New Cancer Treatment Shows Promising Results',
    time: '10 minutes ago'
  },
  {
    id: 6,
    title: 'Space Agency Discovers Earth-like Exoplanet',
    time: '12 minutes ago'
  },
  {
    id: 7,
    title: 'Major Sports League Expansion Announced',
    time: '15 minutes ago'
  }
];

export default function LatestNewsSidebar() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-red-600">Latest Updates</h2>
      <div className="space-y-4">
        {latestNews.map((news) => (
          <div 
            key={news.id} 
            className="animate-[flash_2s_ease-in-out_infinite] hover:bg-gray-200 p-2 rounded cursor-pointer transition-colors"
          >
            <h3 className="font-medium">{news.title}</h3>
            <span className="text-sm text-gray-500">{news.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
