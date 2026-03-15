(function () {
  var storedTheme = window.localStorage.getItem('extensionchecker-theme');
  var theme = storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system' ? storedTheme : 'system';
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var resolved = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = theme;
})();
