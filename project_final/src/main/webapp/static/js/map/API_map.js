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
      content: `<div id="${position.mk_seq}" class="marker"> <span class="title">${position.mk_name}</span> </div>`,
      yAnchor: 1,
    });

    customOverlays.push(customOverlay);
    /**
     * 마커 클릭 이벤트. (따로뜯을경우 매개변수들을 넣어줘야됨. 결론: 분리안함)
     *    : 마커마다 click이벤트를 걸어주는게 가장 현실적인 방안.
     *    : 마커set할때 이벤트를 다 걸어놓음
     * 1. 마커위 타이틀출력 (오버레이)
     * 2. 우측리스트박스 상단에 타이틀 출력
     * 3. 이미지카드list를 우측리스트박스에 출력.
     */
    kakao.maps.event.addListener(marker, "click", () => {
      setImgCardList();
      // 1. 선택한 마커타이틀만 출력
      customOverlays.forEach((mkTitle) => {
        mkTitle.setMap(null);
      });
      customOverlay.setMap(map);
      // 2. 리스트박스에 타이틀 출력
      const side_right = document.querySelector(".side_right");
      const listTitle = document.querySelector(
        ".side_right .sns.listTitle label"
      );
      listTitle.textContent = position.mk_name;
      side_right.setAttribute("data-mkseq", position.mk_seq);
      // 3. 리스트박스에 이미지list 출력
      selectImgCards();
    });
  };

  /**
   * right_side 에 CardList 를 출력할때 호출 할 메서드
   */
  const selectImgCards = () => {
    let sideright_mkseq = document.querySelector(".side_right").dataset.mkseq;
    fetch(`${rootPath}/posts/postlist/${sideright_mkseq}`)
      .then((response) => response.json()) // response.json()은 응답 데이터를 JSON 개체로 변환하는 작업
      .then((jsonList) => {
        const imgCardList = document.querySelector(
          ".side_right .sns.imgCardList"
        );
        const imgCardtemp = document.querySelector(
          ".sideImgCard .sns.imgCardList .sns.imgCard"
        );
        console.log(jsonList);
        console.log(imgCardtemp);
        // 이미지카드 템플릿을 준비한다.
        // list의 내용을 지운다.
        imgCardList.innerHTML = "";
        // 이미지카드를 반복하면서 생성(복사) 세팅한다.

        jsonList.forEach((imgcard) => {
          const copiedimgCardtemp = imgCardtemp.cloneNode(true);
          let cardTitle = copiedimgCardtemp.querySelector(".card.text");
          let imgTag = copiedimgCardtemp.querySelector("img");
          let spanTag = copiedimgCardtemp.querySelector("span");

          const mainImg = imgcard?.sp_imgs[0]?.spi_uploaduri;

          imgTag.src = `${rootPath}/files/${mainImg}`;
          cardTitle.innerHTML = imgcard.sp_title;
          imgCardList.appendChild(copiedimgCardtemp);
          // console.log(imgcard);
          console.log(copiedimgCardtemp);
        });

        const copiedimgCardtemp = imgCardtemp.cloneNode(true);
      });
  };

  /**
   * form 의 POST submit을 javaScript에서 처리.
   * button에 연결할 이벤트.
   */
  const submitForm = () => {
    const form = document.querySelector(".side_right form");
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("성공!");
          const response = JSON.parse(xhr.responseText); // 서버로부터 받은 JSON 데이터 파싱
          console.log(response.result);
          // 성공하면 리스트폼을 셋팅해주고, 이미지카드 리스트를 로드한다.
          setImgCardList();
          selectImgCards();
        } else {
          console.error("오류 발생");
        }
      }
    };

    xhr.open("POST", form.action, true);
    xhr.send(formData);
  };
  /**
   * 사이드에 div 세팅할
   * 새글 입력 Form
   */
  const setInputForm = () => {
    const sideRight = document.querySelector(".side_right"); // 객체추가삭제 대상.
    const imgCardList = document.querySelector(".side_right .sns.imgCardList"); // del : 이미지리스트
    const inputForm = document.querySelector(".sideInputForm form"); // add : 입력폼

    if (sideRight.dataset.mkseq == null) {
      alert("마커를 선택해 주세요.");
      return;
    }

    if (imgCardList != null) {
      sideRight.removeChild(imgCardList);
      const copiedForm = inputForm.cloneNode(true); // 복사해서 appendChild
      sideRight.appendChild(copiedForm);
    }

    let hiddenMkseq = document.querySelector(".side_right form #sp_mkseq");
    hiddenMkseq.value = sideRight.dataset.mkseq; // mkseq 세팅
    console.log(hiddenMkseq.value);
    const insertButton = document.querySelector(".side_right form button");
    console.log(insertButton);
    insertButton.addEventListener("click", submitForm);
  };
  /**
   * 사이드에 div 세팅할
   * 글(이미지카드) 리스트 보이기 위한 템플릿(?)
   */
  const setImgCardList = () => {
    const sideRight = document.querySelector(".side_right"); // 객체추가삭제 대상.
    const inputForm = document.querySelector(".side_right form"); // del : 입력폼
    const imgCardList = document.querySelector(".sideImgCard .sns.imgCardList"); // add : 이미지리스트
    if (inputForm != null) {
      sideRight.removeChild(inputForm);
      const copiedImgCardList = imgCardList.cloneNode(true); // 복사해서 appendChild
      sideRight.appendChild(copiedImgCardList);
    }
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
      if (markType.innerHTML == "글쓰기") {
        setInputForm();
      } else {
        setImgCardList();
        markerClear();
      }
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
