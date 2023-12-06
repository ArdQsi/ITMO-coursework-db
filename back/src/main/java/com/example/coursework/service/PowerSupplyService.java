package com.example.coursework.service;

import com.example.coursework.components.PowerSupply;
import com.example.coursework.components.Processors;
import com.example.coursework.database.PowerSupplyRepository;
import com.example.coursework.database.ProcessorsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PowerSupplyService {
    private final PowerSupplyRepository powerSupplyRepository;

    public List<PowerSupply> getAll(){
        return powerSupplyRepository.getAll();
    }
}
