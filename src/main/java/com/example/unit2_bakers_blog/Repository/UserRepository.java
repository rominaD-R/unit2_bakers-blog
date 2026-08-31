package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
