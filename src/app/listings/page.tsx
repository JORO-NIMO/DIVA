'use client';

import { useAuth } from '@/lib/auth-context';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  category: string;
  shareId: string;
}

export default function ListingsPage() {
  const { user, loading: authLoading } = useAuth();
  const [listings, setListings] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && user) {
      fetchListings();
    }
  }, [authLoading, user]);

  async function fetchListings() {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        setListings(await res.json());
      }
    } catch (error) {
      console.error('Failed to fetch listings', error);
    } finally {
      setLoading(false);
    }
  }

  if (authLoading || loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-text-charcoal mb-4">Sign in to view listings</h1>
        <Link href="/auth/login" className="bg-primary-gold text-white px-6 py-2 rounded-md">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-text-charcoal">Jewellery Listings</h1>
          <Link href="/listings/create" className="bg-primary-gold text-white px-6 py-2 rounded-md font-medium hover:bg-secondary-gold">
            + Create Listing
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 xl:gap-x-8">
          {listings.map((listing) => (
            <div key={listing.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={listing.imageSrc}
                  alt={listing.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <h3 className="text-sm text-gray-700 font-medium">{listing.name}</h3>
                <p className="text-sm text-gray-500">{listing.category}</p>
                <p className="text-sm font-medium text-text-charcoal">${listing.price.toFixed(2)}</p>
                <div className="flex gap-2">
                  <Link 
                    href={`/listings/${listing.id}`}
                    className="flex-1 bg-text-charcoal text-white py-2 px-3 text-sm font-bold rounded hover:bg-primary-gold text-center transition"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => {
                      const shareUrl = `${window.location.origin}/share/${listing.shareId}`;
                      navigator.clipboard.writeText(shareUrl);
                      alert('Share link copied!');
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-3 text-sm font-bold rounded hover:bg-gray-300 transition"
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {listings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">No listings yet. Create your first listing!</p>
            <Link href="/listings/create" className="bg-primary-gold text-white px-6 py-2 rounded-md">
              Create Listing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
