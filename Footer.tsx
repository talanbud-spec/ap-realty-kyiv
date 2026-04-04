import React from 'react'

interface FooterProps {
  setCurrentPage: (page: string) => void
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RealEstate Pro</h3>
            <p className="text-gray-300">
              Ваш надійний партнер у пошуку нерухомості у Києві
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навігація</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-gray-300 hover:text-accent-yellow transition"
                >
                  Головна
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('catalog')}
                  className="text-gray-300 hover:text-accent-yellow transition"
                >
                  Каталог
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('articles')}
                  className="text-gray-300 hover:text-accent-yellow transition"
                >
                  Статті
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Інформація</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="text-gray-300 hover:text-accent-yellow transition"
                >
                  Про мене
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('reviews')}
                  className="text-gray-300 hover:text-accent-yellow transition"
                >
                  Відгуки
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-gray-300 hover:text-accent-yellow transition"
                >
                  Контакти
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакти</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +38 (0XX) XXX-XX-XX</li>
              <li>📧 your@email.com</li>
              <li>📍 Київ, Україна</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2026 RealEstate Pro. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
