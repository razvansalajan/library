package web;/**
 * Created by razvan.salajan on 1/31/17.
 */

import com.google.gson.Gson;
import ejb_interfaces.BookService;
import model.Book;

import javax.ejb.EJB;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

public class BooksServletAngular extends HttpServlet {
    @EJB
    BookService bookService;

    private Logger log = Logger.getLogger(BooksServlet.class.getName());

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String forward = "listBooks.jsp";
        String searchValue = request.getParameter("searchValue");
        String searchKey = request.getParameter("searchKey");
        List<Book> books;
        if (searchValue != null) {
            books = bookService.searchBooks(searchKey, searchValue);
            request.setAttribute("searchValue", searchValue);
            request.setAttribute("searchKey", searchKey);
        } else {
            books = bookService.getAllBooks();
        }
//        request.setAttribute("books", books);
//        RequestDispatcher requestDispatcher = request.getRequestDispatcher(forward);
//        requestDispatcher.forward(request, response);
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

