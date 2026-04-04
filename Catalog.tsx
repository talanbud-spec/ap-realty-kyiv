import React, { useState } from 'react'
import PropertyCard from './PropertyCard'
import { properties } from '../data/properties'

const Catalog: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState<'all' | 'rent' | 'sale'>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  const types = [
    { value: 'all', label: 'Усі' },
    { value: 'rent', label: 'Оренда' },
    { value: 'sale', label: 'Продаж' },
  ]

  const categories = [
    { value: 'all', label: 'Усі категорії' },
    { value: 'office', label: 'Офіси в бізнес-центрах' },
    { value: 'commercial', label: 'Нежилі приміщення' },
    { value: 'apartment', label: 'Квартири' },
    { value: 'house', label: 'Будинки' },
    { value: 'land', label: 'Земля' },
  ]

  const filteredProperties = properties.filter(prop => {
    const typeMatch = typeFilter === 'all' || prop.type === typeFilter
    const categoryMatch = categoryFilter === 'all' || prop.category === categoryFilter
    return typeMatch && categoryMatch
  })

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">
          Каталог нерухомості
        </h1>

        {/* Filters */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary-dark mb-4">Тип</h3>
              <div className="flex gap-3">
                {types.map(type => (
                  <button
                    key={type.value}
                    onClick={() => setTypeFilter(type.value as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      typeFilter === type.value
                        ? 'bg-primary-main text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-dark mb-4">Категорія</h3>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-main focus:outline-none"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-8">
          Знайдено <span className="font-bold text-primary-dark">{filteredProperties.length}</span> об'єктів
        </p>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              На жаль, об'єктів за вашими фільтрами не знайдено
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Catalog
