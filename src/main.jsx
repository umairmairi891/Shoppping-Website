import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Shop from './Components/Shop.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Auth from './Components/Auth.jsx'
import Cart from './Components/Cart.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
<App/>
    

  </StrictMode>,
)
