<%--
  Created by IntelliJ IDEA.
  User: sbreban
  Date: 1/30/17
  Time: 10:29 PM
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
  <c:forEach items="${user.rentedBooks}" var="book">
    <tr>
      <td><c:out value="${book.id}"/></td>
      <td><c:out value="${book.title}"/></td>
      <td><c:out value="${book.author}"/></td>
      <td><c:out value="${book.publisher}"/></td>
      <td><c:out value="${book.year}"/></td>
      <td><c:out value="${book.department.name}"/></td>
      <td><a href="userServlet?action=returnBook&userId=<c:out value="${user.id}"/>&bookId=<c:out value="${book.id}"/>">Return book</a></td>
    </tr>
  </c:forEach>
  </tbody>
</table>
<a href="bookServlet?action=rentBooks&userId=<c:out value="${user.id}"/>">Rent books</a>
</body>
</html>
