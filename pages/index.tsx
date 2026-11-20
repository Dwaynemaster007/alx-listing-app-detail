import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROPERTYLISTINGSAMPLE, HERO_BG_IMAGE, FILTER_LABELS } from '@/constants';
import { Pill } from '@/components/common/Pill';

const HomePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredProperties = selectedFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) => property.category.includes(selectedFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${HERO_BG_IMAGE})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl drop-shadow-md max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="my-8 flex flex-wrap justify-center gap-3 px-4">
        {FILTER_LABELS.map((label) => (
          <Pill
            key={label}
            label={label}
            selected={selectedFilter === label}
            onClick={() => setSelectedFilter(selectedFilter === label ? null : label)}
          />
        ))}
      </section>

      {/* Listing Section */}
      {filteredProperties.length === 0 && (
        <p className="mb-10 text-center text-gray-500">No properties match &ldquo;{selectedFilter}&rdquo; yet.</p>
      )}
      <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {filteredProperties.map((property) => (
          <Link
            key={property.id}
            href={`/property/${property.id}`}
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full">
              <Image src={property.image} alt={property.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{property.address.city}, {property.address.country}</p>
              <p className="text-blue-600 font-bold text-xl mb-2">${property.price.toLocaleString()}<span className="text-sm font-normal text-gray-500"> / night</span></p>
              <p className="text-yellow-500 font-semibold">⭐ {property.rating.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
