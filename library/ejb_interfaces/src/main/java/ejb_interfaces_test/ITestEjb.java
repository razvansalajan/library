package ejb_interfaces_test;

import javax.ejb.Local;

/**
 * Created by razvan.salajan on 1/30/17.
 */

@Local
public interface ITestEjb {
    String getCeva();
}
