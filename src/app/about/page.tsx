export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-text-charcoal sm:text-5xl">Our Story</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Redefining luxury for the modern generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Founder"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-charcoal mb-6">The Founder's Journey</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Divine’s Wrist Wear was born from the vision of a young Ugandan entrepreneur with a deep passion for stylish timepieces. Believing that a watch is more than just a tool to tell time—it's a statement of identity—the brand was created to help others express themselves through elegance and simplicity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Starting with a simple idea to bridge the gap between high-end luxury and accessible fashion, we have grown into a brand that resonates with teens, professionals, and luxury lovers alike.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-gold mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To provide affordable luxury and stylish watches for teens and modern professionals, blending elegance with youthfulness. We aim to be the go-to destination for those who seek to make a statement without saying a word.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-gold mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To deliver trendy, high-quality watches and an amazing shopping experience. We are committed to excellence in design, durability, and customer service, ensuring that every Divine's Wrist Wear owner feels a sense of pride and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
