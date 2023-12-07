package com.example.coursework.database;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PCAssemblyRepository extends CrudRepository<PCAssembly, Integer> {
    @Query("SELECT * FROM getcomputerforprice(:my_price)")
    PCAssembly getPCAssembly(@Param("my_price") int price);
}
