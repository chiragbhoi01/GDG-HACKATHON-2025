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

## 📅 Daily 3-Hour Sprints

### **Day 1 (June 15)** - Foundation Setup
**⏰ 3 Hours**
```bash
Hour 1: Project Setup
✅ Next.js + TypeScript project
✅ Install all dependencies
✅ Firebase project setup
✅ Environment variables

Hour 2: Basic UI Structure  
✅ Mantine theme setup
✅ Layout components (Header, Sidebar)
✅ Routing structure (/restaurants, /menu, /cart)
✅ Authentication pages

Hour 3: Redux Store Setup
✅ Store configuration
✅ Auth slice
✅ Restaurant slice  
✅ Cart slice
✅ RTK Query setup
```

### **Day 2 (June 16)** - Authentication & Database
**⏰ 3 Hours**
```bash
Hour 1: Firebase Integration
✅ Firebase Auth setup
✅ Login/Signup functionality
✅ Protected routes
✅ User context

Hour 2: Firestore Database
✅ Database schema design
✅ Seed restaurant data (5-10 restaurants)
✅ Menu data structure
✅ User profile collection

Hour 3: Data Fetching
✅ RTK Query endpoints
✅ Restaurant listing API
✅ Menu fetching
✅ Error handling
```

### **Day 3 (June 17)** - Core Restaurant Features
**⏰ 3 Hours**
```bash
Hour 1: Restaurant Listing
✅ Restaurant cards with Mantine components
✅ Search and filter functionality
✅ Cuisine-based filtering
✅ Rating and delivery time display

Hour 2: Restaurant Details
✅ Individual restaurant pages
✅ Menu categories
✅ Item cards with images
✅ Add to cart functionality

Hour 3: Cart Management
✅ Cart sidebar/modal
✅ Quantity management
✅ Price calculations
✅ Redux cart logic
```

### **Day 4 (June 18)** - Checkout & User Flow
**⏰ 3 Hours**
```bash
Hour 1: Checkout Process
✅ Checkout page design
✅ Address management
✅ Payment options (mock)
✅ Order summary

Hour 2: Order Management
✅ Order placement logic
✅ Order history page
✅ Order status tracking (mock)
✅ User profile page

Hour 3: Polish Core Features
✅ Loading states
✅ Error boundaries  
✅ Form validations
✅ Responsive design fixes
```

### **Day 5 (June 19)** - AI Integration 🤖
**⏰ 3 Hours**
```bash
Hour 1: OpenAI Setup
✅ OpenAI API integration
✅ Chat interface component
✅ Message handling
✅ Basic food ordering prompts

Hour 2: Smart Recommendations
✅ AI-powered menu suggestions
✅ User preference analysis
✅ Contextual recommendations
✅ "Suggest something" feature

Hour 3: Voice Search
✅ Web Speech API integration
✅ Voice-to-text conversion
✅ Voice search component
✅ AI processing of voice commands
```

### **Day 6 (June 20)** - Advanced AI Features
**⏰ 3 Hours**
```bash
Hour 1: Conversational Ordering
✅ Natural language order processing
✅ "I want pizza for 4 people under ₹500"
✅ AI suggests restaurants and combos
✅ Contextual follow-up questions

Hour 2: Personalization
✅ User preference learning
✅ Order history analysis
✅ Personalized homepage
✅ "Reorder with healthier options"

Hour 3: Smart Features
✅ Mood-based suggestions
✅ Weather-based recommendations
✅ Group ordering suggestions
✅ AI-powered search improvements
```

### **Day 7 (June 21)** - Polish & Deploy
**⏰ 3 Hours**
```bash
Hour 1: UI Polish
✅ Animations and transitions
✅ Loading skeletons
✅ Empty states
✅ Mobile responsiveness

Hour 2: Testing & Bug Fixes
✅ Cross-browser testing
✅ AI edge cases handling
✅ Performance optimization
✅ Security checks

Hour 3: Deployment & Demo
✅ Deploy to Vercel
✅ Environment setup
✅ Demo script preparation
✅ Final documentation
```

## 🎨 Key Components You'll Build

### 1. AI Chat Assistant
```typescript
const AIFoodAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const processOrder = async (userInput: string) => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system", 
          content: `You are FoodieAI, a helpful food ordering assistant. 
                   Available restaurants: ${JSON.stringify(restaurants)}
                   Help users find and order food naturally.`
        },
        { role: "user", content: userInput }
      ]
    });
    
    return response.choices[0].message.content;
  };
  
  // Voice integration + chat UI
};
```

### 2. Smart Menu Recommendations
```typescript
const SmartRecommendations = ({ userPreferences, orderHistory }) => {
  const [recommendations, setRecommendations] = useState([]);
  
  useEffect(() => {
    generateRecommendations();
  }, [userPreferences]);
  
  const generateRecommendations = async () => {
    // AI analyzes user data and suggests personalized items
  };
  
  return (
    <Grid>
      {recommendations.map(item => (
        <RecommendationCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};
```

### 3. Voice Search Component
```typescript
const VoiceSearch = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const startListening = () => {
    const recognition = new webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      processVoiceCommand(text);
    };
    recognition.start();
  };
  
  return (
    <Button 
      onClick={startListening}
      loading={isListening}
      leftIcon={<IconMicrophone />}
    >
      Voice Search
    </Button>
  );
};
```

## 🎯 Essential Dependencies

```json
{
  "dependencies": {
    "next": "14.2.3",
    "react": "18.3.1",
    "typescript": "5.4.5",
    "@reduxjs/toolkit": "2.2.5",
    "react-redux": "9.1.2",
    "@mantine/core": "7.10.1",
    "@mantine/hooks": "7.10.1",
    "@mantine/form": "7.10.1",
    "firebase": "10.12.2",
    "openai": "4.52.1",
    "react-hook-form": "7.51.5",
    "tailwindcss": "3.4.4",
    "@tabler/icons-react": "3.6.0"
  }
}
```

## 💡 Daily Success Tips

### **Day 1-2: Foundation**
- Use Mantine's pre-built components to save time
- Set up Firebase early, test auth immediately
- Create mock data first, real data later

### **Day 3-4: Core Features**
- Focus on user flow: Browse → Add to Cart → Checkout
- Use RTK Query for efficient data fetching
- Keep UI simple but functional

### **Day 5-6: AI Magic** 
- Start with simple AI prompts, improve gradually
- Test voice search on different browsers
- Mock AI response