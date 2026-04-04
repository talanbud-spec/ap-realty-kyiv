// Data - можна редагувати тут або завантажувати з CSV
let properties = [
    // Оренда офісів
    { id: 1, title: 'Офіс у бізнес-центрі "Парус"', address: 'вул. Хрещатик, 15, Печерський район', area: 150, price: '$3,000/місяць', type: 'rent', category: 'office', description: 'Сучасний офіс з панорамним видом на місто. Висока стеля, великі вікна, паркет. Включено комунальні послуги.', layout: 'Відкритий простір з можливістю розділення на кабінети. Кухня, туалет, переговорна.' },
    { id: 2, title: 'Офіс у центрі міста', address: 'вул. Франка, 22, Шевченківський район', area: 200, price: '$4,500/місяць', type: 'rent', category: 'office', description: 'Премум офіс на 10 поверху. Сучасний ремонт, кондиціонування, паркування включено.', layout: '3 окремих кабінети, конференц-зал, кухня, санвузли.' },
];

const articles = [
    { id: 1, title: 'Як вибрати офіс для стартапу', excerpt: 'Поради щодо вибору ідеального офісу для вашого молодого бізнесу. Розглядаємо ключові критерії: локація, розмір, бюджет.', date: '15 березня 2026', category: 'Офіси', emoji: '🏢' },
    { id: 2, title: 'Тренди на ринку комерційної нерухомості', excerpt: 'Аналіз поточних трендів на ринку комерційної нерухомості у Києві. Що змінюється у 2026 році?', date: '12 березня 2026', category: 'Аналіз', emoji: '📈' },
];

const reviews = [
    { id: 1, author: 'Іван Петренко', position: 'Директор ТОВ "Інновація"', text: 'Дякую за професійний підхід! Допоміг мені знайти ідеальний офіс за 2 тижні. Все було просто і прозоро.', rating: 5 },
    { id: 2, author: 'Марія Коваленко', position: 'Власниця кафе "Смак"', text: 'Чудовий агент! Знайшла для мене найкращу локацію для кафе. Рекомендую всім!', rating: 5 },
];

// State
let currentPage = 'home';
let typeFilter = 'all';
let categoryFilter = 'all';

// ===== ФУНКЦІЯ ДЛЯ ЗАВАНТАЖЕННЯ CSV =====
function importPropertiesFromCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    properties = [];
    let id = 1;
    
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue;
        
        const values = lines[i].split(',').map(v => v.trim());
        const property = {};
        
        headers.forEach((header, index) => {
            property[header] = values[index];
        });
        
        property.id = id++;
        property.area = parseInt(property.area);
        
        properties.push(property);
    }
    
    console.log(`Завантажено ${properties.length} об'єктів`);
    render();
}

// ===== ФУНКЦІЯ ДЛЯ ЕКСПОРТУ ПОТОЧНИХ ВЛАСТИВОСТЕЙ В CSV =====
function exportPropertiesToCSV() {
    let csv = 'id,title,address,area,price,type,category,description,layout\n';
    
    properties.forEach(prop => {
        csv += `${prop.id},"${prop.title}","${prop.address}",${prop.area},"${prop.price}","${prop.type}","${prop.category}","${prop.description}","${prop.layout}"\n`;
    });
    
    // Завантажити файл
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'properties_export.csv';
    a.click();
}

// Render functions
function render() {
    const app = document.getElementById('app');
    
    if (currentPage === 'home') {
        app.innerHTML = renderHome();
    } else if (currentPage === 'catalog') {
        app.innerHTML = renderCatalog();
    } else if (currentPage === 'articles') {
        app.innerHTML = renderArticles();
    } else if (currentPage === 'reviews') {
        app.innerHTML = renderReviews();
    } else if (currentPage === 'about') {
        app.innerHTML = renderAbout();
    } else if (currentPage === 'contact') {
        app.innerHTML = renderContact();
    } else if (currentPage === 'admin') {
        app.innerHTML = renderAdmin();
    }
    
    attachEventListeners();
}

function renderHeader() {
    return `
        <header>
            <div class="header-container">
                <div class="logo" onclick="navigateTo('home')">🏢 RealEstate Pro</div>
                <nav>
                    <button onclick="navigateTo('home')" class="${currentPage === 'home' ? 'active' : ''}">Головна</button>
                    <button onclick="navigateTo('catalog')" class="${currentPage === 'catalog' ? 'active' : ''}">Каталог</button>
                    <button onclick="navigateTo('articles')" class="${currentPage === 'articles' ? 'active' : ''}">Статті</button>
                    <button onclick="navigateTo('reviews')" class="${currentPage === 'reviews' ? 'active' : ''}">Відгуки</button>
                    <button onclick="navigateTo('about')" class="${currentPage === 'about' ? 'active' : ''}">Про мене</button>
                    <button onclick="navigateTo('contact')" class="contact-btn">Контакти</button>
                </nav>
            </div>
        </header>
    `;
}

function renderFooter() {
    return `
        <footer>
            <div class="footer-container">
                <div class="footer-grid">
                    <div class="footer-section">
                        <h3>RealEstate Pro</h3>
                        <p>Ваш надійний партнер у пошуку нерухомості у Києві</p>
                    </div>
                    <div class="footer-section">
                        <h3>Навігація</h3>
                        <ul>
                            <li><a onclick="navigateTo('home')">Головна</a></li>
                            <li><a onclick="navigateTo('catalog')">Каталог</a></li>
                            <li><a onclick="navigateTo('articles')">Статті</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Інформація</h3>
                        <ul>
                            <li><a onclick="navigateTo('about')">Про мене</a></li>
                            <li><a onclick="navigateTo('reviews')">Відгуки</a></li>
                            <li><a onclick="navigateTo('contact')">Контакти</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Контакти</h3>
                        <ul>
                            <li>📞 +38 (0XX) XXX-XX-XX</li>
                            <li>📧 your@email.com</li>
                            <li>📍 Київ, Україна</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    © 2026 RealEstate Pro. Усі права захищені.
                </div>
            </div>
        </footer>
    `;
}

function renderHome() {
    return `
        ${renderHeader()}
        <section class="hero">
            <div class="hero-container">
                <h1>Знайдіть ідеальну нерухомість</h1>
                <p>Оренда та продаж офісів, квартир, будинків та комерційних приміщень у Києві</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="navigateTo('catalog')">Переглянути каталог</button>
                    <button class="btn btn-secondary" onclick="navigateTo('contact')">Зв'язатися з нами</button>
                </div>
                <div class="hero-stats">
                    <div class="stat-box">
                        <div class="number">${properties.length}+</div>
                        <div class="label">Активних оголошень</div>
                    </div>
                    <div class="stat-box">
                        <div class="number">100+</div>
                        <div class="label">Офісів у бізнес-центрах</div>
                    </div>
                    <div class="stat-box">
                        <div class="number">10+</div>
                        <div class="label">Років досвіду</div>
                    </div>
                </div>
            </div>
        </section>
        ${renderFooter()}
    `;
}

function renderCatalog() {
    const filteredProperties = properties.filter(prop => {
        const typeMatch = typeFilter === 'all' || prop.type === typeFilter;
        const categoryMatch = categoryFilter === 'all' || prop.category === categoryFilter;
        return typeMatch && categoryMatch;
    });

    const categoryLabels = {
        all: 'Усі категорії',
        office: 'Офіси в бізнес-центрах',
        commercial: 'Нежилі приміщення',
        apartment: 'Квартири',
        house: 'Будинки',
        land: 'Земля',
    };

    return `
        ${renderHeader()}
        <section class="catalog">
            <div class="container">
                <h1 class="section-title">Каталог нерухомості</h1>
                
                <div class="filters">
                    <div class="filter-group">
                        <h3>Тип</h3>
                        <div class="filter-buttons">
                            <button class="filter-btn ${typeFilter === 'all' ? 'active' : ''}" onclick="setTypeFilter('all')">Усі</button>
                            <button class="filter-btn ${typeFilter === 'rent' ? 'active' : ''}" onclick="setTypeFilter('rent')">Оренда</button>
                            <button class="filter-btn ${typeFilter === 'sale' ? 'active' : ''}" onclick="setTypeFilter('sale')">Продаж</button>
                        </div>
                    </div>
                    <div class="filter-group">
                        <h3>Категорія</h3>
                        <select onchange="setCategoryFilter(this.value)">
                            ${Object.entries(categoryLabels).map(([key, label]) => 
                                `<option value="${key}" ${categoryFilter === key ? 'selected' : ''}>${label}</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>

                <p class="results-count">Знайдено <strong>${filteredProperties.length}</strong> об'єктів</p>

                ${filteredProperties.length > 0 ? `
                    <div class="properties-grid">
                        ${filteredProperties.map(prop => `
                            <div class="property-card" onclick="showPropertyDetails(${prop.id})">
                                <div class="property-image">
                                    <span>🏢</span>
                                    <span class="property-badge ${prop.type === 'rent' ? 'badge-rent' : 'badge-sale'}">
                                        ${prop.type === 'rent' ? 'Оренда' : 'Продаж'}
                                    </span>
                                </div>
                                <div class="property-content">
                                    <h3 class="property-title">${prop.title}</h3>
                                    <p class="property-address">📍 ${prop.address}</p>
                                    <div class="property-details">
                                        <div class="detail">
                                            <div class="detail-label">Площа</div>
                                            <div class="detail-value">${prop.area} м²</div>
                                        </div>
                                        <div class="detail">
                                            <div class="detail-label">Ціна</div>
                                            <div class="detail-value property-price">${prop.price}</div>
                                        </div>
                                    </div>
                                    <p class="property-description">${prop.description}</p>
                                    <button class="property-btn">Детальніше</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div class="no-results">
                        <p>На жаль, об'єктів за вашими фільтрами не знайдено</p>
                    </div>
                `}
            </div>
        </section>
        ${renderFooter()}
        <div id="propertyModal" class="modal"></div>
    `;
}

function renderArticles() {
    return `
        ${renderHeader()}
        <section class="articles">
            <div class="container">
                <h1 class="section-title">Корисні статті</h1>
                <p class="section-subtitle">Поради та інформація про нерухомість від професіонала</p>
                
                <div class="articles-grid">
                    ${articles.map(article => `
                        <div class="article-card">
                            <div class="article-image">${article.emoji}</div>
                            <div class="article-content">
                                <div class="article-meta">
                                    <span class="article-date">${article.date}</span>
                                    <span class="article-category">${article.category}</span>
                                </div>
                                <h3 class="article-title">${article.title}</h3>
                                <p class="article-excerpt">${article.excerpt}</p>
                                <a class="article-link">Читати далі →</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        ${renderFooter()}
    `;
}

function renderReviews() {
    return `
        ${renderHeader()}
        <section class="reviews">
            <div class="container">
                <h1 class="section-title">Відгуки клієнтів</h1>
                <p class="section-subtitle">Що кажуть про мене мої клієнти</p>
                
                <div class="reviews-grid">
                    ${reviews.map(review => `
                        <div class="review-card">
                            <div class="stars">
                                ${[...Array(5)].map((_, i) => `
                                    <span class="star ${i < review.rating ? '' : 'empty'}">★</span>
                                `).join('')}
                            </div>
                            <p class="review-text">"${review.text}"</p>
                            <div class="review-author">
                                <div class="author-avatar">${review.author.charAt(0)}</div>
                                <div class="author-info">
                                    <h4>${review.author}</h4>
                                    <p class="author-position">${review.position}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        ${renderFooter()}
    `;
}

function renderAbout() {
    return `
        ${renderHeader()}
        <section class="about">
            <div class="container">
                <h1 class="section-title">Про мене</h1>
                
                <div class="about-content">
                    <div class="about-header">
                        <div class="about-avatar">👨‍💼</div>
                        <div class="about-text">
                            <h2>Професіонал у сфері нерухомості</h2>
                            <p>Я спеціалізуюся на оренді та продажу комерційної нерухомості у Києві. З більш ніж 10 років досвіду в галузі, я допоміг сотням клієнтів знайти ідеальне місце для їхнього бізнесу.</p>
                            <p>Мій основний фокус — офіси у сучасних бізнес-центрах, але я також пропоную широкий вибір інших типів нерухомості: квартири, будинки, земельні ділянки та нежилі приміщення.</p>
                        </div>
                    </div>

                    <div class="about-benefits">
                        <h3>Мої переваги</h3>
                        <div class="benefits-grid">
                            <div class="benefit-item">
                                <div class="benefit-icon">✓</div>
                                <div>
                                    <h4>Великий портфель</h4>
                                    <p>Понад 250 активних оголошень та близько 100 офісів у бізнес-центрах</p>
                                </div>
                            </div>
                            <div class="benefit-item">
                                <div class="benefit-icon">✓</div>
                                <div>
                                    <h4>Швидкий результат</h4>
                                    <p>Допоможу вам знайти ідеальну нерухомість за мінімальний час</p>
                                </div>
                            </div>
                            <div class="benefit-item">
                                <div class="benefit-icon">✓</div>
                                <div>
                                    <h4>Прозорість</h4>
                                    <p>Без прихованих комісій та додаткових витрат</p>
                                </div>
                            </div>
                            <div class="benefit-item">
                                <div class="benefit-icon">✓</div>
                                <div>
                                    <h4>Професіоналізм</h4>
                                    <p>Детальне консультування та підтримка на всіх етапах</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-cta">
                    <h3>Готові почати?</h3>
                    <p>Зв'яжіться зі мною прямо зараз, щоб обговорити ваші потреби</p>
                    <button class="btn btn-primary" onclick="navigateTo('contact')">Написати повідомлення</button>
                </div>
            </div>
        </section>
        ${renderFooter()}
    `;
}

function renderContact() {
    return `
        ${renderHeader()}
        <section class="contact">
            <div class="container">
                <h1 class="section-title">Контакти</h1>
                <p class="section-subtitle">Зв'яжіться зі мною будь-яким зручним способом</p>
                
                <div class="contact-grid">
                    <div class="contact-form">
                        <h2>Форма зворотного зв'язку</h2>
                        <form onsubmit="handleFormSubmit(event)">
                            <div class="form-group">
                                <label>Ім'я</label>
                                <input type="text" name="name" required placeholder="Ваше ім'я">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required placeholder="your@email.com">
                            </div>
                            <div class="form-group">
                                <label>Телефон</label>
                                <input type="tel" name="phone" placeholder="+38 (0XX) XXX-XX-XX">
                            </div>
                            <div class="form-group">
                                <label>Повідомлення</label>
                                <textarea name="message" required placeholder="Ваше повідомлення..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%;">Відправити</button>
                        </form>
                    </div>

                    <div class="contact-socials">
                        <div class="social-box">
                            <h2>Соціальні мережі</h2>
                            <div class="social-links">
                                <a href="https://facebook.com" target="_blank" class="social-link">
                                    <span class="social-icon">f</span>
                                    <div class="social-info">
                                        <h4>Facebook</h4>
                                        <p>Моя сторінка</p>
                                    </div>
                                </a>
                                <a href="https://t.me" target="_blank" class="social-link">
                                    <span class="social-icon">✈️</span>
                                    <div class="social-info">
                                        <h4>Telegram</h4>
                                        <p>Напишіть мені</p>
                                    </div>
                                </a>
                                <a href="https://threads.net" target="_blank" class="social-link">
                                    <span class="social-icon">@</span>
                                    <div class="social-info">
                                        <h4>Threads</h4>
                                        <p>Вечірні розмисли</p>
                                    </div>
                                </a>
                                <a href="https://instagram.com" target="_blank" class="social-link">
                                    <span class="social-icon">📷</span>
                                    <div class="social-info">
                                        <h4>Instagram</h4>
                                        <p>Моя сторінка</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="contact-info">
                            <h3>Контактна інформація</h3>
                            <div class="contact-info-item">
                                <span class="contact-info-icon">📞</span>
                                <span>+38 (0XX) XXX-XX-XX</span>
                            </div>
                            <div class="contact-info-item">
                                <span class="contact-info-icon">📧</span>
                                <span>your@email.com</span>
                            </div>
                            <div class="contact-info-item">
                                <span class="contact-info-icon">📍</span>
                                <span>Київ, Україна</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ${renderFooter()}
    `;
}

function renderAdmin() {
    return `
        ${renderHeader()}
        <section class="catalog">
            <div class="container">
                <h1 class="section-title">Адміністрування</h1>
                <p class="section-subtitle">Керування об'єктами нерухомості</p>
                
                <div style="background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h2 style="margin-bottom: 1.5rem; color: var(--primary-dark);">Завантажити об'єкти з CSV</h2>
                    
                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; margin-bottom: 1rem; font-weight: 600;">Виберіть CSV файл:</label>
                        <input type="file" id="csvFile" accept=".csv" style="padding: 0.5rem; border: 2px solid var(--border-color); border-radius: 0.5rem; width: 100%; margin-bottom: 1rem;">
                        <button class="btn btn-primary" onclick="handleCSVUpload()">Завантажити</button>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--border-color);">

                    <h3 style="margin-bottom: 1rem; color: var(--primary-dark);">Поточні об'єкти: ${properties.length}</h3>
                    <button class="btn btn-secondary" onclick="exportPropertiesToCSV()" style="margin-bottom: 1rem;">Експортувати в CSV</button>

                    <div style="max-height: 400px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 0.5rem; padding: 1rem;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="border-bottom: 2px solid var(--border-color);">
                                    <th style="text-align: left; padding: 0.5rem; font-weight: 600;">Назва</th>
                                    <th style="text-align: left; padding: 0.5rem; font-weight: 600;">Адреса</th>
                                    <th style="text-align: left; padding: 0.5rem; font-weight: 600;">Ціна</th>
                                    <th style="text-align: left; padding: 0.5rem; font-weight: 600;">Тип</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${properties.map(prop => `
                                    <tr style="border-bottom: 1px solid var(--border-color);">
                                        <td style="padding: 0.5rem;">${prop.title}</td>
                                        <td style="padding: 0.5rem;">${prop.address}</td>
                                        <td style="padding: 0.5rem;">${prop.price}</td>
                                        <td style="padding: 0.5rem;"><span style="background: ${prop.type === 'rent' ? 'var(--accent-yellow)' : 'var(--primary-main)'}; color: ${prop.type === 'rent' ? 'var(--primary-dark)' : 'white'}; padding: 0.25rem 0.5rem; border-radius: 0.25rem;">${prop.type === 'rent' ? 'Оренда' : 'Продаж'}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        ${renderFooter()}
    `;
}

function handleCSVUpload() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Виберіть файл!');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            importPropertiesFromCSV(e.target.result);
            alert(`Успішно завантажено ${properties.length} об'єктів!`);
            fileInput.value = '';
        } catch (error) {
            alert('Помилка при завантаженні файлу: ' + error.message);
        }
    };
    reader.readAsText(file);
}

// Navigation
function navigateTo(page) {
    currentPage = page;
    window.scrollTo(0, 0);
    render();
}

function setTypeFilter(type) {
    typeFilter = type;
    render();
}

function setCategoryFilter(category) {
    categoryFilter = category;
    render();
}

function showPropertyDetails(id) {
    const property = properties.find(p => p.id === id);
    if (!property) return;

    const modal = document.getElementById('propertyModal');
    const typeLabel = property.type === 'rent' ? 'Оренда' : 'Продаж';
    const categoryLabels = {
        office: 'Офіс',
        commercial: 'Нежиле приміщення',
        apartment: 'Квартира',
        house: 'Будинок',
        land: 'Земля',
    };

    modal.innerHTML = `
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <div>
                    <h2 class="modal-title">${property.title}</h2>
                    <p class="property-address">📍 ${property.address}</p>
                </div>
                <button class="modal-close" onclick="closePropertyModal()">✕</button>
            </div>

            <div class="modal-grid">
                <div class="modal-field">
                    <div class="modal-label">Категорія</div>
                    <div class="modal-value">${categoryLabels[property.category]}</div>
                </div>
                <div class="modal-field">
                    <div class="modal-label">Тип</div>
                    <div class="modal-value">${typeLabel}</div>
                </div>
                <div class="modal-field">
                    <div class="modal-label">Площа</div>
                    <div class="modal-value">${property.area} м²</div>
                </div>
                <div class="modal-field">
                    <div class="modal-label">Ціна</div>
                    <div class="modal-value" style="color: var(--accent-yellow); font-weight: bold;">${property.price}</div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Опис</h3>
                <p>${property.description}</p>
            </div>

            ${property.layout ? `
                <div class="modal-section">
                    <h3>Планування</h3>
                    <p>${property.layout}</p>
                </div>
            ` : ''}

            <button class="btn btn-primary" style="width: 100%; padding: 1rem;" onclick="navigateTo('contact')">Зв'язатися з агентом</button>
        </div>
    `;

    modal.classList.add('active');
    modal.onclick = closePropertyModal;
}

function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Дякую за ваше повідомлення! Я зв\'яжусь з вами найближчим часом.');
    event.target.reset();
}

function attachEventListeners() {
    // Event listeners are attached via onclick attributes in HTML
}

// Initial render
render();
