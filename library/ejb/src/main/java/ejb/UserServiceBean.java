package ejb;

import ejb_interfaces.UserService;
import model.User;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * Created by sbreban on 1/30/17.
 */

@Stateless
@Local(UserService.class)
public class UserServiceBean implements UserService {

  @PersistenceContext(unitName="LibraryUnit")
  private EntityManager em;

  public User getUser() {
    Query query = em.createQuery("select u from User u where u.id = :id");
    query.setParameter("id", 1);
    User user = (User) query.getSingleResult();
    return user;
  }
}
