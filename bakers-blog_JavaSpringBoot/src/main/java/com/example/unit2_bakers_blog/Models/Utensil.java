package com.example.unit2_bakers_blog.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "utensils")
public class Utensil {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true, nullable = false)
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

    @ManyToMany(mappedBy = "utensils")
    @JsonIgnore
    private List<Recipe> recipes;

}
