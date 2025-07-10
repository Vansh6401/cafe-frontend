import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx"
import Register from './components/Register.jsx'
function App() {
  const [count, setCount] = useState(0)

  return <Home name="John" age={21} />;
}

export default App
