package com.example.coursework.database;

import com.example.coursework.components.ComputerCases;
import com.example.coursework.components.DataStorage;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComputerCasesRepository extends CrudRepository<ComputerCases, Integer> {
    @Query("SELECT * FROM ComputerCases;")
    List<ComputerCases> getAll();
}
