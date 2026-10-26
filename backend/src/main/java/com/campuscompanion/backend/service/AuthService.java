package com.campuscompanion.backend.service;

import com.campuscompanion.backend.dto.AuthDtos.*;
import com.campuscompanion.backend.exception.ApiException;
import com.campuscompanion.backend.model.User;
import com.campuscompanion.backend.repository.UserRepository;
import com.campuscompanion.backend.security.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository users;
    private final PasswordEncoder encoder;
    private final JwtService jwt;

    public AuthService(UserRepository users, PasswordEncoder encoder, JwtService jwt) {
        this.users = users;
        this.encoder = encoder;
        this.jwt = jwt;
    }

    public AuthResponse signup(SignupRequest req) {
        if (!req.password().equals(req.confirmPassword())) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Passwords do not match");
        }
        String email = req.email().trim().toLowerCase();
        if (users.existsByEmail(email)) {
            throw new ApiException(HttpStatus.CONFLICT, "An account with that email already exists");
        }
        User u = new User();
        u.setEmail(email);
        u.setFullName(req.fullName().trim());
        u.setPasswordHash(encoder.encode(req.password()));
        users.save(u);
        return new AuthResponse(jwt.generateToken(u), toResponse(u));
    }

    public AuthResponse login(LoginRequest req) {
        User u = users.findByEmail(req.email().trim().toLowerCase())
                .filter(x -> encoder.matches(req.password(), x.getPasswordHash()))
                .orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "Invalid email or password"));
        return new AuthResponse(jwt.generateToken(u), toResponse(u));
    }

    public static UserResponse toResponse(User u) {
        return new UserResponse(u.getId(), u.getFullName(), u.getEmail(), u.getRole());
    }
}