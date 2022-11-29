package com.udacity.store.model;

import javax.persistence.*;

@Entity
@Table(name = "products")

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private String price;

    @Column(name = "url")
    private String url;

    @Column(name = "description")
    private String description;

    public Product(String name, String price, String url, String description){
        super();
        this.name = name;
        this.price = price;
        this.url = url;
        this.description = description;
    }

    public Product(){
        super();
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }

    public String getUrl() {
        return url;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return getName();
    }
}
