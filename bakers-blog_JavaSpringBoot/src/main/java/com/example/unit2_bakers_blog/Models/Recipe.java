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
    private String mainImageUrl;
    private int userId;
    private java.sql.Timestamp createdAt;

    public Recipe() { }

    public Recipe(String title, String mainImageUrl, List<Utensil> utensils, List<Step> steps, List<Ingredient> ingredients, List<Tag> tags, List<Image> images, List<Comment> comments) {
        this.title = title;
        this.mainImageUrl = mainImageUrl;
        this.utensils = utensils;
        this.steps = steps;
        this.ingredients = ingredients;
        this.tags = tags;
        this.images = images;
        this.comments = comments;
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

    public String getMainImageUrl() {
        return mainImageUrl;
    }

    public void setMainImageUrl(String mainImageUrl) {
        this.mainImageUrl = mainImageUrl;
    }

    // List of Ingredients, Utensils, Steps, Tags, and Images can be stored as JSON
    // or comma-separated values in the database. You can also create separate entities
    // for each of these if you want to have a more normalized database structure.

    // INGREDIENTS
    @ManyToMany
    @JoinTable(
            name = "recipe_ingredients",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    private List<Ingredient> ingredients;

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

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
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch=FetchType.EAGER)
    @JoinColumn(name = "recipestepid", nullable = false, updatable = false)
    private List<Step> steps;

    public List<Step> getSteps() {
        return steps;
    }

    public Step getStepX(int order) {
        return steps.stream().filter(step -> step.getOrder() == order).findFirst().orElse(null);
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
    }

    public void addStep(Step step) {
        steps.add(step);
    }

    // IMAGES
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "recipe", orphanRemoval = true)
    private List<Image> images;

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    // TAGS
    @ManyToMany
    @JoinTable(
            name = "recipe_tags",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> tags;

    public List<Tag> getTags() {
        return tags;
    }

    public boolean doesTagExist(String tagName) {
        boolean exists = false;
        for (Tag tag : tags) {
            if (tag.getTag().equals(tagName)) {
                exists = true;
            };
        };
        return exists;
    };

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    // Comments
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "recipe", orphanRemoval = true)
    private List<Comment> comments;

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public void deleteComment(Comment comment) {
        comments.remove(comment);
    }

    // OWNER (BakerUser)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ownerid", referencedColumnName = "id")
    private BakerUser owner;

}
