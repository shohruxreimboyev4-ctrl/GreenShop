import React from 'react';

const ProductList = ({ items = [], emptyMessage = 'Mahsulotlar topilmadi.', showActions = false }) => {
  // Placeholder list: user will replace with real data mapping
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">{emptyMessage}</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <article key={idx} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="h-44 bg-gray-100 rounded flex items-center justify-center">Image</div>
          <h3 className="mt-3 font-semibold text-gray-800">{it.title}</h3>
          <p className="text-sm text-gray-600">{it.description}</p>
          {showActions && (
            <div className="mt-3 flex items-center justify-between">
              <button className="bg-green-600 text-white px-3 py-1 rounded">Remove</button>
              <div className="text-gray-700">{it.price}</div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default ProductList;
