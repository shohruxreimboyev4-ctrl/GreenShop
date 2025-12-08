import React from 'react';
import { FiHeart, FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';
import {
  addToCart,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  isInCart,
  getCartItemQuantity,
  incrementCartItem,
  decrementCartItem,
} from '../utils/cartUtils';

const ProductCard = ({ product = {}, onCardAction }) => {
  const pid = product?.id ?? null;
  const [favorited, setFavorited] = React.useState(false);
  const [inCart, setInCart] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    if (!pid) return;
    try {
      setFavorited(isFavorite(pid));
      setInCart(isInCart(pid));
      setQuantity(getCartItemQuantity(pid));
    } catch (err) {
      console.warn('ProductCard init error', err);
    }
  }, [pid]);

  const handleLike = () => {
    if (favorited) {
      removeFromFavorites(product.id);
      setFavorited(false);
    } else {
      addToFavorites(product);
      setFavorited(true);
    }
    onCardAction?.();
  };

  const handleAddCart = () => {
    addToCart(product, 1);
    setInCart(true);
    setQuantity(1);
    onCardAction?.();
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    incrementCartItem(product.id, 1);
    setQuantity((q) => q + 1);
    onCardAction?.();
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    decrementCartItem(product.id, 1);
    setQuantity((q) => Math.max(0, q - 1));
    if (quantity <= 1) {
      setInCart(false);
    }
    onCardAction?.();
  };

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image container */}
      <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Like button overlay */}
        <button
          onClick={handleLike}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            favorited
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:bg-red-100'
          }`}
          title={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FiHeart className="w-5 h-5" fill={favorited ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
          {product.category}
        </span>
        <h3 className="mt-2 text-base font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            {(Number(product?.price ?? 0)).toLocaleString('uz-UZ')} so'm
          </span>
        </div>

        {/* Add to cart / Quantity control */}
        <div className="mt-4">
          {!inCart ? (
            <button
              onClick={handleAddCart}
              className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <FiShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Savatga qo'shish</span>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-green-50 rounded-lg p-2">
              <button
                onClick={handleDecrement}
                className="p-1 hover:bg-green-200 rounded transition-colors"
                title="Decrease quantity"
              >
                <FiMinus className="w-4 h-4 text-green-600" />
              </button>
              <span className="font-semibold text-green-600">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="p-1 hover:bg-green-200 rounded transition-colors"
                title="Increase quantity"
              >
                <FiPlus className="w-4 h-4 text-green-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
