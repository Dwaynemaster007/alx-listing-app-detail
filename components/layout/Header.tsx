import Link from 'next/link';
import React from 'react';

const accommodationTypes = [
  'Rooms',
  'Mansion',
  'Countryside',
  'Villa',
  'Chalet',
  'Apartment',
];

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        ALX Listing
      </Link>

      {/* Search Bar */}
      <div className="flex w-full flex-1 max-w-lg md:mx-4">
        <input
          type="search"
          placeholder="Search properties..."
          className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="button" className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="hidden xl:flex space-x-4 mr-6">
        {accommodationTypes.map((type) => (
          <button
            key={type}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            {type}
          </button>
        ))}
      </nav>

      {/* Sign In / Sign Up */}
      <div className="flex space-x-4">
        <button className="text-blue-600 hover:underline">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};
