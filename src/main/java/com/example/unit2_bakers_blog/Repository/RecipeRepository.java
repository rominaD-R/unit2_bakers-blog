package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
}
