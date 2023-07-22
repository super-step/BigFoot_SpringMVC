document.addEventListener("DOMContentLoaded", () => {
  const main_nav = document.querySelector("div.main_nav");

  const navClickHandler = (e) => {
    const target = e.target;
    if ((target.tagName = "LI")) {
      const targetClassName = target.className;
      let URL = `${rootPath}` + targetClassName;
      const USER_URL = "login mypage logout";
      if (targetClassName === "home") {
        URL = `${rootPath}`;
        /*
          문자열.indexOf("찾는 문자열")

          문자열 내에 찾는 문자열이 있으면 0 이상의 위치값을 return
          없으면 -1 을 return

          문자열.search("찾는문자열")
          정규표현식으로 문자열 찾기 가능
        */
      } else if (USER_URL.indexOf(targetClassName) > -1) {
        // 있으면 index 번호 , 없으면 -1
        // USER_URL 이
        URL = `${rootPath}user/` + targetClassName;
      }
      document.location.href = URL;
    }
  };
  main_nav?.addEventListener("click", navClickHandler);
});
