<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />

 <section>
      <article>
      
      
      
      
        <div class="myPageHeader">
          <div>발자국 관리</div>
        </div>
        <div class="myPageBody">
          <div class="myPageList">
            <div class="myPageUserProfile">
              <div class="mPProfileImg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDEJ9uT3a8ZN65Mek-wN7xzJxnNJzDwwqYlXpEZOuZQ&s"
                  alt=""
                />
                <div class="mPProfileChange">프로필 사진 변경하기</div>
              </div>
              <div class="mPProfileName">이름</div>
              <div class="mPProfileLogout">로그아웃</div>
            </div>
            <div class="myPageUserHeart">
             
            </div>
          </div>
          <div class="myPageContent">
            <div class="myPagePost">
              <div class="mPContentTitle">발자국 관리</div>
              <div class="mPContentBox" id="mpPostListBox">
                <div class="mPPostBox">
                  <img class="mPPostImg" src="" alt="" />
                  <div class="mPPostHeart">
                    <span class="mPPostHeartCount">99</span>
                    <img src="/image/icon_heart.png" alt="" />
                  </div>
                  <div class="mPPostTitle">가나다ㅇㅇㅇ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
        
      </article>
    </section>