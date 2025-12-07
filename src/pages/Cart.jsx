import React from 'react';
import Hero from '../sections/Hero';
import ProductList from '../sections/ProductList';
import CTA from '../sections/CTA';

const Cart = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Hero title="Savatcha" subtitle="Siz tanlagan mahsulotlar" />

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Savatcha tarkibi</h2>
        <ProductList emptyMessage="Savatcha bo'sh. Mahsulot qo'shing." showActions />
      </section>

      <CTA />
    </div>
  );
};

export default Cart;
