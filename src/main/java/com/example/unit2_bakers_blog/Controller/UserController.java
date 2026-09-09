package com.example.unit2_bakers_blog.Controller;

import com.example.unit2_bakers_blog.Models.Recipe;
import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Repository.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
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
    public String handleForm(User user){
        user.setRole("basic");
        userRepository.save(user);
        return "Hello : "+ user.getfName() + " ! Your email is "+ user.getEmail();
    }

    @GetMapping("/user/{id}")
    public User getItem(@PathVariable int id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public User addItem(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/user/{id}")
    public User updateItem(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        return userRepository.save(user);
    }

    @DeleteMapping("/user/{id}")
    public void deleteItem(@PathVariable int id) {
        userRepository.deleteById(id);
    }
}
