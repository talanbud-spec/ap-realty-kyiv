import React from 'react'
import { articles } from '../data/articles'

const Articles: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">
          Корисні статті
        </h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Поради та інформація про нерухомість від професіонала
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-primary-light to-primary-main flex items-center justify-center">
                <span className="text-white text-5xl">{article.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-xs bg-accent-yellow text-primary-dark px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="text-primary-main font-semibold hover:text-primary-dark transition">
                  Читати далі →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
