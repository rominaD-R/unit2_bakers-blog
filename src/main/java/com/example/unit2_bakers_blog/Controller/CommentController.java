package com.example.unit2_bakers_blog.Controller;

import java.util.List;
import com.example.unit2_bakers_blog.Models.Comment;
import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Repository.CommentRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private final CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @GetMapping("/all")
    public List<Comment> getAllItems() {
        return commentRepository.findAll();
    }

    @GetMapping("/form")
    public String getForm() {
        return  "<form method = 'post'>" +
                    "<label> Enter User ID: "
                    + "<input type ='text' name = 'userId' placeholder='1'>" +
                    "<label> Enter comment: "+
                    "<input type = 'text' name = 'content'> " +
                    "<label> Enter recipe ID: " +
                    "<input type = 'text' name = 'recipeId'> "+
                    "<input type = 'submit' >"+
                "</form>" ;
    }

    @PostMapping("form")
    public String handleForm(Comment comment){
        commentRepository.save(comment);
        return "User " + comment.getUserId() + " said:  "+ comment.getContent();
    }

    @GetMapping("/comment/{id}")
    public Comment getItem(@PathVariable int id) {
        return commentRepository.findById(id).orElse(null);
    }

    @PostMapping("/comments")
    public Comment addItem(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @PutMapping("/comment/{id}")
    public Comment updateItem(@PathVariable int id, @RequestBody Comment comment) {
        comment.setId(id);
        return commentRepository.save(comment);
    }

    @DeleteMapping("/comment/{id}")
    public void deleteItem(@PathVariable int id) {
        commentRepository.deleteById(id);
    }

}
