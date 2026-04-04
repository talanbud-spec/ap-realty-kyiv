// Data
const properties = [
    // Оренда офісів
    { id: 1, title: 'Офіс у бізнес-центрі "Парус"', address: 'вул. Хрещатик, 15, Печерський район', area: 150, price: '$3,000/місяць', type: 'rent', category: 'office', description: 'Сучасний офіс з панорамним видом на місто. Висока стеля, великі вікна, паркет. Включено комунальні послуги.', layout: 'Відкритий простір з можливістю розділення на кабінети. Кухня, туалет, переговорна.' },
    { id: 2, title: 'Офіс у центрі міста', address: 'вул. Франка, 22, Шевченківський район', area: 200, price: '$4,500/місяць', type: 'rent', category: 'office', description: 'Премум офіс на 10 поверху. Сучасний ремонт, кондиціонування, паркування включено.', layout: '3 окремих кабінети, конференц-зал, кухня, санвузли.' },
    { id: 3, title: 'Малий офіс для стартапу', address: 'вул. Костельна, 8, Подільський район', area: 50, price: '$800/місяць', type: 'rent', category: 'office', description: 'Компактний офіс для малого бізнесу. Сучасне обладнання, інтернет, телефонія.', layout: 'Один простір з кухонною зоною та санвузлом.' },
    { id: 4, title: 'Офіс у бізнес-центрі "Альфа"', address: 'вул. Богдана Хмельницького, 52, Печерський район', area: 120, price: '$2,500/місяць', type: 'rent', category: 'office', description: 'Офіс з сучасним ремонтом. Вся інфраструктура бізнес-центру: кафе, тренажерний зал, парковка.', layout: '2 кабінети, переговорна, кухня.' },
    { id: 5, title: 'Офіс на Майдані Незалежності', address: 'Майдан Незалежності, 1, Шевченківський район', area: 180, price: '$3,800/місяць', type: 'rent', category: 'office', description: 'Престижна локація у центрі міста. Офіс з видом на Майдан. Люкс ремонт.', layout: '4 кабінети, конференц-зал, кухня, 2 санвузли.' },
    // Оренда нежилих приміщень
    { id: 6, title: 'Магазин у торговому центрі', address: 'вул. Хрещатик, 30, Печерський район', area: 80, price: '$1,500/місяць', type: 'rent', category: 'commercial', description: 'Магазин у популярному торговому центрі. Висока прохідність, готова інфраструктура.', layout: 'Торгова зона, склад, санвузол.' },
    { id: 7, title: 'Кафе/ресторан', address: 'вул. Андріївський узвіз, 5, Подільський район', area: 120, price: '$2,200/місяць', type: 'rent', category: 'commercial', description: 'Готове приміщення для кафе/ресторану. Кухня обладнана, місця для гостей.', layout: 'Зал для гостей, кухня, санвузли, склад.' },
    // Оренда квартир
    { id: 8, title: '2-кімнатна квартира', address: 'вул. Лютеранська, 10, Печерський район', area: 65, price: '$900/місяць', type: 'rent', category: 'apartment', description: 'Сучасна квартира з видом на парк. Меблі, техніка, паркування.', layout: '2 спальні, вітальня, кухня, 1 ванна кімната.' },
    { id: 9, title: '1-кімнатна квартира у центрі', address: 'вул. Франка, 15, Шевченківський район', area: 45, price: '$700/місяць', type: 'rent', category: 'apartment', description: 'Компактна квартира у центрі міста. Все необхідне для комфортного проживання.', layout: '1 спальня, вітальня-кухня, ванна кімната.' },
    // Оренда будинків
    { id: 10, title: 'Котедж у передмісті', address: 'Ірпінь, вул. Лісна, 25', area: 250, price: '$2,500/місяць', type: 'rent', category: 'house', description: 'Сучасний котедж з басейном. Великий двір, гараж, все обладнано.', layout: '4 спальні, гостинна, кухня, 3 ванні кімнати, гараж.' },
    // Продаж нежилих приміщень
    { id: 11, title: 'Магазин на продаж', address: 'вул. Костельна, 45, Подільський район', area: 100, price: '$150,000', type: 'sale', category: 'commercial', description: 'Магазин у хорошому стані. Готовий до роботи. Хороша локація.', layout: 'Торгова зона, склад, санвузол.' },
    // Продаж квартир
    { id: 12, title: '3-кімнатна квартира на продаж', address: 'вул. Лютеранська, 20, Печерський район', area: 95, price: '$250,000', type: 'sale', category: 'apartment', description: 'Квартира у новому будинку. Сучасний ремонт, паркування, вид на парк.', layout: '3 спальні, вітальня, кухня, 2 ванні кімнати.' },
    { id: 13, title: '2-кімнатна квартира', address: 'вул. Франка, 30, Шевченківський район', area: 72, price: '$180,000', type: 'sale', category: 'apartment', description: 'Квартира з видом на вулицю. Тиха локація, поблизу парку.', layout: '2 спальні, вітальня, кухня, 1 ванна кімната.' },
    // Продаж будинків
    { id: 14, title: 'Будинок у Ірпені', address: 'Ірпінь, вул. Лісна, 50', area: 300, price: '$450,000', type: 'sale', category: 'house', description: 'Сучасний будинок з усім необхідним. Великий двір, басейн, гараж.', layout: '5 спалень, гостинна, кухня, 3 ванні кімнати, гараж, басейн.' },
    // Продаж землі
    { id: 15, title: 'Земельна ділянка', address: 'Ірпінь, вул. Садова, 100', area: 1000, price: '$80,000', type: 'sale', category: 'land', description: 'Земельна ділянка для будівництва. Хороша локація, вся інфраструктура.', layout: 'Прямокутна форма, рівна поверхня, доступ до дороги.' },
    { id: 16, title: 'Земельна ділянка у центрі', address: 'Київ, вул. Костельна, 60', area: 500, price: '$200,000', type: 'sale', category: 'land', description: 'Земельна ділянка у центральній частині міста. Комерційна зона.', layout: 'Прямокутна форма, доступ з двох сторін.' },
];

const articles = [
    { id: 1, title: 'Ніколи не купуйте квартиру у пенсіонерів, поки не зробите це', excerpt: 'Дізнайтеся про пастки при купівлі квартири у пенсіонерів. Чек-лист захисту від ріелтора Павленко з 13+ років досвіду.', date: '31 березня 2026', category: 'Поради при купівлі', emoji: '🏠', content: 'Ви шукаєте квартиру у Києві за хорошою ціною? Бачите оголошення: «Мила бабуся продає затишну одиничку на Нивках, ціна трохи нижча за ринок»? Для багатьох це виглядає як вдача. Для мене, як для ріелтора з 13-річним стажем, це — червоний прапор розміром з дев'ятиповерхівку.' },
    { id: 2, title: 'Продати квартиру по безналу — це безпечно та вигідно?', excerpt: 'Чому продаж квартири по безналу у 2026 році — це часто надійніше, ніж «валіза з грошима». Рішення для страхів продавців.', date: '30 березня 2026', category: 'Поради при продажу', emoji: '💰', content: 'Зараз у Києві справжній бум покупців із житловими сертифікатами. Але я часто чую від власників: «Мені потрібна готівка в доларах». Давайте розберемо головні страхи продавців.' },
    { id: 3, title: '«Ексклюзив» — це не кайдани. Чому договір з ріелтором — це ваша перевага', excerpt: 'Чому договір з ріелтором — це ваша перевага. Як управління попитом допомагає продати квартиру дорожче.', date: '29 березня 2026', category: 'Поради при продажу', emoji: '📋', content: 'Давайте чесно: у Києві більшість власників бояться договору з ріелтором як вогню. Я в нерухомості з 2013-го. Бачив усе: від повного штилю на ринку до «хапуг».' },
    { id: 4, title: 'Як війна змінила наше поняття про Дім', excerpt: 'Які критерії вибору квартири змінилися після війни? Дізнайтеся від ріелтора про нові цінності при виборі житла.', date: '28 березня 2026', category: 'Поради при виборі', emoji: '🏡', content: 'Були часи, коли «елітність» квартири в Києві визначалася кількістю мармуру в під'їзді та позолотою на багетах. Потім прийшов ковід, а за ним — велика війна. І все розсипалося, як картковий будинок.' },
];

const reviews = [
    { id: 1, author: 'Татяна Томіліна', position: 'Клієнтка', text: 'Всім добрий день. Якщо ви підсвідомо вірите у диво і чекаєте на нього- спробуйте звернутися до Території Щастя. Це - набагато більше, ніж просто бізнес. Нас робить щасливими справжній інтерес іншої людини до нашого всесвіту. Андрій, дякую за глибоке некомерційне спілкування, з якого виходить найкращий комерційний результат! Радж всім.', rating: 5 },
    { id: 2, author: 'Кристик Статник', position: 'Клієнтка', text: 'Дякую, Андрію, за швидку роботу та підбір саме тієї пропозиції, яка підходить індивідуальним потребам клієнта! так тримати!', rating: 5 },
    { id: 3, author: 'Іван Петренко', position: 'Директор ТОВ "Інновація"', text: 'Дякую за професійний підхід! Допоміг мені знайти ідеальний офіс за 2 тижні. Все було просто і прозоро.', rating: 5 },
    { id: 4, author: 'Марія Коваленко', position: 'Власниця кафе "Смак"', text: 'Чудовий агент! Знайшла для мене найкращу локацію для кафе. Рекомендую всім!', rating: 5 },
    { id: 5, author: 'Олег Сидоренко', position: 'Генеральний директор ООО "Технолог"', text: 'Професіонал своєї справи. Допоміг з усіма деталями, без прихованих комісій. Дуже задоволений!', rating: 5 },
    { id: 6, author: 'Анна Шевченко', position: 'Власниця магазину', text: 'Швидко знайшла потрібне приміщення. Агент дуже уважний до деталей. Спасибі!', rating: 5 },
];

// State
let currentPage = 'home';
let typeFilter = 'all';
let categoryFilter = 'all';

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
                        <div class="number">250+</div>
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
