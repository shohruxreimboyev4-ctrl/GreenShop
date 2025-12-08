import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/mockProducts';
import { fetchRemoteProducts } from '../api/fetchRemoteProducts';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setLoading(true);
    // Try remote API first, fall back to local mock
    (async () => {
      const remote = await fetchRemoteProducts();
      if (remote && remote.length > 0) {
        setProducts(remote);
        setLoading(false);
        return;
      }

      // fallback to local mock
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    })();
  }, [refresh]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero section */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          GreenShop-ga xush kelibsiz
        </h1>
        <p className="mt-2 text-gray-600">
          Eng yangi va sifatli o'simliklarni kashfing qiling
        </p>
      </header>

      {/* Showcase (hero-like) section - matches provided showcase image */}
      <section className="mb-8 bg-white rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">LET'S MAKE A BETTER <span className="text-green-600">PLANET</span></h2>
            <p className="mt-4 text-gray-600">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle.</p>
            <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded">SHOP NOW</button>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <img src="/src/assets/showcase-hero.png" alt="Hero plant" className="w-full h-auto object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">
          Ma'lumotlar yuklanmoqda...
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <ProductCard
                  key={product?.id ?? `p-${idx}`}
                  product={product}
                  onCardAction={() => setRefresh((r) => r + 1)}
                />
              ))}
          </div>

          {/* "You may be interested in" showcase row (simple) */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">You may be interested in</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.slice(0, 5).map((p, idx) => (
                <div key={p?.id ?? `interest-${idx}`} className="bg-white rounded-lg p-3 text-center">
                  <img src={p.image} alt={p.title} className="w-full h-28 object-cover rounded mb-3" />
                  <div className="text-sm font-medium text-gray-800">{p.title}</div>
                    <div className="text-sm text-green-600 mt-1">{Number(p?.price ?? 0).toLocaleString('uz-UZ')} so'm</div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;