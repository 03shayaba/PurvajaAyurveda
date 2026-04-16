'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-serif text-xl font-bold">Shopping Cart ({cart.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <FiShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link href="/products" onClick={onClose} className="text-primary hover:underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-lg">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover rounded" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                    <p className="text-primary font-semibold">₹{item.price}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-full">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1">
                          <FiMinus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1">
                          <FiPlus className="w-3 h-3" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold text-lg">₹{cartTotal}</span>
            </div>
            <Link href="/checkout" onClick={onClose} className="block w-full bg-[#2D5A27] text-white text-center py-3 rounded-full font-medium">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
