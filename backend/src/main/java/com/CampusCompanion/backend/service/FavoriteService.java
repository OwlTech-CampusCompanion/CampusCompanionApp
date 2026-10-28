package com.CampusCompanion.backend.service;

import com.CampusCompanion.backend.dto.BuildingDtos.BuildingSummary;
import com.CampusCompanion.backend.exception.ApiException;
import com.CampusCompanion.backend.model.Building;
import com.CampusCompanion.backend.model.FavoriteLocation;
import com.CampusCompanion.backend.model.User;
import com.CampusCompanion.backend.repository.BuildingRepository;
import com.CampusCompanion.backend.repository.FavoriteLocationRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.UUID;

@Service
public class FavoriteService {
    private final FavoriteLocationRepository favorites;
    private final BuildingRepository buildings;

    public FavoriteService(FavoriteLocationRepository favorites, BuildingRepository buildings) {
        this.favorites = favorites;
        this.buildings = buildings;
    }

    public List<BuildingSummary> list(User me) {
        List<UUID> ids = favorites.findByUserId(me.getId()).stream()
                .map(FavoriteLocation::getBuildingId).toList();
        return buildings.findAllById(ids).stream()
                .sorted(Comparator.comparing(Building::getName))
                .map(b -> new BuildingSummary(b.getId(), b.getName(), b.getCode(),
                        b.getCategory(), b.getLatitude(), b.getLongitude()))
                .toList();
    }

    @Transactional
    public void add(UUID buildingId, User me) {
        if (!buildings.existsById(buildingId)) {
            throw new ApiException(HttpStatus.NOT_FOUND, "Building not found");
        }
        if (!favorites.existsByUserIdAndBuildingId(me.getId(), buildingId)) {
            favorites.save(new FavoriteLocation(me.getId(), buildingId));
        }
    }

    @Transactional
    public void remove(UUID buildingId, User me) {
        favorites.deleteByUserIdAndBuildingId(me.getId(), buildingId);
    }
}