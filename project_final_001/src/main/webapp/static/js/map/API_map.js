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

        imgCardList.innerHTML = "";
        jsonList.forEach((imgcard) => {
          const copiedimgCardtemp = imgCardtemp.cloneNode(true);
          let cardTitle = copiedimgCardtemp.querySelector(".card.text");
          let imgTag = copiedimgCardtemp.querySelector("img");
          let spanTag = copiedimgCardtemp.querySelector("span");

          const mainImg = imgcard?.sp_imgs[0]?.spi_uploaduri;
          if (mainImg == null) {
            imgTag.src = `${rootPath}/static/image/image/img_book_none.png`;
          } else {
            imgTag.src = `${rootPath}/files/${mainImg}`;
          }
          cardTitle.innerHTML = imgcard.sp_title;
          imgCardList.appendChild(copiedimgCardtemp);

          /**
           * imgCard를 클릭했을때 Detail을 보여줘야 한다.
           * click Event 추가
           */
          copiedimgCardtemp.addEventListener("click", () => {
            // console.log(imgcard?.sp_imgs);
            // imgcard?.sp_imgs.forEach((spimg) => {
            //   console.log(spimg.spi_uploaduri);
            // });
            setDetailtmp(); // 우측사이드바 detail 템플릿으로 초기화
            joinDetail(imgcard); // detail에 imgcard를 담아보내서 데이터 세팅
          });
        });
      });
  };
  /**
   * 초기화된 Detail 템플릿에 이미지,값 들을 셋팅(join)한다.
   * @param {*} imgcard : json으로 가져온 list중 클릭한 객체의 데이터
   */
  const joinDetail = (imgcard) => {
    console.log(imgcard);
    const detailTitle = document.querySelector(
      ".side_right .sns.detail .detail.title"
    );
    const detailText = document.querySelector(
      ".side_right .sns.detail .detail.text"
    );
    const detailImg = document.querySelector(
      ".side_right .sns.detail .detail.imgList"
    );
    const imgTagTmp = document.querySelector(
      ".sideDetail .sns.detail .detail.imgList .detail.img"
    );
    detailTitle.textContent = imgcard.sp_title;
    detailText.textContent = imgcard.sp_content;
    detailImg.innerHTML = ""; //img 초기화
    imgcard?.sp_imgs.forEach((spimg) => {
      let copiedImgTagTmp = imgTagTmp.cloneNode(true);
      copiedImgTagTmp.querySelector(
        "img"
      ).src = `${rootPath}/files/${spimg.spi_uploaduri}`;
      detailImg.appendChild(copiedImgTagTmp);
    });
  };
  /**
   * 사이드에 div 세팅할
   * 글(이미지카드) Detail 템플릿(?)
   */
  const setDetailtmp = () => {
    const sideRight = document.querySelector(".side_right"); // 객체추가삭제 대상.
    const inputForm = document.querySelector(".side_right form"); // del : 입력폼
    const detailtmp = document.querySelector(".sideDetail .sns.detail"); // add : detail tmp
    const imgCardList = document.querySelector(".side_right .sns.imgCardList"); // del : 이미지리스트
    if (document.querySelector(".side_right .sns.detail") == null) {
      inputForm?.remove();
      imgCardList?.remove();
      const copiedDetailtmp = detailtmp.cloneNode(true); // 복사해서 appendChild
      sideRight.appendChild(copiedDetailtmp);
    }
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
    const detailtmp = document.querySelector(".side_right .sns.detail"); // del : detail tmp
    const inputForm = document.querySelector(".sideInputForm form"); // add : 입력폼
    if (sideRight.dataset.mkseq == null) {
      alert("마커를 선택해 주세요.");
      return;
    }
    if (document.querySelector(".side_right form") == null) {
      imgCardList?.remove();
      detailtmp?.remove();
      const copiedForm = inputForm.cloneNode(true); // 복사해서 appendChild
      sideRight.appendChild(copiedForm);
    }
    let hiddenMkseq = document.querySelector(".side_right form #sp_mkseq");
    hiddenMkseq.value = sideRight.dataset.mkseq; // mkseq 세팅

    const insertButton = document.querySelector(".side_right form button");
    const sp_images = document.querySelector(
      ".side_right form #inputImageBox input[name='sp_images']"
    );
    sp_images.addEventListener("change", setThumbnail); // 미리보기 이벤트 add
    insertButton.addEventListener("click", submitForm); // form commit이벤트 add
  };
  /**
   * 사이드에 div 세팅할
   * 글(이미지카드) 리스트 보이기 위한 템플릿(?)
   */
  const setImgCardList = () => {
    const sideRight = document.querySelector(".side_right"); // 객체추가삭제 대상.
    const inputForm = document.querySelector(".side_right form"); // del : 입력폼
    const detailtmp = document.querySelector(".side_right .sns.detail"); // del : detail tmp
    const imgCardList = document.querySelector(".sideImgCard .sns.imgCardList"); // add : 이미지리스트
    if (document.querySelector(".side_right .sns.imgCardList") == null) {
      inputForm?.remove();
      detailtmp?.remove();
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

  const setThumbnail = (event) => {
    for (var image of event.target.files) {
      var reader = new FileReader();

      reader.onload = function (event) {
        var img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        img.setAttribute("class", "preimg");
        document.querySelector("div#image_container").appendChild(img);
      };

      console.log(image);
      reader.readAsDataURL(image);
    }
  };
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
