package com.example.student_service.service;


import com.example.student_service.model.Student;
import com.example.student_service.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public Student register(Student student) {
        return repository.save(student);
    }

    public Optional<Student> login(String email, String password) {
        return repository.findByEmailAndPassword(email, password);
    }

    public Optional<Student> getByRollNo(String rollNo) {
        return repository.findByRollNo(rollNo);
    }
}