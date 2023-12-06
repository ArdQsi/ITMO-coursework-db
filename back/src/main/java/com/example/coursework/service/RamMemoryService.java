package com.example.coursework.service;

import com.example.coursework.components.RamMemory;
import com.example.coursework.database.RamMemoryRepository;
import com.example.coursework.database.Result;
import com.example.coursework.database.ResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RamMemoryService {
    private final RamMemoryRepository ramMemoryRepository;

    public List<RamMemory> getAll(){
        return ramMemoryRepository.getAll();
    }
}
