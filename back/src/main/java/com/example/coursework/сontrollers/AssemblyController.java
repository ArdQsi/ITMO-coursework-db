package com.example.coursework.сontrollers;

import com.example.coursework.components.*;
import com.example.coursework.database.PCAssembly;
import com.example.coursework.dto.ComponentsIdDto;
import com.example.coursework.dto.PriceRequestDto;
import com.example.coursework.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AssemblyController {
    final private ComputerCasesService computerCasesService;
    final private DataStorageService dataStorageService;
    final private GraphicsCardsService graphicsCardsService;
    final private MotherBoardsService motherBoardsService;
    final private PowerSupplyService powerSupplyService;
    final private ProcessorsService processorsService;
    final private RamMemoryService ramMemoryService;

    @PostMapping("/assembly")
    public PCAssembly getAssembly(@RequestBody ComponentsIdDto componentsId) {
        ComputerCases computerCases = computerCasesService.getById(componentsId.getComputerCasesId());
        DataStorage dataStorage = dataStorageService.getById(componentsId.getDataStorageId());
        MotherBoards motherBoards = motherBoardsService.getById(componentsId.getMotherboardsId());
        PowerSupply powerSupply = powerSupplyService.getById(componentsId.getPowerSupplyId());
        Processors processors = processorsService.getById(componentsId.getProcessorsId());
        RamMemory ramMemory = ramMemoryService.getById(componentsId.getRamMemoryId());
        GraphicsCards graphicsCards = graphicsCardsService.getById(componentsId.getGraphicsCardsId());
        return new PCAssembly(computerCases, dataStorage, graphicsCards, motherBoards,
                powerSupply, processors, ramMemory);
    }
}
