import { useState } from 'react'
import Header from './components/Header'
import Content from './pages/Content'
import Contato from './pages/Contato'

import './App.css'
import Xp from './pages/Xp'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="box-border h-screen w-full ">
   
      <Header/>
      <Content/>
      <Xp/>
      <Contato/>
    </div>
   
  )
}

export default App
