import React from 'react';
import NewsCard from '../components/NewsCard';
import BreakingNews from '../components/BreakingNews';
import LatestNewsSidebar from '../components/LatestNewsSidebar';

const mockNews = [
  {
    id: 1,
    title: 'AI Revolution in Healthcare',
    description: 'New AI-powered diagnostic tools show 99% accuracy in early disease detection, promising a breakthrough in preventive medicine.',
    image: 'https://picsum.photos/800/400',
    date: '2023-12-20'
  },
  {
    id: 2,
    title: 'Global Climate Summit Results',
    description: 'World leaders agree on ambitious new carbon reduction targets, with major economies pledging significant investments in renewable energy.',
    image: 'https://picsum.photos/800/401',
    date: '2023-12-20'
  },
  {
    id: 3,
    title: 'Space Tourism Milestone',
    description: 'First commercial space hotel announces opening date for 2024, marking a new era in space tourism and orbital hospitality.',
    image: 'https://picsum.photos/800/402',
    date: '2023-12-20'
  },
  {
    id: 4,
    title: 'Cryptocurrency Market Surge',
    description: 'Bitcoin reaches new all-time high as institutional investors increase their digital asset holdings.',
    image: 'https://picsum.photos/800/403',
    date: '2023-12-20'
  },
  {
    id: 5,
    title: 'Breakthrough in Quantum Computing',
    description: 'Scientists achieve quantum supremacy with new 1000-qubit processor, opening doors for revolutionary computing applications.',
    image: 'https://picsum.photos/800/404',
    date: '2023-12-19'
  },
  {
    id: 6,
    title: 'Electric Vehicle Innovation',
    description: 'New battery technology promises 1000-mile range on a single charge, potentially revolutionizing the EV industry.',
    image: 'https://picsum.photos/800/405',
    date: '2023-12-19'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <BreakingNews />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold mb-8">Latest News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockNews.map(news => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/4">
          <LatestNewsSidebar />
        </div>
      </div>
    </div>
  );
}
