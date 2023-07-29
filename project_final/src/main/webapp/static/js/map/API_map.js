document.addEventListener("DOMContentLoaded", () => {
  let makers = []; // 마커 리스트 (맵에 뿌려줄 마커 객체)
  let publicPosition = []; // 마커 리스트 (API에서 가져온 Maker의 리스트)
  let customOverlays = []; // 마커상단 제목DIV 리스트  (커스텀 오버레이)
  const imageSrcList = [
    `${rootPath}/static/image/icon/pin_1.png`,
    `${rootPath}/static/image/icon/pin_1.png`,
    `${rootPath}/static/image/icon/pin_2.png`,
    `${rootPath}/static/image/icon/pin_3.png`,
  ];
  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 마커이미지(안씀)

  /**
   * 카카오맵 Marker 지우는 함수
   */
  const markerClear = () => {
    makers.forEach((marker) => {
      marker.setMap(null);
    });
    customOverlays.forEach((mkTitle) => {
      mkTitle.setMap(null);
    });
  };

  /**
   * API에서 가져온 객체를 makers(카카오맵에서 사용할) 리스트에 세팅해서 집어넣기.
   * @param {*} position  : API에서 가져온 publicPosition 의 단일 객체
   * @param {*} makers  : 마커List - 마커를 집어넣을
   */
  const markerSet = (position, makers) => {
    var imageSize = new kakao.maps.Size(30, 30);
    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrcList[position.mk_type],
      imageSize
    );
    let markerPos = new kakao.maps.LatLng(position.mk_lati, position.mk_longi);
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: markerPos, // 마커를 표시할 위치
      image: markerImage, // 마커 이미지
      title: position.mk_name,
      clickable: true,
    });
    makers.push(marker);
    // 마커에 표시할 커스텀 오버레이 생성.
    let customOverlay = new kakao.maps.CustomOverlay({
      position: markerPos,
      content: `<div id="${position.mk_name}" class="marker"> <span class="title">${position.mk_name}</span> </div>`,
      yAnchor: 1,
    });

    customOverlays.push(customOverlay);
    kakao.maps.event.addListener(marker, "click", markerClickHandler);
  };

  const markerClickHandler = () => {
    // 커스텀 오버레이(마커타이틀)를 전부 닫고
    // 선택한 마커타이틀만 출력
    customOverlays.forEach((mkTitle) => {
      mkTitle.setMap(null);
    });
    customOverlay.setMap(map);
  };

  /**
   * 맵상단 메뉴 호출시  markerSet을 호출하며
   * 전체, 축제, 관광지, 식당
   */
  const API_nav_container = document.querySelector(".API_nav_container");
  API_nav_container.addEventListener("click", (e) => {
    let markType = e.target;

    // console.table(publicPosition);
    if (e.target.tagName === "LI") {
      markerClear();
      if (markType.innerHTML == "전체") {
        publicPosition.forEach((pos) => {
          markerSet(pos, makers);
        });
      } else if (markType.innerHTML == "축제") {
        const result = publicPosition.filter((item, index) => {
          return item.mk_type === 1;
        });
        result.forEach((pos) => {
          markerSet(pos, makers);
        });
      } else if (markType.innerHTML == "관광지") {
        const result = publicPosition.filter((item, index) => {
          return item.mk_type === 2;
        });
        result.forEach((pos) => {
          markerSet(pos, makers);
        });
      } else if (markType.innerHTML == "식당") {
        const result = publicPosition.filter((item, index) => {
          // console.log("item", item);
          return item.mk_type === 3;
        });
        result.forEach((pos) => {
          markerSet(pos, makers);
        });
      }
    }
  });

  /************************************************************************
   * 아래부분은 호출시 바로 실행되는 부분. 순서 중요.
   */

  /**
   * 맵을 출력할 DIV를 불러와 맵을 출력.
   * 위도,경도,확대레벨을 설정해서 뿌려줌. ( 값은 DIV가 가지고 있음 : jsp 처리)
   */
  let container = document?.querySelector(".API_map"); // 지도를 표시할 div
  let mapOption = {
    center: new kakao.maps.LatLng(
      container.dataset.lati,
      container.dataset.longi
    ), // 지도의 중심좌표
    level: container.dataset.level, // 지도의 확대 레벨
  };
  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  let map = new kakao.maps.Map(container, mapOption);

  /**
   * 화면을 호출할때 해당 지역의 makerList를 불러와
   * publicPosition, makers을 세팅. (변수 설명은 상단변수 선언부 참조)
   */
  fetch(`${rootPath}/map/mark_list?name=${container.dataset.name}`)
    .then((response) => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
    .then((positions) => {
      publicPosition = [...positions]; // 깊은 복사
      positions.forEach((position) => {
        markerSet(position, makers);
      });
    });
});

// const res = await fetch(`${rootPath}/mark_list?name=${container.dataset.name}`);
// const positions = await res.json();
// console.log(positions);

// // 마커 좌표 데이터 로드
// let positions;

// if (paramName == "gj") {
//   positions = JSON.parse(JSON.stringify(TestFile)).gj;
// } else if (paramName == "Yeosu") {
//   positions = JSON.parse(JSON.stringify(TestFile)).Yeosu;
// }
// console.log(positions);
// 마커 이미지의 이미지 주소입니다

// let customOverlays = []; // 커스텀 오버레이 리스트
// for (var i = 0; i < positions.length; i++) {

//   // 마커 이미지의 이미지 크기 입니다
//   var imageSize = new kakao.maps.Size(24, 35);
//   // 마커 이미지를 생성합니다
//   var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
//   let position = new kakao.maps.LatLng(
//     positions[i].Latitude,
//     positions[i].longitude
//   );
//   // 마커를 생성합니다
//   let marker = new kakao.maps.Marker({
//     map: map, // 마커를 표시할 지도
//     position: position, // 마커를 표시할 위치
//     image: markerImage, // 마커 이미지
//     title: positions[i].name,
//     clickable: true,
//   });
//   makers.push(marker);

// // 마커에 표시할 커스텀 오버레이 생성.
// let customOverlay = new kakao.maps.CustomOverlay({
//   position: position,
//   content: `<div id="${positions[i].name}" class="marker"> <span class="title">${positions[i].name}</span> </div>`,
//   yAnchor: 1,
// });
// customOverlays.push(customOverlay);

// // 마커 클릭 이벤트
// kakao.maps.event.addListener(marker, "click", () => {
//   // 커스텀 오버레이를 전부 닫고
//   customOverlays.forEach((element) => {
//     element.setMap(null);
//   });
//   // Todo : 선택한 마커의 글 리스트를 보여주는 부분을 추가해줘야 됨.
//   const sideCon = document.querySelector(".side_right");
//   const sideList = document.querySelector(".right_list");
//   const titleLable = document.querySelector(".titleLable");
//   // 리스트의 내용 전부 지우기
//   if (sideCon.firstChild) {
//     sideCon.removeChild(sideCon.firstChild);
//   }
//   // while (sideList.firstChild) {
//   //   sideList.removeChild(sideList.firstChild);
//   // }

//   // 글 리스트 불러와서 세팅
//   let totalHTML = "";
//   snsCotents.forEach((element) => {
//     console.log(element.mName);
//     console.log(marker.getTitle());
//     if (element.mName == marker.getTitle()) {
//       const snsboxString = `<div class="sns_box">
//       <div class="sns_img">
//       <img class="img" src="${element.img}" alt="" />
//       </div>
//       <div class="sns_title"><h2>${element.title}</h2></div>
//       </div>`;
//       totalHTML = totalHTML + snsboxString;
//     }
//   });
//   let totalHTML = sideList.innerHTML;
//   const snsboxString = `<div class="sns_box">
//   <div class="sns_img">
//     <img class="img" src="${snsCotents[0].img}" alt="" />
//   </div>
//   <div class="sns_title"><h2>${snsCotents[0].title}</h2></div>
// </div>`;
//   totalHTML = totalHTML + snsboxString;
//   console.log(snsboxString);
//   sideList.innerHTML = totalHTML;

//   titleLable.textContent = marker.getTitle();
//   sideList.appendChild(titleLable);
//   sideList.classList.add("right_showit");
//   sideCon.appendChild(sideList);
//   // 선택한 오버레이를 열어준다.
//   customOverlay.setMap(map);
// });
// }
/*
//   마커 관련 부분 끝
// *****************************************/
