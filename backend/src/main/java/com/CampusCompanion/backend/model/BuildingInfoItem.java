package com.CampusCompanion.backend.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "building_info_items")
public class BuildingInfoItem {
    @Id
    private UUID id;
    @Column(name = "building_id")
    private UUID buildingId;
    private String label;
    @Column(name = "sort_order")
    private int sortOrder;

    public UUID getId() { return id; }
    public UUID getBuildingId() { return buildingId; }
    public String getLabel() { return label; }
    public int getSortOrder() { return sortOrder; }
}