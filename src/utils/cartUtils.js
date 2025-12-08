// Utility functions for cart and favorites management

/**
 * Get cart from localStorage
 * Cart structure: [{ id, quantity, price }, ...]
 */
export const getCart = () => {
  try {
    const cart = localStorage.getItem("gs_cart_items");
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

/**
 * Get favorites from localStorage
 * Favorites structure: [{ id, product }, ...]
 */
export const getFavorites = () => {
  try {
    const favs = localStorage.getItem("gs_fav_items");
    return favs ? JSON.parse(favs) : [];
  } catch {
    return [];
  }
};

/**
 * Add product to cart
 * @param {Object} product - Product object with id, title, price, etc.
 * @param {number} quantity - Quantity to add (default: 1)
 */
export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
  }

  localStorage.setItem("gs_cart_items", JSON.stringify(cart));

  // Dispatch global event for header badge update
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  localStorage.setItem("gs_cart", String(cartCount));
  window.dispatchEvent(
    new CustomEvent("gs:cart-change", { detail: { delta: quantity } })
  );

  return cart;
};

/**
 * Add product to favorites
 * @param {Object} product - Product object with id, title, price, etc.
 */
export const addToFavorites = (product) => {
  const favs = getFavorites();
  const exists = favs.find((item) => item.id === product.id);

  if (!exists) {
    favs.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });

    localStorage.setItem("gs_fav_items", JSON.stringify(favs));

    // Dispatch global event
    localStorage.setItem("gs_fav", String(favs.length));
    window.dispatchEvent(
      new CustomEvent("gs:fav-change", { detail: { delta: 1 } })
    );
  }

  return favs;
};

/**
 * Remove product from favorites
 * @param {number} productId - ID of product to remove
 */
export const removeFromFavorites = (productId) => {
  const favs = getFavorites();
  const filtered = favs.filter((item) => item.id !== productId);

  localStorage.setItem("gs_fav_items", JSON.stringify(filtered));

  // Dispatch global event
  localStorage.setItem("gs_fav", String(filtered.length));
  window.dispatchEvent(
    new CustomEvent("gs:fav-change", { detail: { delta: -1 } })
  );

  return filtered;
};

/**
 * Remove product from cart
 * @param {number} productId - ID of product to remove
 */
export const removeFromCart = (productId) => {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  const delta = item ? -item.quantity : 0;

  const filtered = cart.filter((item) => item.id !== productId);
  localStorage.setItem("gs_cart_items", JSON.stringify(filtered));

  // Dispatch global event
  const cartCount = filtered.reduce((sum, i) => sum + i.quantity, 0);
  localStorage.setItem("gs_cart", String(cartCount));
  window.dispatchEvent(
    new CustomEvent("gs:cart-change", { detail: { delta } })
  );

  return filtered;
};

/**
 * Increment quantity in cart
 * @param {number} productId - ID of product
 * @param {number} amount - Amount to increment (default: 1)
 */
export const incrementCartItem = (productId, amount = 1) => {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);

  if (item) {
    item.quantity += amount;

    localStorage.setItem("gs_cart_items", JSON.stringify(cart));

    // Dispatch global event
    const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    localStorage.setItem("gs_cart", String(cartCount));
    window.dispatchEvent(
      new CustomEvent("gs:cart-change", { detail: { delta: amount } })
    );
  }

  return cart;
};

/**
 * Decrement quantity in cart
 * @param {number} productId - ID of product
 * @param {number} amount - Amount to decrement (default: 1)
 */
export const decrementCartItem = (productId, amount = 1) => {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);

  if (item) {
    item.quantity = Math.max(0, item.quantity - amount);

    if (item.quantity === 0) {
      return removeFromCart(productId);
    }

    localStorage.setItem("gs_cart_items", JSON.stringify(cart));

    // Dispatch global event
    const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    localStorage.setItem("gs_cart", String(cartCount));
    window.dispatchEvent(
      new CustomEvent("gs:cart-change", { detail: { delta: -amount } })
    );
  }

  return cart;
};

/**
 * Calculate total price of cart
 * @returns {number} Total price in currency units
 */
export const calculateCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

/**
 * Check if product is in favorites
 * @param {number} productId - ID of product
 * @returns {boolean} True if in favorites
 */
export const isFavorite = (productId) => {
  const favs = getFavorites();
  return favs.some((item) => item.id === productId);
};

/**
 * Check if product is in cart
 * @param {number} productId - ID of product
 * @returns {boolean} True if in cart
 */
export const isInCart = (productId) => {
  const cart = getCart();
  return cart.some((item) => item.id === productId);
};

/**
 * Get cart item quantity
 * @param {number} productId - ID of product
 * @returns {number} Quantity in cart (0 if not in cart)
 */
export const getCartItemQuantity = (productId) => {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  return item ? item.quantity : 0;
};
