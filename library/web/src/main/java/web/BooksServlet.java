package web;
/**
 * Created by razvan.salajan on 1/30/17.
 */

import ejb_interfaces.BookService;
import ejb_interfaces.UserService;

import java.io.IOException;
import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BooksServlet extends HttpServlet {
    @EJB
    BookService bookService;

    @EJB
    UserService userService;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().println(userService.getUser().getFullName());
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}

