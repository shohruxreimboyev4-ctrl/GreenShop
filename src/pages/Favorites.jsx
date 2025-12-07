import React from 'react';
import Hero from '../sections/Hero';
import ProductList from '../sections/ProductList';

const Favorites = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Hero title="Yoqtirganlaringiz" subtitle="Siz saqlagan o'simliklar" />

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Yoqtirilgan mahsulotlar</h2>
        <ProductList emptyMessage="Hech narsa yo'q, iltimos qalbcha bosing!" />
      </section>
    </div>
  );
};

export default Favorites;
