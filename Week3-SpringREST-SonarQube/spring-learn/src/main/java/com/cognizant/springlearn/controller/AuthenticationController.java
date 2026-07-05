package com.cognizant.springlearn.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {
	
	private static final String SECRET_KEY = "secretkey";
	private static final long EXPIRATION_TIME = 20 * 60 * 1000; // 20 minutes
	
	@GetMapping("/authenticate")
	public AuthenticationResponse authenticate(
			@RequestParam String username,
			@RequestParam String password) {
		
		// For this exercise, accept any username/password
		if (username != null && !username.isEmpty() && password != null && !password.isEmpty()) {
			
			// Generate JWT token
			String token = Jwts.builder()
					.setSubject(username)
					.setIssuedAt(new Date())
					.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
					.signWith(SignatureAlgorithm.HS256, SECRET_KEY)
					.compact();
			
			return new AuthenticationResponse(token);
		}
		
		return null;
	}
}