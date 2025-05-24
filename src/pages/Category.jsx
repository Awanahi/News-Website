import React from 'react';
import { useParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard'

const categoryNews = {
  world: [/* existing world news */],
  technology: [/* existing technology news */],
  sports: [/* existing sports news */],
  entertainment: [/* existing entertainment news */],
  health: [
    {
      id: 1,
      title: 'Breakthrough in Cancer Treatment',
      description: 'New immunotherapy shows promising results in clinical trials.',
      image: 'https://picsum.photos/800/461',
      date: '2023-12-20'
    },
    {
      id: 2,
      title: 'Mental Health Awareness Campaign',
      description: 'Global initiative promotes emotional wellbeing.',
      image: 'https://picsum.photos/800/462',
      date: '2023-12-20'
    },
    {
      id: 3,
      title: 'Diet Revolution',
      description: 'Scientists discover new benefits of Mediterranean diet.',
      image: 'https://picsum.photos/800/463',
      date: '2023-12-20'
    },
    {
      id: 4,
      title: 'Exercise Innovation',
      description: 'New workout method promises better results in less time.',
      image: 'https://picsum.photos/800/464',
      date: '2023-12-19'
    },
    {
      id: 5,
      title: 'Sleep Study Findings',
      description: 'Research reveals optimal sleep patterns for health.',
      image: 'https://picsum.photos/800/465',
      date: '2023-12-19'
    },
    {
      id: 6,
      title: 'Vaccine Development',
      description: 'Universal flu vaccine shows promising results.',
      image: 'https://picsum.photos/800/466',
      date: '2023-12-19'
    },
    {
      id: 7,
      title: 'Heart Health Breakthrough',
      description: 'New treatment prevents cardiovascular disease.',
      image: 'https://picsum.photos/800/467',
      date: '2023-12-18'
    },
    {
      id: 8,
      title: 'Stress Management Innovation',
      description: 'Digital therapy revolutionizes anxiety treatment.',
      image: 'https://picsum.photos/800/468',
      date: '2023-12-18'
    },
    {
      id: 9,
      title: 'Nutrition Science Update',
      description: 'Study reveals new superfood benefits.',
      image: 'https://picsum.photos/800/469',
      date: '2023-12-18'
    },
    {
      id: 10,
      title: 'Fitness Technology',
      description: 'AI-powered personal training breakthrough.',
      image: 'https://picsum.photos/800/470',
      date: '2023-12-17'
    },
    {
      id: 11,
      title: 'Children\'s Health Initiative',
      description: 'New program tackles childhood obesity.',
      image: 'https://picsum.photos/800/471',
      date: '2023-12-17'
    },
    {
      id: 12,
      title: 'Alternative Medicine Study',
      description: 'Research validates traditional healing methods.',
      image: 'https://picsum.photos/800/472',
      date: '2023-12-17'
    },
    {
      id: 13,
      title: 'Aging Research Discovery',
      description: 'Scientists identify key factors in longevity.',
      image: 'https://picsum.photos/800/473',
      date: '2023-12-16'
    },
    {
      id: 14,
      title: 'Dental Health Innovation',
      description: 'New treatment regenerates tooth enamel.',
      image: 'https://picsum.photos/800/474',
      date: '2023-12-16'
    },
    {
      id: 15,
      title: 'Vision Care Breakthrough',
      description: 'Revolutionary treatment reverses eye damage.',
      image: 'https://picsum.photos/800/475',
      date: '2023-12-16'
    }
  ],
  fun: [
    {
      id: 1,
      title: 'World\'s Largest Bubble Record',
      description: 'Street performer creates incredible soap bubble display.',
      image: 'https://picsum.photos/800/476',
      date: '2023-12-20'
    },
    {
      id: 2,
      title: 'Viral Dance Challenge',
      description: 'New social media trend unites global dancers.',
      image: 'https://picsum.photos/800/477',
      date: '2023-12-20'
    },
    {
      id: 3,
      title: 'Pet Talent Show',
      description: 'Amazing animals showcase extraordinary abilities.',
      image: 'https://picsum.photos/800/478',
      date: '2023-12-20'
    },
    {
      id: 4,
      title: 'Comedy Festival Highlights',
      description: 'International performers bring laughter worldwide.',
      image: 'https://picsum.photos/800/479',
      date: '2023-12-19'
    },
    {
      id: 5,
      title: 'Unusual World Records',
      description: 'Bizarre achievements enter record books.',
      image: 'https://picsum.photos/800/480',
      date: '2023-12-19'
    },
    {
      id: 6,
      title: 'Food Art Competition',
      description: 'Chefs create edible masterpieces.',
      image: 'https://picsum.photos/800/481',
      date: '2023-12-19'
    },
    {
      id: 7,
      title: 'Extreme Playground Opens',
      description: 'Adult-sized fun park attracts adventure seekers.',
      image: 'https://picsum.photos/800/482',
      date: '2023-12-18'
    },
    {
      id: 8,
      title: 'Costume Party Record',
      description: 'Largest gathering of superhero costumes.',
      image: 'https://picsum.photos/800/483',
      date: '2023-12-18'
    },
    {
      id: 9,
      title: 'Funny Animal Photos',
      description: 'Wildlife photography competition amusing entries.',
      image: 'https://picsum.photos/800/484',
      date: '2023-12-18'
    },
    {
      id: 10,
      title: 'Carnival Innovation',
      description: 'New rides promise unprecedented thrills.',
      image: 'https://picsum.photos/800/485',
      date: '2023-12-17'
    },
    {
      id: 11,
      title: 'Flash Mob Surprise',
      description: 'Spontaneous performance delights city center.',
      image: 'https://picsum.photos/800/486',
      date: '2023-12-17'
    },
    {
      id: 12,
      title: 'Bubble Gum Contest',
      description: 'Championship brings together bubble blowers.',
      image: 'https://picsum.photos/800/487',
      date: '2023-12-17'
    },
    {
      id: 13,
      title: 'Silly Sports Day',
      description: 'Unconventional athletics event draws crowds.',
      image: 'https://picsum.photos/800/488',
      date: '2023-12-16'
    },
    {
      id: 14,
      title: 'Laughter Yoga Movement',
      description: 'New wellness trend combines joy and exercise.',
      image: 'https://picsum.photos/800/489',
      date: '2023-12-16'
    },
    {
      id: 15,
      title: 'Giant Board Game Festival',
      description: 'Life-sized classic games take over park.',
      image: 'https://picsum.photos/800/490',
      date: '2023-12-16'
    }
  ],
  movie: [
    {
      id: 1,
      title: 'Superhero Saga Conclusion',
      description: 'Epic finale breaks box office records worldwide.',
      image: 'https://picsum.photos/800/491',
      date: '2023-12-20'
    },
    {
      id: 2,
      title: 'Independent Film Triumph',
      description: 'Low-budget masterpiece wins major awards.',
      image: 'https://picsum.photos/800/492',
      date: '2023-12-20'
    },
    {
      id: 3,
      title: 'Animation Innovation',
      description: 'Studio reveals groundbreaking visual technology.',
      image: 'https://picsum.photos/800/493',
      date: '2023-12-20'
    },
    {
      id: 4,
      title: 'Classic Remake Announced',
      description: 'Beloved film gets modern interpretation.',
      image: 'https://picsum.photos/800/494',
      date: '2023-12-19'
    },
    {
      id: 5,
      title: 'Director\'s Cut Release',
      description: 'Controversial film restored to original vision.',
      image: 'https://picsum.photos/800/495',
      date: '2023-12-19'
    },
    {
      id: 6,
      title: 'Movie Studio Merger',
      description: 'Industry giants combine for future projects.',
      image: 'https://picsum.photos/800/496',
      date: '2023-12-19'
    },
    {
      id: 7,
      title: 'Sci-Fi Franchise Expansion',
      description: 'Popular series announces new trilogy.',
      image: 'https://picsum.photos/800/497',
      date: '2023-12-18'
    },
    {
      id: 8,
      title: 'Method Acting Controversy',
      description: 'Star\'s dedication raises industry concerns.',
      image: 'https://picsum.photos/800/498',
      date: '2023-12-18'
    },
    {
      id: 9,
      title: 'Historical Drama Success',
      description: 'Period piece captures audience imagination.',
      image: 'https://picsum.photos/800/499',
      date: '2023-12-18'
    },
    {
      id: 10,
      title: 'Virtual Production Milestone',
      description: 'New technology revolutionizes filmmaking.',
      image: 'https://picsum.photos/800/500',
      date: '2023-12-17'
    },
    {
      id: 11,
      title: 'Comedy Duo Reunion',
      description: 'Beloved team returns for new project.',
      image: 'https://picsum.photos/800/501',
      date: '2023-12-17'
    },
    {
      id: 12,
      title: 'Film Festival Highlights',
      description: 'Emerging talents shine at international event.',
      image: 'https://picsum.photos/800/502',
      date: '2023-12-17'
    },
    {
      id: 13,
      title: 'Streaming Platform Original',
      description: 'Online service produces breakthrough hit.',
      image: 'https://picsum.photos/800/503',
      date: '2023-12-16'
    },
    {
      id: 14,
      title: 'Documentary Impact',
      description: 'Environmental film sparks global movement.',
      image: 'https://picsum.photos/800/504',
      date: '2023-12-16'
    },
    {
      id: 15,
      title: 'International Co-Production',
      description: 'Cross-cultural project unites global talent.',
      image: 'https://picsum.photos/800/505',
      date: '2023-12-16'
    }
  ]
}

export default function Category() {
  const { id } = useParams()
  const news = categoryNews[id] || []

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 capitalize">{id} News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map(item => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
