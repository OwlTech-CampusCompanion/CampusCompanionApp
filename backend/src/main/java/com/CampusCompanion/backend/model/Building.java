package com.CampusCompanion.backend.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "buildings")
public class Building {
    @Id
    private UUID id;
    private String name;
    private String code;
    private String address;
    private String description;
    private String category;
    @Column(name = "image_url")
    private String imageUrl;
    private int floors;
    private Double latitude;
    private Double longitude;

    public UUID getId() { return id; }
    public String getName() { return name; }
    public String getCode() { return code; }
    public String getAddress() { return address; }
    public String getDescription() { return description; }
    public String getCategory() { return category; }
    public String getImageUrl() { return imageUrl; }
    public int getFloors() { return floors; }
    public Double getLatitude() { return latitude; }
    public Double getLongitude() { return longitude; }
}