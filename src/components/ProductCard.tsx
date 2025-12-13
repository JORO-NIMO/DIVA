import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/shop/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-text-charcoal">${product.price.toFixed(2)}</p>
      </div>
      <button className="mt-4 w-full bg-text-charcoal text-white py-2 px-4 text-sm font-bold uppercase tracking-wider hover:bg-primary-gold transition-colors opacity-0 group-hover:opacity-100">
        Add to Cart
      </button>
    </div>
  );
}
