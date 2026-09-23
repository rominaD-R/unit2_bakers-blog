package com.example.unit2_bakers_blog.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Step {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "TEXT")
    private String stepDesc;

    private int orderNum;
    private int rId;

    public Step() {
    }

    public Step(String stepDesc, int orderNum) {
        this.stepDesc = stepDesc;
        this.orderNum = orderNum;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStepDesc() {
        return stepDesc;
    }

    public void setStepDesc(String stepDesc) {
        this.stepDesc = stepDesc;
    }

    public int getOrder() {
        return orderNum;
    }

    public void setOrder(int orderNum) {
        this.orderNum = orderNum;
    }

    public int getRecipeId() {
        return rId;
    }

    public void setRecipeId(int rId) {
        this.rId = rId;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recipeid", insertable = false, updatable = false)
    @JsonIgnore
    private Recipe recipe;

    public Recipe getRecipe() {
        return recipe;
    }
    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }
}
