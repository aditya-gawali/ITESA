import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import './App.css'
import HomePage from './Views/HomePage'
import JoinUs from './Views/JoinUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/join' element={<JoinUs />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
