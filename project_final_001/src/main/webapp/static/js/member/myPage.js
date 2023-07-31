document.addEventListener("DOMContentLoaded", () => {
  let myName = document.querySelector(".mPProfileName");
  let myNic = document.querySelector(".mPNowNic");
  let myNicChange = document.querySelector(".mPNicChange");
  let myLogout = document.querySelector(".mPProfileLogout");
  let myPWChange = document.querySelector(".mPPWChange");
  let modalValueChange = document.querySelector("#my_modal_change_btn");
  let mPReceivedLike = document.querySelector("span#mPReceivedLike");
  let mPMostHeart = document.querySelector("span#mPMostHeart");
  let mPPostNumber = document.querySelector("span#mPPostNumber");
  let mPPostManage = document.querySelector("div.mPPostManage");

  let member = JSON.parse(sessionStorage.getItem("member"));
  let snsCotents = JSON.parse(sessionStorage.getItem("snsCotents"));
  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  myName.innerHTML = `${sessionUser.name}`;
  console.log(sessionUser.nick);
  myNic.innerHTML = `${sessionUser.nick}`;
  myNicChange.addEventListener("click", () => {
    let modal_title = document.querySelector(".my_modal_title h2");
    modal_title.innerHTML = "닉네임 변경";
    modal.style.display = "flex";

    modalValueChange.addEventListener("click", () => {
      let myChangeValue = document.querySelector(
        "input[name=myChangeValue]"
      ).value;
      console.log(myChangeValue);

      sessionUser.nick = myChangeValue;
      console.log(sessionUser.nick);

      sessionStorage.setItem("user", JSON.stringify(sessionUser));
      for (let i = 0; i < member.length; i++) {
        if (member[i].id == sessionUser.id) {
          member[i].nick = sessionUser.nick;
          sessionStorage.setItem("member", JSON.stringify(member));
          alert(`변경되었습니다.${myChangeValue}`);
          break;
        }
      }
    });
  });
  myLogout.addEventListener("click", () => {
    sessionStorage.removeItem("user");
    document.location.href = "/index.html";
  });
  myPWChange.addEventListener("click", () => {
    let modal_title = document.querySelector(".my_modal_title h2");
    modal_title.innerHTML = "비밀번호 변경";
    modal.style.display = "flex";

    modalValueChange.addEventListener("click", () => {
      let myChangeValue = document.querySelector(
        "input[name=myChangeValue]"
      ).value;
      console.log(myChangeValue);

      sessionUser.password = myChangeValue;
      console.log(sessionUser.password);

      sessionStorage.setItem("user", JSON.stringify(sessionUser));
      for (let i = 0; i < member.length; i++) {
        if (member[i].id == sessionUser.id) {
          member[i].password = sessionUser.password;
          sessionStorage.setItem("member", JSON.stringify(member));
          alert(`변경되었습니다.${sessionUser.password}`);
          break;
        }
      }
    });
  });
  let nowHeart = 0;
  let mostHeart = 0;
  let nowPostNumber = 0;
  snsCotents.forEach((element) => {
    console.log(element.UserId);
    console.log(element.heart);
    if (element.userId == sessionUser.id) {
      nowHeart = nowHeart + element.heart;
      if (element.heart > mostHeart) {
        mostHeart = element.heart;
      }
      nowPostNumber = nowPostNumber + 1;
    }
    console.log(nowHeart);
  });
  mPReceivedLike.innerHTML = nowHeart;
  mPMostHeart.innerHTML = mostHeart;
  mPPostNumber.innerHTML = nowPostNumber;

  mPPostManage.addEventListener("click", () => {
    location.href = "/myPagePostManage/myPage_PostManage.html";
    console.log("글관리버튼누름");
  });
});
