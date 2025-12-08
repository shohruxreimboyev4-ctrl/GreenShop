import React, { useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import {
  getFavorites,
  removeFromFavorites,
  addToCart,
  isInCart,
} from '../utils/cartUtils';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const favs = getFavorites();
    setFavorites(favs);
  }, [refresh]);

  const handleRemove = (productId) => {
    removeFromFavorites(productId);
    setRefresh((r) => r + 1);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setRefresh((r) => r + 1);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Yoqtirganlaringiz</h1>
        <p className="mt-2 text-gray-600">
          Siz saqlagan va sevgan o'simliklar
        </p>
      </header>

      {/* Favorites grid */}
      {favorites.length === 0 ? (
        <div className="bg-white rounded-lg p-12 text-center">
          <FiHeart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            Hech narsa yo'q. O'simlikni yoqtirish uchun qalbcha ikonini bosing!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item, idx) => (
            <article
              key={item?.id ?? `fav-${idx}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">
                    {Number(item?.price ?? 0).toLocaleString('uz-UZ')} so'm
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg transition-colors duration-200 ${
                      isInCart(item.id)
                        ? 'bg-green-100 text-green-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <FiShoppingCart className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {isInCart(item.id) ? 'Savatchada bor' : 'Savatga qo\'shish'}
                    </span>
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    <span className="text-sm font-medium">O'chirish</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
