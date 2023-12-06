package com.example.coursework.service;

import com.example.coursework.components.MotherBoards;
import com.example.coursework.components.PowerSupply;
import com.example.coursework.database.MotherBoardsRepository;
import com.example.coursework.database.PowerSupplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MotherBoardsService {
    private final MotherBoardsRepository motherBoardsRepository;

    public List<MotherBoards> getAll(){
        return motherBoardsRepository.getAll();
    }
}
