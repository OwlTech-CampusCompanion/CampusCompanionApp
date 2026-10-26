package com.campuscompanion.backend.controller;

import com.campuscompanion.backend.dto.AuthDtos.UserResponse;
import com.campuscompanion.backend.model.User;
import com.campuscompanion.backend.service.AuthService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/me")
    public UserResponse me(@AuthenticationPrincipal User user) {
        return AuthService.toResponse(user);
    }
}