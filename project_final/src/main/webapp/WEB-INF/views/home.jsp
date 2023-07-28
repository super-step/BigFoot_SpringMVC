<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
	<tiles:insertAttribute name="head-main" />
	<tiles:insertAttribute name="head-sub" />
</head>
<body>
	<tiles:insertAttribute name="header" />
	<section>
	<tiles:insertAttribute name="main-content" />
	</section>
<tiles:insertAttribute name="footer" />
</body>
</html>