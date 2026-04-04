import React, { useState } from 'react'
import type { Property } from '../data/properties'

interface PropertyCardProps {
  property: Property
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [showDetails, setShowDetails] = useState(false)

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      office: 'Офіс',
      commercial: 'Нежиле приміщення',
      apartment: 'Квартира',
      house: 'Будинок',
      land: 'Земля',
    }
    return labels[category] || category
  }

  const getTypeLabel = (type: string) => {
    return type === 'rent' ? 'Оренда' : 'Продаж'
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
           onClick={() => setShowDetails(true)}>
        {/* Image */}
        <div className="relative h-48 bg-gray-300 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary-main flex items-center justify-center">
            <span className="text-white text-4xl">🏢</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
              property.type === 'rent' ? 'bg-accent-yellow text-primary-dark' : 'bg-primary-main'
            }`}>
              {getTypeLabel(property.type)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-primary-dark mb-2">
            {property.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4">
            📍 {property.address}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
            <div>
              <p className="text-gray-500 text-xs">Площа</p>
              <p className="text-primary-dark font-semibold">{property.area} м²</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Ціна</p>
              <p className="text-accent-yellow font-bold">{property.price}</p>
            </div>
          </div>

          <p className="text-gray-700 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>

          <button
            onClick={() => setShowDetails(true)}
            className="w-full bg-primary-main text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Детальніше
          </button>
        </div>
      </div>

      {/* Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
             onClick={() => setShowDetails(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary-dark mb-2">
                    {property.title}
                  </h2>
                  <p className="text-gray-600">📍 {property.address}</p>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Категорія</p>
                  <p className="text-primary-dark font-semibold">{getCategoryLabel(property.category)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Тип</p>
                  <p className="text-primary-dark font-semibold">{getTypeLabel(property.type)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Площа</p>
                  <p className="text-primary-dark font-semibold">{property.area} м²</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Ціна</p>
                  <p className="text-accent-yellow font-bold text-lg">{property.price}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-dark mb-3">Опис</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {property.layout && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">Планування</h3>
                  <p className="text-gray-700">{property.layout}</p>
                </div>
              )}

              <button
                onClick={() => setShowDetails(false)}
                className="w-full bg-accent-yellow text-primary-dark py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
              >
                Зв'язатися з агентом
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PropertyCard
