package com.example.coursework.сontrollers;

import com.example.coursework.database.Result;
import com.example.coursework.service.ResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MainController {

    final private ResultService resultService;

    @GetMapping("/main")
    public List<Result> main(@RequestParam(value = "price", defaultValue = "0") int price) {
        List<Result> list = resultService.getResult(price);
        return list;
    }
}
