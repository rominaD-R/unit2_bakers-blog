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
    private String tags;
    // private String images;
    private int userId;
    private java.sql.Timestamp createdAt;

    public Recipe() { }

    public Recipe(String title, List<Utensil> utensils, List<Step> steps, String tags, int userId) {
        this.title = title;
        this.utensils = utensils;
        this.steps = steps;
        this.tags = tags;
       // this.images = images;
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

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

//    public String getImages() {
//        return images;
//    }
//
//    public void setImages(String images) {
//        this.images = images;
//    }
//
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
//    @ManyToMany
//    @JoinTable(
//            name = "recipe_ingredients",
//            joinColumns = @JoinColumn(name = "recipe_id"),
//            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
//    )
//    private List<Ingredient> ingredients;
//
//    public List<Ingredient> getIngredients() {
//        return ingredients;
//    }
//
//    public void setIngredients(List<Ingredient> ingredients) {
//        this.ingredients = ingredients;
//    }
//
    // UTENSILS
    @ManyToMany
    @JoinTable(
            name = "recipe_utensils",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "utensil_id")
    )
    private List<Utensil> utensils;

    public List<Utensil> getUtensils() {
        return utensils;
    }

    public void setUtensils(List<Utensil> utensils) {
        this.utensils = utensils;
    }

    // STEPS
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "recipe", orphanRemoval = true)
    private List<Step> steps;

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
    }

    public void addStep(Step step) {
        steps.add(step);
    }

}
