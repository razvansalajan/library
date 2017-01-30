package model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by sbreban on 1/30/17.
 */
@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue
  private int id;
  @Column(name = "user_name")
  private String userName;
  @Column(name = "full_name")
  private String fullName;

  @ManyToMany
  @JoinTable(name="book_rentals",
      joinColumns=@JoinColumn(name="user_id"),
      inverseJoinColumns=@JoinColumn(name="book_id"))
  private List<Book> rentedBooks;

  public User() {
  }

  public User(String userName, String fullName) {
    this.userName = userName;
    this.fullName = fullName;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public List<Book> getRentedBooks() {
    return rentedBooks;
  }

  public void setRentedBooks(List<Book> rentedBooks) {
    this.rentedBooks = rentedBooks;
  }
}
