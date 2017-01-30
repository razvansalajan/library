package ejb;

import ejb_interfaces.BookService;
import model.Book;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Stateless
@Local(BookService.class)
public class BookServiceBean implements BookService {

  @PersistenceContext(unitName="LibraryUnit")
  private EntityManager em;

  public Book getBook() {
    Query query = em.createQuery("select b from Book b where b.id = :id");
    query.setParameter("id", 1);
    Book book = (Book) query.getSingleResult();
    return book;
  }
}
