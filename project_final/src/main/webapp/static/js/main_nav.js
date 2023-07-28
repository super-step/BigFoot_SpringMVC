document.addEventListener("DOMContentLoaded", () => {
  const main_nav = document.querySelector("div.main_nav");

  const navClickHandler = (e) => {
    const target = e.target;
    if (target.tagName === "LI") {
      let targetClassName = target.className;
      let URL = `${rootPath}/`;
      if (targetClassName === "home") {
        URL = `${rootPath}`;
        /*
          문자열.indexOf("찾는 문자열")

          문자열 내에 찾는 문자열이 있으면 0 이상의 위치값을 return
          없으면 -1 을 return

          문자열.search("찾는문자열")
          정규표현식으로 문자열 찾기 가능
        */
      } else {
        let result = targetClassName.replace(" ", "/");
        URL = URL + result;
      }
      alert(targetClassName);
      document.location.href = URL;
    }
  };
  main_nav?.addEventListener("click", navClickHandler);
});
