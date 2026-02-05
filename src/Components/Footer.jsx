import React from 'react'
import { NavLink } from 'react-router-dom';
function Footer() {


    return (
        <>
            <footer className='bg-white border-t border-pink-100 py-12 '>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="px-20 col-span-1 md:col-span-1">
                            <h2 className='text-2xl font-bold font-[Lato] text-pink-600'>Pink Paradise</h2>
                            <p className="text-gray-500 leading-relaxed">
                                The ultimate destination for all things pink. Curated with love, style, and a touch of magic.
                            </p>
                        </div>
                        <div className="">
                            <h2 className='font-bold text-gray-900 mb-6  font-[Lato]'>Quick Links</h2>
                            <ul className='space-y-2 text-gray-500 font-[Itel]'>
                                <li><a href="#" className="hover:text-pink-500 transition-colors">Shop All</a></li>
                                <li><a href="#" className="hover:text-pink-500 transition-colors">Gift Cards</a></li>
                                <li><a href="#" className="hover:text-pink-500 transition-colors">Store Locator</a></li>
                                <li><a href="#" className="hover:text-pink-500 transition-colors">Size Guide</a></li>

                            </ul>
                        </div>
                        <div className="">

                            <h4 className="font-bold text-gray-900 mb-6">Customer Care</h4>
                            <ul className="space-y-4 text-gray-500 font-[Itel]">
                                <li>
                                    <NavLink to='/contact' className={({ isActive }) => (
                                        `${isActive ? "text-pink-600 font-bold" : "text-gray-500"}`
                                    )}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping & Returns</a></li>
                                <li><a href="#" className="hover:text-pink-500 transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
                            <p className="text-gray-500 mb-4">Subscribe for pink updates.</p>
                            <div className="flex bg-pink-50">

                                <input className='bg-transparent border-none focus:ring-0 py-2 px-4 rounded w-full text-sm' type="email" name="" id="" placeholder='Enter Your Email ' />
                                <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-pink-600 transition-colors">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-pink-50 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2024 PinkParadise. All rights reserved. Created with aesthetic love.</p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer;