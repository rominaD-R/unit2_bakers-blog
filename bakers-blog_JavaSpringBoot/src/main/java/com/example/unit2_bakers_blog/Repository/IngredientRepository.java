package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
    Optional<Ingredient> findByIngredient(String ingredient);
}
