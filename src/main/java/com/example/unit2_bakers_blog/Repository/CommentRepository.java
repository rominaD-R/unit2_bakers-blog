package com.example.unit2_bakers_blog.Repository;

import com.example.unit2_bakers_blog.Models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
