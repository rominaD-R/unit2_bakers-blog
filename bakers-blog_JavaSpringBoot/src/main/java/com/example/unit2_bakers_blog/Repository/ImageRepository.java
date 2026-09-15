package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Integer> {
}
