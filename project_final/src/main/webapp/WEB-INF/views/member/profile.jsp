<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="${rootPath}/static/css/home.css?${version}" rel="stylesheet">
<link href="${rootPath}/static/css/profile.css?${version}"
	rel="stylesheet">
<title>Insert title here</title>
</head>
<body>
	<header>
		<img src="..\image\footprint\발자국_simple.png" alt="" />
		<div class="cyy_ham_container">
			<input type="checkbox" id="cyy_ham_trigger" /> <label
				for="cyy_ham_trigger"> <span></span> <span></span> <span></span>
			</label>
			<nav class="cyy_nav">
				<a id="logout" data-link="로그아웃"></a> <a id="mypage"
					data-link="마이페이지"></a> <a id="login" data-link="로그인"></a> <a
					id="profile" data-link="개발자 소개"></a> <a id="home" data-link="HOME"></a>
			</nav>
		</div>
	</header>
	<section>
		<article class="map_container"></article>
	</section>
	<!-- 개발자 소개 모달 -->
	<div id="developer-modal" class="developer-modal">
		<div class="developer-title">
			<h1>개발자 소개</h1>
		</div>
		<div class="developer-content">
			<div class="developer">
				<img
					src="https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/12/humoruniv/20210512080207323tvqg.jpg"
					alt="Developer 1" />
				<h3>오명훈</h3>
				<p>좋아하는것은 Java와 알고리즘 입니다.</p>
				<p>https://github.com/humi53</p>
				<p></p>
			</div>
			<div class="developer">
				<img
					src="https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg"
					alt="Developer 2" />
				<h3>최윤영</h3>
				<p>안녕하세요! 고양이 좋아요.</p>
				<p>https://github.com/dbsdud00</p>
			</div>
			<div class="developer">
				<img
					src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99382A4C5E1A6E3425"
					alt="Developer 3" />
				<h3>김선재</h3>
				<p>안녕하세요! 숨쉬기운동 하나. 둘.</p>
				<p>https://github.com/cccff12</p>
			</div>
		</div>
	</div>
	<footer>
		<p>CopyRight &copy; dbsdudsw@icloud.com</p>
	</footer>
</body>
</html>