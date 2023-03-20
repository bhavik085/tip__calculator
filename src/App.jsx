import { useState } from 'react'
import './App.css'
import Header from './Pages/Header'
import Input from './Pages/Input'
import Output from './Pages/Output'
import Footer from './Pages/Footer'
import { Outlet } from 'react-router-dom'
import Value from './Pages/Value'
function App() {
  const [list , setList] = useState([""]);

  const addtolist=(value)=>{
    setList([...list , value])

  }

  return (
    <div className="App">
      <Header/>
      <Value/>
      
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default App
