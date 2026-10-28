package com.CampusCompanion.backend.repository;

import com.CampusCompanion.backend.model.SavedEvent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SavedEventRepository extends JpaRepository<SavedEvent, SavedEvent.Key> {
    List<SavedEvent> findByUserId(UUID userId);
    boolean existsByUserIdAndEventId(UUID userId, UUID eventId);
    void deleteByUserIdAndEventId(UUID userId, UUID eventId);
}