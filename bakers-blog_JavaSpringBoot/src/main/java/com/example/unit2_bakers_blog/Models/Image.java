package com.example.unit2_bakers_blog.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length=2000)
    private String imageUrl;
//    private int recipeId;

    public Image() {
    }

    public Image(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

//    public int getRecipeId() {
//        return recipeId;
//    }
//
//    public void setRecipeId(int recipeId) {
//        this.recipeId = recipeId;
//    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipeid", referencedColumnName = "id")
    @JsonIgnore
    private Recipe recipe;

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }
}
