import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Дякую за ваше повідомлення! Я зв\'яжусь з вами найближчим часом.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">
          Контакти
        </h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Зв'яжіться зі мною будь-яким зручним способом
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Форма зворотного зв'язку
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Ім'я
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-main focus:outline-none"
                  placeholder="Ваше ім'я"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-main focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-main focus:outline-none"
                  placeholder="+38 (0XX) XXX-XX-XX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Повідомлення
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-main focus:outline-none"
                  placeholder="Ваше повідомлення..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-main text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition"
              >
                Відправити
              </button>
            </form>
          </div>

          {/* Social Links and Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">
                Соціальні мережі
              </h2>
              <div className="space-y-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <span className="text-3xl">f</span>
                  <div>
                    <p className="font-semibold text-primary-dark">Facebook</p>
                    <p className="text-gray-600 text-sm">Моя сторінка</p>
                  </div>
                </a>

                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <span className="text-3xl">✈️</span>
                  <div>
                    <p className="font-semibold text-primary-dark">Telegram</p>
                    <p className="text-gray-600 text-sm">Напишіть мені</p>
                  </div>
                </a>

                <a
                  href="https://threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-3xl">@</span>
                  <div>
                    <p className="font-semibold text-primary-dark">Threads</p>
                    <p className="text-gray-600 text-sm">Вечірні розмисли</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition"
                >
                  <span className="text-3xl">📷</span>
                  <div>
                    <p className="font-semibold text-primary-dark">Instagram</p>
                    <p className="text-gray-600 text-sm">Моя сторінка</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary-main text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Контактна інформація</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span>+38 (0XX) XXX-XX-XX</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span>your@email.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span>Київ, Україна</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
