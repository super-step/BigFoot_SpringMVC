document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function (e) {
    $.fn.maphilight.defaults = {
      fill: true, //이미지맵 링크에 마우스가 올라오면 색을 넣을 건지 여부
      fillColor: "ff9600", // 색상지정
      fillOpacity: 0.5, // 투명도 지정 0~1
      stroke: false, // border를 넣을건지 여부 false로 설정하면 이하 옵션 무시됨
      strokeColor: "ffffff", //border 색상
      strokeOpacity: 1, //border 투명도
      strokeWidth: 2, //border 폭
    };
    $("img[usemap]").maphilight();
  });
});
