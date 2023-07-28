document.addEventListener("DOMContentLoaded", () => {
  const nowMap = document?.getElementById("detail_imgMap_container");
  let nowMap_name = nowMap?.dataset.map;
  const detail_imgMap = nowMap?.querySelectorAll(
    `div#detail_imgMap_container map[name='${nowMap_name}-map'] area`
  );
  console.log(detail_imgMap);
  for (let area of detail_imgMap) {
    area?.addEventListener("click", () => {
      let gotoAPI = area.getAttribute("title");
      location.href = `${rootPath}/map/api?name=${gotoAPI}`;
    });
  }
});
