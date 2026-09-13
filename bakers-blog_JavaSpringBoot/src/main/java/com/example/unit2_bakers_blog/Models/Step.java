package com.example.unit2_bakers_blog.Models;

import jakarta.persistence.*;

@Entity
// @Table(name = "recipe_steps")
public class Step {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String stepDesc;
    private int order;
    private int postId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Recipe recipe;

    public Step() {
    }

    public Step(String stepDesc, int order, int postId) {
        this.stepDesc = stepDesc;
        this.order = order;
        this.postId = postId;
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
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }
}
