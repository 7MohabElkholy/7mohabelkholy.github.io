(function() {
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    var icon = themeToggle.querySelector('i');
    if (document.documentElement.classList.contains('dark-theme')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
    themeToggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark-theme');
      var isDark = document.documentElement.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
    });
  }

  var mobileBtn = document.getElementById('mobileMenuBtn');
  var closeBtn = document.getElementById('closeMenuBtn');
  var overlay = document.getElementById('mobileMenuOverlay');
  if (mobileBtn && closeBtn && overlay) {
    var mobileLinks = document.querySelectorAll('.mobile-nav-link');
    var toggleMenu = function() { overlay.classList.toggle('active'); };
    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', toggleMenu);
    }
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.bento-card, .project-card, .section-header, .case-study-section, .feature-card').forEach(function(el) {
    observer.observe(el);
  });
})();
