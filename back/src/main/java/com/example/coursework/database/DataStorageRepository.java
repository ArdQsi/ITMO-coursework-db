package com.example.coursework.database;

import com.example.coursework.components.DataStorage;
import com.example.coursework.components.GraphicsCards;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DataStorageRepository extends CrudRepository<DataStorage, Integer> {
    @Query("SELECT * FROM DataStorage;")
    List<DataStorage> getAll();
}
