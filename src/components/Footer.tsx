import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Logo className="h-10" withText={true} />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Timeless watches for every style. Blending youthful elegance with modern luxury.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-charcoal uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/shop?category=luxury" className="hover:text-primary-gold">Luxury Collection</a></li>
              <li><a href="/shop?category=sporty" className="hover:text-primary-gold">Sporty Collection</a></li>
              <li><a href="/shop?category=casual" className="hover:text-primary-gold">Casual Collection</a></li>
              <li><a href="/shop?category=ladies" className="hover:text-primary-gold">Ladies Watches</a></li>
              <li><a href="/shop?category=men" className="hover:text-primary-gold">Men's Watches</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-charcoal uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/contact" className="hover:text-primary-gold">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-primary-gold">FAQs</a></li>
              <li><a href="/shipping" className="hover:text-primary-gold">Shipping & Returns</a></li>
              <li><a href="/warranty" className="hover:text-primary-gold">Warranty Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-charcoal uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-gray-500 text-sm mb-4">Join our community for exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-primary-gold text-sm" />
              <button className="bg-primary-gold text-white px-4 py-2 text-sm font-bold hover:bg-secondary-gold transition-colors">JOIN</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Divine's Wrist Wear. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Icons Placeholders */}
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
