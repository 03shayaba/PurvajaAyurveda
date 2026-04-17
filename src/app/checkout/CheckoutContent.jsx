'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiArrowLeft, FiTrash2, FiX, FiCheck, FiMessageCircle } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

export default function CheckoutContent() {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const confirmOrder = () => {
    setShowPopup(false);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div>
        <section className="h-[200px] flex items-center justify-center bg-primary-dark">
          <div className="text-center text-white">
            <p className="font-semibold tracking-light font-sans text-3xl md:text-4xl mb-3">Checkout</p>
          </div>
        </section>
        <section className="py-16 bg-[#FFFAF5]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✓</span>
              </div>
              <p className="font-semibold tracking-light font-sans text-2xl md:text-3xl mb-6">Order Placed Successfully!</p>
              <p className="text-gray-600 mb-8">
                Thank you for your order. We will contact you shortly for confirmation.
              </p>
              <Link href="/" className="bg-primary text-white px-8 py-3 rounded-full font-medium inline-block">
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div>
        <section className="h-[200px] flex items-center justify-center bg-primary-dark">
          <div className="text-center text-white">
            <p className="font-semibold tracking-light font-sans text-3xl md:text-4xl mb-3">Checkout</p>
          </div>
        </section>
        <section className="py-16 bg-[#FFFAF5]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <FiShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <p className="font-semibold tracking-light font-sans text-2xl md:text-3xl mb-6">Your cart is empty</p>
              <p className="text-gray-600 mb-8">Add some products to your cart first.</p>
              <Link href="/products" className="bg-primary text-white px-8 py-3 rounded-full font-medium inline-block">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="h-[200px] flex items-center justify-center bg-primary-dark">
        <div className="text-center text-white">
          <p className="font-semibold tracking-light font-sans text-3xl md:text-4xl mb-3">Checkout</p>
        </div>
      </section>

      <section className="py-12 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
            <FiArrowLeft className="mr-2" /> Continue Shopping
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <p className="font-semibold tracking-light font-sans text-2xl md:text-3xl mb-6">Delivery Details</p>
                <form id="checkout-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea name="address" value={form.address} onChange={handleChange} required rows={2} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" name="city" value={form.city} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" name="state" value={form.state} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                    <input type="text" name="pincode" value={form.pincode} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <p className="font-semibold tracking-light font-sans text-2xl md:text-3xl mb-6">Order Summary</p>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-md font-semibold text-gray-900 mb-1 tracking-tight leading-tight line-clamp-1">{item.name}</p>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        <p className="font-semibold">₹{item.price * item.quantity}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-primary">₹{cartTotal}</span>
                  </div>
                </div>
                <button form="checkout-form" type="submit" className="w-full bg-primary text-white py-3 rounded-full font-medium mt-6 hover:bg-primary-dark transition-colors">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <FiX className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-sans text-2xl font-bold mb-2">Confirm Order</h3>
              <p className="text-gray-600 mb-4">Your order total is <span className="font-bold text-green-600">₹{cartTotal}</span></p>
              <p className="text-gray-500 text-sm mb-6">We will contact you on WhatsApp for payment & delivery.</p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => setShowPopup(false)} className="px-6 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={confirmOrder} className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium">
                  Confirm Order
                </button>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <p className="text-sm text-gray-500 text-center">Or WhatsApp us: <a href="https://wa.me/917027030661" className="text-green-600 font-medium">+91 70270 30661</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
