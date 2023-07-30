<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<div class="sideImgCard viewOffs">
	<div class="sns imgCardList">
		<div class="sns imgCard">
			<div class="card img">이미지</div>
			<div class="card text">요약된 내용</div>
		</div>		
	</div>
</div>

<div class="sideInputForm viewOffs">
	<form:form action="${rootPath}/posts/post/insert" modelAttribute="POSTDTO" method="POST" enctype="multipart/form-data">
		<div>
			<label>title</label>
			<form:input path="sp_title" type="text" placeholder="제목을 입력하세요"/>
		</div>
		<div>
			<label>contents</label>
			<form:textarea path="sp_content" rows="2" cols="1" maxlength="55"></form:textarea>
		</div>
		<div>
			<label>이미지 리스트</label>
			<input name="b_images" type="file"  
				multiple="multiple"
				accept="image/*" />
		</div>
		<form:hidden path="sp_mkseq"/>
		<div>
			<button type="submit">UPLOAD</button>
		</div>
	</form:form>
</div>