package com.example.unit2_bakers_blog;

import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
// BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(11);

@CrossOrigin(origins = "*")
@Configuration
public class UserLoader {
    @Bean
    public CommandLineRunner loadUser(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        return args -> {
            if (!userRepository.findByUsername("admin").isPresent()) {
                User user = new User();
                user.setUsername("admin");
                user.setPassword(passwordEncoder.encode("admin"));
                user.setRole("basic");
                userRepository.save(user);
            }
        };
    }
}
