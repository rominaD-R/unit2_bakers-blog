package com.example.unit2_bakers_blog.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private String fName;
    private String lName;
    private String password;
    private String email;
    private String role;
    private java.sql.Timestamp createdAt;

    public User() { }

    public User(String username, String fName, String lName, String password, String email, String role) {
        this.username = username;
        this.fName = fName;
        this.lName = lName;
        this.password = password;           // CREATE HASHED PASSWORD HERE
        this.email = email;
        this.role = role;
        this.createdAt = new java.sql.Timestamp(System.currentTimeMillis());
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @ManyToMany
    private List<Recipe> savedRecipes;

    public List<Recipe> getSavedRecipes() {
        return savedRecipes;
    }

    

}
