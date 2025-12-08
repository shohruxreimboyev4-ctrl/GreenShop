import React, { useEffect, useState } from 'react';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import {
  getCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  calculateCartTotal,
} from '../utils/cartUtils';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const items = getCart();
    setCartItems(items);
    setTotal(calculateCartTotal());
  }, [refresh]);

  const handleIncrement = (productId) => {
    incrementCartItem(productId, 1);
    setRefresh((r) => r + 1);
  };

  const handleDecrement = (productId) => {
    decrementCartItem(productId, 1);
    setRefresh((r) => r + 1);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
    setRefresh((r) => r + 1);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Savatcha</h1>
        <p className="mt-2 text-gray-600">Siz tanlagan mahsulotlar</p>
      </header>

      {/* Cart content - table-like layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm text-gray-600">
            <div className="col-span-6">Products</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Savatcha bo'sh. Mahsulot qo'shish uchun Home sahifasiga qaytib, o'simlik tanlang.</div>
          ) : (
            <div className="divide-y">
              {cartItems.map((item, idx) => (
                <div key={item?.id ?? `cart-${idx}`} className="p-4 grid grid-cols-12 items-center gap-4">
                  <div className="col-span-6 flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-xs text-gray-500">SKU: {String(item.id)}</div>
                    </div>
                  </div>

                  <div className="col-span-2 text-center text-gray-700">{Number(item?.price ?? 0).toLocaleString('uz-UZ')} so'm</div>

                  <div className="col-span-2 flex items-center justify-center space-x-2">
                    <button onClick={() => handleDecrement(item.id)} className="bg-green-50 text-green-600 rounded-full w-8 h-8 flex items-center justify-center">-</button>
                    <div className="px-3">{item.quantity}</div>
                    <button onClick={() => handleIncrement(item.id)} className="bg-green-50 text-green-600 rounded-full w-8 h-8 flex items-center justify-center">+</button>
                  </div>

                  <div className="col-span-2 text-right font-semibold">{(Number(item?.price ?? 0) * Number(item?.quantity ?? 0)).toLocaleString('uz-UZ')} so'm</div>

                  <div className="col-span-12 md:col-span-12 text-right mt-2 md:mt-0">
                    <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Cart Totals</h3>
            <div className="text-sm text-gray-600 mb-4">Coupon Apply</div>
            <div className="flex items-center space-x-2 mb-4">
              <input className="flex-1 border px-3 py-2 rounded" placeholder="Enter coupon code here..." />
              <button className="bg-green-600 text-white px-4 py-2 rounded">Apply</button>
            </div>

            <div className="space-y-3 border-b pb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{total.toLocaleString('uz-UZ')} so'm</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Coupon Discount</span>
                <span>(-) 00.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$16.00</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-green-600">{total.toLocaleString('uz-UZ')} so'm</span>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">Proceed To Checkout</button>
              <button className="w-full mt-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">Continue Shopping</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
