(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var drawer = document.querySelector('[data-site-nav]');
  var closeButton = document.querySelector('[data-menu-close]');
  var backdrop = document.querySelector('[data-menu-backdrop]');
  var mobileQuery = window.matchMedia('(max-width: 1023px)');
  var lastFocusedElement = null;
  var isOpen = false;

  if (!toggle || !drawer || !closeButton || !backdrop) return;

  function setDrawerInert(inert) {
    if (inert) {
      drawer.setAttribute('inert', '');
    } else {
      drawer.removeAttribute('inert');
    }
  }

  function openMenu() {
    if (!mobileQuery.matches) return;

    isOpen = true;
    lastFocusedElement = document.activeElement === document.body ? toggle : document.activeElement;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    drawer.setAttribute('data-open', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('data-open', 'true');
    backdrop.setAttribute('aria-hidden', 'false');
    setDrawerInert(false);
    document.body.classList.add('menu-open');
    window.requestAnimationFrame(function () {
      closeButton.focus();
    });
  }

  function closeMenu(returnFocus) {
    isOpen = false;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    drawer.setAttribute('data-open', 'false');
    backdrop.setAttribute('data-open', 'false');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');

    if (mobileQuery.matches) {
      drawer.setAttribute('aria-hidden', 'true');
      setDrawerInert(true);
    } else {
      drawer.setAttribute('aria-hidden', 'false');
      setDrawerInert(false);
    }

    if (returnFocus && lastFocusedElement) lastFocusedElement.focus();
  }

  function trapFocus(event) {
    if (!isOpen || event.key !== 'Tab') return;

    var focusable = drawer.querySelectorAll('a[href], button:not([disabled])');
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && (document.activeElement === first || !drawer.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function syncLayout() {
    closeMenu(false);
  }

  toggle.addEventListener('click', function () {
    if (isOpen) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  closeButton.addEventListener('click', function () {
    closeMenu(true);
  });

  backdrop.addEventListener('click', function () {
    closeMenu(true);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    trapFocus(event);
  });

  drawer.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu(false);
  });

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener('change', syncLayout);
  } else {
    mobileQuery.addListener(syncLayout);
  }

  syncLayout();
}());
