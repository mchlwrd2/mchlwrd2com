document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('sidebar-nav');

  // 1. RE-ENABLE TRANSITIONS
  // Wait a moment for the DOM to settle, then enable animations
  setTimeout(() => {
    document.body.classList.remove('preload-transitions');
  }, 100);

  // 2. CLICK HANDLER
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      // Toggle the class
      nav.classList.toggle('collapsed');
      
      // Update ARIA attribute
      const isCollapsed = nav.classList.contains('collapsed');
      toggleBtn.setAttribute('aria-expanded', !isCollapsed);

      // 3. INTELLIGENT SAVING
      // Only save the preference if we are on Desktop.
      // If on Mobile, we treat the menu as "always closed by default", so we don't save.
      if (window.innerWidth >= 768) {
        localStorage.setItem('navState', isCollapsed ? 'collapsed' : 'expanded');
      }
    });
  }
});