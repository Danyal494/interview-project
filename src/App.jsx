import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Slider from './components/Slider'
import Footer from './components/Footer'
import FooterLinks from './components/FooterLinks'
import TradeTable from './components/TradeTable'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='relative overflow-hidden bg-[#000009]  h-full' >
<Navbar/>
<Home/>
<Slider/>
<TradeTable/>
<Footer/>
<FooterLinks/>
   </div>
  )
}

export default App
