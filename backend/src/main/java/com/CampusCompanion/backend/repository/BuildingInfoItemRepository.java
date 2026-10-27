package com.CampusCompanion.backend.repository;

import com.CampusCompanion.backend.model.BuildingInfoItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BuildingInfoItemRepository extends JpaRepository<BuildingInfoItem, UUID> {
    List<BuildingInfoItem> findByBuildingIdOrderBySortOrder(UUID buildingId);
}