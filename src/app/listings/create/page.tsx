'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateListingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    category: 'Luxury',
    price: '',
    imageSrc: '',
    description: '',
  });

  if (!user) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">Please sign in to create listings</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          isPublished: true,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Failed to create listing');
        return;
      }

      router.push('/listings');
    } catch (err) {
      console.error(err);
      setError('Failed to create listing');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-text-charcoal mb-8">Create a Listing</h1>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Item Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-gold focus:border-primary-gold"
                placeholder="e.g., Gold Watch"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-gold focus:border-primary-gold"
              >
                <option>Luxury</option>
                <option>Sporty</option>
                <option>Casual</option>
                <option>Ladies</option>
                <option>Men</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
              <input
                type="number"
                step="0.01"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-gold focus:border-primary-gold"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL *</label>
              <input
                type="url"
                required
                value={form.imageSrc}
                onChange={(e) => setForm({ ...form, imageSrc: e.target.value })}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-gold focus:border-primary-gold"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-gold focus:border-primary-gold"
              rows={5}
              placeholder="Describe your item in detail..."
            />
          </div>

          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary-gold text-white rounded-md font-medium hover:bg-secondary-gold disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
