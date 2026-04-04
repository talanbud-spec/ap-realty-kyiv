import React from 'react'

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-8 text-center">
          Про мене
        </h1>

        <div className="bg-white rounded-lg shadow-md p-12 mb-12">
          <div className="flex gap-12 items-start mb-12">
            <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-primary-light to-primary-main flex items-center justify-center flex-shrink-0">
              <span className="text-white text-6xl">👨‍💼</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Професіонал у сфері нерухомості
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Я спеціалізуюся на оренді та продажу комерційної нерухомості у Києві. 
                З більш ніж 10 років досвіду в галузі, я допоміг сотням клієнтів знайти 
                ідеальне місце для їхнього бізнесу.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Мій основний фокус — офіси у сучасних бізнес-центрах, але я також 
                пропоную широкий вибір інших типів нерухомості: квартири, будинки, 
                земельні ділянки та нежилі приміщення.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-primary-dark mb-8">
              Мої переваги
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-bold text-primary-dark mb-2">Великий портфель</h4>
                  <p className="text-gray-700">
                    Понад 250 активних оголошень та близько 100 офісів у бізнес-центрах
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-bold text-primary-dark mb-2">Швидкий результат</h4>
                  <p className="text-gray-700">
                    Допоможу вам знайти ідеальну нерухомість за мінімальний час
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-bold text-primary-dark mb-2">Прозорість</h4>
                  <p className="text-gray-700">
                    Без прихованих комісій та додаткових витрат
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-bold text-primary-dark mb-2">Професіоналізм</h4>
                  <p className="text-gray-700">
                    Детальне консультування та підтримка на всіх етапах
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-main text-white rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Готові почати?
          </h3>
          <p className="text-lg mb-8">
            Зв'яжіться зі мною прямо зараз, щоб обговорити ваші потреби
          </p>
          <button className="bg-accent-yellow text-primary-dark px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
            Написати повідомлення
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
