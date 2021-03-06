package web;
/**
 * Created by razvan.salajan on 1/30/17.
 */

import com.google.gson.Gson;
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

public class GetUsersServletAngular extends HttpServlet {
    @EJB
    UserService userService;

    private Logger log = Logger.getLogger(BooksServlet.class.getName());

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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
        String json = new Gson().toJson(users);
        System.out.println(json);
        response.setContentType("application/json");
        response.getWriter().println(json);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}