package com.CampusCompanion.backend.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "favorite_locations")
@IdClass(FavoriteLocation.Key.class)
public class FavoriteLocation {
    @Id
    @Column(name = "user_id")
    private UUID userId;
    @Id
    @Column(name = "building_id")
    private UUID buildingId;

    public FavoriteLocation() {}
    public FavoriteLocation(UUID userId, UUID buildingId) { this.userId = userId; this.buildingId = buildingId; }

    public UUID getUserId() { return userId; }
    public UUID getBuildingId() { return buildingId; }

    public static class Key implements Serializable {
        private UUID userId;
        private UUID buildingId;

        public Key() {}
        public Key(UUID userId, UUID buildingId) { this.userId = userId; this.buildingId = buildingId; }

        @Override public boolean equals(Object o) {
            return o instanceof Key k && Objects.equals(userId, k.userId) && Objects.equals(buildingId, k.buildingId);
        }
        @Override public int hashCode() { return Objects.hash(userId, buildingId); }
    }
}