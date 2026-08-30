package com.example.unit2_bakers_blog.Models;

public class Utensil {

    private int id;

    private String utensil;

    public Utensil() { }

    public Utensil(String utensil) {
        this.utensil = utensil;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUtensil() {
        return utensil;
    }

    public void setUtensil(String utensil) {
        this.utensil = utensil;
    }

}
