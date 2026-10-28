package com.CampusCompanion.backend.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "rsvps")
public class Rsvp {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(name = "event_id")
    private UUID eventId;
    @Column(name = "user_id")
    private UUID userId;
    private String status = "going";

    public UUID getId() { return id; }
    public UUID getEventId() { return eventId; }
    public void setEventId(UUID eventId) { this.eventId = eventId; }
    public UUID getUserId() { return userId; }
    public void setUserId(UUID userId) { this.userId = userId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}