const errMessage = [
  "아이디는 문자및 숫자로 이루어진 4~30자리 이내로 작성해 주세요",
  "비밀번호는 숫자와 문자 포함 형태의 6~100자리 이내로 작성해 주세요",
  "닉네임은 숫자와 문자 포함 형태의 1~100자리 이내로 작성해 주세요",
  "이름은 문자 형태의 1~20자리 이내로 작성해 주세요",
  "생일은 yyyy-MM-dd 형식을 맞추어 입력해 주세요 ",
  "전화번호는 형식에 맞게 입력해주세요 (예시 : 01011111111)",
  "이메일은 형식에 맞게 입력해주세요 (예시 : email@naver.com)",
  "주소는 문자와 숫자 형식의 1~200자리 이내로 작성해 주세요",
];
const checkBox = [
  /^[A-Za-z0-9]{4,30}$/,
  /^[A-Za-z0-9]{6,100}$/,
  /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,10}$/,
  /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,20}$/,
  /^\d{4}-\d{2}-\d{2}$/,
  /^\d{3}\d{4}\d{4}$/,
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,20}$/,
];
document.addEventListener("DOMContentLoaded", () => {
  const debounce = (cback, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cback(...args);
      }, timeout);
    };
  };
  const join_form = document?.getElementById("join_form");
  const join_input = join_form?.querySelectorAll("input");
  const messageBox = document?.querySelector("div#join_box>h2");
  console.log(messageBox);
  // const check_userId = /^[A-Za-z0-9]{4,30}$/; // 문자및 숫자로 이루어진 4~30
  // const check_password = /^[A-Za-z0-9]{6,100}$/; //  숫자와 문자 포함 형태의 6~100자리 이내의 암호 정규식
  // const check_nickname = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,10}$/;
  // const check_name = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,20}$/;
  // const check_birth = /^\d{4}-\d{2}-\d{2}$/;
  // const check_tel = /^\d{3}\d{4}\d{4}$/;
  // const check_email =
  //   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // const check_addr = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,20}$/;

  const join_button = join_form?.querySelector("button#join_button");
  let checkValue = (e, check, message) => {
    if (!check.test(e.target.value)) {
      messageBox.innerHTML = message;
      return false;
    } else {
      messageBox.innerHTML = " ";
      return true;
    }
  };
  let checkSubmit = (input, check, message) => {
    if (!check.test(input.value)) {
      messageBox.innerHTML = message;
      input.focus();
      console.log(input.value);

      return false;
    } else {
      messageBox.innerHTML = " ";
      return true;
    }
  };

  join_input.forEach((input, index) => {
    input.addEventListener(
      "keyup",
      debounce((e) => {
        checkValue(e, checkBox[index], errMessage[index]);
      })
    );
  });

  join_button.addEventListener("click", () => {
    let result = null;

    for (let index = 0; index < join_input.length; index++) {
      if (checkSubmit(join_input[index], checkBox[index], errMessage[index])) {
        console.log("맞음");
        result = true;
      } else {
        console.log("다름");
        result = false;
        console.log(index);
        break;
      }
    }
    console.log(result);
    if (result) {
      if (confirm("회원가입 하시겠습니까?")) {
        join_form?.submit();
      }
    }
  });
});
