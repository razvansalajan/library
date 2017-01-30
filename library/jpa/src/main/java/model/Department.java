package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by sbreban on 1/30/17.
 */
@Entity
@Table(name = "departments")
public class Department {
  @Id
  @GeneratedValue
  private int id;
  private String name;

  public Department() {
  }

  public Department(String name) {
    this.name = name;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
