import React from 'react';

const Newsletter = () => {
  return (
    <section className="mt-8 bg-white rounded-lg p-6 shadow-sm">
      <h4 className="font-semibold">Would you like to join newsletters?</h4>
      <div className="mt-3 flex">
        <input className="flex-1 border px-3 py-2 rounded-l-md" placeholder="enter your email address..." />
        <button className="bg-green-600 text-white px-4 py-2 rounded-r-md">Join</button>
      </div>
      <p className="text-xs text-gray-500 mt-2">We usually post offers and challenges in newsletter.</p>
    </section>
  );
};

export default Newsletter;
