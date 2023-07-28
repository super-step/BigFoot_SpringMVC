document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btnModal = document.getElementById("btn-modal");
  const closeBtn = modal.querySelector(".my_modal_close_area");
  closeBtn.addEventListener("click", (e) => {
    modal.style.display = "none";
    const urlParams = new URLSearchParams(window.location.search);
    let myChangeValue = urlParams.get("myChangeValue");
    console.log(myChangeValue);
  });
  window.addEventListener("keyup", (e) => {
    if (modal.style.display === "flex" && e.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
