package com.CampusCompanion.backend.repository;

import com.CampusCompanion.backend.model.Rsvp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface RsvpRepository extends JpaRepository<Rsvp, UUID> {
    Optional<Rsvp> findByEventIdAndUserId(UUID eventId, UUID userId);
    long countByEventIdAndStatus(UUID eventId, String status);
    List<Rsvp> findByUserIdAndStatus(UUID userId, String status);
}