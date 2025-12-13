import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-text-charcoal sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Timeless Watches</span>{' '}
                <span className="block text-primary-gold xl:inline">for Every Style</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Explore youthful elegance and modern luxury. Discover our premium collection designed for teens, professionals, and luxury buyers.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-primary-gold hover:bg-secondary-gold md:py-4 md:text-lg md:px-10 transition-all">
                    SHOP NOW
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-primary-gold bg-white border-primary-gold hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all">
                    BROWSE COLLECTIONS
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/* Placeholder for Hero Image - In a real app, use next/image */}
        <div className="h-56 w-full bg-gray-200 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center text-gray-400">
           <img 
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1959&q=80" 
            alt="Luxury Watch" 
           />
        </div>
      </div>
    </div>
  );
}
