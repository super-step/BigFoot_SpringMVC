<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="${rootPath}/static/css/home.css?${version}" rel="stylesheet">
<title>Insert title here</title>
<script>
	// JSP 에서 사용하는 rootPath 변수를 
	// JS 코드에서 사용하기 위한 rootPath 변수로 재설정
	var rootPath = "${rootPath}"
</script>
<script src="${rootPath}/static/js/home.js"></script>
<script src="${rootPath}/static/js/main_nav.js?001"></script>
</head>
<body>
	<header>
		<div class="main_logo">
			<img src="${rootPath}/static/image/footprint/발자국_simple.png" alt="" />
		</div>
		<div class="main_nav main_nav_open">
			<ul>
				<li class="home">HOME</li>
				<li class="developer">개발자 소개</li>
				<li class="login">로그인</li>
			</ul>
		</div>
		<div class="main_ham">
			<input type="checkbox" id="main_ham_trigger" /> <label
				for="main_ham_trigger"> <span></span> <span></span> <span></span>
			</label>
		</div>
	</header>
	<section>
		<article></article>
	</section>
	<footer>
		<p>CopyRight &copy; dbsdudsw@icloud.com</p>
	</footer>
</body>
</html>