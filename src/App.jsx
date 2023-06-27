import { Routes, Route } from 'react-router-dom'
import { Auth } from './pages/auth'
import { Main } from './pages/main'
import { Registration } from './pages/registration'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  )
}

export default App
