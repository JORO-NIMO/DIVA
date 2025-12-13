import Link from 'next/link';

// Mock Data for a single product (In a real app, fetch based on ID)
const product = {
  id: '1',
  name: 'Royal Gold Chrono',
  price: 250.00,
  description: 'A masterpiece of engineering and style. This luxury timepiece features a gold-plated stainless steel case, a precision chronograph movement, and a scratch-resistant sapphire crystal. Perfect for the modern professional who values elegance and functionality.',
  images: [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Placeholder
    'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Placeholder
  ],
  specs: [
    { name: 'Case Material', value: 'Gold-plated Stainless Steel' },
    { name: 'Strap Type', value: 'Metal Link' },
    { name: 'Movement', value: 'Quartz Chronograph' },
    { name: 'Water Resistance', value: '50m' },
  ],
};

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse">
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {product.images.map((image, index) => (
                  <div key={index} className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50">
                    <img src={image} alt="" className="w-full h-full object-center object-cover rounded-md" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-text-charcoal">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-primary-gold">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Highlights & Specs</h3>
              <div className="mt-4">
                <ul className="pl-4 list-disc text-sm space-y-2">
                  {product.specs.map((spec) => (
                    <li key={spec.name} className="text-gray-600">
                      <span className="font-semibold text-gray-900">{spec.name}:</span> {spec.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex sm:flex-col1">
              <button
                type="submit"
                className="max-w-xs flex-1 bg-primary-gold border border-transparent rounded-none py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-gold sm:w-full"
              >
                Add to Cart
              </button>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">Additional details</h2>
              <div className="border-t divide-y divide-gray-200">
                <div className="py-6">
                  <h3 className="text-sm font-medium text-gray-900">Shipping & Returns</h3>
                  <div className="mt-2 prose prose-sm text-gray-500">
                    <p>Free shipping on orders over $100. Returns accepted within 30 days of delivery.</p>
                  </div>
                </div>
                <div className="py-6">
                  <h3 className="text-sm font-medium text-gray-900">Warranty</h3>
                  <div className="mt-2 prose prose-sm text-gray-500">
                    <p>2-year comprehensive warranty included with every purchase.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Recommended for You (AI Placeholder) */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-extrabold text-text-charcoal mb-8">Recommended for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
             {/* Placeholder for recommended products */}
             <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Rec 1" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700"><a href="#">Midnight Sport</a></h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$120.00</p>
                </div>
             </div>
             {/* Add more placeholders if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
