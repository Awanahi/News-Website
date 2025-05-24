import React from 'react';

export default function NewsCard({ title, description, image, date }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
    </div>
  )
}
