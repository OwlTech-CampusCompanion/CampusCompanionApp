package com.CampusCompanion.backend.service;

import com.CampusCompanion.backend.dto.EventDtos.*;
import com.CampusCompanion.backend.exception.ApiException;
import com.CampusCompanion.backend.model.*;
import com.CampusCompanion.backend.repository.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

@Service
public class EventService {
    private final EventRepository events;
    private final RsvpRepository rsvps;
    private final SavedEventRepository saved;
    private final BuildingRepository buildings;
    private final int maxRsvp;

    public EventService(EventRepository events, RsvpRepository rsvps, SavedEventRepository saved,
                        BuildingRepository buildings,
                        @Value("${app.rsvp.max-per-event:200}") int maxRsvp) {
        this.events = events;
        this.rsvps = rsvps;
        this.saved = saved;
        this.buildings = buildings;
        this.maxRsvp = maxRsvp;
    }

    public List<EventResponse> list(Instant from, Instant to, UUID buildingId, User me) {
        Instant start = from != null ? from : Instant.now();
        return events.findByStatusAndStartsAtGreaterThanEqualOrderByStartsAt("active", start).stream()
                .filter(e -> to == null || !e.getStartsAt().isAfter(to))
                .filter(e -> buildingId == null || buildingId.equals(e.getBuildingId()))
                .map(e -> toResponse(e, me))
                .toList();
    }

    public EventResponse get(UUID id, User me) {
        return toResponse(find(id), me);
    }

    public EventResponse create(CreateEventRequest req, User me) {
        if (!"organizer".equals(me.getRole()) && !"admin".equals(me.getRole())) {
            throw new ApiException(HttpStatus.FORBIDDEN, "Only organizers can create events");
        }
        if (req.endsAt() != null && req.endsAt().isBefore(req.startsAt())) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "End time must be after start time");
        }
        if (req.buildingId() != null && !buildings.existsById(req.buildingId())) {
            throw new ApiException(HttpStatus.NOT_FOUND, "Building not found");
        }
        Event e = new Event();
        e.setTitle(req.title().trim());
        e.setDescription(req.description());
        e.setCategory(req.category());
        e.setBuildingId(req.buildingId());
        e.setLocationNote(req.locationNote());
        e.setStartsAt(req.startsAt());
        e.setEndsAt(req.endsAt());
        e.setOrganizerId(me.getId());
        events.save(e);
        return toResponse(e, me);
    }

    @Transactional
    public EventResponse rsvp(UUID eventId, User me) {
        Event e = find(eventId);
        if (!"active".equals(e.getStatus())) {
            throw new ApiException(HttpStatus.CONFLICT, "This event was cancelled");
        }
        Rsvp r = rsvps.findByEventIdAndUserId(eventId, me.getId()).orElse(null);
        if (r != null && "going".equals(r.getStatus())) {
            return toResponse(e, me); // already going, nothing to do
        }
        if (rsvps.countByEventIdAndStatus(eventId, "going") >= maxRsvp) {
            throw new ApiException(HttpStatus.CONFLICT, "This event is full");
        }
        if (r == null) {
            r = new Rsvp();
            r.setEventId(eventId);
            r.setUserId(me.getId());
        }
        r.setStatus("going");
        rsvps.save(r);
        return toResponse(e, me);
    }

    @Transactional
    public void cancelRsvp(UUID eventId, User me) {
        Rsvp r = rsvps.findByEventIdAndUserId(eventId, me.getId())
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "You have not RSVPed to this event"));
        r.setStatus("cancelled");
        rsvps.save(r);
    }

    @Transactional
    public void save(UUID eventId, User me) {
        find(eventId);
        if (!saved.existsByUserIdAndEventId(me.getId(), eventId)) {
            saved.save(new SavedEvent(me.getId(), eventId));
        }
    }

    @Transactional
    public void unsave(UUID eventId, User me) {
        saved.deleteByUserIdAndEventId(me.getId(), eventId);
    }

    public List<EventResponse> savedEvents(User me) {
        List<UUID> ids = saved.findByUserId(me.getId()).stream().map(SavedEvent::getEventId).toList();
        return byIds(ids, me);
    }

    public List<EventResponse> myRsvps(User me) {
        List<UUID> ids = rsvps.findByUserIdAndStatus(me.getId(), "going").stream().map(Rsvp::getEventId).toList();
        return byIds(ids, me);
    }

    private List<EventResponse> byIds(List<UUID> ids, User me) {
        return events.findAllById(ids).stream()
                .sorted(Comparator.comparing(Event::getStartsAt))
                .map(e -> toResponse(e, me))
                .toList();
    }

    private Event find(UUID id) {
        return events.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Event not found"));
    }

    private EventResponse toResponse(Event e, User me) {
        String buildingName = e.getBuildingId() == null ? null
                : buildings.findById(e.getBuildingId()).map(Building::getName).orElse(null);
        long going = rsvps.countByEventIdAndStatus(e.getId(), "going");
        String myRsvp = rsvps.findByEventIdAndUserId(e.getId(), me.getId())
                .map(Rsvp::getStatus).filter(s -> !"cancelled".equals(s)).orElse(null);
        boolean isSaved = saved.existsByUserIdAndEventId(me.getId(), e.getId());
        return new EventResponse(e.getId(), e.getTitle(), e.getDescription(), e.getCategory(),
                e.getImageUrl(), e.getBuildingId(), buildingName, e.getLocationNote(),
                e.getStartsAt(), e.getEndsAt(), e.getStatus(), going, myRsvp, isSaved);
    }
}