package com.example.coursework.service;

import com.example.coursework.components.DataStorage;
import com.example.coursework.components.GraphicsCards;
import com.example.coursework.database.DataStorageRepository;
import com.example.coursework.database.GraphicsCardsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DataStorageService {
    private final DataStorageRepository dataStorageRepository;

    public List<DataStorage> getAll(){
        return dataStorageRepository.getAll();
    }
}
