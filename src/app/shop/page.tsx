import ProductCard from '@/components/ProductCard';

// Mock Data
const products = [
  { id: '1', name: 'Royal Gold Chrono', price: 250.00, category: 'Luxury', imageSrc: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: '2', name: 'Midnight Sport', price: 120.00, category: 'Sporty', imageSrc: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: '3', name: 'Classic Leather', price: 85.00, category: 'Casual', imageSrc: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: '4', name: 'Rose Gold Elegance', price: 180.00, category: 'Ladies', imageSrc: 'https://images.unsplash.com/photo-1595935736128-db1f0a261963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: '5', name: 'Silver Diver', price: 210.00, category: 'Men', imageSrc: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: '6', name: 'Minimalist Black', price: 95.00, category: 'Casual', imageSrc: 'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

export default function ShopPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-text-charcoal mb-8">Shop All Watches</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-lg font-medium text-text-charcoal mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary-gold">Luxury</a></li>
                <li><a href="#" className="hover:text-primary-gold">Sporty</a></li>
                <li><a href="#" className="hover:text-primary-gold">Casual</a></li>
                <li><a href="#" className="hover:text-primary-gold">Ladies</a></li>
                <li><a href="#" className="hover:text-primary-gold">Men's</a></li>
              </ul>
            </div>
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-lg font-medium text-text-charcoal mb-4">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input type="number" placeholder="Min" className="w-20 border border-gray-300 px-2 py-1 text-sm" />
                <span>-</span>
                <input type="number" placeholder="Max" className="w-20 border border-gray-300 px-2 py-1 text-sm" />
              </div>
            </div>
            {/* Add more filters as needed */}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
