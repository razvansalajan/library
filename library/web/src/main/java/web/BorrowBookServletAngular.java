package web;
/**
 * Created by razvan.salajan on 1/30/17.
 */

import com.google.gson.Gson;
import ejb_interfaces.BookService;
import ejb_interfaces.UserService;
import model.Book;
import model.User;

import javax.ejb.EJB;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

public class BorrowBookServletAngular extends HttpServlet {
    @EJB
    UserService userService;
    @EJB
    BookService bookService;

    private Logger log = Logger.getLogger(BooksServlet.class.getName());

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userId = request.getParameter("userId");
        String bookId = request.getParameter("bookId");
        List<Book> books = new ArrayList<Book>();
        if (userId != null && bookId != null) {
            Integer userIdInt = Integer.parseInt(userId);
            Integer bookIdInt = Integer.parseInt(bookId);
            userService.rentBook(userIdInt, bookIdInt);
            books = bookService.getAllBooks();
        }
        String json = new Gson().toJson(books);
        System.out.println(json);
        response.setContentType("application/json");
        response.getWriter().println(json);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}