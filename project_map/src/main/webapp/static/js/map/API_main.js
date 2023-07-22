const nav_sns_all = document.getElementById("nav_sns_all");
const nav_sns_fes = document.getElementById("nav_sns_fes");
const nav_sns_travel = document.getElementById("nav_sns_travel");
const nav_sns_res = document.getElementById("nav_sns_res");

nav_sns_all.addEventListener("click", () => {
  location.replace(`../views/API_map.html?type=0&name=${area.name}`);
});
nav_sns_fes.addEventListener("click", () => {
  location.replace(`../views/API_map.html?type=1&name=${area.name}`);
});
nav_sns_travel.addEventListener("click", () => {
  location.replace(`../views/API_map.html?type=2&name=${area.name}`);
});
nav_sns_res.addEventListener("click", () => {
  location.replace(`../views/API_map.html?type=3&name=${area.name}`);
});
