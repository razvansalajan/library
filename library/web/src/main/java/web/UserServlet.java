package web;
/**
 * Created by razvan.salajan on 1/30/17.
 */

import ejb_interfaces.UserService;
import model.User;

import javax.ejb.EJB;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

public class UserServlet extends HttpServlet {
  @EJB
  UserService userService;

  private Logger log = Logger.getLogger(BooksServlet.class.getName());

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String forward = "listUsers.jsp";
    String action = request.getParameter("action");
    if (action != null) {
      if (action.equals("viewBooks")) {
        forward = "listUserBooks.jsp";
        int userId = Integer.parseInt(request.getParameter("userId"));
        User user = userService.getUser(userId);
        request.setAttribute("user", user);
      } else if (action.equals("returnBook")) {
        int userId = Integer.parseInt(request.getParameter("userId"));
        int bookId = Integer.parseInt(request.getParameter("bookId"));
        userService.returnBook(userId, bookId);
      }
    } else {
      String searchValue = request.getParameter("searchValue");
      String searchKey = request.getParameter("searchKey");
      List<User> users;
      if (searchValue != null) {
        users = userService.searchUsers(searchKey, searchValue);
        request.setAttribute("searchValue", searchValue);
        request.setAttribute("searchKey", searchKey);
      } else {
        users = userService.getAllUsers();
      }
      request.setAttribute("users", users);
    }
    RequestDispatcher requestDispatcher = request.getRequestDispatcher(forward);
    requestDispatcher.forward(request, response);
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doGet(request, response);
  }
}