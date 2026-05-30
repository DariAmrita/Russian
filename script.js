/**
 * Плавная прокрутка к блоку контактов по кнопке «Связаться со мной»
 */
(function () {
  'use strict';

  const contactButton = document.querySelector('[data-scroll-to="contact"]');
  const contactSection = document.getElementById('contact');

  if (!contactButton || !contactSection) {
    return;
  }

  contactButton.addEventListener('click', function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    contactSection.setAttribute('tabindex', '-1');
    contactSection.focus({ preventScroll: true });
  });
})();
