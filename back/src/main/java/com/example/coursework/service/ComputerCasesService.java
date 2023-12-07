package com.example.coursework.service;

import com.example.coursework.components.ComputerCases;
import com.example.coursework.database.repositories.ComputerCasesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComputerCasesService {
    private final ComputerCasesRepository computerCasesRepository;

    public List<ComputerCases> getAll(){
        return computerCasesRepository.getAll();
    }

    public ComputerCases getById(int id){
        return  computerCasesRepository.getById(id);
    }
}
