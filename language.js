const translations = {
  en: null,
  es: null
};

// Cargar archivos JSON
fetch('/locales/en/translation.json')
  .then(response => response.json())
  .then(data => translations.en = data)
  .catch(error => console.error('Error loading English translations:', error));

fetch('/locales/es/translation.json')
  .then(response => response.json())
  .then(data => translations.es = data)
  .catch(error => console.error('Error loading Spanish translations:', error));

function updateContent(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = t[key] || element.innerHTML;
  });
  document.querySelectorAll('[data-i18n-src]').forEach(element => {
    const key = element.getAttribute('data-i18n-src');
    element.src = t[key] || element.src;
  });

  // Actualiza el texto del botón según el idioma actual
  const languageSwitcher = document.getElementById('language-switcher');
  if (lang === 'en') {
    languageSwitcher.innerText = 'Español';
    document.querySelectorAll('.main-desktop').forEach(element => {
      element.classList.add('en-class');
      element.classList.remove('es-class');
    });
    document.querySelectorAll('.main-mobile').forEach(element => {
      element.classList.add('en-class');
      element.classList.remove('es-class');
    });
    document.querySelectorAll('.title-container').forEach(element => {
      element.classList.add('title-en');
      element.classList.remove('title-es');
    });
    document.querySelectorAll('.supporters-mobile').forEach(element => {
      element.classList.add('supporters-en');
      element.classList.remove('supporters-es');
    });
    document.querySelectorAll('.faqs-desktop').forEach(element => {
      element.classList.add('faqs-en');
      element.classList.remove('faqs-es');
    });
    document.querySelectorAll('.faqs-mobile').forEach(element => {
      element.classList.add('faqs-en');
      element.classList.remove('faqs-es');
    });

  } else {
    languageSwitcher.innerText = 'English';
    document.querySelectorAll('.main-desktop').forEach(element => {
      element.classList.add('es-class');
      element.classList.remove('en-class');
    });
    document.querySelectorAll('.main-mobile').forEach(element => {
      element.classList.add('es-class');
      element.classList.remove('en-class');
    });
    document.querySelectorAll('.title-container').forEach(element => {
      element.classList.add('title-es');
      element.classList.remove('title-en');
    });
    document.querySelectorAll('.supporters-mobile').forEach(element => {
      element.classList.add('supporters-es');
      element.classList.remove('supporters-en');
    });
    document.querySelectorAll('.faqs-desktop').forEach(element => {
      element.classList.add('faqs-es');
      element.classList.remove('faqs-en');
    });
    document.querySelectorAll('.faqs-mobile').forEach(element => {
      element.classList.add('faqs-es');
      element.classList.remove('faqs-en');
    });
  }
}


// Inicializa el contenido en inglés por defecto
document.addEventListener('DOMContentLoaded', () => updateContent('en'));

// Cambio de idioma
document.getElementById('language-switcher').addEventListener('click', () => {
  const currentLang = document.getElementById('language-switcher').innerText === 'Español' ? 'es' : 'en';
  updateContent(currentLang);
});
