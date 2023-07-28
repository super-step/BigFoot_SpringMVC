document.addEventListener("DOMContentLoaded", () => {
  let makers = []; // 마커 리스트
  let nowType = 0;

  let customOverlays = []; // 커스텀 오버레이 리스트
  const markerClear = () => {
    makers.forEach((marker) => {
      marker.setMap(null);
    });
    customOverlays.forEach((element) => {
      element.setMap(null);
    });
  };

  const markerSet = (position, makers) => {
    var imageSize = new kakao.maps.Size(24, 35);
    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
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
    kakao.maps.event.addListener(marker, "click", () => {
      // 커스텀 오버레이를 전부 닫고
      customOverlays.forEach((element) => {
        element.setMap(null);
      });
      customOverlay.setMap(map);
    });
  };

  // var container = document.querySelector(".API_map");
  // const nav_sns_all = document?.getElementById("nav_sns_all");
  // const nav_sns_fes = document?.getElementById("nav_sns_fes");
  // const nav_sns_travel = document?.getElementById("nav_sns_travel");
  // const nav_sns_res = document?.getElementById("nav_sns_res");
  const API_nav_container = document.querySelector(".API_nav_container");
  let publicPosition = [];
  API_nav_container.addEventListener("click", (e) => {
    let markType = e.target;

    console.table(publicPosition);
    if (e.target.tagName === "LI") {
      markerClear();
      if (markType.innerHTML == "전체") {
        publicPosition.forEach((pos) => {
          markerSet(pos, makers);
        });
      }
      // console.log(markType.innerHTML);
      else if (markType.innerHTML == "축제") {
        const result = publicPosition.filter((item, index) => {
          console.log("item", item);
          return item.mk_type === 1;
        });
        result.forEach((pos) => {
          markerSet(pos, makers);
        });
      } else if (markType.innerHTML == "관광지") {
        const result = publicPosition.filter((item, index) => {
          console.log("item", item);
          return item.mk_type === 2;
        });
        result.forEach((pos) => {
          markerSet(pos, makers);
        });
      } else if (markType.innerHTML == "식당") {
        const result = publicPosition.filter((item, index) => {
          console.log("item", item);
          return item.mk_type === 3;
        });
        result.forEach((pos) => {
          markerSet(pos, makers);
        });
      }
    }
  });

  let container = document?.querySelector(".API_map"); // 지도를 표시할 div
  let mapOption = {
    center: new kakao.maps.LatLng(
      container.dataset.lati,
      container.dataset.longi
    ), // 지도의 중심좌표
    level: container.dataset.level,

    // 지도의 확대 레벨
  };
  console.log(container.dataset.lati);
  console.log(container.dataset.longi);
  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  let map = new kakao.maps.Map(container, mapOption);

  /***************************************
    마커 관련 부분 시작 
  */
  // fetch(`${rootPath}/mark_list?name=${container.dataset.name}`) // 요청
  //   .then((response) => response.json()) // 응답한 데이터 중 JSON 만 추출
  //   .then((result) => {
  //     console.log(result);
  //   });
  var imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  // let typeClickEvent = (e, i) => {
  //   let markType = e.target;
  //   if (e.target.tagName === "LI") {
  //     // console.log(markType.innerHTML);
  //     if (markType.innerHTML == "축제") {
  //       nowType = 1;
  //       i = -1;
  //     }
  //   }
  // };

  // API_nav_container.addEventListener("click", typeClickEvent);
  // if (nowType == 0) {
  //   console.log(positions[i].mk_type);
  // } else if (positions[i].mk_type !== nowType) {
  //   console.log(nowType);
  //   continue;
  // }

  fetch(`${rootPath}/map/mark_list?name=${container.dataset.name}`)
    .then((response) => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
    .then((positions) => {
      console.log("전체위치", positions);
      publicPosition = [...positions];

      console.log("public", publicPosition);
      positions.forEach((position) => {
        markerSet(position, makers);
      });
      console.log(makers);

      /*
        API_nav_container.addEventListener("click", (e, i) => {
          let markType = e.target;
          if (e.target.tagName === "LI") {
            // console.log(markType.innerHTML);
            if (markType.innerHTML == "축제") {
              console.log(markType);
              nowType = 1;
              i = -1;
            }
          }
        });
        // if (paramType == "0") {
        //   console.log(paramType);
        //   console.log(positions[i]);
        // } else if (paramType != positions[i].type) {
        //   console.log(paramType);
        //   continue;
        // }
        // 마커 이미지의 이미지 크기 입니다
        if (nowType === 0) {
          console.log(positions[i].mk_type);
          console.log("현재 type 은? {} ", nowType);
        } else if (positions[i].mk_type !== nowType) {
          console.log("현재 type 은? {} ", nowType);
          console.log(positions[i].mk_type);
          continue;
        }
        */
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
