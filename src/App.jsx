import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidenav from './components/Sidenav'

function App() {
  

  return (
    <div className='bg-[#02060f] text-white-100'>
     <Sidenav />
     <Main />
    </div>
  )
}

export default App
