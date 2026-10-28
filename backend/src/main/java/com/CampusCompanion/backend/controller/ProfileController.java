package com.CampusCompanion.backend.controller;

import com.CampusCompanion.backend.dto.BuildingDtos.BuildingSummary;
import com.CampusCompanion.backend.dto.EventDtos.EventResponse;
import com.CampusCompanion.backend.model.User;
import com.CampusCompanion.backend.service.EventService;
import com.CampusCompanion.backend.service.FavoriteService;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/users/me")
public class ProfileController {
    private final EventService events;
    private final FavoriteService favorites;

    public ProfileController(EventService events, FavoriteService favorites) {
        this.events = events;
        this.favorites = favorites;
    }

    @GetMapping("/saved-events")
    public List<EventResponse> savedEvents(@AuthenticationPrincipal User me) { return events.savedEvents(me); }

    @PostMapping("/saved-events/{eventId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void saveEvent(@PathVariable UUID eventId, @AuthenticationPrincipal User me) { events.save(eventId, me); }

    @DeleteMapping("/saved-events/{eventId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unsaveEvent(@PathVariable UUID eventId, @AuthenticationPrincipal User me) { events.unsave(eventId, me); }

    @GetMapping("/rsvps")
    public List<EventResponse> myRsvps(@AuthenticationPrincipal User me) { return events.myRsvps(me); }

    @GetMapping("/favorites")
    public List<BuildingSummary> favorites(@AuthenticationPrincipal User me) { return favorites.list(me); }

    @PostMapping("/favorites/{buildingId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addFavorite(@PathVariable UUID buildingId, @AuthenticationPrincipal User me) { favorites.add(buildingId, me); }

    @DeleteMapping("/favorites/{buildingId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeFavorite(@PathVariable UUID buildingId, @AuthenticationPrincipal User me) { favorites.remove(buildingId, me); }
}