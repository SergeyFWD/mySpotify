import { Routes, Route } from 'react-router-dom'
import { Auth } from './pages/auth'
import { Main } from './pages/main'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
