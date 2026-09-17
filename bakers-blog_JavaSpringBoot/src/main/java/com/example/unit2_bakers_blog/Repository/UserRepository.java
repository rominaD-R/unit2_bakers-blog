package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
