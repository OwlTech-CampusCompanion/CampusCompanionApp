package com.campuscompanion.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import java.util.UUID;

public final class AuthDtos {

    private AuthDtos() {}

    public record SignupRequest(
            @NotBlank(message = "Full name is required")
            String fullName,

            @NotBlank(message = "Email is required")
            @Email(message = "Enter a valid email")
            @Pattern(regexp = "(?i)^[A-Za-z0-9._%+-]+@(students\\.)?kennesaw\\.edu$",
                     message = "Use your KSU email")
            String email,

            @NotBlank(message = "Password is required")
            @Size(min = 8, max = 72, message = "Password must be 8-72 characters")
            String password,

            @NotBlank(message = "Confirm your password")
            String confirmPassword) {}

    public record LoginRequest(
            @NotBlank(message = "Email is required") String email,
            @NotBlank(message = "Password is required") String password) {}

    public record UserResponse(UUID id, String fullName, String email, String role) {}

    public record AuthResponse(String token, UserResponse user) {}
}