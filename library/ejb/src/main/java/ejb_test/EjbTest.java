package ejb_test;

import ejb_interfaces_test.ITestEjb;

import javax.ejb.Local;
import javax.ejb.Stateless;
@Stateless
@Local(ITestEjb.class)
public class EjbTest implements ITestEjb{

    @Override
    public String getCeva() {
        return "merge";
    }
}
