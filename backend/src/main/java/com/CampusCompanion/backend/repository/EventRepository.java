package com.CampusCompanion.backend.repository;

import com.CampusCompanion.backend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public interface EventRepository extends JpaRepository<Event, UUID> {
    List<Event> findByStatusAndStartsAtGreaterThanEqualOrderByStartsAt(String status, Instant from);
}