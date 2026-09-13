package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.Utensil;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UtensilRepository extends JpaRepository<Utensil, Integer> {
    Optional<Utensil> findByUtensil(String utensil);                            // used ChatGPT to provide this code when looking up utensils
}
