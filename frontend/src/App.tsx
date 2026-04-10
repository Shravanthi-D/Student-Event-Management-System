import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/register.tsx'
import Login from './pages/Login.tsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}