package com.CampusCompanion.backend.controller;

import com.CampusCompanion.backend.dto.BuildingDtos.*;
import com.CampusCompanion.backend.service.BuildingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/buildings")
public class BuildingController {
    private final BuildingService service;

    public BuildingController(BuildingService service) { this.service = service; }

    @GetMapping
    public List<BuildingSummary> list(@RequestParam(required = false) String category,
                                      @RequestParam(required = false) String q) {
        return service.list(category, q);
    }

    @GetMapping("/{id}")
    public BuildingDetail get(@PathVariable UUID id) { return service.get(id); }
}