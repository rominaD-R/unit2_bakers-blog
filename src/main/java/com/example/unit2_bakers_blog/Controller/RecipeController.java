package com.example.unit2_bakers_blog.Controller;

import com.example.unit2_bakers_blog.Models.Recipe;
import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Repository.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
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
                "<label> Enter description: "+
                "<input type = 'text' name = 'description'> " +
                "<input type = 'submit' >"+
                "</form>" ;
    }

    @PostMapping("form")
    public String handleForm(Recipe recipe){
        recipeRepository.save(recipe);
        return "Recipe " + recipe.getTitle() + " added successfully!";
    }

    @GetMapping("/recipe/{id}")
    public Recipe getItem(@PathVariable int id) {
        return recipeRepository.findById(id).orElse(null);
    }

    @PostMapping("/recipes")
    public Recipe addItem(@RequestBody Recipe recipe) {
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
