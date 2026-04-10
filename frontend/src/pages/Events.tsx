type Event = {
  id: string
  studentName: string
  studentRollNo: string
  eventName: string
  eventLocation: string
  eventDate: string
  eventDescription: string
}

type EventsProps = {
  studentName: string
  rollNo: string
  events: Event[]
  onLogout: () => void
}

export default function Events({ studentName, rollNo, events, onLogout }: EventsProps) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        Welcome, {studentName}
      </h2>
      <p className="text-gray-500 mb-6">Roll No: {rollNo}</p>

      <h3 className="text-xl font-semibold mb-4">Your Event Participation</h3>

      {events.length === 0 ? (
        <p className="text-gray-500">No event records found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm"
            >
              <h4 className="text-lg font-bold text-blue-800 mb-2">
                {event.eventName}
              </h4>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Student:</span>{' '}
                {event.studentName}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Roll No:</span>{' '}
                {event.studentRollNo}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Location:</span>{' '}
                {event.eventLocation}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Date:</span>{' '}
                {event.eventDate}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                {event.eventDescription}
              </p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onLogout}
        className="mt-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
      >
        Logout
      </button>
    </div>
  )
}