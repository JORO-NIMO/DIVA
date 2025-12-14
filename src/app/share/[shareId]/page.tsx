'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  category: string;
  description: string;
  shareId: string;
}

export default function SharedListingPage({ params }: { params: { shareId: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/share/${params.shareId}`);
        if (!res.ok) {
          setError('Listing not found');
          return;
        }
        setProduct(await res.json());
      } catch (err) {
        setError('Failed to load listing');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.shareId]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">{error}</p>
        <Link href="/" className="text-primary-gold hover:text-secondary-gold">Back to home</Link>
      </div>
    );
  }
  if (!product) return <div className="text-center py-16">Not found</div>;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image */}
          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-full object-center object-cover sm:rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-text-charcoal">{product.name}</h1>
            <div className="mt-3">
              <p className="text-3xl text-primary-gold">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
                {product.category}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4 sm:flex-col">
              <button
                onClick={() => {
                  const shareUrl = window.location.href;
                  navigator.clipboard.writeText(shareUrl);
                  alert('Share link copied!');
                }}
                className="flex-1 bg-primary-gold border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-gold"
              >
                Share Listing
              </button>
              <Link
                href="/"
                className="flex-1 border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Browse More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
