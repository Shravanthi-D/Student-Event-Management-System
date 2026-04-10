package com.example.events_service.Service;

import com.example.events_service.Model.Event;
import com.example.events_service.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository repository;

    public Event addEvent(Event event) {
        return repository.save(event);
    }

    public List<Event> getEventsByMonth(String yearMonth) {
        return repository.findByEventDateStartingWith(yearMonth);
    }

    public List<Event> getEventsByRollNo(String rollNo) {
        return repository.findByStudentRollNo(rollNo);
    }

    // Update only if the facultyId matches
    public Event updateEvent(String id, String facultyId,
                             Event updatedEvent) {
        Optional<Event> existing = repository.findById(id);
        if (existing.isPresent()
                && existing.get().getFacultyId()
                .equals(facultyId)) {
            Event event = existing.get();
            event.setStudentName(updatedEvent.getStudentName());
            event.setStudentRollNo(
                    updatedEvent.getStudentRollNo());
            event.setEventName(updatedEvent.getEventName());
            event.setEventLocation(
                    updatedEvent.getEventLocation());
            event.setEventDate(updatedEvent.getEventDate());
            event.setEventDescription(
                    updatedEvent.getEventDescription());
            return repository.save(event);
        }
        return null;
    }

    // Delete only if the facultyId matches
    public boolean deleteEvent(String id, String facultyId) {
        Optional<Event> existing = repository.findById(id);
        if (existing.isPresent()
                && existing.get().getFacultyId()
                .equals(facultyId)) {
            repository.delete(existing.get());
            return true;
        }
        return false;
    }
}