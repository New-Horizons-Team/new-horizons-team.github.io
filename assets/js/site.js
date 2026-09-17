(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var navigation = document.querySelector('[data-site-nav]');

  if (!toggle || !navigation) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    navigation.setAttribute('data-open', 'false');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.setAttribute('data-open', String(!isOpen));
    document.body.classList.toggle('menu-open', !isOpen);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  navigation.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') closeMenu();
  });
}());
