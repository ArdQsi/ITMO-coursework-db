package com.example.coursework.сontrollers;

import com.alibaba.fastjson.JSONObject;
import com.example.coursework.database.Result;
import com.example.coursework.service.ResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")

@RestController
@RequiredArgsConstructor
public class MainController {

    final private ResultService resultService;

    @PostMapping("/main")
    public List<Result> main(@RequestBody JSONObject jsonObject) {
        Integer price = Integer.parseInt(jsonObject.get("price").toString());
        System.out.println(price);
        List<Result> list = resultService.getResult(price);
        for(Result i: list) {
            System.out.println(i);
        }

        return list;
    }
}
