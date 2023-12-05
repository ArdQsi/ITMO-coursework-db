package com.example.coursework.сontrollers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/main")
    public String hello(@RequestParam(value = "price", defaultValue = "0") String name) {
        return String.format("Hello %s!", name);
    }
}
