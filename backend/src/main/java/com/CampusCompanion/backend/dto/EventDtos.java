package com.CampusCompanion.backend.dto;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.Instant;
import java.util.UUID;

public final class EventDtos {

    private EventDtos() {}

    public record EventResponse(UUID id, String title, String description, String category,
                                String imageUrl, UUID buildingId, String buildingName,
                                String locationNote, Instant startsAt, Instant endsAt,
                                String status, long goingCount, String myRsvp, boolean saved) {}

    public record CreateEventRequest(
            @NotBlank(message = "Title is required") String title,
            String description,
            String category,
            UUID buildingId,
            String locationNote,
            @NotNull(message = "Start time is required")
            @Future(message = "Start time must be in the future") Instant startsAt,
            Instant endsAt) {}
}