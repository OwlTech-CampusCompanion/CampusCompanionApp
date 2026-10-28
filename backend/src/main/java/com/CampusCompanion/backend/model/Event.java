package com.CampusCompanion.backend.model;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    private String description;
    private String category;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "building_id")
    private UUID buildingId;
    @Column(name = "location_note")
    private String locationNote;
    @Column(name = "starts_at")
    private Instant startsAt;
    @Column(name = "ends_at")
    private Instant endsAt;
    @Column(name = "organizer_id")
    private UUID organizerId;
    private String status = "active";
    private String source = "internal";
    @Column(name = "external_id")
    private String externalId;

    public UUID getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getImageUrl() { return imageUrl; }
    public UUID getBuildingId() { return buildingId; }
    public void setBuildingId(UUID buildingId) { this.buildingId = buildingId; }
    public String getLocationNote() { return locationNote; }
    public void setLocationNote(String locationNote) { this.locationNote = locationNote; }
    public Instant getStartsAt() { return startsAt; }
    public void setStartsAt(Instant startsAt) { this.startsAt = startsAt; }
    public Instant getEndsAt() { return endsAt; }
    public void setEndsAt(Instant endsAt) { this.endsAt = endsAt; }
    public UUID getOrganizerId() { return organizerId; }
    public void setOrganizerId(UUID organizerId) { this.organizerId = organizerId; }
    public String getStatus() { return status; }
}