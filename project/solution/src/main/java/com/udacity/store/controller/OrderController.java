package com.udacity.store.controller;

import com.udacity.store.model.Order;
import com.udacity.store.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("orders/")
@CrossOrigin(origins = "http://localhost:4200")

public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("submit")
    public void submit(@RequestBody Order order){
        System.out.println("New Order Processed  " + order);
        orderRepository.save(order);
    }




}
