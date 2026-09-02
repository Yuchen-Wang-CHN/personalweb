const languageButtons = document.querySelectorAll('[data-language]');
const translatedElements = document.querySelectorAll('[data-en][data-zh]');

function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';

  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

document.querySelector('#year').textContent = new Date().getFullYear();
