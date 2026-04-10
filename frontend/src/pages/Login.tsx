import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Events from './Events'

type Event = {
  id: string
  studentName: string
  studentRollNo: string
  eventName: string
  eventLocation: string
  eventDate: string
  eventDescription: string
}

type LoginForm = {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: ''
  })
  const [events, setEvents] = useState<Event[]>([])
  const [studentName, setStudentName] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [error, setError] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  
async function handleLogin() {
  setError('')

  const loginRes = await fetch('http://localhost:8082/api/students/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })

  if (!loginRes.ok) {
    setError('Invalid credentials. Please try again.')
    return
  }

  // ✅ THIS is the important line
  const student = await loginRes.json()

  setStudentName(student.studentName)
  setRollNo(student.rollNo)

  const eventsRes = await fetch(
    `http://localhost:8083/api/events/student/${student.rollNo}`
  )

  const eventsData = await eventsRes.json()
  setEvents(eventsData)

  setLoggedIn(true)
  console.log("EVENTS DATA:", eventsData)
}

  function handleLogout() {
    setLoggedIn(false)
    setEvents([])
    setForm({ email: '', password: '' })
  }

  if (loggedIn) {
    return (
      <Events
        studentName={studentName}
        rollNo={rollNo}
        events={events}
        onLogout={handleLogout}
      />
    )
  }

  const inputCls =
    'w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400'

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Student Login
        </h2>

        <input
          name="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
          className={inputCls}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className={inputCls}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Login
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}

        <p className="text-center text-sm mt-4">
          New student?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  )
}