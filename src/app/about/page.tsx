export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About FoodieAI</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            FoodieAI is an innovative food delivery platform that combines the convenience of traditional food delivery with cutting-edge AI technology. Our mission is to revolutionize the way people order and enjoy food.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Features</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>AI-powered personalized recommendations</li>
            <li>Voice ordering for hands-free operation</li>
            <li>Smart pricing based on demand and time</li>
            <li>Real-time order tracking</li>
            <li>Integration with local government schemes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Technology</h2>
          <p className="text-gray-600 mb-6">
            Built on Google Cloud Platform, FoodieAI leverages the latest in artificial intelligence and machine learning to provide a seamless and personalized food ordering experience. Our platform uses advanced algorithms to understand user preferences and provide smart recommendations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or feedback? We'd love to hear from you. Reach out to us at support@foodieai.com
          </p>
        </div>
      </div>
    </div>
  );
} 