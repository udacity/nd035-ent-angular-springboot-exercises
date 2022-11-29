package com.udacity.store.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private String price;

    @Column(name = "products", length = 100000)
    private String products;

    public Order() {
       super();
    }
    public Order(String name, String price, String products) {
        super();
        this.name = name;
        this.price = price;
        this.products = products;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getProducts() {
        return products;
    }

    public void setProducts(String products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return " Customer Name: " + getName() + " Total Price: " + getPrice() + " Products: " + getProducts();
    }
}
