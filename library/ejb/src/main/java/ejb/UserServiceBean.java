package ejb;

import ejb_interfaces.UserService;
import model.User;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by sbreban on 1/30/17.
 */

@Stateless
@Local(UserService.class)
public class UserServiceBean implements UserService {

  @PersistenceContext(unitName = "LibraryUnit")
  private EntityManager em;

  public List<User> getAllUsers() {
    Query query = em.createQuery("select u from User u");
    List<User> users = (List<User>) query.getResultList();
    return users;
  }

  public User getUser(int userId) {
    Query query = em.createQuery("select u from User u where u.id = :id");
    query.setParameter("id", userId);
    User user = (User) query.getSingleResult();
    return user;
  }

  public List<User> searchUsers(String searchKey, String searchValue) {
    Query query = em.createQuery("select u from User u where u." + searchKey + " like '%" + searchValue + "%'");
    List<User> users = (List<User>) query.getResultList();
    return users;
  }
}
