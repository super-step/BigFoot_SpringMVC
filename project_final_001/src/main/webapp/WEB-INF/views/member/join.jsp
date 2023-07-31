<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />



<article id="join_container">
	<!-- 회원가입 화면 -->
	<div id="join_box">
		<div id="join_title">
			<h2>회원가입</h2>
		</div>
		
		<c:if test="${ empty MESSAGE }">
			<h2> </h2>
		</c:if>
		<c:if test="${not empty MESSAGE && MESSAGE == 'NAME_TEL'}">
			<h2>이름과 전화번호가 이미 등록되어 있습니다</h2>
		</c:if>

		<c:if test="${not empty MESSAGE && MESSAGE =='ID'}">
			<h2>이미 등록된 ID입니다</h2>
		</c:if>

		<c:if test="${not empty MESSAGE && MESSAGE =='NICKNAME'}">
			<h2>이미 등록된 닉네임 입니다</h2>
		</c:if>

		<c:if test="${not empty MESSAGE && MESSAGE =='EMAIL'}">
			<h2>이미 등록된 이메일입니다</h2>
		</c:if>

	</div>

	<div id="join_body">
		<%
		/*controller 에서 가져온 modelAttribute*/
		%>
		<form:form id="join_form" modelAttribute="MEMBERLOGIN">
			<div class="join_rowbox">
				<form:input path="mb_id" name="mb_id" type="text" id="userid"
					placeholder="사용자 ID는 4글자이상" pattern="^\S.*$"
					title="빈칸을 입력할 수 없습니다." required="true" />
			</div>
			<form:input path="mb_password" name="mb_password" type="password"
				id="password" placeholder="비밀번호는 4글자 이상" pattern="^\S.*$"
				title="빈칸을 입력할 수 없습니다." required="true" />
			<%
			/*이미지는 마이페이지에서 추가*/
			%>
			<form:input path="mb_nick" name="mb_nick" type="text" id="nickname"
				placeholder="닉네임" pattern="^\S.*$" title="스페이스바는 입력 못해요 ㅠ"
				required="true" />
			<form:input path="mb_name" name="mb_name" type="text" id="name"
				placeholder="이름" pattern="^\S.*$" title="빈칸을 입력할 수 없습니다."
				required="true" />
			<form:input path="mb_birth" name="mb_birth" type="text" id="birth"
				placeholder="생일" pattern="^\S.*$" title="빈칸을 입력할 수 없습니다."
				required="true" />
			<form:input path="mb_tel" name="mb_tel" type="text" id="tel"
				placeholder="전화번호" pattern="^\S.*$" title="빈칸을 입력할 수 없습니다."
				required="true" />
			<form:input path="mb_email" name="mb_email" type="text" id="email"
				placeholder="이메일" pattern="^\S.*$" title="빈칸을 입력할 수 없습니다."
				required="true" />
			<form:input path="mb_addr" name="mb_addr" type="text" id="addr"
				placeholder="주소" pattern="^\S.*$" title="빈칸을 입력할 수 없습니다."
				required="true" />
			<div class="join_rowbox"></div>
			<button type="button" id="join_button">회원가입</button>
		</form:form>
	</div>

</article>
