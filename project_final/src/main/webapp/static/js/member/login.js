document.addEventListener("DOMContentLoaded", () => {
  // 하단 text 클릭 : 회원가입, 아이디/비밀번호 찾기

  //   아이디 비밀번호 찾기 모달시작
  document.querySelector("#more_text").addEventListener("click", (e) => {
    const menu = e.target;
    if (menu.id === "login_join") {
      document.location.href = "./join.jsp";
    }
  });
  // 하단 text 클릭 : 회원가입, 아이디/비밀번호 찾기
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");
  const btnOpenPopup = document.querySelector(".btn-open-popup");
  const btnCloseModal = document.querySelector(".modal_body_close_button"); // 닫기 버튼을 가져옵니다.

  btnOpenPopup.addEventListener("click", () => {
    modal.classList.add("show"); // toggle 대신 add를 사용하여 모달을 표시합니다.
    body.style.overflow = "hidden";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === btnCloseModal) {
      closeModal(); // 닫기 버튼을 클릭했을 때만 모달을 닫도록 합니다.
    }
  });

  btnCloseModal.addEventListener("click", () => {
    closeModal(); // 닫기 버튼을 클릭했을 때 모달을 닫도록 합니다.
  });

  function closeModal() {
    modal.classList.remove("show");
    body.style.overflow = "auto";
  }
  //   모달 끝
});
