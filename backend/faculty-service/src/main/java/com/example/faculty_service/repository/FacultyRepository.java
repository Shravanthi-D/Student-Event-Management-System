package com.example.faculty_service.repository;

import com.example.faculty_service.model.Faculty;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface FacultyRepository
        extends MongoRepository<Faculty, String> {

    Optional<Faculty> findByFacultyId(String facultyId);
    Optional<Faculty> findByEmailAndPassword(
            String email, String password);
}