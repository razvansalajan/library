<%--
  Created by IntelliJ IDEA.
  User: sbreban
  Date: 1/31/17
  Time: 8:52 PM
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
<form action="bookServlet" method="get">
  <select name="searchKey">
    <option value="title">Title</option>
    <option value="author">Author</option>
    <option value="publisher">Publisher</option>
  </select>
  <input name="searchValue" type="text" value=${searchValue}>
  <button type="submit">Search</button>
</form>
<table border="1">
  <thead>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Author</th>
    <th>Publisher</th>
    <th>Year</th>
    <th>Department</th>
    <th colspan="2">Action</th>
  </tr>
  </thead>
  <tbody>
  <c:forEach items="${books}" var="book">
    <tr>
      <td><c:out value="${book.id}"/></td>
      <td><c:out value="${book.title}"/></td>
      <td><c:out value="${book.author}"/></td>
      <td><c:out value="${book.publisher}"/></td>
      <td><c:out value="${book.year}"/></td>
      <td><c:out value="${book.department.name}"/></td>
      <td><a href="userServlet?action=rentBook&userId=<c:out value="${userId}"/>&bookId=<c:out value="${book.id}"/>">Rent book</a></td>
    </tr>
  </c:forEach>
  </tbody>
</table>
</body>
</html>
