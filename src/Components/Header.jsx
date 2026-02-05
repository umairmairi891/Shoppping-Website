import React from 'react'
import { NavLink } from 'react-router-dom';
import { ShoppingBag, User, Heart, Menu, X, ShoppingBasket } from 'lucide-react';

function Header({ cartCount, isAuthenticated, onOpenCart }) {


    return (
        <>
            <nav className='  bg-white border-b border-pink-500 sticky top-0 '>
                <div className="flex justify-between items-center px-15 h-16 sticky">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                            <ShoppingBag className="text-white w-6 h-6" />
                        </div>

                        <h2 className='text-2xl font-bold font-[Lato] text-pink-500'> Pink Paradise</h2>

                    </div>
                    <div className="flex">
                        <ul className='flex gap-4 font-[Lato] text-lg text-black'>
                            <li>
                                <NavLink to='/' className={({ isActive }) => (
                                    `${isActive ? "text-pink-600 font-bold" : "text-black"}`
                                )}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/shop' className={({ isActive }) => (
                                    `${isActive ? "text-pink-600 font-bold" : "text-black"}`
                                )}>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={({ isActive }) => (
                                    `${isActive ? "text-pink-600 font-bold" : "text-black"}`
                                )}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/contact' className={({ isActive }) => (
                                    `${isActive ? "text-pink-600 font-bold" : "text-black"}`
                                )}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="icon flex gap-4">
                        <button className="text-gray-600 hover:text-pink-500">
                            <Heart className="w-6 h-6" />
                        </button>
                        <button
                            onClick={onOpenCart}
                            className="text-gray-600 hover:text-pink-500 relative"
                        >

                            <ShoppingBag className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <NavLink to={isAuthenticated ? "/profile" : "/auth"} className="text-gray-600 hover:text-pink-500">
                            <User className="w-6 h-6" />
                        </NavLink>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header;