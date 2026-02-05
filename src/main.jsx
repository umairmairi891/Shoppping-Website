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
import { Product as INITIAL_PRODUCTS } from './Products'
import Profile from './Components/Profile.jsx'
import { storeProvider, useStore } from './Context/StoreContext.js'


// const {handleLogin, handleLogout, authState}=useStore;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />} />
//       <Route path='shop' element={<Shop />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='auth' element={<Auth onLogin={handleLogin} />} /> 
//       <Route path="/profile" element={<Profile user={authState} onLogout={handleLogout} />} />


//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(

  <StrictMode>
<App/>
    

  </StrictMode>,
)
