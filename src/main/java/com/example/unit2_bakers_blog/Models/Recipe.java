package com.example.unit2_bakers_blog.Models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class Recipe {

    private int id;
    private String title;
    private String ingredients;
    private String utensils;
    private String steps;
    private String tags;
    private String images;
    private int userId;
    private java.sql.Timestamp createdAt;

    public Recipe() { }

    public Recipe(String title, String ingredients, String utensils, String steps, String tags, String images, int userId) {
        this.title = title;
        this.ingredients = ingredients;
        this.utensils = utensils;
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

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getUtensils() {
        return utensils;
    }

    public void setUtensils(String utensils) {
        this.utensils = utensils;
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
}
