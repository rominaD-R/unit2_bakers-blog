package com.example.unit2_bakers_blog.Controller;

import com.example.unit2_bakers_blog.Models.*;
import com.example.unit2_bakers_blog.Repository.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeRepository recipeRepository;
    private final UtensilRepository utensilRepository;
    private final IngredientRepository ingredientRepository;
    private final StepRepository stepRepository;
    private final ImageRepository imageRepository;
    private final TagRepository tagRepository;

    public RecipeController(RecipeRepository recipeRepository,  UtensilRepository utensilRepository,  IngredientRepository ingredientRepository, StepRepository stepRepository, ImageRepository imageRepository, TagRepository tagRepository) {
        this.recipeRepository = recipeRepository;
        this.utensilRepository = utensilRepository;
        this.ingredientRepository = ingredientRepository;
        this.stepRepository = stepRepository;
        this.imageRepository = imageRepository;
        this.tagRepository = tagRepository;
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

    @GetMapping("/filter")
    public List<Recipe> getFilteredRecipes(@RequestParam boolean beginner, @RequestParam boolean advanced, @RequestParam boolean gluten, @RequestParam boolean dairy, @RequestParam boolean nut, @RequestParam boolean treenut, @RequestParam boolean vegan) {
        List<Recipe> results = recipeRepository.findAll();
        Tag beginnerTag = new Tag();
        beginnerTag.setTag("Beginner");
        Tag advancedTag = new Tag();
        advancedTag.setTag("Advanced");
        Tag glutenTag = new Tag();
        glutenTag.setTag("Gluten-Free");
        Tag dairyTag = new Tag();
        dairyTag.setTag("Dairy Free");
        Tag nutTag = new Tag();
        nutTag.setTag("Nut Free");
        Tag treenutTag = new Tag();
        treenutTag.setTag("Tree Nut Free");
        Tag veganTag = new Tag();
        veganTag.setTag("Vegan");
        if (beginner) {
            System.out.println("BEGINNER");
        }
        return results;
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

        List<Ingredient> ingredients = recipe.getIngredients()
                .stream()
                .map(ingredient -> {
                    return ingredientRepository.findByIngredient(ingredient.getIngredient())
                            .orElseGet(() -> {
                                return ingredientRepository.save(ingredient);
                            });
                })
                .toList();
        recipe.setIngredients(ingredients);

        if (recipe.getTags() != null) {
            List<Tag> tags = recipe.getTags()
                    .stream()
                    .map(tag -> {
                        System.out.println("TAG RECEIVED: " + tag.getTag());
                        return tagRepository.findByTag(tag.getTag())
                                .orElseGet(() -> {
                                    return tagRepository.save(tag);
                                });
                    })
                    .toList();
            recipe.setTags(tags);
        }

        List<Step> steps = recipe.getSteps()
                .stream()
                .map(step -> {
                    step.setRecipe(recipe);
                    return step;
                })
                .toList();

        recipe.setSteps(steps);

        if (recipe.getImages() != null) {
            List<Image> images = recipe.getImages()
                    .stream()
                    .map(image -> {
                        image.setRecipe(recipe);
                        return image;
                    })
                    .toList();

            recipe.setImages(images);
        }

        return recipeRepository.save(recipe);
    }

    @PutMapping("/recipes/{id}")
    public Recipe updateItem(@PathVariable(name = "id") int id, @RequestBody Recipe recipe) {
        recipe.setId(id);
        return recipeRepository.save(recipe);
    }

    @DeleteMapping("/recipes/{id}")
    public void deleteItem(@PathVariable(name = "id") int id) {
        recipeRepository.deleteById(id);
    }
}
