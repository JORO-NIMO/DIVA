export default function FAQPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-text-charcoal">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-500">Find answers to common questions about shipping, returns, and warranty.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-primary-gold mb-4">Shipping & Delivery</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">How long does delivery take?</h3>
                <p className="mt-2 text-gray-600">Standard delivery takes 3-5 business days. Express delivery is available for 1-2 business days.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">What are the shipping charges?</h3>
                <p className="mt-2 text-gray-600">Shipping is free for orders over $100. For orders under $100, a flat rate of $10 applies.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Do you ship internationally?</h3>
                <p className="mt-2 text-gray-600">Currently, we ship within Uganda and select East African countries.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-gold mb-4">Returns & Exchanges</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">What is your return policy?</h3>
                <p className="mt-2 text-gray-600">We accept returns within 30 days of purchase, provided the watch is unworn and in its original packaging.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">How do I initiate a return?</h3>
                <p className="mt-2 text-gray-600">Please contact our support team via email or WhatsApp to start the return process.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-gold mb-4">Warranty</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">How long is the warranty?</h3>
                <p className="mt-2 text-gray-600">All our watches come with a 2-year comprehensive warranty covering movement and manufacturing defects.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">What is not covered?</h3>
                <p className="mt-2 text-gray-600">The warranty does not cover normal wear and tear, battery replacement, or damage caused by accidents or water (unless specified as water-resistant).</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
