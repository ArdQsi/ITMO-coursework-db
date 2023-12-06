package com.example.coursework.сontrollers;

import com.example.coursework.database.Result;
import com.example.coursework.service.ResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequiredArgsConstructor
public class ComponentsController {
    final private ResultService resultService;

    @GetMapping("/video-сard")
    public List<Result> main(@RequestParam(value = "price", defaultValue = "20000") int price) {
        System.out.println(price);
        List<Result> list = resultService.getResult(price);
        return list;
    }
}
