package ejb_interfaces;

import model.Book;

import javax.ejb.Local;
import java.util.List;

/**
 * Created by razvan.salajan on 1/30/17.
 */

@Local
public interface BookService {
  List<Book> getAllBooks();

  Book getBook();
}
