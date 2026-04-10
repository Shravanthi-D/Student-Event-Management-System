package com.example.events_service.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "events")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Event {

    @Id
    private String id;

    private String studentName;
    private String studentRollNo;
    private String eventName;
    private String eventLocation;
    private String eventDate;       // Format: YYYY-MM-DD
    private String eventDescription;
    private String facultyId;
}