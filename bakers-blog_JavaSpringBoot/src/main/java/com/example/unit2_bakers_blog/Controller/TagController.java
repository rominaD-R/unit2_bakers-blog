package com.example.unit2_bakers_blog.Controller;
import com.example.unit2_bakers_blog.Models.Recipe;
import com.example.unit2_bakers_blog.Models.Tag;
import com.example.unit2_bakers_blog.Repository.TagRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tags")
public class TagController {
    private final TagRepository tagRepository;

    public TagController(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @GetMapping("/all")
    public List<Tag> getAllItems() {
        return tagRepository.findAll();
    }

    @GetMapping("/form")
    public String getForm() {
        return  "<form method = 'post'>" +
                "<label> Enter tag: "
                + "<input type ='text' name = 'tag'>" +
                "<label> Enter description: "+
                "<input type = 'text' name = 'description'> " +
                "<input type = 'submit' >"+
                "</form>" ;
    }

    @PostMapping("/form")
    public String handleForm(@RequestParam("tag") String tag, @RequestParam("description") String description) {
        Tag taggy = new Tag();
        taggy.setTag(tag);
        taggy.setDescription(description);
        tagRepository.save(taggy);
        return "New tag '" + taggy.getTag() + "' added!";
    }

    @GetMapping("/tag/{id}")
    public Tag getItem(@PathVariable(name = "id") int id) {
        return tagRepository.findById(id).orElse(null);
    }

    @GetMapping("tag/{tagName}/recipes")
    public List<Recipe> getRecipes(@PathVariable(name = "tagName") String tagName) {
        return tagRepository.findByTag(tagName).get().getRecipes();
    }

    @PostMapping()
    public Tag addItem(@RequestBody Tag tag) {
        return tagRepository.save(tag);
    }

    @PutMapping("/tag/{id}")
    public Tag updateItem(@PathVariable int id, @RequestBody Tag tag) {
        tag.setId(id);
        return tagRepository.save(tag);
    }

    @DeleteMapping("/tag/{id}")
    public void deleteItem(@PathVariable(name = "id") int id) {
        tagRepository.deleteById(id);
    }
}
