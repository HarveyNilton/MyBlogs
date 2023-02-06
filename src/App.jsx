import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LaterNeon from './componestas/LaterNeon'
import Header from './componestas/header/Header'
import Home from './componestas/home/Home'
import Footer from './componestas/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
     <Home/>
     <Footer/>
    </div>
  )
}

export default App
