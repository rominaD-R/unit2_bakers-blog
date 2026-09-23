package com.example.unit2_bakers_blog.Controller;

import java.util.List;
import com.example.unit2_bakers_blog.Models.Comment;
import com.example.unit2_bakers_blog.Models.Recipe;
import com.example.unit2_bakers_blog.Models.User;
import com.example.unit2_bakers_blog.Repository.CommentRepository;
import com.example.unit2_bakers_blog.Repository.RecipeRepository;
import com.example.unit2_bakers_blog.Repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/comments")
public class CommentController {

    private final CommentRepository commentRepository;
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;

    public CommentController(CommentRepository commentRepository, RecipeRepository recipeRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
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
        return "User " + comment.getUser().getUsername() + " said:  "+ comment.getContent();
    }

    @GetMapping("/comment/{id}")
    public Comment getItem(@PathVariable int id) {
        return commentRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public Comment addItem(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @PostMapping("/add/{rid}/{id}")
    public void addCommentToRecipe(@PathVariable(name = "rid") int rid, @PathVariable(name = "id") int id, @RequestBody Comment comment) {
        Recipe recipe = recipeRepository.findById(rid).orElse(null);
        recipe.addComment(comment);
        User user = userRepository.findById(id).orElse(null);
        user.addComment(comment);
        comment.setUser(user);
        comment.setRecipe(recipe);
//        recipeRepository.save(recipe);
//        userRepository.save(user);
        commentRepository.save(comment);
    }

    @PutMapping("/comment/{id}")
    public Comment updateItem(@PathVariable(name = "id") int id, @RequestBody Comment comment) {
        comment.setContent(comment.getContent());
        return commentRepository.save(comment);
    }

    @PatchMapping("/edit/{id}")
    public Comment editComment(@PathVariable(name = "id") int id, @RequestBody Comment comment) {
        String newContent = comment.getContent();
        comment = commentRepository.findById(id).orElse(null);
        comment.setContent(newContent);
        return commentRepository.save(comment);
    }

    @DeleteMapping("/comment/{id}")
    public void deleteItem(@PathVariable(name = "id") int id) {
        commentRepository.deleteById(id);
    }

}
