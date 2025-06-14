export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>
        
        <div className="space-y-6">
          {/* Sample Order */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Spice Garden</h2>
                <p className="text-sm text-gray-500">Order #12345</p>
              </div>
              <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                Delivered
              </span>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Butter Chicken</span>
                <span className="text-gray-900">$12.99</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Naan Bread</span>
                <span className="text-gray-900">$3.99</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">$16.98</span>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="text-center py-12">
            <p className="text-gray-500">No active orders</p>
          </div>
        </div>
      </div>
    </div>
  );
} 