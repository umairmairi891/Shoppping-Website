import React from 'react'
import { User } from '../Types'
import { LogOut , Package, Heart, Settings} from 'lucide-react';

function Profile({ user, onLogout }) {
    if (!user) return null;
    return (
        <div className='max-w-4xl mx-auto px-4 py-16'>
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-pink-100">
                <div className="h-48 bg-linear-to-r from-pink-200 to-pink-400 relative">
                    <button
                        onClick={onLogout}
                        className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all flex items-center gap-2 font-bold text-sm"
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
                <div className="px-12 pb-12">
                    <div className="relative mt-24 mb-8">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-40 h-40 rounded-[2.5rem] border-8 border-white shadow-lg object-cover"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-serif font-bold text-gray-900">{user.name}</h1>
                            <p className="text-gray-500">{user.email} • Joined {user.joinedDate}</p>
                        </div>
                        <button className="bg-pink-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-pink-600 shadow-md transition-all">
                            Edit Profile
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100 hover:scale-105 transition-transform cursor-pointer">
                            <Package className="w-8 h-8 text-pink-500 mb-4" />
                            <h3 className="font-bold text-xl mb-1">Orders</h3>
                            <p className="text-sm text-gray-500">Track and view your history</p>
                        </div>
                        <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100 hover:scale-105 transition-transform cursor-pointer">
                            <Heart className="w-8 h-8 text-pink-500 mb-4" />
                            <h3 className="font-bold text-xl mb-1">Wishlist</h3>
                            <p className="text-sm text-gray-500">24 items saved for later</p>
                        </div>
                        <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100 hover:scale-105 transition-transform cursor-pointer">
                            <Settings className="w-8 h-8 text-pink-500 mb-4" />
                            <h3 className="font-bold text-xl mb-1">Security</h3>
                            <p className="text-sm text-gray-500">Password and privacy</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile