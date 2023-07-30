<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=37962b2a8c893984a4d2139de5dc0061"></script>
<article class="API_nav_container">
	<ul>
		<li class="API_nav_item" id="nav_sns_all">전체</li>
		<li class="API_nav_item" id="nav_sns_fes">축제</li>
		<li class="API_nav_item" id="nav_sns_travel">관광지</li>
		<li class="API_nav_item" id="nav_sns_res">식당</li>
		<li class="API_nav_item" id="nav_sns_upload">글쓰기</li>
	</ul>
</article>
<article class="API_map_box" >
	<div class="API_map" data-name="${SUBDIST.sdis_code}" data-lati = "${SUBDIST.sdis_lati}" data-longi="${SUBDIST.sdis_longi}" data-level="${SUBDIST.sdis_zoomlv }" ></div>
	<div class="side_right">
		<div class="sns listTitle"><label>마커의 제목</label></div>
		<div class="sns imgCardList"> 이미지리스트
			<div class="sns imgCard">
				<div class="card img">이미지</div>
				<div class="card text">요약된 내용</div>
			</div>		
		</div>
	</div>
</article>

