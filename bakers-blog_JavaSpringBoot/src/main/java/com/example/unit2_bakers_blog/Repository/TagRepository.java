package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Integer> {
    Optional<Tag> findByTag(String tag);
}
