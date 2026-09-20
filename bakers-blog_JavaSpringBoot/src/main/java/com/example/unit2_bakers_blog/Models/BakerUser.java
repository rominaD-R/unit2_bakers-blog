package com.example.unit2_bakers_blog.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class BakerUser extends User {
    public BakerUser() { }

    public BakerUser(String username, String fName, String lName, String password, String email, String role, List<Recipe> savedRecipes, List<Comment> comments) {
        super(username, fName, lName, password, email, role, savedRecipes, comments);
        this.setRole("Baker");
    }

    @OneToMany
    private List<Recipe> createdRecipes;

    public List<Recipe> getCreatedRecipes() {
        return createdRecipes;
    }

    public void setCreatedRecipes(List<Recipe> createdRecipes) {
        this.createdRecipes = createdRecipes;
    }

    public void addCreatedRecipe(Recipe recipe) {
        this.createdRecipes.add(recipe);
    }
}
