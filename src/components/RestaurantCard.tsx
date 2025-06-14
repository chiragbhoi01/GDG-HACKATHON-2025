import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid';

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  location: string;
  priceRange: string;
}

export default function RestaurantCard({
  id,
  name,
  image,
  rating,
  cuisine,
  deliveryTime,
  location,
  priceRange,
}: RestaurantCardProps) {
  return (
    <Link href={`/restaurants/${id}`} className="group">
      <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <div className="flex items-center space-x-1">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">{rating}</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">{cuisine}</p>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm font-medium text-gray-900">{priceRange}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 