import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LaterNeon from './componestas/LaterNeon'
import Header from './componestas/header/Header'
import Home from './componestas/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
     <Home/>
    </div>
  )
}

export default App
