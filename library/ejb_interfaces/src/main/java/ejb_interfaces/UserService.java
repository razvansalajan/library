package ejb_interfaces;

import model.User;

import javax.ejb.Local;
import java.util.List;

/**
 * Created by sbreban on 1/30/17.
 */

@Local
public interface UserService {
  List<User> getAllUsers();
  User getUser(int userId);
  List<User> searchUsers(String searchKey, String searchValue);
  void returnBook(int userId, int bookId);
}
