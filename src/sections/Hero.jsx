import React from 'react';

const Hero = ({ title = 'Title', subtitle = '' }) => {
  return (
    <header className="bg-white rounded-lg p-6 shadow-sm">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Hero;
