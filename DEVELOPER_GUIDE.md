# GreenShop - Developer Guide

Bu hujjat GreenShop loyihasining barcha sahifalar, komponentlar va funksiyalari haqida to'liq tushuntirish beradi.

## 📁 Loyihaning tuzilmasi

```
src/
├── api/
│   └── mockProducts.js          # Mock ma'lumotlar (6 ta o'simlik mahsuloti)
├── assets/
│   └── logo.svg                 # GreenShop logosi
├── components/
│   ├── Header.jsx               # Bosh tepa (Header) - logo, like/cart badge, mobil menu
│   ├── Footer.jsx               # Pastki chap (Footer)
│   └── ProductCard.jsx          # Har bir mahsulot karti (NEW)
├── layout/
│   └── Layout.jsx               # Bosh layout (Header + Outlet + Footer)
├── pages/
│   ├── Home.jsx                 # Bosh sahifa - barcha mahsulotlar ro'yxati (UPDATED)
│   ├── Cart.jsx                 # Savatcha sahifasi - qo'shilgan mahsulotlar (UPDATED)
│   ├── Favorites.jsx            # Yoqtirganlar sahifasi (UPDATED)
│   ├── Shop.jsx                 # Do'kon sahifasi (placeholder)
│   ├── PlantCare.jsx            # O'simlik parvarishlash (placeholder)
│   └── Blogs.jsx                # Bloglar sahifasi (placeholder)
├── sections/
│   ├── Hero.jsx                 # Bosh sarlavha bilan section
│   ├── ProductList.jsx          # Mahsulot ro'yxati (placeholder)
│   ├── CTA.jsx                  # Chaqiruv amali (Call to Action)
│   └── Newsletter.jsx           # Yangiliklar ro'yxati
├── utils/
│   └── cartUtils.js             # Savatcha va yoqtirganlarpro bilan ishlash (NEW)
├── App.jsx                      # Routing (UPDATED)
├── index.css                    # Stils
└── main.jsx                     # Kirish nuqtasi
```

---

## 🎯 Asosiy sahifalar va ularning funksiyasi

### 1. **Home Page** (`src/pages/Home.jsx`)
- **Maqsad**: Barcha mahsulotlarni ko'rsatish
- **Nima bor**:
  - 6 ta misol o'simlik mahsuloti (mockProducts.js dan)
  - Har bir mahsulot uchun ProductCard komponenti
  - Like (yoqtirish) tugmasi - qalbcha icon
  - Add to cart (savatga qo'shish) tugmasi - savat icon
  - Increment/Decrement (quantity) boshqaruvi (agar mahsulot savatchada bo'lsa)
  
- **Kod misoli**:
```jsx
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/mockProducts';

// fetchProducts() orqali mock ma'lumotlarni yuklash
// ProductCard ga mahsulotni uzatish
```

---

### 2. **Cart Page** (`src/pages/Cart.jsx`)
- **Maqsad**: Savatchaga qo'shilgan mahsulotlarni ko'rsatish va boshqarish
- **Nima bor**:
  - Savatchadagi barcha mahsulotlar ro'yxati
  - **Increment** (+) tugmasi - miqdor ko'paytiriladi
  - **Decrement** (-) tugmasi - miqdor kamaytiladi
  - **Remove** (O'chirish) tugmasi - mahsulotni savatchadan olib tashlash
  - **TotalPrice** (Jami narx) - hisoblash va ko'rsatish
  - Checkout (To'lovga o'tish) tugmasi
  
- **TotalPrice hisoblash**:
```jsx
const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
// Har bir mahsulot narxi × miqdorni hisoblab qo'shimcha qo'ladi
```

---

### 3. **Favorites Page** (`src/pages/Favorites.jsx`)
- **Maqsad**: Yoqtirgan (like qilgan) mahsulotlarni ko'rsatish
- **Nima bor**:
  - Yoqtirgan mahsulotlar ro'yxati
  - "Add to Cart" tugmasi - bevositanь savatchaga qo'shish
  - "Remove" tugmasi - yoqtirganlardan olib tashlash
  - Dizayn Cartga nisbatan soddalashtirilgan (checkout sidebar yo'q)

---

## 🔧 Asosiy funksiyalar (Utils)

Barcha funksiyalar `src/utils/cartUtils.js` ichida yozilgan:

### **1. addToCart(product, quantity)**
Mahsulotni savatchaga qo'shadi va localStorage ga yozadi.
```jsx
import { addToCart } from '../utils/cartUtils';

addToCart(productObject, 1); // 1 dona mahsulot qo'shish
// Natija: Savatcha count badge +1 ga o'zgaradi
```

### **2. removeFromCart(productId)**
Mahsulotni savatchadan olib tashladi.
```jsx
import { removeFromCart } from '../utils/cartUtils';

removeFromCart(productId);
// Natija: Savatcha bo'sh bo'lsa, count badge 0 bo'ladi
```

### **3. incrementCartItem(productId, amount)**
Savatchada mavjud mahsulot miqdorini ko'paytiradi.
```jsx
incrementCartItem(productId, 1); // 1 ga ko'paytiriladi
incrementCartItem(productId, 5); // 5 ga ko'paytiriladi
```

### **4. decrementCartItem(productId, amount)**
Savatchada mavjud mahsulot miqdorini kamaytiradi.
```jsx
decrementCartItem(productId, 1); // 1 ga kamaytiladi
// Miqdor 0 bo'lsa, mahsulot avto ravishda o'chiriladi
```

### **5. addToFavorites(product)**
Mahsulotni yoqtirganlarga qo'shadi.
```jsx
import { addToFavorites } from '../utils/cartUtils';

addToFavorites(productObject);
// Natija: Like icon qizil bo'ladi va badge +1 ga o'zgaradi
```

### **6. removeFromFavorites(productId)**
Mahsulotni yoqtirganlardan olib tashladi.
```jsx
removeFromFavorites(productId);
// Natija: Like icon oq bo'ladi va badge -1 ga o'zgaradi
```

### **7. calculateCartTotal()**
Savatchadagi barcha mahsulotning jami narxini hisoblab beradi.
```jsx
const total = calculateCartTotal();
// Natija: 150000 (misol)
// Hisoblash: (price1 × qty1) + (price2 × qty2) + ...
```

### **8. getCart() / getFavorites()**
localStorage dan savat/yoqtirganlarga ni olib beradi.
```jsx
const cartItems = getCart();      // [{id, title, price, qty}, ...]
const favItems = getFavorites();  // [{id, title, price}, ...]
```

### **9. isFavorite(productId) / isInCart(productId)**
Mahsulot yoqtirganlarda yoki savatchada borligini tekshiradi.
```jsx
const isFav = isFavorite(productId);   // true/false
const inCart = isInCart(productId);    // true/false
```

---

## 📱 Headerning Badges (Nishonalar)

Header ichida 2 ta badge bor:

### **Like Badge (❤️)**
- **Rang**: Qizil (red-500)
- **O'zgarish**: Favorites page-ga kirganda yoki ProductCard da qalbcha bosilganda
- **Global hodisa**: `gs:fav-change`

### **Cart Badge (🛒)**
- **Rang**: Yashil (green-600)
- **O'zgarish**: Cart page-ga kirganda yoki ProductCard da "Add to cart" bosilganda
- **Global hodisa**: `gs:cart-change`

**Badge global hodisasini qanday qilib yuborish** (agar kerak bo'lsa):
```jsx
// Like ni +1 qilish uchun:
window.dispatchEvent(new CustomEvent('gs:fav-change', { detail: { delta: 1 } }));

// Like ni -1 qilish uchun:
window.dispatchEvent(new CustomEvent('gs:fav-change', { detail: { delta: -1 } }));

// Cart ni +1 qilish uchun:
window.dispatchEvent(new CustomEvent('gs:cart-change', { detail: { delta: 1 } }));

// Cart ni -1 qilish uchun:
window.dispatchEvent(new CustomEvent('gs:cart-change', { detail: { delta: -1 } }));
```

---

## 💾 localStorage Ma'lumotlar Strukturasi

Hamma ma'lumotlar `localStorage` da saqlanadi (sahifa yangilanada ham qolib qoladi):

```js
// Savatcha mahsulotlari
localStorage.gs_cart_items = [
  { id: 1, title: "Monstera", price: 45000, image: "...", quantity: 2 },
  { id: 3, title: "Snake Plant", price: 28000, image: "...", quantity: 1 }
]

// Savatcha jami miqdori (badge uchun)
localStorage.gs_cart = "3" // 2 + 1

// Yoqtirilgan mahsulotlar
localStorage.gs_fav_items = [
  { id: 2, title: "Pothos Golden", price: 32000, image: "..." },
  { id: 5, title: "Peace Lily", price: 38000, image: "..." }
]

// Yoqtirilganlar jami miqdori (badge uchun)
localStorage.gs_fav = "2"
```

---

## 🚀 Mock API va Ma'lumotlar

`src/api/mockProducts.js` ichida 6 ta sample o'simlik mahsuloti bor:

```jsx
[
  { id: 1, title: "Monstera Deliciosa", price: 45000, category: "Indoor Plants", ... },
  { id: 2, title: "Pothos Golden", price: 32000, category: "Climbing Plants", ... },
  { id: 3, title: "Snake Plant", price: 28000, category: "Succulents", ... },
  // va h.k.
]
```

**Real API ga almashtirilsa** (`Backend API`), `fetchProducts()` funksiyasini o'zgartirib qilish mumkin:

```jsx
export const fetchProducts = async () => {
  const response = await fetch('https://api.example.com/products');
  return response.json();
};
```

---

## 🎨 Responsive Dizayn

Barcha sahifalar quyidagi breakpointlarda responsive:

- **Mobile (0-640px)**: 1 ustun
- **Tablet (640-1024px)**: 2 ustun
- **Desktop (1024px+)**: 3 ustun

CSS Tailwind.css orqali qo'llaniladi.

---

## ✅ Vazifani yakunlash uchun To'do List

Agar siz o'zingiz o'simlik do'koni website tuzayotgan bo'lsangiz, quyidagilarni amalga oshirishingiz mumkin:

- [x] Home page-da barcha mahsulotlar ko'rsatiladi
- [x] ProductCard-da Like + Add to Cart tugmalari bor
- [x] Cart page-da increment/decrement boshqaruvi bor
- [x] Cart page-da TotalPrice hisoblash bor
- [x] Favorites page-da yoqtirgan mahsulotlar ko'rsatiladi
- [x] Header badges avtomatik yangilanadi
- [x] localStorage-da barcha ma'lumotlar saqlanadi
- [ ] Real backend API ga ulanish (opsional)
- [ ] To'lov tizimini qo'shish (opsional)
- [ ] Admin panel qo'shish (opsional)

---

## 🔗 Asosiy File Structure va Imports

**Home page-dan ProductCard import qilish**:
```jsx
import ProductCard from '../components/ProductCard';
```

**Cart page-dan utils import qilish**:
```jsx
import {
  getCart,
  incrementCartItem,
  decrementCartItem,
  removeFromCart,
  calculateCartTotal,
} from '../utils/cartUtils';
```

**Mock API dan import qilish**:
```jsx
import { fetchProducts, mockProducts } from '../api/mockProducts';
```

---

## 🆘 Tez Savol-Javob

**S: Badge yangilangani yo'qmi?**
J: localStorage.js_cart yoki gs_fav qiymatlari haqiqiyligini tekshiring.

**S: Mahsulot savatchaga qo'shilgani yo'qmi?**
J: addToCart() function chaqirilganini tekshiring va cartUtils.js ochiq ekanligini tasdiqlang.

**S: TotalPrice noto'g'rimi?**
J: calculateCartTotal() ichidagi hisoblashni tekshiring - har bir item.price va item.quantity bo'lishi kerak.

**S: Like/Cart badge aylanmaganchimi?**
J: Header.jsx ichidagi event listener-larni tekshiring va mockProducts.js ma'lumotlari to'g'ri yuklangani tekshiring.

---

## 📞 Yanada Yardamga Kerak?

Barcha komponentlar:
- ProductCard.jsx - Mahsulot karti
- Home.jsx - Bosh sahifa
- Cart.jsx - Savatcha
- Favorites.jsx - Yoqtirganlarga
- cartUtils.js - Barcha funksiyalar

Biror narsani tushunmadingiz bo'lsa, yuqoridagi fayllarda misollar topishingiz mumkin!

---

**Muvaffaqiyatlar! 🌱**
