package com.example.unit2_bakers_blog.Models;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    // private String utensils;
    private String steps;
    private String tags;
    private String images;
    private int userId;
    private java.sql.Timestamp createdAt;

    public Recipe() { }

    public Recipe(String title, String utensils, String steps, String tags, String images, int userId) {
        this.title = title;
        // this.utensils = utensils;
        this.steps = steps;
        this.tags = tags;
        this.images = images;
        this.userId = userId;
        this.createdAt = new java.sql.Timestamp(System.currentTimeMillis());
    }

    // Getters and Setters
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

    public String getSteps() {
        return steps;
    }

    public void setSteps(String steps) {
        this.steps = steps;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    // List of Ingredients, Utensils, Steps, Tags, and Images can be stored as JSON
    // or comma-separated values in the database. You can also create separate entities
    // for each of these if you want to have a more normalized database structure.

    // INGREDIENTS
    @ManyToMany
    private List<Ingredient> ingredients;

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    // UTENSILS
    @ManyToMany
    private List<Utensil> utensils;

    public List<Utensil> getUtensils() {
        return utensils;
    }

    public void setUtensils(List<Utensil> utensils) {
        this.utensils = utensils;
    }

    // STEPS
    @OneToMany
    private List<Step> steps;

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
    }

}
