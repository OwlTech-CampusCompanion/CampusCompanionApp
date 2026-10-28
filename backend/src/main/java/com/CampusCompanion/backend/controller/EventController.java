package com.CampusCompanion.backend.controller;

import com.CampusCompanion.backend.dto.EventDtos.*;
import com.CampusCompanion.backend.model.User;
import com.CampusCompanion.backend.service.EventService;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService service;

    public EventController(EventService service) { this.service = service; }

    @GetMapping
    public List<EventResponse> list(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant to,
            @RequestParam(required = false) UUID buildingId,
            @AuthenticationPrincipal User me) {
        return service.list(from, to, buildingId, me);
    }

    @GetMapping("/{id}")
    public EventResponse get(@PathVariable UUID id, @AuthenticationPrincipal User me) {
        return service.get(id, me);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EventResponse create(@Valid @RequestBody CreateEventRequest req, @AuthenticationPrincipal User me) {
        return service.create(req, me);
    }

    @PostMapping("/{id}/rsvp")
    public EventResponse rsvp(@PathVariable UUID id, @AuthenticationPrincipal User me) {
        return service.rsvp(id, me);
    }

    @DeleteMapping("/{id}/rsvp")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void cancelRsvp(@PathVariable UUID id, @AuthenticationPrincipal User me) {
        service.cancelRsvp(id, me);
    }
}