<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
	<header>
		<div class="main_logo">
			<img src="${rootPath}/static/image/footprint/발자국_simple.png" alt="" />
		</div>
		<div class="main_nav main_nav_open">
			<ul>
				<li class="home">HOME</li>
				<li class="member dev">개발자 소개</li>
				
				<c:if test="${PUTMEMBER==null }">
					<li class="member login">로그인</li>
				</c:if>
				
				
				
				<c:if test="${PUTMEMBER!=null }">
					<li class="member mypage">마이페이지</li>
				</c:if>
				
				<c:if test="${PUTMEMBER!=null }">
					<li class="member logout">로그아웃</li>
				</c:if>
			</ul>
		</div>
		<div class="main_ham">
			<input type="checkbox" id="main_ham_trigger" /> <label
				for="main_ham_trigger"> <span></span> <span></span> <span></span>
			</label>
		</div>
	</header>