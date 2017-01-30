package model;

import javax.persistence.*;

/**
 * Created by sbreban on 1/30/17.
 */
@Entity
@Table(name = "books")
public class Book {
  @Id
  @GeneratedValue
  private int id;
  private String title;
  private String author;
  private String publisher;
  private int year;
  @OneToOne()
  @JoinColumn(name = "department_id")
  private Department department;

  public Book() {
  }

  public Book(String title, String author, String publisher, int year) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getPublisher() {
    return publisher;
  }

  public void setPublisher(String publisher) {
    this.publisher = publisher;
  }

  public int getYear() {
    return year;
  }

  public void setYear(int year) {
    this.year = year;
  }

  public Department getDepartment() {
    return department;
  }

  public void setDepartment(Department department) {
    this.department = department;
  }
}
