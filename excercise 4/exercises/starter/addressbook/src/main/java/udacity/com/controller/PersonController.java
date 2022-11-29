package udacity.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import udacity.com.model.Person;
import udacity.com.repo.PersonRepo;

import java.util.List;

@RestController
@RequestMapping("people/")
@CrossOrigin(origins = "http://localhost:4200")

public class PersonController {
    @Autowired
    private PersonRepo personRepo;


    @GetMapping("all")
    public List<Person> getAllPeople(){
        System.out.println("Getting People");
        return personRepo.findAll();
    }

}
