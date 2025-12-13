export default function EmailCapture() {
  return (
    <section className="bg-primary-gold py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Join Our Community</h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Sign up for new arrivals, exclusive offers, and style inspiration directly to your inbox.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-none border-none focus:ring-2 focus:ring-white text-text-charcoal"
            required
          />
          <button
            type="submit"
            className="bg-text-charcoal text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
