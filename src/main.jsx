import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import Console from './Pages/Console.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Products' element = {<Products/>}/>
        <Route path='About' element = {<About/>}/>
        <Route path='Console' element = {<Console/>}/>

      </Routes>
    </Router>
  </React.StrictMode>,
)
