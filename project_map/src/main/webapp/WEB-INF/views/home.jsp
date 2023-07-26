<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<c:set value="20230714-038" var="version" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="${rootPath}/static/css/home.css?${version}" rel="stylesheet" />
<link href="${rootPath}/static/css/map/main_map.css?${version}"
	rel="stylesheet" />
<link href="${rootPath}/static/css/map/detail_map.css?${version}"
	rel="stylesheet" />
<link rel="stylesheet" href="${rootPath}/static/css/map/API.css?${version}" />
<link rel="stylesheet" href="${rootPath}/static/css/map/API_map.css?${version}" />
<title>Insert title here</title>
<script>
	// JSP 에서 사용하는 rootPath 변수를 
	// JS 코드에서 사용하기 위한 rootPath 변수로 재설정
	var rootPath = "${rootPath}"
</script>

<script src="${rootPath}/static/js/home.js?${version}"></script>
<script src="${rootPath}/static/js/map/main_map.js?${version}"></script>
<script src="${rootPath}/static/js/map/API_main.js?${version}"></script>
<script src="${rootPath}/static/js/map/detail_map.js?${version}"></script>

</head>
<body>
	<header>
		<div class="main_logo">
			<img src="${rootPath}/static/image/footprint/발자국_simple.png" alt="" />
		</div>
		<div class="main_nav main_nav_open">
			<ul>
				<li>HOME</li>
				<li>개발자 소개</li>
				<li>로그인</li>
			</ul>
		</div>
		<div class="main_ham">
			<input type="checkbox" id="main_ham_trigger" /> <label
				for="main_ham_trigger"> <span></span> <span></span> <span></span>
			</label>
		</div>
	</header>
	<section>
		<c:if test="${empty BODY}">
			<%@ include file="/WEB-INF/views/map/main.jsp"%>
		</c:if>
		<c:if test="${BODY == 'DETAIL_MAP'}">
			<%@ include file="/WEB-INF/views/map/detail_map.jsp"%>
		</c:if>
		<c:if test="${BODY == 'API_MAP'}">
			<%@ include file="/WEB-INF/views/map/API_map.jsp"%>
		</c:if>
	</section>
	<footer>
		<p>CopyRight &copy; dbsdudsw@icloud.com</p>
	</footer>
</body>
</html>