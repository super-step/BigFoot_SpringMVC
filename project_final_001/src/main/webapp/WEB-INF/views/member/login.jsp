<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />



<!-- 로그인 화면 -->






<!-- 로그인 화면 -->
<article id="login_box">


	<div id=login_form_box>
		<%
		/*form 시작*/
		%>
		<form:form id="login_form" modelAttribute="MEMBERLOGIN">
			<h2>여행 발가락</h2>


			<c:if test="${ERROR == 'NOTID'}">
				<h2>존재하지 않는 아이디입니다</h2>
			</c:if>

			<c:if test="${ERROR == 'NOTPASSWORD'}">
				<h2>비밀번호가 틀렸습니다</h2>
			</c:if>

			<form:input path="mb_id" type="text" name="username"
				placeholder="사용자 ID" />
			<form:input path="mb_password" type="password" name="password"
				placeholder="비밀번호" />
			<button type="submit" id="login_button">로그인</button>
			<div id="more_text">
				<a id="login_join" href="${rootPath}/member/join">회원가입</a> <a
					href="${rootPath}/member/loginmodal" class="btn-open-popup">
					아이디찾기 / 비밀번호찾기 </a>
			</div>
		</form:form>
		<%
		/*form 끝*/
		%>
	</div>



	<div id="login_right"></div>
</article>



