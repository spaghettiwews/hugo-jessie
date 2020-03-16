document.addEventListener("DOMContentLoaded", function() {
  let body = document.querySelector("body");
  let theme = getFromLocal("theme");
  let toggle = document.querySelector("input[name='theme-toggle']");
  body.classList.add(theme);
  toggle.addEventListener("change", function() {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    if (this.checked) {
      saveToLocal("theme", "dark");
    } else {
      saveToLocal("theme", "light");
    }
  });

  if (theme === "dark") {
    toggle.setAttribute("checked", "checked");
  }
});

const saveToLocal = function(name, value) {
  if (localStorage) {
    localStorage.setItem(name, JSON.stringify(value));
  }
};

const getFromLocal = function(name) {
  if (localStorage && localStorage.getItem(name) !== null) {
    return JSON.parse(localStorage.getItem(name));
  } else {
    return "light";
  }
};

window.addEventListener("load", function() {
  document.querySelector(".theme-toggle").classList.add("visible");
});
