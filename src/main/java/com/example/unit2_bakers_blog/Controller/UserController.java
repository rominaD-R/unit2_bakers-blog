package com.example.unit2_bakers_blog.Controller;

import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Repository.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/form")
    public String getForm() {
        return  "<form method = 'post'>" +
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
        userRepository.save(user);
        return "Hello : "+ user.getfName() + " ! Your email is "+ user.getEmail();
    }
}
