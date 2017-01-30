package ejb_interfaces;

import model.Book;

import javax.ejb.Local;

/**
 * Created by razvan.salajan on 1/30/17.
 */

@Local
public interface BookService {
    Book getBook();
}
