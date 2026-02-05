import { useState } from "react";
import React from 'react';
import { X, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { CartItem } from "../Types";

function Cart({isOpen, onClose, items, onUpdateQuantity,onRemove}) {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!isOpen) return null;

    

  return (
    <> 
    <div className="fixed inset-0 z-100 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-40 transition-opacity" 
        onClick={onClose} 
      />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-2xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-bold text-gray-900 font-serif">Shopping Cart</h2>
                <button
                  onClick={onClose}
                  className="ml-3 h-7 w-7 flex items-center justify-center text-gray-400 hover:text-pink-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-20">
                    <ShoppingCart className="w-16 h-16 text-pink-200 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is as empty as a cloud, darling.</p>
                  </div>
                ) : (
                  <ul className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center border border-gray-200 rounded-md">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="p-1 hover:text-pink-500"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-2 font-medium">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="p-1 hover:text-pink-500"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemove(item.id)}
                              className="font-medium text-pink-600 hover:text-pink-500 flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" /> Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 transition-colors"
                  onClick={() => alert('Checkout integration coming soon!')}
                >
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  <button
                    type="button"
                    className="text-pink-600 font-medium hover:text-pink-500"
                    onClick={onClose}
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Cart;
