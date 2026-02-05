import React, { useContext } from 'react'
import './App.css'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import {Product as INITIAL_PRODUCTS} from './Products'
import { storeProvider } from './Context/StoreContext'
import { Product } from './Types'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Auth from './Components/Auth'
import Profile from './Components/Profile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = React.useState(INITIAL_PRODUCTS);
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [authState, setAuthState] = React.useState({
      user: '',
      isAuthenticated: false
    });


const addToCart=(product)=>{
  setCart(prev=>{
    const existing=prev.find(item=>item.id===product.id);
    if(existing){
      return prev.map((item)=>item.id===product.id ?{...item,quantity:item.qualtity+1}:item)
    }
    return  [...prev, {...product,quantity:1}]
  });
  setIsCartOpen(true)
}

const onAddProduct=(newProduct)=>{
  setProducts(prev=>[newProduct,...prev])
}

const updateQuantity=(id, delta)=>{
setCart(prev=>prev.map((item)=>item.id===id?{...item, quantity:Math.max(1,item.quantity+delta)}:item))
}

const removeFromCart=(id)=>{
  setCart(prev=>prev.filter((item)=>item.id!==id))
}
const handleLogin=(userData)=>{
setAuthState({user:userData,isAuthenticated:true})
}
const handleLogout=()=>{
  setAuthState({user:null, isAuthenticated:false})
}
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
        <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          cartCount={cartCount} 
          isAuthenticated={authState.isAuthenticated} 
          onOpenCart={() => setIsCartOpen(true)} 
        />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="shop" 
              element={<Shop products={products} onAddToCart={addToCart} onAddProduct={onAddProduct} />} 
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route 
              path="auth" 
              element={!authState.isAuthenticated ? <Auth onLogin={handleLogin} /> : <Navigate to="/profile" />} 
            />
            <Route 
              path="profile" 
              element={authState.isAuthenticated ? <Profile user={authState.user} onLogout={handleLogout} /> : <Navigate to="/auth" />} 
            />
          </Routes>
        </main>

        <footer className="bg-white border-t border-pink-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-1">
                <span className="font-serif text-2xl font-bold text-pink-600 mb-6 block">PinkParadise</span>
                <p className="text-gray-500 leading-relaxed">
                  The ultimate destination for all things pink. Curated with love, style, and a touch of magic.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
                <ul className="space-y-4 text-gray-500">
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Shop All</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Gift Cards</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Store Locator</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Size Guide</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Customer Care</h4>
                <ul className="space-y-4 text-gray-500">
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping & Returns</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
                <p className="text-gray-500 mb-4">Subscribe for pink updates.</p>
                <div className="flex bg-pink-50 rounded-full p-1 border border-pink-100">
                  <input type="email" placeholder="Email" className="bg-transparent border-none focus:ring-0 px-4 py-2 w-full text-sm" />
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-pink-600 transition-colors">Join</button>
                </div>
              </div>
            </div>
            <div className="border-t border-pink-50 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 PinkParadise. All rights reserved. Created with aesthetic love.</p>
            </div>
          </div>
        </footer>

        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart} 
          onUpdateQuantity={updateQuantity} 
          onRemove={removeFromCart} 
        />
        
      </div>
    </Router>

  )
}

export default App
