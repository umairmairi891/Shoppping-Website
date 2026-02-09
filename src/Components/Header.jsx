import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, User, Heart, Menu, X, ShoppingBasket, MenuIcon } from 'lucide-react';

function Header({ cartCount, isAuthenticated, onOpenCart }) {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className='  bg-white border-b border-pink-500 sticky top-0 '>
                <div className="flex justify-between items-center px-15 h-16 sticky">
                    <div className="flex gap-2 absolute sm:sticky items-center">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                            <ShoppingBag className="text-white w-6 h-6" />
                        </div>
                        <h2 className='text-2xl font-bold font-[Lato] text-pink-500'> Pink Paradise</h2>
                    </div>
                    <div className="flex   ">
                        <ul className='sm:flex  hidden    gap-4 font-[Lato] text-lg text-black'>
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

                    <div className="icon hidden sm:flex gap-4 ">
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
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={onOpenCart}
                            className="text-gray-600 relative"
                        >
                            <ShoppingBag className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-pink-500 hover:bg-pink-50"
                        >
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                                    </div>

                    {open && (<div className="md:hidden bg-white border-t border-pink-50">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "bg-pink-50 text-pink-600" : "text-gray-600 hover:bg-pink-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to={isAuthenticated ? "/profile" : "/auth"}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-pink-50"
                            >
                                {isAuthenticated ? 'Profile' : 'Login / Signup'}
                            </Link>
                        </div>
                    </div>
                    )}
            </nav >
        </>
    )
}

export default Header;