package com.CampusCompanion.backend.service;

import com.CampusCompanion.backend.dto.BuildingDtos.*;
import com.CampusCompanion.backend.exception.ApiException;
import com.CampusCompanion.backend.model.Building;
import com.CampusCompanion.backend.model.BuildingInfoItem;
import com.CampusCompanion.backend.repository.BuildingInfoItemRepository;
import com.CampusCompanion.backend.repository.BuildingRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BuildingService {
    private final BuildingRepository buildings;
    private final BuildingInfoItemRepository infoItems;

    public BuildingService(BuildingRepository buildings, BuildingInfoItemRepository infoItems) {
        this.buildings = buildings;
        this.infoItems = infoItems;
    }

    public List<BuildingSummary> list(String category, String q) {
        List<Building> result;
        if (q != null && !q.isBlank()) {
            result = buildings.findByNameContainingIgnoreCaseOrderByName(q.trim());
        } else if (category != null && !category.isBlank()) {
            result = buildings.findByCategoryOrderByName(category.trim());
        } else {
            result = buildings.findAll();
        }
        return result.stream()
                .map(b -> new BuildingSummary(b.getId(), b.getName(), b.getCode(),
                        b.getCategory(), b.getLatitude(), b.getLongitude()))
                .toList();
    }

    public BuildingDetail get(UUID id) {
        Building b = buildings.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Building not found"));
        List<String> info = infoItems.findByBuildingIdOrderBySortOrder(id).stream()
                .map(BuildingInfoItem::getLabel).toList();
        return new BuildingDetail(b.getId(), b.getName(), b.getCode(), b.getAddress(),
                b.getDescription(), b.getCategory(), b.getImageUrl(), b.getFloors(),
                b.getLatitude(), b.getLongitude(), info);
    }
}