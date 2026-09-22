package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.Recipe;
import com.example.unit2_bakers_blog.Models.Tag;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
    // List<Recipe> findAllByTag(Tag tag);
}
