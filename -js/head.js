// head.js

// include header/footer
fetch("/-header.html")
  .then((response) => response.text())
  .then((data) => document.body.insertAdjacentHTML('afterbegin', data));
fetch("/-footer.html")
  .then((response) => response.text())
  .then((data) => document.body.insertAdjacentHTML('beforeend', data));

// katex
document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false},
    ]
  });
});