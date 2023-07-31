<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />


<article>
	<div class="myPageHeader">
		<div>마이페이지</div>
	</div>
	<div class="myPageBody">
		<div class="myPageList">
			<div class="myPageUserProfile">
				<div class="mPProfileImg">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDEJ9uT3a8ZN65Mek-wN7xzJxnNJzDwwqYlXpEZOuZQ&s"
						alt="" />
					<div class="mPProfileChange">프로필 사진 변경하기</div>
				</div>
				<div class="mPProfileName">이름</div>
				<div class="mPProfileLogout">로그아웃</div>
			</div>
			<div class="myPageUserHeart"></div>
		</div>
		<div class="myPageContent">
			<div class="myPageSetting">
				<div class="mPContentTitle">기본페이지</div>
				<div class="mPContentBox">
					<div class="mPNicSet">
						<%
						/*   닉네임은 기존 label에서 modal로 사용하던걸 input으로 변경    */
						%>
						<%
						/*form 시작*/
						%>


						<form:form modelAttribute="MEMBERLOGIN">
							<div>닉네임 :</div>
							<form:input path="mb_nick" placeholder="닉네임 입력하셔야 해요 ㅠㅠ"
								name="mb_nick" class="mPNowNic" pattern="^\S.*$"
								title="빈칸은 안돼용 ㅠ" required="true" />사료 싫어하는 고양이
									<div class="mPNicChange mPBtn">변경하기</div>

							<button id="my_modal_change_btn">변경하기</button>

						</form:form>
						<%
						/*form 끝*/
						%>


					</div>
					<div class="mPPWSet">
						<%
						/*  비밀번호 변경도 input tag로 변경 */
						%>
						<%
						/*form 시작*/
						%>
						<form:form action="" modelAttribute="MEMBERLOGIN">
							<div>비밀번호 변경</div>
							<form:input path="mb_password" placeholder="비밀번호 입력하셔야 해요 ㅠㅠ"
								name="mb_password" class="mPPWChange mPBtn" pattern="^\S.*$"
								title="빈칸안돼용 ㅠ" required="true" />변경하기

							<button id="my_modal_change_btn">변경하기</button>

						</form:form>
					</div>
					<%
					/*form 끝*/
					%>

				</div>
			</div>
		</div>
		<div class="myPagePost">
			<div class="mPContentTitle">발자국 관리</div>
			<div class="mPContentBox" id="mpPostListBox">
				<div class="mPPostCount">
					지금까지 '<span id="mPPostNumber">999</span>'개의 발자국을 남겼어요!
				</div>
				<div class="mPPostManage mPBtn">발자국 관리하기</div>
			</div>
		</div>
		<div class="myPageImgContainer">
			<img src="/image/자전거.png" alt="" />
		</div>
	</div>

	<div id="modal" class="modal-overlay">
		<div class="modal-window">
			<div class="my_modal_header">
				<div class="my_modal_title">
					<h2>닉네임 변경</h2>
				</div>
				<div class="my_modal_close_area">X</div>
			</div>
			<div class="my_modal_content">


				<%
				/* form 시작*/
				%>
				<form action="">
					<input name="myChangeValue" type="text" />
					<button id="my_modal_change_btn">변경하기</button>
				</form>
				<%
				/* form 끝*/
				%>



			</div>
		</div>
	</div>
</article>

