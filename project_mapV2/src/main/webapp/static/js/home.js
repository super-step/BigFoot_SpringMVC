document.addEventListener("DOMContentLoaded", () => {
  const main_ham_ckeck = document.querySelector('input[id="main_ham_trigger"]');
  const main_ham = document.querySelector('label[for="main_ham_trigger"]');
  const main_nav = document.querySelector("div.main_nav ul");
  main_ham.addEventListener("click", () => {
    // alert("클릭함");
    if (!main_ham_ckeck.checked) {
      // alert("체크됨");
      main_nav.classList.add("main_nav_open");
    } else if (main_ham_ckeck.checked) {
      main_nav.classList.remove("main_nav_open");
    }
  });
});
