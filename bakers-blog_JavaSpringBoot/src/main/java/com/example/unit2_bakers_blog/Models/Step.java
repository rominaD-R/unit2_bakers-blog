package com.example.unit2_bakers_blog.Models;

import jakarta.persistence.*;

@Entity
// @Table(name = "recipe_steps")
public class Step {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String stepDesc;
    private int postId;

    @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    public Step() {
    }

    public Step(String stepDesc, int postId) {
        this.stepDesc = stepDesc;
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

//    public int getStep_id() {
//        return step_id;
//    }
//
//    public void setStep_id(int step_id) {
//        this.step_id = step_id;
//    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }
}
