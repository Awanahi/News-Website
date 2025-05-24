import React from 'react';
import { Link } from 'react-router-dom'

const categories = [
  { id: 'world', name: 'World' },
  { id: 'technology', name: 'Technology' },
  { id: 'sports', name: 'Sports' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'health', name: 'Health' },
  { id: 'fun', name: 'Fun' },
  { id: 'movie', name: 'Movie' }
]

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            NewsWeb
          </Link>
          <div className="hidden md:flex space-x-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="text-gray-600 hover:text-gray-900"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
