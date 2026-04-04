import React from 'react'

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-primary-dark cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            🏢 RealEstate Pro
          </div>
          
          <nav className="flex gap-6 items-center">
            <button
              onClick={() => setCurrentPage('home')}
              className={`font-medium transition ${
                currentPage === 'home'
                  ? 'text-primary-main border-b-2 border-accent-yellow'
                  : 'text-gray-700 hover:text-primary-main'
              }`}
            >
              Головна
            </button>
            <button
              onClick={() => setCurrentPage('catalog')}
              className={`font-medium transition ${
                currentPage === 'catalog'
                  ? 'text-primary-main border-b-2 border-accent-yellow'
                  : 'text-gray-700 hover:text-primary-main'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setCurrentPage('articles')}
              className={`font-medium transition ${
                currentPage === 'articles'
                  ? 'text-primary-main border-b-2 border-accent-yellow'
                  : 'text-gray-700 hover:text-primary-main'
              }`}
            >
              Статті
            </button>
            <button
              onClick={() => setCurrentPage('reviews')}
              className={`font-medium transition ${
                currentPage === 'reviews'
                  ? 'text-primary-main border-b-2 border-accent-yellow'
                  : 'text-gray-700 hover:text-primary-main'
              }`}
            >
              Відгуки
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`font-medium transition ${
                currentPage === 'about'
                  ? 'text-primary-main border-b-2 border-accent-yellow'
                  : 'text-gray-700 hover:text-primary-main'
              }`}
            >
              Про мене
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-accent-yellow text-primary-dark px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Контакти
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
