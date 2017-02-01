package web;
/**
 * Created by razvan.salajan on 1/30/17.
 */

import com.google.gson.Gson;
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

public class GetRentedBooksServletAngular extends HttpServlet {
    @EJB
    UserService userService;

    private Logger log = Logger.getLogger(BooksServlet.class.getName());

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        String searchValue = request.getParameter("searchValue");
//        String searchKey = request.getParameter("searchKey");
        String userId = request.getParameter("userId");
        List<Book> books = new ArrayList<Book>();
        if (userId != null) {
            Integer userIdInt = Integer.parseInt(userId);
            User user = userService.getUser(userIdInt);
            books = user.getRentedBooks();
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