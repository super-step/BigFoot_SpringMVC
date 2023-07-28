<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />


<article id="login_box">
	<!-- 로그인 화면 -->
	<div id="login_form_box">



		<%
		/*form 시작*/
		%>
		<form:form id="login_form" modelAttribute="MEMBERLOGINMODAL">
			<h2>여행 발가락</h2>


			<c:if test="${ERROR == 'NOTID'}">
				<h2>존재하지 않는 아이디입니다</h2>
			</c:if>

			<c:if test="${ERROR == 'NOTEMAIL'}">
				<h2>이메일이 틀렸습니다</h2>
			</c:if>

			<c:if test="${ERROR == 'OK'}">
				<h3>이메일과 아이디가 일치합니다</h3>
				<h4>비밀번호 : ${MEMBERLOGIN.mb_password}</h4>
			</c:if>

			<form:input path="mb_id" type="text" name="username"
				placeholder="사용자 ID" />

			<form:input path="mb_email" type="text" name="mb_email"
				placeholder="이메일" />

			<button type="submit" id="login_button">비밀번호 찾기</button>
			<div id="more_text">
				<a href="${rootPath}/member/login" id="login_join">로그인창으로이동</a>
			</div>
		</form:form>
		<%
		/*form 끝*/
		%>
	</div>
	<div id="login_right"></div>
	</article>
	
	
	
	