
document.addEventListener("DOMContentLoaded", function () {
  console.log("P.O. Music is ready!");

  const buttons = document.querySelectorAll("nav a");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Opening: " + button.textContent);
    });
  });
});

