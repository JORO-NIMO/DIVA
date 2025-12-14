import ProductCard from '@/components/ProductCard';
import { prisma } from '@/lib/prisma';

interface Product {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  category: string;
}

export const dynamic = 'force-dynamic';

export default async function ShopPage() {
  const products: Product[] = await prisma.product.findMany({ where: { isPublished: true } }) as Product[];

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
                <li><a href="#" className="hover:text-primary-gold">Men'\''s</a></li>
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
              {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
