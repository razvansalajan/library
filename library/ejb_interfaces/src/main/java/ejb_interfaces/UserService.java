package ejb_interfaces;

import model.User;

import javax.ejb.Local;

/**
 * Created by sbreban on 1/30/17.
 */

@Local
public interface UserService {
  User getUser();
}
