package com.example.faculty_service.service;

import com.example.faculty_service.model.Faculty;
import com.example.faculty_service.repository.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class FacultyService {

    @Autowired
    private FacultyRepository repository;

    public Faculty register(Faculty faculty) {
        return repository.save(faculty);
    }

    public Optional<Faculty> login(String email, String password) {
        return repository.findByEmailAndPassword(email, password);
    }
}
