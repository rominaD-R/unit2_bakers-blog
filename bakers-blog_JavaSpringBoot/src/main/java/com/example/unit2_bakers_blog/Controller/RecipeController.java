package com.example.unit2_bakers_blog.Controller;

import com.example.unit2_bakers_blog.Models.Recipe;
import com.example.unit2_bakers_blog.Models.Step;
import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Models.Utensil;
import com.example.unit2_bakers_blog.Repository.RecipeRepository;
import com.example.unit2_bakers_blog.Repository.UtensilRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeRepository recipeRepository;
    private final UtensilRepository utensilRepository;

    public RecipeController(RecipeRepository recipeRepository,  UtensilRepository utensilRepository) {
        this.recipeRepository = recipeRepository;
        this.utensilRepository = utensilRepository;
    }

    @GetMapping("/all")
    public List<Recipe> getAllItems() {
        return recipeRepository.findAll();
    }

    @GetMapping("/form")
    public String getForm() {
        return  "<form method = 'post'>" +
                "<label> Recipe Title: "
                + "<input type ='text' name = 'title'> " +
                "<label> Enter tag: "+
                "<input type = 'text' name = 'tags'> " +
                "<input type = 'submit' >" +
                "<label> Enter Step 1: "+
                "<input class='step' type = 'text' name = 'step1'> " +
                "<label> Enter Step 2: "+
                "<input class='step' type = 'text' name = 'step2'> " +
                "</form>" ;
    }

    // MIKE ADVICE
    // Take in one field called 'steps' in the UI and then allow seperate fields/inputs in the UI to allow adding steps.
    // THen when sending it to API, make it one string, BUT between each step, put a limiter like a comma or %
    // SO, make dynamic add steps to front-end form, THEN make it one string WITH LIMITERS in Java


    @PostMapping("form")
    public String handleForm(Recipe recipe){
        recipe.setUserId(2);
        recipe.setCreatedAt(new java.sql.Timestamp(System.currentTimeMillis()));
        recipeRepository.save(recipe);
        return "Recipe " + recipe.getTitle() + " added successfully!  Recipe ID: " + recipe.getId();
    }

    @GetMapping("/recipe/{id}")
    public Recipe getItem(@PathVariable(name = "id") int id) {
        return recipeRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public Recipe addItem(@RequestBody Recipe recipe) {
        List<Utensil> utensils = recipe.getUtensils()
                .stream()
                .map(utensil -> {
                    System.out.println("UTENSIL RECEIVED: " + utensil.getUtensil());
                    return utensilRepository.findByUtensil(utensil.getUtensil())
                            .orElseGet(() -> {
                                System.out.println("CREATING NEW UTENSIL: " + utensil.getUtensil());
                                return utensilRepository.save(utensil);
                            });
                })
                .toList();

        System.out.println("Setting utensils:  ");
        recipe.setUtensils(utensils);

        System.out.println("We have set the utensils!!");
        return recipeRepository.save(recipe);
    }

    @PutMapping("/recipes/{id}")
    public Recipe updateItem(@PathVariable int id, @RequestBody Recipe recipe) {
        recipe.setId(id);
        return recipeRepository.save(recipe);
    }

    @DeleteMapping("/recipes/{id}")
    public void deleteItem(@PathVariable int id) {
        recipeRepository.deleteById(id);
    }
}
