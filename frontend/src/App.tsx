import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    /* CRITICAL: Must be bg-transparent or have no bg- class at all */
    <div className="min-h-screen bg-transparent">
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}