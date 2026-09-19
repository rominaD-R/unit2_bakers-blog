package com.example.unit2_bakers_blog.Controller;

import com.example.unit2_bakers_blog.Models.Recipe;
import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Repository.RecipeRepository;
import com.example.unit2_bakers_blog.Repository.UserRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;
    private final RecipeRepository recipeRepository;

    public UserController(UserRepository userRepository, RecipeRepository recipeRepository) {
        this.userRepository = userRepository;
        this.recipeRepository = recipeRepository;
    }

    @GetMapping("/current")
    @PreAuthorize("isAuthenticated()")
    public User getUserInfo(Authentication authentication) {
        String username = authentication.getName();

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


    @GetMapping("/all")
    public List<User> getAllItems() {
        return userRepository.findAll();
    }

    @GetMapping("/form")
    public String getForm() {
        return  "<form method = 'post'>" +
                "<label> Enter username: "
                + "<input type ='text' name = 'username'> " +
                "<label> Enter first name: "
                + "<input type ='text' name = 'fName'> " +
                "<label> Enter last name: "+
                "<input type = 'text' name = 'lName'> " +
                "<label> Enter email: " +
                "<input type = 'email' name = 'email'> "+
                "<input type = 'submit' >"+
                "</form>" ;
    }

    @PostMapping("form")
    public String handleForm(User user) {
        user.setRole("basic");
        userRepository.save(user);
        return "Hello : "+ user.getfName() + " ! Your email is "+ user.getEmail();
    }

    @GetMapping("/user/{id}")
    public User getItem(@PathVariable(name = "id") int id) {
        return userRepository.findById(id).orElse(null);
    }

    @GetMapping("/user/{id}/savedrecipes")
    public List<Recipe> getSavedRecipes(@PathVariable(name = "id") int id) {
        return userRepository.findById(id).orElse(null).getSavedRecipes();
    }

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(11);

    @PostMapping()
    public User addItem(@RequestBody User user) {
        user.setRole("basic");
        System.out.printf("%s: %s\n", user.getfName(), user.getlName());
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PutMapping("/user/{id}")
    public User updateItem(@PathVariable(name = "id") int id, @RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/user/{id}/recipe/{rid}")
    public User saveRecipe(@PathVariable(name = "id") int id, @PathVariable(name = "rid") int rid, @RequestBody User user) {
        user.saveRecipe(recipeRepository.findById(rid).orElse(null));
        return userRepository.save(user);
    }

    @DeleteMapping("/user/{id}")
    public void deleteItem(@PathVariable(name = "id") int id) {
        userRepository.deleteById(id);
    }

}
