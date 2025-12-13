import Link from 'next/link';

const collections = [
  {
    name: 'Luxury',
    description: 'Exquisite timepieces for the discerning.',
    imageSrc: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/shop?category=luxury',
  },
  {
    name: 'Sporty',
    description: 'Durability meets style for the active.',
    imageSrc: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/shop?category=sporty',
  },
  {
    name: 'Casual',
    description: 'Everyday elegance for any occasion.',
    imageSrc: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/shop?category=casual',
  },
  {
    name: 'Ladies Watches',
    description: 'Graceful designs for the modern woman.',
    imageSrc: 'https://images.unsplash.com/photo-1595935736128-db1f0a261963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/shop?category=ladies',
  },
  {
    name: "Men's Watches",
    description: 'Bold statements for the modern man.',
    imageSrc: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/shop?category=men',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-text-charcoal sm:text-4xl">Featured Collections</h2>
          <p className="mt-4 text-lg text-gray-500">Curated styles for every personality.</p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {collections.map((collection) => (
            <div key={collection.name} className="group relative">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity">
                <img
                  src={collection.imageSrc}
                  alt={collection.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-text-charcoal">
                <Link href={collection.href}>
                  <span className="absolute inset-0" />
                  {collection.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{collection.description}</p>
              <div className="mt-2">
                 <span className="text-primary-gold font-medium text-sm uppercase tracking-wide group-hover:text-secondary-gold">View Collection &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
