import React from 'react'
import { reviews } from '../data/reviews'

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">
          Відгуки клієнтів
        </h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Що кажуть про мене мої клієнти
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-lg p-8 border-l-4 border-accent-yellow shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < review.rating ? 'text-accent-yellow' : 'text-gray-300'}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-main text-white flex items-center justify-center font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-dark">{review.author}</p>
                  <p className="text-gray-600 text-sm">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
