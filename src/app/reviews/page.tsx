export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah K.',
      rating: 5,
      comment: 'Absolutely love my new watch! The gold finish is stunning and it looks so expensive.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Michael O.',
      rating: 5,
      comment: 'Great service and fast delivery. The watch is exactly as described. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Jessica M.',
      rating: 4,
      comment: 'Beautiful design. The strap was a bit stiff at first but softened up quickly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-text-charcoal">Customer Reviews</h1>
          <p className="mt-4 text-lg text-gray-500">See what our community is saying about Divine's Wrist Wear.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img className="h-10 w-10 rounded-full" src={review.image} alt={review.name} />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{review.name}</p>
                  <div className="flex text-primary-gold">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-text-charcoal mb-6 text-center">Write a Review</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-gold focus:border-primary-gold sm:text-sm p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-gold focus:border-primary-gold sm:text-sm p-2 border">
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
                <option>2 Stars</option>
                <option>1 Star</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Review</label>
              <textarea rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-gold focus:border-primary-gold sm:text-sm p-2 border"></textarea>
            </div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-gold hover:bg-secondary-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-gold">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
