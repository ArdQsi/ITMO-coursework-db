package com.example.coursework.service;

import com.example.coursework.components.ComputerCases;
import com.example.coursework.database.ComputerCasesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComputerCasesService {
    private final ComputerCasesRepository computerCasesRepository;

    public List<ComputerCases> getAll(){
        List<ComputerCases> l = computerCasesRepository.getAll();
        l.forEach(System.out::println);
        return l;
    }
}
