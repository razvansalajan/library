<%--
  Created by IntelliJ IDEA.
  User: sbreban
  Date: 1/30/17
  Time: 9:40 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <title>Show All Books</title>
</head>
<body>
<form action="userServlet" method="get">
  <select name="searchKey">
    <option value="userName">User name</option>
    <option value="fullName">Full name</option>
  </select>
  <input name="searchValue" type="text" value=${searchValue}>
  <button type="submit">Search</button>
</form>
<table border="1">
  <thead>
  <tr>
    <th>ID</th>
    <th>User name</th>
    <th>Full name</th>
    <th colspan="2">Action</th>
  </tr>
  </thead>
  <tbody>
  <c:forEach items="${users}" var="user">
    <tr>
      <td><c:out value="${user.id}"/></td>
      <td><c:out value="${user.userName}"/></td>
      <td><c:out value="${user.fullName}"/></td>
    </tr>
  </c:forEach>
  </tbody>
</table>
</body>
</html>
