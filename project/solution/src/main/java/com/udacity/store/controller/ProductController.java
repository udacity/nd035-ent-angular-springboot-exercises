package com.udacity.store.controller;

import com.udacity.store.model.Product;
import com.udacity.store.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:4200")


public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("products")
    public List<Product> getProducts() {
        System.out.println("Fetch product lists");
        return this.productRepository.findAll();
    }
}
