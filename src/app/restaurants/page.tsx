import RestaurantCard from '@/components/RestaurantCard';

// Mock data for demonstration
const restaurants = [
  {
    id: '1',
    name: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60',
    rating: 4.5,
    cuisine: 'Indian',
    deliveryTime: '25-35 min',
    location: 'Downtown',
    priceRange: '$$',
  },
  {
    id: '2',
    name: 'Pasta Paradise',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60',
    rating: 4.3,
    cuisine: 'Italian',
    deliveryTime: '20-30 min',
    location: 'Westside',
    priceRange: '$$$',
  },
  {
    id: '3',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60',
    rating: 4.7,
    cuisine: 'Japanese',
    deliveryTime: '30-40 min',
    location: 'Eastside',
    priceRange: '$$$$',
  },
  // Add more restaurants as needed
];

export default function RestaurantsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Restaurants</h1>
        <p className="mt-2 text-sm text-gray-500">
          Discover the best restaurants in your area
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          All
        </button>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Indian
        </button>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Italian
        </button>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Japanese
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
} 