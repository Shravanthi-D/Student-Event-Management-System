package com.example.events_service.Repository;

import com.example.events_service.Model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EventRepository
        extends MongoRepository<Event, String> {

    List<Event> findByStudentRollNo(String studentRollNo);
    List<Event> findByEventDateStartingWith(String yearMonth);
    List<Event> findByFacultyId(String facultyId);
}