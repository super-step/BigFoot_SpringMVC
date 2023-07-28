document.addEventListener("DOMContentLoaded", () => {
  const img_areas = document.querySelectorAll(`map#main_ImageMap area`);
  const imgs = document.querySelectorAll(`.map_container img[id]`);
  // console.log(img_areas);
  // console.log(imgs);
  for (let area of img_areas) {
    let map_name = area.getAttribute("title");
    area.addEventListener("mouseover", () => {
      for (let img of imgs) {
        if (img.getAttribute("id") === `map_${map_name}`) {
          img.style.opacity = 0;
        }
      }
    });
    area.addEventListener("mouseout", () => {
      for (let img of imgs) {
        if (img.getAttribute("id") === `map_${map_name}`) {
          img.style.opacity = 0.5;
        }
      }
    });
    area.addEventListener("click", () => {
      let level = area.dataset.level;
      if (level === "2") {
        location.href = `${rootPath}/map/sub?name=${map_name}`;
      } else if (level === "1") {
        location.href = `${rootPath}/map/api?name=${map_name}`;
      } else {
        alert("알수없음");
      }
    });
  }
});
