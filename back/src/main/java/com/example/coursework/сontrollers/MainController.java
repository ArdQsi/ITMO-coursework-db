package com.example.coursework.сontrollers;

import com.example.coursework.database.Result;
import com.example.coursework.service.ResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequiredArgsConstructor
public class MainController {

    final private ResultService resultService;

    @PostMapping("/main")
    public List<Result> main(@RequestParam(value = "price", defaultValue = "30000") int price) {
        System.out.println(price);
        List<Result> list = resultService.getResult(price);
        return list;
    }
}
