(function () {
  const body = document.body;
  const themeIcon = () => document.querySelectorAll(".theme-toggle .theme-icon");

  const preferredTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    body.setAttribute("data-theme", theme);
    themeIcon().forEach((el) => {
      el.textContent = theme === "dark" ? "☀︎" : "☾";
    });
  };

  const toggleTheme = () => {
    const next = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  const init = () => {
    applyTheme(preferredTheme());
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

