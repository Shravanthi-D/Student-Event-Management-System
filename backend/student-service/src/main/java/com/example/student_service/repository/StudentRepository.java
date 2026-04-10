package com.example.student_service.repository;


import com.example.student_service.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface StudentRepository
        extends MongoRepository<Student, String> {

    Optional<Student> findByRollNo(String rollNo);
    Optional<Student> findByEmailAndPassword(
            String email, String password);
}