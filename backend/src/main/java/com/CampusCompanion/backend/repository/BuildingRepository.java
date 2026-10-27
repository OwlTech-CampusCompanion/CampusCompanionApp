package com.CampusCompanion.backend.repository;

import com.CampusCompanion.backend.model.Building;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BuildingRepository extends JpaRepository<Building, UUID> {
    List<Building> findByCategoryOrderByName(String category);
    List<Building> findByNameContainingIgnoreCaseOrderByName(String q);
}