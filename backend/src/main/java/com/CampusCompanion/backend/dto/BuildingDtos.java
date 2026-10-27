package com.CampusCompanion.backend.dto;

import java.util.List;
import java.util.UUID;

public final class BuildingDtos {

    private BuildingDtos() {}

    public record BuildingSummary(UUID id, String name, String code, String category,
                                  Double latitude, Double longitude) {}

    public record BuildingDetail(UUID id, String name, String code, String address,
                                 String description, String category, String imageUrl,
                                 int floors, Double latitude, Double longitude,
                                 List<String> info) {}
}