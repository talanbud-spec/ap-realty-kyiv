import React from 'react'

interface HeroProps {
  setCurrentPage: (page: string) => void
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <section className="bg-gradient-to-r from-primary-dark to-primary-main text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Знайдіть ідеальну нерухомість
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Оренда та продаж офісів, квартир, будинків та комерційних приміщень у Києві
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setCurrentPage('catalog')}
            className="bg-accent-yellow text-primary-dark px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition"
          >
            Переглянути каталог
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-primary-dark px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Зв'язатися з нами
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <div className="text-4xl font-bold text-accent-yellow mb-2">250+</div>
            <p className="text-gray-200">Активних оголошень</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <div className="text-4xl font-bold text-accent-yellow mb-2">100+</div>
            <p className="text-gray-200">Офісів у бізнес-центрах</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <div className="text-4xl font-bold text-accent-yellow mb-2">10+</div>
            <p className="text-gray-200">Років досвіду</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
