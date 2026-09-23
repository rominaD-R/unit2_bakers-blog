package com.example.unit2_bakers_blog.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String content;
    // private int userId;

    public Comment() { }

    public Comment(String content) {
        this.content = content;
        // this.userId = userId;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

//    public int getRecipeId() {
//        return recipeid;
//    }
//
//    public void setRecipeId(int recipeId) {
//        this.recipeId = recipeId;
//    }

    @JoinColumn(name = "recipeid", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private Recipe recipe;

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public int getRecipeid() {
        return recipe.getId();
    }

    @JoinColumn(name = "userid")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getUserId() {
        return user.getId();
    }
}
