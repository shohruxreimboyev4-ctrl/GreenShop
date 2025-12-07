import React from 'react';

const CTA = ({ children }) => {
  return (
    <section className="mt-8 bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Checkout</h3>
          <p className="text-sm text-gray-600">Yakunlash uchun davom eting.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="bg-green-600 text-white px-4 py-2 rounded">Proceed to Checkout</button>
        </div>
      </div>
      {children}
    </section>
  );
};

export default CTA;
