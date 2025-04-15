import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Centered Logo and Title */}
        <div className="flex items-center space-x-4">
          <span className="text-3xl">✈️</span>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🌎</span>
            <h1 className="text-4xl font-bold text-slate-800">AI Travel Agent</h1>
            <span className="text-3xl">🏰</span>
            <span className="text-3xl">🗺️</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 