import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurantId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  preferences: string[];
}

interface AppState {
  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;

  // User
  user: User | null;
  setUser: (user: User | null) => void;
  updateUserPreferences: (preferences: string[]) => void;

  // Voice Order
  voiceOrderTranscript: string;
  setVoiceOrderTranscript: (transcript: string) => void;
  clearVoiceOrderTranscript: () => void;

  // UI State
  isVoiceOrderActive: boolean;
  setIsVoiceOrderActive: (isActive: boolean) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Cart
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { cart: [...state.cart, item] };
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
        })),
      updateCartItemQuantity: (itemId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ cart: [] }),

      // User
      user: null,
      setUser: (user) => set({ user }),
      updateUserPreferences: (preferences) =>
        set((state) => ({
          user: state.user ? { ...state.user, preferences } : null,
        })),

      // Voice Order
      voiceOrderTranscript: '',
      setVoiceOrderTranscript: (transcript) =>
        set({ voiceOrderTranscript: transcript }),
      clearVoiceOrderTranscript: () => set({ voiceOrderTranscript: '' }),

      // UI State
      isVoiceOrderActive: false,
      setIsVoiceOrderActive: (isActive) => set({ isVoiceOrderActive: isActive }),
    }),
    {
      name: 'foodieai-storage',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
      }),
    }
  )
); 