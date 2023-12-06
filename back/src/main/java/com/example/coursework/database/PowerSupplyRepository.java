package com.example.coursework.database;

import com.example.coursework.components.PowerSupply;
import com.example.coursework.components.Processors;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PowerSupplyRepository extends CrudRepository<PowerSupply, Integer> {
    @Query("SELECT * FROM PowerSupply;")
    List<PowerSupply> getAll();
}
