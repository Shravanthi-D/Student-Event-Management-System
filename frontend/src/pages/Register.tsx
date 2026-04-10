import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type StudentForm = {
  studentName: string
  rollNo: string
  email: string
  password: string
}

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState<StudentForm>({
    studentName: '',
    rollNo: '',
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit() {
    const res = await fetch('http://localhost:8082/api/students/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) {
      navigate('/login')
    } else {
      setMessage('Registration failed. Please try again.')
    }
  }

  const inputCls =
    'w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400'

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Student Registration
        </h2>

        <input
          name="studentName"
          placeholder="Name"
          value={form.studentName}
          onChange={handleChange}
          className={inputCls}
        />
        <input
          name="rollNo"
          placeholder="Roll Number"
          value={form.rollNo}
          onChange={handleChange}
          className={inputCls}
        />
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
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Register
        </button>

        {message && (
          <p className="text-red-500 text-sm mt-3 text-center">{message}</p>
        )}

        <p className="text-center text-sm mt-4">
          Already registered?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}