document.addEventListener('DOMContentLoaded', function() {
    console.log('AP Realty Kyiv - Сайт завантажено!');
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Дякуємо за ваше повідомлення! Ми з вами скоро зв\'яжемося.');
            form.reset();
        });
    }
});
