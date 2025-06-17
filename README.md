# FoodieAI 🍽️

FoodieAI is an innovative food delivery platform that combines the convenience of traditional food delivery with cutting-edge AI technology. Built on Google Cloud Platform, it offers a unique and personalized food ordering experience.

## 🌟 Key Features

- **AI-Powered Personalization**: Get food recommendations tailored to your taste preferences and order history
- **Smart Pricing**: Dynamic pricing based on demand, time of day, and restaurant capacity
- **Voice Ordering**: Place orders hands-free using natural language voice commands
- **Government Scheme Integration**: Seamless integration with local food subsidy programs
- **Real-time Tracking**: Advanced order tracking with AI-powered delivery time predictions

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Google Cloud Platform
  - Firebase (Authentication, Realtime Database)
  - Cloud Run (Serverless API)
  - Vertex AI (Machine Learning)
  - BigQuery (Analytics)
  - Cloud Storage (Media Storage)
- **State Management**: Zustand
- **Voice Recognition**: Web Speech API
- **UI Components**: Headless UI, Heroicons

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/foodieai.git
   cd foodieai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Features in Detail

### AI-Powered Personalization
- Machine learning algorithms analyze your order history and preferences
- Personalized restaurant and dish recommendations
- Smart reordering of favorite items

### Smart Pricing
- Dynamic pricing based on:
  - Time of day
  - Restaurant capacity
  - Delivery distance
  - Current demand
- Special discounts for loyal customers

### Voice Ordering
- Natural language processing for voice commands
- Multi-language support
- Context-aware ordering suggestions

### Government Scheme Integration
- Automatic subsidy calculation
- Digital voucher support
- Seamless payment processing

### Real-time Tracking
- AI-powered delivery time predictions
- Live order status updates
- Driver location tracking
- Estimated arrival time calculations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Perfect Scope (21 Hours Total)
**Base Model:** Swiggy/Zomato Clone  
**Innovation:** AI Food Assistant + Smart Recommendations

## ⚡ What You'll Build

A complete food delivery app with:
- **AI Chat Assistant** for natural language ordering
- **Smart Menu Recommendations** based on preferences  
- **Voice Search** for hands-free browsing
- **Personalized Dashboard** with order history

## 🛠️ Tech Stack (Your Stack)

```javascript
Frontend:
- Next.js 14 + TypeScript
- Redux Toolkit + RTK Query
- Tailwind CSS + Mantine UI
- React Hook Form

Backend:
- Firebase Auth + Firestore
- OpenAI API (easier than Vertex AI)
- Web Speech API (Voice)
```

