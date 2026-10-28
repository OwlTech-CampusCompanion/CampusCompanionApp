package com.CampusCompanion.backend.repository;

import com.CampusCompanion.backend.model.FavoriteLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface FavoriteLocationRepository extends JpaRepository<FavoriteLocation, FavoriteLocation.Key> {
    List<FavoriteLocation> findByUserId(UUID userId);
    boolean existsByUserIdAndBuildingId(UUID userId, UUID buildingId);
    void deleteByUserIdAndBuildingId(UUID userId, UUID buildingId);
}