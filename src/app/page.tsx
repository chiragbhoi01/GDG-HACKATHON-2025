import Link from 'next/link';
import { MicrophoneIcon, SparklesIcon, CurrencyDollarIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Smart Food Delivery with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience the future of food delivery with personalized recommendations,
              voice ordering, and smart pricing powered by artificial intelligence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/restaurants"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Order Now
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Smart Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to order food smarter
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <MicrophoneIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Voice Ordering
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Order your favorite food hands-free with our advanced voice recognition system.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <SparklesIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                AI Recommendations
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Get personalized food recommendations based on your preferences and order history.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <CurrencyDollarIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Smart Pricing
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Dynamic pricing that adjusts based on demand, time, and restaurant capacity.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <TruckIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Real-time Tracking
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Track your order in real-time with AI-powered delivery time predictions.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <ShieldCheckIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Government Schemes
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Seamless integration with local food subsidy programs and digital vouchers.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
